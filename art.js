const svg = (inner) =>
  `<svg viewBox="0 0 160 100" aria-hidden="true" focusable="false">${inner}</svg>`;

const blob = (cx = 80, cy = 52, r = 40) =>
  `<circle cx="${cx}" cy="${cy}" r="${r}" class="fp" opacity=".4"/>`;

const spark = (x, y, s = 1, d = 0) =>
  `<path class="o fy sp ca-pulse" style="--d:${d}s" d="M${x} ${y - 6 * s}l${1.8 * s} ${4.2 * s} ${4.2 * s} ${1.8 * s} ${-4.2 * s} ${1.8 * s} ${-1.8 * s} ${4.2 * s} ${-1.8 * s} ${-4.2 * s} ${-4.2 * s} ${-1.8 * s} ${4.2 * s} ${-1.8 * s}z"/>`;

const face = (x, y, s = 1) =>
  `<g class="ca-eyes"><circle cx="${x - 5 * s}" cy="${y}" r="${1.7 * s}" class="fd"/><circle cx="${x + 5 * s}" cy="${y}" r="${1.7 * s}" class="fd"/></g><path d="M${x - 3 * s} ${y + 3.5 * s}q${3 * s} ${3 * s} ${6 * s} 0" class="o nf sp"/><circle cx="${x - 8 * s}" cy="${y + 3 * s}" r="${1.8 * s}" class="fm" opacity=".6"/><circle cx="${x + 8 * s}" cy="${y + 3 * s}" r="${1.8 * s}" class="fm" opacity=".6"/>`;

const uni = (shapes, cls) =>
  `<g class="u1">${shapes}</g><g class="${cls}">${shapes}</g>`;

const cyl = (y, fill, d) =>
  `<g class="ca-bob" style="--d:${d}s"><path d="M52 ${y}v12a28 9 0 0 0 56 0v-12z" class="o ${fill}"/><ellipse cx="80" cy="${y}" rx="28" ry="9" class="o fw"/></g>`;

const handShapes = `<rect x="60" y="34" width="9" height="30" rx="4.5"/><rect x="70.5" y="26" width="9" height="36" rx="4.5"/><rect x="81" y="24" width="9" height="38" rx="4.5"/><rect x="91.5" y="32" width="9" height="30" rx="4.5"/><rect x="60" y="52" width="40.5" height="30" rx="12"/><rect x="99" y="54" width="9" height="24" rx="4.5" transform="rotate(-38 103 70)"/>`;

const GIT_PATH = "M16 62H48C58 62 58 30 70 30H100C112 30 112 62 122 62H144";
const LOOP_PATH =
  "M80 50C66 30 30 28 30 50s36 22 50 0c14-20 50-22 50 0s-36 22-50 0z";

const CARD_ART = {
  web: svg(`${blob()}
<g class="ca-float">
<rect x="28" y="16" width="104" height="68" rx="8" class="o fw"/>
<path d="M28 32v-8a8 8 0 0 1 8-8h88a8 8 0 0 1 8 8v8z" class="o fp"/>
<circle cx="38" cy="24" r="2.4" class="fm"/><circle cx="46" cy="24" r="2.4" class="fm"/><circle cx="54" cy="24" r="2.4" class="fm"/>
<path d="M40 44h28" class="o nf sk-m ca-type" style="--l:28;--d:0s"/>
<path d="M48 54h38" class="o nf ca-type" style="--l:38;--d:.4s"/>
<path d="M48 64h24" class="o nf sk-m ca-type" style="--l:24;--d:.8s"/>
<path d="M40 74h16" class="o nf ca-type" style="--l:16;--d:1.2s"/>
<rect x="60" y="70" width="4" height="9" rx="1" class="fm ca-blink"/>
</g>
${spark(140, 14, 1, 0)}${spark(18, 70, 0.8, 0.6)}`),

  code: svg(`${blob()}
<g class="ca-float">
<rect x="26" y="20" width="108" height="64" rx="8" class="o fd"/>
<circle cx="37" cy="30" r="2.4" class="fp"/><circle cx="45" cy="30" r="2.4" class="fm"/><circle cx="53" cy="30" r="2.4" class="fy"/>
<path d="M38 46l8 7-8 7" class="o nf sk-p"/>
<path d="M54 53h30" class="o nf sk-w ca-type" style="--l:30;--d:0s"/>
<path d="M38 72h22" class="o nf sk-m ca-type" style="--l:22;--d:.6s"/>
<rect x="90" y="48" width="6" height="11" rx="1" class="fp ca-blink"/>
</g>
<g class="ca-bob" style="--d:.2s"><circle cx="136" cy="22" r="13" class="o fp"/><text x="136" y="27" text-anchor="middle" font-size="13" font-weight="700" fill="#2a1f35" font-family="Space Mono, monospace">{}</text></g>
<g class="ca-bob" style="--d:.9s"><circle cx="24" cy="78" r="13" class="o fy"/><text x="24" y="82" text-anchor="middle" font-size="10" font-weight="700" fill="#2a1f35" font-family="Space Mono, monospace">&lt;/&gt;</text></g>`),

  db: svg(`${blob()}
${cyl(68, "fp", 0.5)}${cyl(46, "fm", 0.25)}${cyl(24, "fb", 0)}
<g class="ca-bob" style="--d:0s">${face(80, 38, 0.9)}</g>
<circle cx="100" cy="56" r="2.2" class="fg ca-blink"/><circle cx="100" cy="78" r="2.2" class="fy ca-blink" style="--d:.5s"/>
<rect x="75" y="2" width="9" height="9" rx="2.5" class="o fy sp ca-drop"/>
<rect x="112" y="6" width="7" height="7" rx="2" class="o fp sp ca-drop" style="--d:.9s"/>
${spark(132, 70, 0.9, 0.3)}`),

  media: svg(`${blob()}
<path d="M80 58V92" class="o nf sk-g"/>
<ellipse cx="68" cy="76" rx="9" ry="4.5" transform="rotate(-25 68 76)" class="o fg"/>
<ellipse cx="93" cy="70" rx="9" ry="4.5" transform="rotate(25 93 70)" class="o fg"/>
<g class="ca-bloom"><g class="ca-spin">
<ellipse cx="80" cy="24" rx="8" ry="12" class="o fp"/>
<ellipse cx="80" cy="24" rx="8" ry="12" transform="rotate(60 80 40)" class="o fm"/>
<ellipse cx="80" cy="24" rx="8" ry="12" transform="rotate(120 80 40)" class="o fp"/>
<ellipse cx="80" cy="24" rx="8" ry="12" transform="rotate(180 80 40)" class="o fm"/>
<ellipse cx="80" cy="24" rx="8" ry="12" transform="rotate(240 80 40)" class="o fp"/>
<ellipse cx="80" cy="24" rx="8" ry="12" transform="rotate(300 80 40)" class="o fm"/>
</g></g>
<circle cx="80" cy="40" r="10" class="o fy"/>${face(80, 39, 0.8)}
<circle cx="38" cy="70" r="3" class="fm ca-rise" style="--x:8px;--d:0s"/>
<circle cx="124" cy="64" r="2.6" class="fy ca-rise" style="--x:-8px;--d:1s"/>
<circle cx="30" cy="48" r="2.2" class="fp ca-rise" style="--x:6px;--d:1.8s"/>
${spark(130, 22, 1, 0.4)}${spark(30, 24, 0.8, 1)}`),

  vision: svg(`${blob()}
<path d="M24 30V20a4 4 0 0 1 4-4h10M136 30V20a4 4 0 0 0-4-4h-10M24 72v10a4 4 0 0 0 4 4h10M136 72v10a4 4 0 0 1-4 4h-10" class="o nf"/>
<g class="ca-float">
${uni(handShapes, "fw")}
${face(80, 68, 0.85)}
<circle cx="64.5" cy="38" r="3" class="o fp sp ca-pulse"/><circle cx="75" cy="30" r="3" class="o fm sp ca-pulse" style="--d:.2s"/><circle cx="85.5" cy="28" r="3" class="o fp sp ca-pulse" style="--d:.4s"/><circle cx="96" cy="36" r="3" class="o fm sp ca-pulse" style="--d:.6s"/><circle cx="80" cy="82" r="3" class="o fy sp ca-pulse" style="--d:.8s"/>
</g>
<rect x="32" y="22" width="96" height="3" rx="1.5" class="fm ca-scan" opacity=".7"/>`),

  git: svg(`${blob()}
<path d="M16 62H144" class="o nf" stroke-width="3"/>
<path d="M48 62C58 62 58 30 70 30H100C112 30 112 62 122 62" class="o nf sk-m" stroke-width="3"/>
<circle cx="24" cy="62" r="5.5" class="o fw"/><circle cx="48" cy="62" r="5.5" class="o fw"/>
<circle cx="70" cy="30" r="5.5" class="o fw"/>
<circle cx="100" cy="30" r="5.5" class="o fy ca-pulse"/>
<circle cx="122" cy="62" r="5.5" class="o fw"/><circle cx="142" cy="62" r="5.5" class="o fp"/>
<circle r="4" cx="0" cy="0" class="o fm sp ca-travel" style="offset-path:path('${GIT_PATH}')"/>
<rect x="12" y="74" width="30" height="13" rx="6.5" class="o fp sp"/><text x="27" y="83.5" text-anchor="middle" font-size="8" font-weight="700" fill="#2a1f35" font-family="Space Mono, monospace">main</text>
<rect x="72" y="8" width="30" height="13" rx="6.5" class="o fy sp"/><text x="87" y="17.5" text-anchor="middle" font-size="8" font-weight="700" fill="#2a1f35" font-family="Space Mono, monospace">feat</text>
${spark(138, 30, 0.9, 0.5)}`),

  cloud: svg(`${blob()}
<g class="ca-float">
${uni('<circle cx="62" cy="34" r="11"/><circle cx="80" cy="26" r="15"/><circle cx="100" cy="34" r="11"/><rect x="58" y="32" width="48" height="13" rx="6.5"/>', "fw")}
${face(80, 34, 0.9)}
</g>
<path d="M70 52v8M90 52v8" class="o nf sk-m ca-flow" style="stroke-dasharray:3 3"/>
<rect x="44" y="62" width="72" height="14" rx="5" class="o fp"/><rect x="44" y="79" width="72" height="14" rx="5" class="o fm"/>
<circle cx="54" cy="69" r="2.4" class="fg ca-blink"/><circle cx="62" cy="69" r="2.4" class="fy ca-blink" style="--d:.4s"/>
<circle cx="54" cy="86" r="2.4" class="fy ca-blink" style="--d:.7s"/><circle cx="62" cy="86" r="2.4" class="fg ca-blink" style="--d:.2s"/>
<path d="M82 69h26M82 86h26" class="o nf sp"/>
${spark(132, 40, 0.9, 0.2)}${spark(26, 50, 0.8, 0.9)}`),

  puzzle: svg(`${blob()}
<g class="ca-bob">
<path d="M80 30V26M68 32l-3-3M92 32l3-3M64 20h-4M100 20h4" class="o nf sk-y sp ca-pulse"/>
<circle cx="80" cy="20" r="9" class="o fy"/><rect x="75" y="28" width="10" height="6" rx="2" class="o fw"/>
</g>
<g transform="translate(12 0)">
<circle cx="68" cy="66" r="6" class="o fp"/>
<rect x="38" y="50" width="30" height="30" rx="5" class="o fp"/>
<rect x="66.6" y="60.4" width="2.8" height="11.2" class="fp"/>
${face(53, 64, 0.8)}
<g class="ca-slide"><path d="M73 50H93a5 5 0 0 1 5 5V75a5 5 0 0 1-5 5H73a5 5 0 0 1-5-5V72A6 6 0 0 0 68 60V55a5 5 0 0 1 5-5z" class="o fb"/>${face(85, 64, 0.8)}</g>
</g>
${spark(26, 30, 0.9, 0.3)}${spark(136, 60, 0.8, 0.8)}`),

  education: svg(`${blob()}
<rect x="44" y="80" width="72" height="9" rx="2.5" class="o fm"/><rect x="50" y="89" width="60" height="8" rx="2.5" class="o fp"/>
<circle cx="80" cy="60" r="20" class="o fw"/>${face(80, 62, 1.1)}
<g class="ca-toss">
<path d="M62 48v8c0 5 36 5 36 0v-8" class="o fd"/>
<path d="M50 40L80 28L110 40L80 52Z" class="o fd"/>
<path d="M110 40v14" class="o nf sk-y"/><circle cx="110" cy="57" r="3" class="o fy sp"/>
</g>
<circle cx="40" cy="42" r="2.6" class="fy ca-rise" style="--x:-6px;--d:.2s"/><circle cx="124" cy="36" r="2.6" class="fp ca-rise" style="--x:6px;--d:1s"/>
${spark(28, 62, 0.9, 0.2)}${spark(132, 66, 0.9, 0.7)}`),

  work: svg(`${blob()}
<circle cx="136" cy="24" r="13" class="o fw"/><path d="M136 16v8" class="o nf sp"/>
<path d="M136 24h6" class="o nf sp sk-m ca-spin" style="transform-box:view-box;transform-origin:136px 24px"/>
<g class="ca-float">
<rect x="40" y="26" width="62" height="42" rx="5" class="o fw"/>
<rect x="45" y="31" width="52" height="32" rx="3" class="fd"/>
<g class="ca-eyes"><ellipse cx="62" cy="44" rx="3" ry="4" class="fp"/><ellipse cx="80" cy="44" rx="3" ry="4" class="fp"/></g>
<path d="M66 53q5 4 10 0" class="o nf sk-p sp"/>
<rect x="32" y="68" width="78" height="8" rx="4" class="o fp"/>
</g>
<rect x="118" y="54" width="20" height="22" rx="5" class="o fm"/><path d="M138 59h3a5 5 0 0 1 0 11h-3" class="o nf"/><path d="M118 62h20" class="o nf sk-p sp"/>
<path d="M124 48q-3-4 0-8" class="o nf sk-m sp ca-steam"/><path d="M132 48q-3-4 0-8" class="o nf sk-m sp ca-steam" style="--d:.8s"/>
${spark(24, 62, 0.9, 0.4)}`),

  build: svg(`${blob()}
<g class="ca-pop" style="--d:0s"><rect x="40" y="66" width="34" height="24" rx="4" class="o fp"/>${face(57, 78, 0.7)}</g>
<g class="ca-pop" style="--d:.5s"><rect x="78" y="66" width="34" height="24" rx="4" class="o fm"/></g>
<g class="ca-pop" style="--d:1s"><rect x="59" y="42" width="34" height="24" rx="4" class="o fy"/>${face(76, 54, 0.7)}</g>
<g class="ca-hit" style="transform-box:view-box;transform-origin:122px 86px">
<rect x="119" y="38" width="6" height="48" rx="3" class="o fw"/>
<rect x="108" y="30" width="28" height="13" rx="3.5" class="o fm"/>
</g>
${spark(104, 46, 1, 0.2)}${spark(30, 50, 0.8, 0.7)}`),

  lead: svg(`${blob()}
<path d="M18 90L72 32L126 90Z" class="o fp"/>
<path d="M60 45L72 32L84 45L78 42L72 48L66 42Z" class="o fw sp"/>
<path d="M72 32V10" class="o nf"/>
<path d="M72 10q8-5 16 0t16 0v11q-8 5-16 0t-16 0z" class="o fm ca-wave"/>
<g class="ca-bob" style="--d:0s"><circle cx="44" cy="84" r="7" class="o fw"/>${face(44, 84, 0.6)}</g>
<g class="ca-bob" style="--d:.3s"><circle cx="80" cy="78" r="10" class="o fy"/>${face(80, 78, 0.9)}</g>
<g class="ca-bob" style="--d:.6s"><circle cx="116" cy="84" r="7" class="o fb"/>${face(116, 84, 0.6)}</g>
${spark(80, 56, 0.9, 0.2)}${spark(138, 40, 0.9, 0.6)}${spark(26, 42, 0.8, 1)}`),

  infinity: svg(`${blob()}
<path d="${LOOP_PATH}" class="o nf" stroke-width="12"/>
<path d="${LOOP_PATH}" class="nf sk-p" stroke-width="7" stroke-linecap="round"/>
<path d="${LOOP_PATH}" class="nf sk-w ca-flow" stroke-width="2" style="stroke-dasharray:5 28"/>
<circle r="5.5" cx="0" cy="0" class="o fy ca-travel" style="offset-path:path('${LOOP_PATH}')"/>
${spark(80, 18, 1, 0)}${spark(34, 80, 0.8, 0.5)}${spark(128, 80, 0.8, 1)}`),

  goal: svg(`${blob(70, 54, 40)}
<circle cx="70" cy="54" r="36" class="sk-m nf ca-ring" stroke-width="2"/>
<circle cx="70" cy="54" r="36" class="o fw"/><circle cx="70" cy="54" r="26" class="o fp"/><circle cx="70" cy="54" r="16" class="o fw"/><circle cx="70" cy="54" r="7" class="o fm"/>
<g class="ca-thud">
<path d="M72 52L118 14" class="o nf" stroke-width="3"/>
<path d="M112 20l6-9 6 2-3 8z" class="o fp sp"/>
<path d="M118 14l6-9 6 2-3 8z" class="o fm sp"/>
</g>
${spark(130, 70, 1, 0.2)}${spark(24, 22, 0.9, 0.7)}`),

  learn: svg(`${blob()}
<g transform="translate(0 8)">
<path d="M80 30C66 22 46 22 32 28V80c14-6 34-6 48 2z" class="o fw"/>
<path d="M80 30C94 22 114 22 128 28V80c-14-6-34-6-48 2z" class="o fw"/>
<path d="M42 40c8-2 16-1 28 3M42 50c8-2 16-1 28 3M42 60c8-2 16-1 28 3" class="o nf sk-m sp"/>
<g class="ca-flip" style="transform-box:view-box;transform-origin:80px 50px"><path d="M80 30C94 22 114 22 128 28V80c-14-6-34-6-48 2z" class="o fp"/></g>
</g>
<g class="ca-bob"><circle cx="80" cy="16" r="8" class="o fy"/><path d="M80 5V2M70 10l-3-2M90 10l3-2" class="o nf sk-y sp"/></g>
<circle cx="40" cy="30" r="2.6" class="fm ca-rise" style="--x:-6px;--d:0s"/><circle cx="120" cy="30" r="2.6" class="fy ca-rise" style="--x:6px;--d:1.2s"/>
${spark(28, 62, 0.9, 0.4)}${spark(134, 62, 0.9, 0.9)}`),

  hobby: svg(`${blob()}
<g class="ca-beat">
<path d="M80 88C38 64 38 28 62 28c9 0 15 5 18 12 3-7 9-12 18-12 24 0 24 36-18 60z" class="o fm"/>
${face(80, 54, 1.1)}
</g>
<g class="ca-rise" style="--x:-10px;--d:0s"><circle cx="30" cy="72" r="4.5" class="fd"/><path d="M34 72V54l9 3" class="o nf"/></g>
<g class="ca-rise" style="--x:10px;--d:1.1s"><circle cx="124" cy="68" r="4.5" class="fd"/><path d="M128 68V50l9 3" class="o nf"/></g>
${spark(132, 24, 1, 0.3)}${spark(26, 32, 0.9, 0.8)}`),
};

const FOLDER_ART = {
  skills: "web",
  journey: "education",
  growth: "goal",
  projects: "build",
};
