import React, { useRef, useEffect } from "react";

export default function LiquidBlobPortrait({
  src = "/heroImage.png",
  className = "",
  delay = 0, // delay in ms before animation starts
}) {
  const pathRef = useRef(null);
  const wrapRef = useRef(null);

  const POINTS = 12;     // more points = smoother
  const CENTER = 50;
  const BASE_RADIUS = 42;

  let t = 0;
  let mouse = { x: 0, y: 0 };

  useEffect(() => {
    const path = pathRef.current;
    const wrap = wrapRef.current;
    let raf;
    let startTimeout;

    const buildPath = () => {
      const pts = [];

      for (let i = 0; i < POINTS; i++) {
        const angle = (i / POINTS) * Math.PI * 2;

        // gentle organic noise
        const noise = Math.sin(t + i * 1.4) * 2.8;

        // subtle mouse stretch (clamped)
        const mx = mouse.x * Math.cos(angle) * 0.6;
        const my = mouse.y * Math.sin(angle) * 0.6;

        const r = BASE_RADIUS + noise + mx + my;

        pts.push([
          CENTER + Math.cos(angle) * r,
          CENTER + Math.sin(angle) * r,
        ]);
      }

      let d = `M ${pts[0][0]} ${pts[0][1]}`;

      for (let i = 0; i < pts.length; i++) {
        const p0 = pts[i];
        const p1 = pts[(i + 1) % pts.length];

        const cx = (p0[0] + p1[0]) / 2;
        const cy = (p0[1] + p1[1]) / 2;

        d += ` Q ${p0[0]} ${p0[1]} ${cx} ${cy}`;
      }

      d += " Z";
      path.setAttribute("d", d);
    };

    const animate = () => {
      t += 0.02;
      buildPath();
      raf = requestAnimationFrame(animate);
    };

    const startAnimation = () => {
      animate();
    };

    // start after delay
    startTimeout = setTimeout(startAnimation, delay);

    const onMove = (e) => {
      const rect = wrap.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;

      mouse.x = nx * 8;
      mouse.y = ny * 8;
    };

    wrap.addEventListener("mousemove", onMove);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(startTimeout);
      wrap.removeEventListener("mousemove", onMove);
    };
  }, [delay]);

  return (
    <div ref={wrapRef} className={`liquid-blob ${className}`}>
      <svg viewBox="0 0 100 100" width="100%" height="100%" style={{ overflow: "visible" }}>
        <defs>
          <mask id="blobMask">
            <rect width="100" height="100" fill="black" />
            <path ref={pathRef} fill="white" />
          </mask>
        </defs>

        {/* IMAGE — ABOVE MASK */}
        <image
          href={src}
          x="-10"
          y="5"
          width="100"
          height="120"
          preserveAspectRatio="xMidYMid slice"
          mask="url(#blobMask)"
          style={{ pointerEvents: "none" }}
        />

        {/* EDGE */}
        <use
          href="#"
          style={{ display: "none" }}
        />
      </svg>
    </div>
  );
}
