import { ArrowUpRight } from "lucide-react";

export function BasaltArt() {
  return (
    <div className="basalt-art" aria-hidden="true">
      <svg viewBox="0 0 540 530" fill="none">
        <defs>
          <linearGradient
            id="stoneA"
            x1="130"
            y1="70"
            x2="430"
            y2="450"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#797675" />
            <stop offset=".5" stopColor="#3a3635" />
            <stop offset="1" stopColor="#1d1b1b" />
          </linearGradient>
          <linearGradient
            id="stoneB"
            x1="205"
            y1="70"
            x2="250"
            y2="470"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#99918e" />
            <stop offset="1" stopColor="#302827" />
          </linearGradient>
          <linearGradient
            id="stoneC"
            x1="380"
            y1="130"
            x2="170"
            y2="440"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6b5651" />
            <stop offset="1" stopColor="#282020" />
          </linearGradient>
          <filter id="texture">
            <feTurbulence
              type="fractalNoise"
              baseFrequency=".7"
              numOctaves="3"
              stitchTiles="stitch"
              result="noise"
            />
            <feColorMatrix
              in="noise"
              type="saturate"
              values="0"
              result="mono"
            />
            <feComponentTransfer in="mono" result="softNoise">
              <feFuncA type="linear" slope=".12" />
            </feComponentTransfer>
            <feComposite
              in="softNoise"
              in2="SourceAlpha"
              operator="in"
              result="clippedNoise"
            />
            <feBlend in="SourceGraphic" in2="clippedNoise" mode="soft-light" />
          </filter>
          <radialGradient id="glow">
            <stop stopColor="#c84432" stopOpacity=".14" />
            <stop offset="1" stopColor="#c84432" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="280" cy="270" r="250" fill="url(#glow)" />
        <g stroke="#9c544a" strokeOpacity=".25">
          <ellipse
            cx="277"
            cy="280"
            rx="218"
            ry="83"
            transform="rotate(-29 277 280)"
          />
          <ellipse
            cx="277"
            cy="280"
            rx="218"
            ry="165"
            transform="rotate(-29 277 280)"
          />
          <path d="M40 280h460M277 45v470" strokeDasharray="3 8" />
        </g>
        <g filter="url(#texture)">
          <path
            d="m146 183 81-95 119 28 55 148-50 163-129 31-94-112Z"
            fill="url(#stoneA)"
          />
          <path d="m146 183 81-95 15 150-114 108Z" fill="url(#stoneB)" />
          <path d="m227 88 119 28-104 122Z" fill="#87716b" />
          <path d="m346 116 55 148-159-26Z" fill="url(#stoneC)" />
          <path d="m242 238 159 26-50 163-89-73Z" fill="#402b28" />
          <path d="m128 346 114-108 20 116-40 104Z" fill="#55403b" />
          <path d="m222 458 40-104 89 73Z" fill="#302322" />
          <g stroke="#d2ada6" strokeOpacity=".15">
            <path d="m146 183 96 55-15-150M242 238l104-122M242 238l159 26M242 238l20 116-40 104" />
          </g>
        </g>
        <ellipse
          cx="277"
          cy="280"
          rx="218"
          ry="83"
          transform="rotate(-29 277 280)"
          stroke="#bd6248"
          strokeOpacity=".5"
          strokeDasharray="352 350"
        />
        <circle cx="448" cy="174" r="5" fill="#e1725d" />
        <circle cx="448" cy="174" r="11" stroke="#e1725d" strokeOpacity=".25" />
        <path
          d="M105 139v-17h17M414 400h17v-17"
          stroke="#bb938b"
          strokeOpacity=".6"
        />
        <text x="69" y="419" fill="#9b8984" fontSize="10" letterSpacing="2">
          FIG. 01 — NOUVELLE PERSPECTIVE
        </text>
      </svg>
      <div className="art-tag">
        <span className="status-dot" /> CHANGER DE PERSPECTIVE{" "}
        <span>
          <ArrowUpRight size={14} />
        </span>
      </div>
    </div>
  );
}
