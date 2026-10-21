const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
for (const file of ['index.html','styles.css','app.js']) if (!fs.existsSync(path.join(root,file))) throw new Error(`Missing ${file}`);
const js = fs.readFileSync(path.join(root,'app.js'),'utf8');
const count = (js.match(/path:/g) || []).length;
if (count !== 61) throw new Error(`Expected 61 routes, found ${count}`);
const paths = [...js.matchAll(/\{path:'([^']+)',title:'([^']+)',desc:'([^']+)',kind:'([^']+)'\}/g)].map(m=>({path:m[1],title:m[2],desc:m[3],kind:m[4]}));
if (paths.length !== 61) throw new Error(`Could not parse all route records: ${paths.length}`);
if (paths.some(p=>!p.title||!p.desc||!p.kind)) throw new Error('A route is missing content metadata');
const rendererBlock = js.slice(js.indexOf('const k={'),js.indexOf('return (k[kind]'));
const missingKinds = [...new Set(paths.map(p=>p.kind))].filter(kind=>!rendererBlock.includes(`    ${kind}:()=>`));
if (missingKinds.length) throw new Error(`Missing page renderers: ${missingKinds.join(', ')}`);
const forbiddenIcons = /[→←↗↘↔↻⌂⌕⌁◆▦✦●♥◫★✓⚗∑▶▤▯♢☰‹×↓↑]/g;
const forbiddenFound = js.match(forbiddenIcons) || [];
if (forbiddenFound.length) throw new Error(`Unicode icon audit failed: ${[...new Set(forbiddenFound)].join(' ')}`);
const css = fs.readFileSync(path.join(root,'styles.css'),'utf8');
if (!css.includes('*{background-image:none!important}')) throw new Error('Rendered gradient prevention rule is missing');
if (!css.includes('.tone-blue,.tone-cyan,.tone-violet,.tone-coral,.tone-gold,.tone-teal{--accent:#075CF2')) throw new Error('Unified workspace colour rule is missing');
for (const illustration of ['ecosystem','school','planning','ai','achievement','offline','family']) {
  if (!js.includes(`  ${illustration}:\``)) throw new Error(`Missing reusable SVG illustration: ${illustration}`);
}
if (/<(?:linear|radial)Gradient/i.test(js)) throw new Error('SVG illustration gradient audit failed');
if (!js.includes('role="img" aria-label="${label}" data-illustration="${name}"')) throw new Error('Illustration accessibility contract is missing');
new Function(js);
console.log(`Validated ${paths.length} routes, ${new Set(paths.map(p=>p.kind)).size} page compositions, 7 accessible SVG illustrations, Lucide-only icon policy, unified palette, and JavaScript syntax.`);
