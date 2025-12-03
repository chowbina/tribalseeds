// Realistic SVG product images with vibrant colors
export const productImages = {
  // Vegetables
  tomato: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="tomatoGrad" cx="0.5" cy="0.3" r="0.8">
        <stop offset="0%" style="stop-color:#FF6B6B;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#DC143C;stop-opacity:1" />
      </radialGradient>
      <filter id="tomatoShadow">
        <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
        <feOffset dx="2" dy="4" result="offsetblur"/>
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3"/>
        </feComponentTransfer>
        <feMerge>
          <feMergeNode/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <ellipse cx="100" cy="110" rx="65" ry="60" fill="url(#tomatoGrad)" filter="url(#tomatoShadow)"/>
    <ellipse cx="85" cy="90" rx="20" ry="15" fill="#FF8787" opacity="0.6"/>
    <path d="M100 50 L95 65 L85 70 L100 75 L115 70 L105 65 Z" fill="#228B22"/>
    <path d="M100 75 L98 70 L102 70 Z" fill="#2E7D32"/>
  </svg>`,

  brinjal: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="brinjalGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color:#9C27B0;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#4A148C;stop-opacity:1" />
      </linearGradient>
    </defs>
    <ellipse cx="100" cy="120" rx="40" ry="65" fill="url(#brinjalGrad)"/>
    <ellipse cx="88" cy="100" rx="12" ry="20" fill="#BA68C8" opacity="0.5"/>
    <path d="M100 55 L95 60 L85 58 L100 65 L115 58 L105 60 Z" fill="#4CAF50"/>
    <circle cx="100" cy="65" r="3" fill="#81C784"/>
  </svg>`,

  okra: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="okraGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color:#9CCC65;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#558B2F;stop-opacity:1" />
      </linearGradient>
    </defs>
    <path d="M100 50 L90 60 L85 140 L100 150 L115 140 L110 60 Z" fill="url(#okraGrad)"/>
    <path d="M100 50 L90 60 L100 65 L110 60 Z" fill="#7CB342"/>
    <line x1="92" y1="70" x2="92" y2="130" stroke="#689F38" stroke-width="2"/>
    <line x1="100" y1="70" x2="100" y2="135" stroke="#689F38" stroke-width="2"/>
    <line x1="108" y1="70" x2="108" y2="130" stroke="#689F38" stroke-width="2"/>
  </svg>`,

  cucumber: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="cucumberGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style="stop-color:#AED581;stop-opacity:1" />
        <stop offset="50%" style="stop-color:#8BC34A;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#689F38;stop-opacity:1" />
      </linearGradient>
    </defs>
    <ellipse cx="100" cy="100" rx="70" ry="35" fill="url(#cucumberGrad)"/>
    <ellipse cx="80" cy="100" rx="15" ry="8" fill="#C5E1A5" opacity="0.6"/>
    <ellipse cx="120" cy="100" rx="15" ry="8" fill="#C5E1A5" opacity="0.6"/>
    <circle cx="70" cy="95" r="3" fill="#558B2F"/>
    <circle cx="85" cy="105" r="3" fill="#558B2F"/>
    <circle cx="115" cy="95" r="3" fill="#558B2F"/>
    <circle cx="130" cy="105" r="3" fill="#558B2F"/>
  </svg>`,

  pumpkin: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="pumpkinGrad" cx="0.5" cy="0.5" r="0.7">
        <stop offset="0%" style="stop-color:#FFB74D;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#F57C00;stop-opacity:1" />
      </radialGradient>
    </defs>
    <ellipse cx="70" cy="100" rx="35" ry="55" fill="url(#pumpkinGrad)"/>
    <ellipse cx="100" cy="100" rx="40" ry="60" fill="url(#pumpkinGrad)"/>
    <ellipse cx="130" cy="100" rx="35" ry="55" fill="url(#pumpkinGrad)"/>
    <path d="M100 40 Q95 35 100 25 Q105 35 100 40" fill="#795548" stroke="#5D4037" stroke-width="2"/>
    <ellipse cx="65" cy="100" rx="8" ry="40" fill="#FF9800" opacity="0.5"/>
    <ellipse cx="135" cy="100" rx="8" ry="40" fill="#FF9800" opacity="0.5"/>
  </svg>`,

  // Medicinal
  tulsi: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 160 L100 100" stroke="#8D6E63" stroke-width="4"/>
    <path d="M80 120 L100 100 L120 120" stroke="#8D6E63" stroke-width="2"/>
    <path d="M85 140 L100 125 L115 140" stroke="#8D6E63" stroke-width="2"/>
    <path d="M100 70 C85 55 70 55 70 70 C70 85 85 85 100 100" fill="#4CAF50"/>
    <path d="M100 70 C115 55 130 55 130 70 C130 85 115 85 100 100" fill="#4CAF50"/>
    <path d="M100 90 C90 80 80 80 80 90 C80 100 90 100 100 110" fill="#66BB6A"/>
    <path d="M100 90 C110 80 120 80 120 90 C120 100 110 100 100 110" fill="#66BB6A"/>
    <circle cx="85" cy="75" r="2" fill="#81C784"/>
    <circle cx="115" cy="75" r="2" fill="#81C784"/>
  </svg>`,

  ashwagandha: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="100" cy="140" rx="25" ry="15" fill="#8D6E63" opacity="0.3"/>
    <path d="M100 140 L100 80" stroke="#795548" stroke-width="3"/>
    <circle cx="100" cy="70" r="8" fill="#FDD835"/>
    <circle cx="85" cy="85" r="8" fill="#FFB300"/>
    <circle cx="115" cy="85" r="8" fill="#FFB300"/>
    <circle cx="90" cy="105" r="7" fill="#FFA000"/>
    <circle cx="110" cy="105" r="7" fill="#FFA000"/>
    <path d="M70 60 Q100 40 130 60" stroke="none" fill="#4CAF50"/>
    <path d="M75 65 Q100 50 125 65" stroke="none" fill="#66BB6A"/>
  </svg>`,

  brahmi: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 150 Q80 140 70 120 Q70 100 80 90 Q90 85 100 85" stroke="#4CAF50" stroke-width="3" fill="none"/>
    <path d="M100 150 Q120 140 130 120 Q130 100 120 90 Q110 85 100 85" stroke="#4CAF50" stroke-width="3" fill="none"/>
    <circle cx="70" cy="90" r="20" fill="#66BB6A"/>
    <circle cx="100" cy="85" r="22" fill="#4CAF50"/>
    <circle cx="130" cy="90" r="20" fill="#66BB6A"/>
    <circle cx="85" cy="110" r="18" fill="#81C784"/>
    <circle cx="115" cy="110" r="18" fill="#81C784"/>
    <circle cx="65" cy="85" r="3" fill="#A5D6A7"/>
    <circle cx="95" cy="80" r="3" fill="#C8E6C9"/>
    <circle cx="125" cy="85" r="3" fill="#A5D6A7"/>
  </svg>`,

  neem: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 160 L100 100" stroke="#5D4037" stroke-width="4"/>
    <path d="M100 50 Q80 60 70 80 Q70 100 80 110 Q90 115 100 115" fill="#2E7D32" stroke="#1B5E20" stroke-width="1"/>
    <path d="M100 50 Q120 60 130 80 Q130 100 120 110 Q110 115 100 115" fill="#2E7D32" stroke="#1B5E20" stroke-width="1"/>
    <path d="M100 60 Q85 70 80 85 Q80 95 85 100 Q92 103 100 103" fill="#388E3C"/>
    <path d="M100 60 Q115 70 120 85 Q120 95 115 100 Q108 103 100 103" fill="#388E3C"/>
    <circle cx="85" cy="75" r="2" fill="#66BB6A"/>
    <circle cx="115" cy="75" r="2" fill="#66BB6A"/>
    <circle cx="90" cy="90" r="2" fill="#81C784"/>
    <circle cx="110" cy="90" r="2" fill="#81C784"/>
  </svg>`,

  giloy: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 150 Q70 100 100 80 Q130 100 150 150" stroke="#4CAF50" stroke-width="3" fill="none"/>
    <path d="M70 140 Q85 110 100 95 Q115 110 130 140" stroke="#66BB6A" stroke-width="2" fill="none"/>
    <circle cx="100" cy="80" r="12" fill="#FDD835"/>
    <path d="M88 80 Q100 60 112 80" fill="#81C784"/>
    <circle cx="70" cy="120" r="8" fill="#8BC34A"/>
    <circle cx="130" cy="120" r="8" fill="#8BC34A"/>
    <circle cx="85" cy="100" r="6" fill="#AED581"/>
    <circle cx="115" cy="100" r="6" fill="#AED581"/>
    <path d="M100 80 S90 90 90 100 S100 110 100 120" stroke="#689F38" stroke-width="2" fill="none"/>
  </svg>`,

  // Greens
  palak: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 150 L100 120" stroke="#33691E" stroke-width="3"/>
    <path d="M100 50 Q70 70 60 100 Q70 130 100 140 Q130 130 140 100 Q130 70 100 50Z" fill="#2E7D32"/>
    <path d="M100 60 Q80 75 75 95 Q80 115 100 125 Q120 115 125 95 Q120 75 100 60Z" fill="#43A047"/>
    <path d="M100 70 Q85 80 82 95 Q85 110 100 115 Q115 110 118 95 Q115 80 100 70Z" fill="#66BB6A"/>
    <line x1="100" y1="70" x2="100" y2="115" stroke="#4CAF50" stroke-width="1"/>
    <line x1="85" y1="85" x2="100" y2="95" stroke="#4CAF50" stroke-width="1"/>
    <line x1="115" y1="85" x2="100" y2="95" stroke="#4CAF50" stroke-width="1"/>
  </svg>`,

  methi: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 140 L100 100" stroke="#558B2F" stroke-width="2"/>
    <path d="M80 100 L70 80 L75 85 L85 82 L90 90 L100 100" fill="#7CB342"/>
    <path d="M120 100 L130 80 L125 85 L115 82 L110 90 L100 100" fill="#7CB342"/>
    <path d="M100 100 L90 110 L95 108 L100 115 L105 108 L110 110 L100 100" fill="#8BC34A"/>
    <path d="M75 85 Q70 75 75 70 Q80 75 75 85" fill="#9CCC65"/>
    <path d="M125 85 Q130 75 125 70 Q120 75 125 85" fill="#9CCC65"/>
    <path d="M100 115 Q95 125 100 130 Q105 125 100 115" fill="#9CCC65"/>
  </svg>`,

  amaranth: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 160 L100 100" stroke="#4CAF50" stroke-width="3"/>
    <ellipse cx="100" cy="70" rx="30" ry="20" fill="#C2185B"/>
    <ellipse cx="100" cy="70" rx="25" ry="15" fill="#E91E63"/>
    <ellipse cx="100" cy="70" rx="20" ry="10" fill="#F06292"/>
    <circle cx="90" cy="65" r="3" fill="#FCE4EC"/>
    <circle cx="110" cy="65" r="3" fill="#FCE4EC"/>
    <circle cx="95" cy="75" r="3" fill="#FCE4EC"/>
    <circle cx="105" cy="75" r="3" fill="#FCE4EC"/>
    <path d="M80 100 Q70 110 70 120 Q80 130 100 135 Q120 130 130 120 Q130 110 120 100" fill="#43A047"/>
    <path d="M85 105 Q80 110 80 115 Q85 120 100 123 Q115 120 120 115 Q120 110 115 105" fill="#66BB6A"/>
  </svg>`,

  coriander: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 140 L100 100" stroke="#689F38" stroke-width="2"/>
    <circle cx="80" cy="80" r="12" fill="#66BB6A"/>
    <circle cx="100" cy="75" r="13" fill="#4CAF50"/>
    <circle cx="120" cy="80" r="12" fill="#66BB6A"/>
    <circle cx="85" cy="95" r="11" fill="#81C784"/>
    <circle cx="115" cy="95" r="11" fill="#81C784"/>
    <circle cx="100" cy="100" r="10" fill="#8BC34A"/>
    <circle cx="90" cy="110" r="10" fill="#9CCC65"/>
    <circle cx="110" cy="110" r="10" fill="#9CCC65"/>
    <circle cx="77" cy="77" r="2" fill="#A5D6A7"/>
    <circle cx="97" cy="72" r="2" fill="#C8E6C9"/>
    <circle cx="117" cy="77" r="2" fill="#A5D6A7"/>
  </svg>`,

  drumstick: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 40 L100 160" stroke="#5D4037" stroke-width="4"/>
    <path d="M80 50 L100 40 L120 50" stroke="#6D4C41" stroke-width="2"/>
    <path d="M70 70 L100 55 L130 70" stroke="#6D4C41" stroke-width="2"/>
    <path d="M75 90 L100 75 L125 90" stroke="#6D4C41" stroke-width="2"/>
    <ellipse cx="60" cy="60" rx="8" ry="12" fill="#66BB6A"/>
    <ellipse cx="140" cy="60" rx="8" ry="12" fill="#66BB6A"/>
    <ellipse cx="65" cy="85" rx="8" ry="12" fill="#4CAF50"/>
    <ellipse cx="135" cy="85" rx="8" ry="12" fill="#4CAF50"/>
    <ellipse cx="70" cy="110" rx="8" ry="12" fill="#81C784"/>
    <ellipse cx="130" cy="110" rx="8" ry="12" fill="#81C784"/>
    <ellipse cx="75" cy="135" rx="8" ry="12" fill="#8BC34A"/>
    <ellipse cx="125" cy="135" rx="8" ry="12" fill="#8BC34A"/>
  </svg>`
};
