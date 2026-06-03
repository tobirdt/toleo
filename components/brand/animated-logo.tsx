import Image from "next/image";

export function AnimatedLogo() {
  return (
    <div className="animated-logo" role="img" aria-label="Toleo Holding Logo">
      <Image
        className="animated-logo-image"
        src="/images/toleo-logo.png"
        alt=""
        fill
        priority
        sizes="(max-width: 700px) 78vw, 420px"
        aria-hidden="true"
      />

      <svg className="animated-logo-trace" viewBox="0 0 428 271" aria-hidden="true">
        <path
          className="logo-stroke logo-stroke-top"
          d="M7 65C34 40 88 24 158 11C185 6 218 5 253 8"
          pathLength="1"
        />
        <path
          className="logo-stroke logo-stroke-stem"
          d="M166 12C139 58 113 113 93 168C82 199 74 229 72 259"
          pathLength="1"
        />
        <path
          className="logo-stroke logo-stroke-word"
          d="M189 121C171 108 143 130 130 166C119 197 124 215 144 205C164 194 180 165 188 137C193 120 189 112 180 116C169 121 158 139 149 158"
          pathLength="1"
        />
        <path
          className="logo-stroke logo-stroke-word"
          d="M188 137C184 153 191 158 209 151C225 145 229 132 239 108C252 77 276 42 303 23C318 13 326 22 320 39C309 70 278 101 238 130C225 167 211 208 224 213C241 220 273 185 288 154"
          pathLength="1"
        />
        <path
          className="logo-stroke logo-stroke-word"
          d="M288 154C300 126 316 111 326 119C337 128 326 157 305 177C291 190 285 186 288 173C291 199 314 209 341 187C361 170 374 142 396 126"
          pathLength="1"
        />
        <path
          className="logo-stroke logo-stroke-word"
          d="M396 126C416 113 424 127 416 153C406 185 384 216 370 211C355 205 367 165 391 134"
          pathLength="1"
        />
        <circle className="logo-dot logo-dot-blue" cx="175" cy="218" r="8.4" />
        <circle className="logo-dot logo-dot-red" cx="415" cy="218" r="8.4" />
        <text className="logo-holding" x="197" y="264">
          HOLDING
        </text>
      </svg>

      <span className="logo-writing-point" aria-hidden="true" />
    </div>
  );
}
