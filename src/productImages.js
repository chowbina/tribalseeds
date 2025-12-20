// Realistic SVG product images with vibrant colors
export const productImages = {
  // Vegetables
  tomato: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="tomatoGrad" cx="0.4" cy="0.3" r="0.7">
        <stop offset="0%" style="stop-color:#FFE5E5;stop-opacity:1" />
        <stop offset="30%" style="stop-color:#FF6347;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#B22222;stop-opacity:1" />
      </radialGradient>
      <radialGradient id="tomatoHighlight" cx="0.3" cy="0.25" r="0.3">
        <stop offset="0%" style="stop-color:#FFF;stop-opacity:0.7" />
        <stop offset="100%" style="stop-color:#FFF;stop-opacity:0" />
      </radialGradient>
      <filter id="tomatoShadow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
        <feOffset dx="3" dy="6" result="offsetblur"/>
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.4"/>
        </feComponentTransfer>
        <feMerge>
          <feMergeNode/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <ellipse cx="100" cy="115" rx="70" ry="65" fill="url(#tomatoGrad)" filter="url(#tomatoShadow)"/>
    <ellipse cx="78" cy="95" rx="25" ry="20" fill="url(#tomatoHighlight)"/>
    <path d="M100 50 Q95 55 88 58 Q85 62 82 68 Q80 72 85 75 Q95 78 100 80 Q105 78 115 75 Q120 72 118 68 Q115 62 112 58 Q105 55 100 50 Z" fill="#2E7D32" stroke="#1B5E20" stroke-width="1"/>
    <path d="M88 58 Q92 62 88 68 Q85 70 85 75 L82 68 Z" fill="#1B5E20" opacity="0.4"/>
    <path d="M112 58 Q108 62 112 68 Q115 70 115 75 L118 68 Z" fill="#1B5E20" opacity="0.4"/>
    <ellipse cx="125" cy="105" rx="12" ry="15" fill="#DC143C" opacity="0.3"/>
  </svg>`,

  brinjal: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="brinjalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#E1BEE7;stop-opacity:1" />
        <stop offset="40%" style="stop-color:#7B1FA2;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#4A148C;stop-opacity:1" />
      </linearGradient>
      <radialGradient id="brinjalHighlight" cx="0.25" cy="0.3" r="0.4">
        <stop offset="0%" style="stop-color:#CE93D8;stop-opacity:0.9" />
        <stop offset="100%" style="stop-color:#CE93D8;stop-opacity:0" />
      </radialGradient>
      <filter id="brinjalShadow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
        <feOffset dx="2" dy="5" result="offsetblur"/>
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.35"/>
        </feComponentTransfer>
        <feMerge>
          <feMergeNode/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <ellipse cx="100" cy="120" rx="45" ry="70" fill="url(#brinjalGrad)" filter="url(#brinjalShadow)"/>
    <ellipse cx="82" cy="95" rx="18" ry="30" fill="url(#brinjalHighlight)"/>
    <path d="M100 50 Q95 52 92 55 Q90 58 88 62 L100 70 L112 62 Q110 58 108 55 Q105 52 100 50 Z" fill="#388E3C" stroke="#2E7D32" stroke-width="1"/>
    <ellipse cx="100" cy="70" rx="8" ry="4" fill="#558B2F" opacity="0.6"/>
    <line x1="95" y1="55" x2="92" y2="62" stroke="#2E7D32" stroke-width="1.5" opacity="0.5"/>
    <line x1="105" y1="55" x2="108" y2="62" stroke="#2E7D32" stroke-width="1.5" opacity="0.5"/>
  </svg>`,

  okra: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="okraGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#C5E1A5;stop-opacity:1" />
        <stop offset="50%" style="stop-color:#7CB342;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#558B2F;stop-opacity:1" />
      </linearGradient>
      <linearGradient id="okraRidge" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style="stop-color:#558B2F;stop-opacity:0.4" />
        <stop offset="50%" style="stop-color:#689F38;stop-opacity:0.2" />
        <stop offset="100%" style="stop-color:#558B2F;stop-opacity:0.4" />
      </linearGradient>
      <filter id="okraShadow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
        <feOffset dx="2" dy="4" result="offsetblur"/>
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.35"/>
        </feComponentTransfer>
        <feMerge>
          <feMergeNode/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <path d="M100 45 L88 58 L83 140 L100 155 L117 140 L112 58 Z" fill="url(#okraGrad)" filter="url(#okraShadow)"/>
    <path d="M100 45 Q95 48 90 55 L88 58 L100 65 L112 58 L110 55 Q105 48 100 45 Z" fill="#81C784"/>
    <line x1="88" y1="65" x2="85" y2="135" stroke="url(#okraRidge)" stroke-width="3"/>
    <line x1="94" y1="65" x2="91" y2="140" stroke="url(#okraRidge)" stroke-width="3"/>
    <line x1="100" y1="65" x2="100" y2="145" stroke="url(#okraRidge)" stroke-width="3"/>
    <line x1="106" y1="65" x2="109" y2="140" stroke="url(#okraRidge)" stroke-width="3"/>
    <line x1="112" y1="65" x2="115" y2="135" stroke="url(#okraRidge)" stroke-width="3"/>
    <ellipse cx="92" cy="55" rx="3" ry="5" fill="#A5D6A7"/>
  </svg>`,

  cucumber: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="cucumberGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style="stop-color:#689F38;stop-opacity:1" />
        <stop offset="50%" style="stop-color:#7CB342;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#558B2F;stop-opacity:1" />
      </linearGradient>
      <radialGradient id="cucumberHighlight" cx="0.35" cy="0.4" r="0.4">
        <stop offset="0%" style="stop-color:#C5E1A5;stop-opacity:0.9" />
        <stop offset="100%" style="stop-color:#C5E1A5;stop-opacity:0" />
      </radialGradient>
      <filter id="cucumberShadow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
        <feOffset dx="2" dy="4" result="offsetblur"/>
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.35"/>
        </feComponentTransfer>
        <feMerge>
          <feMergeNode/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <ellipse cx="100" cy="100" rx="75" ry="38" fill="url(#cucumberGrad)" filter="url(#cucumberShadow)"/>
    <ellipse cx="70" cy="92" rx="20" ry="12" fill="url(#cucumberHighlight)"/>
    <circle cx="50" cy="95" r="4" fill="#33691E" opacity="0.6"/>
    <circle cx="65" cy="105" r="4" fill="#33691E" opacity="0.6"/>
    <circle cx="80" cy="92" r="4" fill="#33691E" opacity="0.6"/>
    <circle cx="95" cy="108" r="4" fill="#33691E" opacity="0.6"/>
    <circle cx="110" cy="95" r="4" fill="#33691E" opacity="0.6"/>
    <circle cx="125" cy="105" r="4" fill="#33691E" opacity="0.6"/>
    <circle cx="140" cy="92" r="4" fill="#33691E" opacity="0.6"/>
    <circle cx="155" cy="98" r="4" fill="#33691E" opacity="0.6"/>
  </svg>`,

  pumpkin: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="pumpkinGrad1" cx="0.4" cy="0.4" r="0.6">
        <stop offset="0%" style="stop-color:#FFD54F;stop-opacity:1" />
        <stop offset="60%" style="stop-color:#FF9800;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#E65100;stop-opacity:1" />
      </radialGradient>
      <radialGradient id="pumpkinHighlight" cx="0.3" cy="0.3" r="0.5">
        <stop offset="0%" style="stop-color:#FFF;stop-opacity:0.5" />
        <stop offset="100%" style="stop-color:#FFF;stop-opacity:0" />
      </radialGradient>
      <filter id="pumpkinShadow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
        <feOffset dx="2" dy="5" result="offsetblur"/>
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.4"/>
        </feComponentTransfer>
        <feMerge>
          <feMergeNode/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <ellipse cx="65" cy="105" rx="32" ry="52" fill="url(#pumpkinGrad1)" filter="url(#pumpkinShadow)"/>
    <ellipse cx="100" cy="105" rx="38" ry="58" fill="url(#pumpkinGrad1)" filter="url(#pumpkinShadow)"/>
    <ellipse cx="135" cy="105" rx="32" ry="52" fill="url(#pumpkinGrad1)" filter="url(#pumpkinShadow)"/>
    <path d="M58 105 Q55 80 58 60" stroke="#BF360C" stroke-width="2.5" fill="none" opacity="0.4"/>
    <path d="M100 105 Q100 85 100 55" stroke="#BF360C" stroke-width="2.5" fill="none" opacity="0.4"/>
    <path d="M142 105 Q145 80 142 60" stroke="#BF360C" stroke-width="2.5" fill="none" opacity="0.4"/>
    <path d="M100 47 Q97 42 95 35 Q97 30 100 28 Q103 30 105 35 Q103 42 100 47 Z" fill="#6D4C41" stroke="#4E342E" stroke-width="1.5"/>
    <ellipse cx="75" cy="80" rx="18" ry="28" fill="url(#pumpkinHighlight)"/>
    <ellipse cx="110" cy="85" rx="20" ry="30" fill="url(#pumpkinHighlight)"/>
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
    <defs>
      <radialGradient id="palakGrad" cx="0.4" cy="0.3" r="0.7">
        <stop offset="0%" style="stop-color:#81C784;stop-opacity:1" />
        <stop offset="50%" style="stop-color:#388E3C;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#1B5E20;stop-opacity:1" />
      </radialGradient>
      <filter id="palakShadow" x="-50%" y="-50%" width="200%" height="200%">
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
    <path d="M100 155 L100 125" stroke="#2E7D32" stroke-width="3"/>
    <path d="M100 45 Q65 65 55 95 Q60 125 100 145 Q140 125 145 95 Q135 65 100 45Z" fill="url(#palakGrad)" filter="url(#palakShadow)"/>
    <path d="M100 55 Q75 72 70 95 Q75 118 100 133 Q125 118 130 95 Q125 72 100 55Z" fill="#43A047" opacity="0.7"/>
    <line x1="100" y1="60" x2="100" y2="130" stroke="#2E7D32" stroke-width="2" opacity="0.4"/>
    <path d="M100 75 Q80 85 100 95" stroke="#1B5E20" stroke-width="1.5" fill="none" opacity="0.3"/>
    <path d="M100 75 Q120 85 100 95" stroke="#1B5E20" stroke-width="1.5" fill="none" opacity="0.3"/>
    <path d="M100 95 Q85 105 100 115" stroke="#1B5E20" stroke-width="1.5" fill="none" opacity="0.3"/>
    <path d="M100 95 Q115 105 100 115" stroke="#1B5E20" stroke-width="1.5" fill="none" opacity="0.3"/>
  </svg>`,

  methi: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="methiLeaf" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#9CCC65;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#689F38;stop-opacity:1" />
      </linearGradient>
      <filter id="methiShadow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="2"/>
        <feOffset dx="1" dy="3" result="offsetblur"/>
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3"/>
        </feComponentTransfer>
        <feMerge>
          <feMergeNode/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <path d="M100 150 L100 95" stroke="#558B2F" stroke-width="3"/>
    <path d="M75 95 Q70 85 68 75 Q70 68 75 65 Q80 68 82 75 Q80 85 75 95 Z" fill="url(#methiLeaf)" filter="url(#methiShadow)"/>
    <path d="M88 95 Q83 85 81 75 Q83 68 88 65 Q93 68 95 75 Q93 85 88 95 Z" fill="url(#methiLeaf)" filter="url(#methiShadow)"/>
    <path d="M100 92 Q95 82 93 72 Q95 65 100 62 Q105 65 107 72 Q105 82 100 92 Z" fill="url(#methiLeaf)" filter="url(#methiShadow)"/>
    <path d="M112 95 Q107 85 105 75 Q107 68 112 65 Q117 68 119 75 Q117 85 112 95 Z" fill="url(#methiLeaf)" filter="url(#methiShadow)"/>
    <path d="M125 95 Q120 85 118 75 Q120 68 125 65 Q130 68 132 75 Q130 85 125 95 Z" fill="url(#methiLeaf)" filter="url(#methiShadow)"/>
    <line x1="75" y1="72" x2="75" y2="90" stroke="#558B2F" stroke-width="1" opacity="0.4"/>
    <line x1="100" y1="70" x2="100" y2="88" stroke="#558B2F" stroke-width="1" opacity="0.4"/>
    <line x1="125" y1="72" x2="125" y2="90" stroke="#558B2F" stroke-width="1" opacity="0.4"/>
  </svg>`,

  amaranth: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="amaranthFlower" cx="0.4" cy="0.3" r="0.7">
        <stop offset="0%" style="stop-color:#FCE4EC;stop-opacity:1" />
        <stop offset="40%" style="stop-color:#F06292;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#C2185B;stop-opacity:1" />
      </radialGradient>
      <radialGradient id="amaranthLeaf" cx="0.3" cy="0.3" r="0.7">
        <stop offset="0%" style="stop-color:#81C784;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#2E7D32;stop-opacity:1" />
      </radialGradient>
      <filter id="amaranthShadow" x="-50%" y="-50%" width="200%" height="200%">
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
    <path d="M100 165 L100 105" stroke="#388E3C" stroke-width="3"/>
    <ellipse cx="100" cy="65" rx="35" ry="22" fill="url(#amaranthFlower)" filter="url(#amaranthShadow)"/>
    <circle cx="85" cy="60" r="4" fill="#FCE4EC" opacity="0.8"/>
    <circle cx="115" cy="60" r="4" fill="#FCE4EC" opacity="0.8"/>
    <circle cx="95" cy="70" r="4" fill="#FCE4EC" opacity="0.8"/>
    <circle cx="105" cy="70" r="4" fill="#FCE4EC" opacity="0.8"/>
    <ellipse cx="75" cy="110" rx="22" ry="18" fill="url(#amaranthLeaf)" filter="url(#amaranthShadow)"/>
    <ellipse cx="125" cy="110" rx="22" ry="18" fill="url(#amaranthLeaf)" filter="url(#amaranthShadow)"/>
    <ellipse cx="85" cy="130" rx="20" ry="16" fill="url(#amaranthLeaf)" filter="url(#amaranthShadow)"/>
    <ellipse cx="115" cy="130" rx="20" ry="16" fill="url(#amaranthLeaf)" filter="url(#amaranthShadow)"/>
    <line x1="75" y1="105" x2="85" y2="115" stroke="#1B5E20" stroke-width="1.5" opacity="0.3"/>
    <line x1="125" y1="105" x2="115" y2="115" stroke="#1B5E20" stroke-width="1.5" opacity="0.3"/>
  </svg>`,

  coriander: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="corianderLeaf1" cx="0.3" cy="0.3" r="0.7">
        <stop offset="0%" style="stop-color:#A5D6A7;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#388E3C;stop-opacity:1" />
      </radialGradient>
      <radialGradient id="corianderLeaf2" cx="0.3" cy="0.3" r="0.7">
        <stop offset="0%" style="stop-color:#81C784;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#2E7D32;stop-opacity:1" />
      </radialGradient>
      <filter id="corianderShadow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="2"/>
        <feOffset dx="1" dy="3" result="offsetblur"/>
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3"/>
        </feComponentTransfer>
        <feMerge>
          <feMergeNode/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <path d="M100 150 L100 95" stroke="#558B2F" stroke-width="3"/>
    <circle cx="78" cy="75" r="14" fill="url(#corianderLeaf1)" filter="url(#corianderShadow)"/>
    <circle cx="100" cy="68" r="16" fill="url(#corianderLeaf2)" filter="url(#corianderShadow)"/>
    <circle cx="122" cy="75" r="14" fill="url(#corianderLeaf1)" filter="url(#corianderShadow)"/>
    <circle cx="83" cy="92" r="13" fill="url(#corianderLeaf2)" filter="url(#corianderShadow)"/>
    <circle cx="117" cy="92" r="13" fill="url(#corianderLeaf2)" filter="url(#corianderShadow)"/>
    <circle cx="100" cy="97" r="12" fill="url(#corianderLeaf1)" filter="url(#corianderShadow)"/>
    <circle cx="88" cy="110" r="11" fill="url(#corianderLeaf2)" filter="url(#corianderShadow)"/>
    <circle cx="112" cy="110" r="11" fill="url(#corianderLeaf2)" filter="url(#corianderShadow)"/>
    <circle cx="75" cy="72" r="3" fill="#C8E6C9" opacity="0.8"/>
    <circle cx="97" cy="65" r="3" fill="#C8E6C9" opacity="0.8"/>
    <circle cx="119" cy="72" r="3" fill="#C8E6C9" opacity="0.8"/>
  </svg>`,

  drumstick: `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="drumstickStem" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color:#8D6E63;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#5D4037;stop-opacity:1" />
      </linearGradient>
      <radialGradient id="drumstickLeaf" cx="0.3" cy="0.3" r="0.8">
        <stop offset="0%" style="stop-color:#A5D6A7;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#388E3C;stop-opacity:1" />
      </radialGradient>
      <filter id="drumstickShadow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="2"/>
        <feOffset dx="1" dy="3" result="offsetblur"/>
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3"/>
        </feComponentTransfer>
        <feMerge>
          <feMergeNode/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <path d="M100 35 L100 165" stroke="url(#drumstickStem)" stroke-width="5"/>
    <path d="M78 48 L100 35 L122 48" stroke="#6D4C41" stroke-width="2"/>
    <path d="M70 68 L100 52 L130 68" stroke="#6D4C41" stroke-width="2"/>
    <path d="M72 88 L100 72 L128 88" stroke="#6D4C41" stroke-width="2"/>
    <path d="M74 108 L100 92 L126 108" stroke="#6D4C41" stroke-width="2"/>
    <ellipse cx="58" cy="55" rx="10" ry="15" fill="url(#drumstickLeaf)" filter="url(#drumstickShadow)"/>
    <ellipse cx="142" cy="55" rx="10" ry="15" fill="url(#drumstickLeaf)" filter="url(#drumstickShadow)"/>
    <ellipse cx="60" cy="75" rx="10" ry="15" fill="url(#drumstickLeaf)" filter="url(#drumstickShadow)"/>
    <ellipse cx="140" cy="75" rx="10" ry="15" fill="url(#drumstickLeaf)" filter="url(#drumstickShadow)"/>
    <ellipse cx="62" cy="95" rx="10" ry="15" fill="url(#drumstickLeaf)" filter="url(#drumstickShadow)"/>
    <ellipse cx="138" cy="95" rx="10" ry="15" fill="url(#drumstickLeaf)" filter="url(#drumstickShadow)"/>
    <ellipse cx="64" cy="115" rx="10" ry="15" fill="url(#drumstickLeaf)" filter="url(#drumstickShadow)"/>
    <ellipse cx="136" cy="115" rx="10" ry="15" fill="url(#drumstickLeaf)" filter="url(#drumstickShadow)"/>
    <line x1="62" y1="60" x2="68" y2="50" stroke="#2E7D32" stroke-width="1" opacity="0.3"/>
    <line x1="138" y1="60" x2="132" y2="50" stroke="#2E7D32" stroke-width="1" opacity="0.3"/>
  </svg>`
};
