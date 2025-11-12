import { useEffect, useRef } from "react";

type Props = {
  backdrop?: string;
  color?: string;
  headColor?: string;
  fontSize?: number;      // CSS px (before devicePixelRatio scaling)
  speed?: number;         // rows/sec base speed
  trailLength?: number;   // glyphs per column
  columnScale?: number;   // >1 widens spacing between columns
  speedJitter?: number;   // 0..1 per-column speed variance
};

export default function MatrixRain({
  backdrop = "rgba(15,23,42,1)",
  color = "#00ff9c",
  headColor = "#e8ffef",
  fontSize = 18,
  speed = 5,
  trailLength = 10,
  columnScale = 1.35,
  speedJitter = 0.25,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches) return;

    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    ctx.textBaseline = "top";
    ctx.textAlign = "left";

    // State that depends on size
    let cssW = 0, cssH = 0, dpr = 1;
    let colStep = 0, cols = 0, rows = 0;

    // Per-column state
    let rowPos: number[] = [];
    let parity: number[] = []; // 0/1 bit at the head
    let spdMul: number[] = [];

    // Precompute trail falloff (recomputed if trailLength changes)
    const falloff = (n: number) =>
      Array.from({ length: n }, (_, k) => Math.pow(0.86, k));

    let tailAlpha = falloff(trailLength);

    const initSizeAndColumns = () => {
      // CSS pixels
      cssW = window.innerWidth;
      cssH = window.innerHeight;
      dpr = Math.max(1, window.devicePixelRatio || 1);

      // Backing store size (for crisp text)
      canvas.width = Math.floor(cssW * dpr);
      canvas.height = Math.floor(cssH * dpr);
      // Map canvas units back to CSS pixels
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Recalculate grid based on current size + settings
      colStep = Math.max(fontSize, fontSize * columnScale);
      cols = Math.max(1, Math.floor(cssW / colStep));
      rows = Math.floor(cssH / fontSize);

      // Recreate per-column state (fresh, staggered)
      rowPos = new Array(cols);
      parity = new Array(cols);
      spdMul = new Array(cols);
      for (let i = 0; i < cols; i++) {
        rowPos[i] = -Math.random() * rows;                 // start above view
        parity[i] = Math.random() < 0.5 ? 0 : 1;           // 0 or 1
        const j = speedJitter * (Math.random() * 2 - 1);   // [-j, +j]
        spdMul[i] = Math.max(0.3, 1 + j);
      }

      // repaint background once
      ctx.fillStyle = backdrop;
      ctx.fillRect(0, 0, cssW, cssH);
    };

    // Init on mount
    initSizeAndColumns();

    // Throttled resize (1 per animation frame)
    let resizeScheduled = false;
    const onResize = () => {
      if (resizeScheduled) return;
      resizeScheduled = true;
      requestAnimationFrame(() => {
        resizeScheduled = false;
        initSizeAndColumns();
      });
    };
    window.addEventListener("resize", onResize);

    // Also react to devicePixelRatio changes (zoom/retina swap)
    const mq = window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`);
    const onDpr = () => initSizeAndColumns();
    mq.addEventListener?.("change", onDpr);

    let last = performance.now();

    const frame = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      // Clear + redraw (sharp characters)
      ctx.fillStyle = backdrop;
      ctx.fillRect(0, 0, cssW, cssH);

      ctx.font = `${fontSize}px JetBrains Mono, ui-monospace, monospace`;

      for (let i = 0; i < cols; i++) {
        const prevRow = Math.floor(rowPos[i]);
        rowPos[i] += speed * spdMul[i] * dt; // rows/sec -> rowPos
        const headRow = Math.floor(rowPos[i]);

        // Strict alternation only when stepping to a new row
        if (headRow !== prevRow) {
          parity[i] ^= 1;
        }

        const x = Math.floor(i * colStep);
        const headY = headRow * fontSize;

        // Draw head + tail with alternating bits
        for (let k = 0; k < trailLength; k++) {
          const y = headY - k * fontSize;
          if (y < 0) break;
          const bit = ((parity[i] - k) & 1) ? "1" : "0";
          ctx.globalAlpha = k === 0 ? 1 : tailAlpha[k];
          ctx.fillStyle = k === 0 ? headColor : color;
          ctx.fillText(bit, x, y);
        }
        ctx.globalAlpha = 1;

        // Re-enter from above after leaving bottom (staggered)
        if (headY > cssH && Math.random() > 0.975) {
          rowPos[i] = -Math.random() * rows;
          parity[i] = Math.random() < 0.5 ? 0 : 1;
        }
      }

      rafRef.current = requestAnimationFrame(frame);
    };

    rafRef.current = requestAnimationFrame((t) => {
      last = t;
      frame(t);
    });

    return () => {
      window.removeEventListener("resize", onResize);
      mq.removeEventListener?.("change", onDpr);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [backdrop, color, headColor, fontSize, speed, trailLength, columnScale, speedJitter]);

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ background: backdrop }}
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        style={{ width: "100%", height: "100%", display: "block" }}
      />
    </div>
  );
}
