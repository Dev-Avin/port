import React, { useRef, useEffect, useId } from "react";

export default function LiquidBlobPortrait({
  src = "/heroImage.png",
  className = "",
  delay = 0,
}) {
  const pathRef = useRef(null);
  const wrapRef = useRef(null);
  const maskId = useId();

  const POINTS = 20; // more points → smoother curvature
  const CENTER = 50;
  const BASE_RADIUS = 42;

  const tRef = useRef(0);
  const mouseRef = useRef({ x: 0, y: 0 });
  const mouseTargetRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const path = pathRef.current;
    const wrap = wrapRef.current;
    let raf;
    let startTimeout;

    const speed = 0.015 / (1 + delay * 0.01);

    const buildPath = () => {
      const rawR = [];
      const pts = [];
      const t = tRef.current;
      const mouse = mouseRef.current;

      // --- compute raw radius ---
      for (let i = 0; i < POINTS; i++) {
        const angle = (i / POINTS) * Math.PI * 2;

        const wave1 = Math.sin(t * 1.2 + i * 0.9) * 2.0;
        const wave2 = Math.sin(t * 0.7 + i * 1.7) * 1.4;
        const wave3 = Math.cos(t * 1.5 + i * 0.5) * 1.0;

        const noise = wave1 + wave2 + wave3;

        const dir =
          mouse.x * Math.cos(angle) +
          mouse.y * Math.sin(angle);

        // falloff → prevents spikes on one side
        const pull = dir * 0.7;

        rawR.push(BASE_RADIUS + noise + pull);
      }

      // --- curvature smoothing (removes spikes) ---
      for (let i = 0; i < POINTS; i++) {
        const prev = rawR[(i - 1 + POINTS) % POINTS];
        const curr = rawR[i];
        const next = rawR[(i + 1) % POINTS];

        // weighted smooth
        let r = (prev + curr * 2 + next) / 4;

        // clamp sudden jumps
        const maxDelta = 3.2;
        const base = BASE_RADIUS;
        if (r - base > maxDelta) r = base + maxDelta;
        if (base - r > maxDelta) r = base - maxDelta;

        const angle = (i / POINTS) * Math.PI * 2;

        pts.push([
          CENTER + Math.cos(angle) * r,
          CENTER + Math.sin(angle) * r,
        ]);
      }

      // --- path ---
      let d = `M ${pts[0][0]} ${pts[0][1]}`;

      for (let i = 0; i < POINTS; i++) {
        const p0 = pts[i];
        const p1 = pts[(i + 1) % POINTS];

        const cx = (p0[0] + p1[0]) / 2;
        const cy = (p0[1] + p1[1]) / 2;

        d += ` Q ${p0[0]} ${p0[1]} ${cx} ${cy}`;
      }

      d += " Z";
      path.setAttribute("d", d);
    };

    const animate = () => {
      tRef.current += speed;

      const m = mouseRef.current;
      const mt = mouseTargetRef.current;
      m.x += (mt.x - m.x) * 0.08;
      m.y += (mt.y - m.y) * 0.08;

      buildPath();
      raf = requestAnimationFrame(animate);
    };

    startTimeout = setTimeout(animate, delay);

    const onMove = (e) => {
      const rect = wrap.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;

      mouseTargetRef.current.x = nx * 9;
      mouseTargetRef.current.y = ny * 9;
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
      <svg viewBox="0 0 100 100" className="liquid-svg">
        <defs>
          <mask id={maskId}>
            <rect width="100" height="100" fill="black" />
            <path ref={pathRef} fill="white" />
          </mask>
        </defs>

        <image
          href={src}
          x="-12"
          y="4"
          width="115"
          height="122"
          preserveAspectRatio="xMidYMid slice"
          mask={`url(#${maskId})`}
          style={{ pointerEvents: "none" }}
        />
      </svg>
    </div>
  );
}