'use client';

import React from 'react';

interface FlagCircleProps {
  code: string;
  size?: number;
  className?: string;
}

export default function FlagCircle({ code, size = 20, className = '' }: FlagCircleProps) {
  const normalized = code.toLowerCase();

  return (
    <div
      style={{ width: size, height: size }}
      className={`relative inline-flex items-center justify-center rounded-full overflow-hidden shrink-0 border border-white/20 shadow-sm bg-neutral-900 ${className}`}
    >
      <svg
        viewBox="0 0 512 512"
        className="w-full h-full object-cover"
        xmlns="http://www.w3.org/2000/svg"
      >
        {normalized === 'fa' || normalized === 'ps' || normalized === 'af' ? (
          // Afghanistan Official Flag (Black, Red, Green vertical tricolor with Emblem)
          <g>
            <rect x="0" y="0" width="170.7" height="512" fill="#000000" />
            <rect x="170.7" y="0" width="170.7" height="512" fill="#D32011" />
            <rect x="341.3" y="0" width="170.7" height="512" fill="#007A3D" />
            {/* National Emblem in white */}
            <circle cx="256" cy="256" r="62" fill="none" stroke="#FFFFFF" strokeWidth="10" strokeDasharray="6 4" />
            <path
              d="M236 295 h40 v-30 l-20 -20 l-20 20 z"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="9"
              strokeLinejoin="round"
            />
            <path d="M256 220 v-35 M246 195 h20" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" />
            <path
              d="M205 270 c0 35 22 60 51 60 s51 -25 51 -60"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="9"
              strokeLinecap="round"
            />
          </g>
        ) : normalized === 'en' || normalized === 'gb' || normalized === 'uk' ? (
          // United Kingdom (Union Jack)
          <g>
            <rect width="512" height="512" fill="#012169" />
            <path d="M0 0 L512 512 M512 0 L0 512" stroke="#FFFFFF" strokeWidth="60" />
            <path d="M0 0 L512 512 M512 0 L0 512" stroke="#C8102E" strokeWidth="24" />
            <path d="M256 0 V512 M0 256 H512" stroke="#FFFFFF" strokeWidth="100" />
            <path d="M256 0 V512 M0 256 H512" stroke="#C8102E" strokeWidth="60" />
          </g>
        ) : normalized === 'fr' ? (
          // France (Blue, White, Red vertical tricolor)
          <g>
            <rect x="0" y="0" width="170.7" height="512" fill="#002395" />
            <rect x="170.7" y="0" width="170.7" height="512" fill="#FFFFFF" />
            <rect x="341.3" y="0" width="170.7" height="512" fill="#ED2939" />
          </g>
        ) : normalized === 'de' ? (
          // Germany (Black, Red, Gold horizontal tricolor)
          <g>
            <rect x="0" y="0" width="512" height="170.7" fill="#000000" />
            <rect x="0" y="170.7" width="512" height="170.7" fill="#DD0000" />
            <rect x="0" y="341.3" width="512" height="170.7" fill="#FFCE00" />
          </g>
        ) : normalized === 'tr' ? (
          // Turkey (Red with white crescent & star)
          <g>
            <rect width="512" height="512" fill="#E30A17" />
            <circle cx="220" cy="256" r="120" fill="#FFFFFF" />
            <circle cx="250" cy="256" r="95" fill="#E30A17" />
            <polygon
              points="335,256 312,263 326,244 312,228 333,237 348,222 344,244 362,256 341,262 341,283"
              fill="#FFFFFF"
            />
          </g>
        ) : normalized === 'ar' || normalized === 'ae' ? (
          // United Arab Emirates (Vertical red, Green, White, Black horizontal)
          <g>
            <rect x="0" y="0" width="512" height="170.7" fill="#00732F" />
            <rect x="0" y="170.7" width="512" height="170.7" fill="#FFFFFF" />
            <rect x="0" y="341.3" width="512" height="170.7" fill="#000000" />
            <rect x="0" y="0" width="140" height="512" fill="#FF0000" />
          </g>
        ) : normalized === 'ru' ? (
          // Russia (White, Blue, Red horizontal tricolor)
          <g>
            <rect x="0" y="0" width="512" height="170.7" fill="#FFFFFF" />
            <rect x="0" y="170.7" width="512" height="170.7" fill="#0039A6" />
            <rect x="0" y="341.3" width="512" height="170.7" fill="#D52B1E" />
          </g>
        ) : (
          // Default Globe/Global
          <circle cx="256" cy="256" r="240" fill="#D4AF37" />
        )}
      </svg>
    </div>
  );
}
