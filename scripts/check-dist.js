const fs = require("fs");
const path = require("path");
const root = path.resolve(__dirname, "..", "dist");
const required = [
  "index.html", "app.js", "styles.css", "demo-config.js",
  "vendor/qrcode.js", "vendor/phosphor/regular/style.css",
  "vendor/phosphor/regular/Phosphor.woff2", "assets/bgdl-logo.png",
];
for (const file of required) {
  const target = path.join(root, file);
  if (!fs.existsSync(target) || !fs.statSync(target).size)
    throw new Error(`Production asset missing or empty: ${file}`);
}
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
for (const [, reference] of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
  if (/^(https?:|data:|#)/.test(reference)) continue;
  if (!fs.existsSync(path.join(root, reference)))
    throw new Error(`Broken production reference: ${reference}`);
}
const fontCssPath = "vendor/phosphor/regular/style.css";
const fontCss = fs.readFileSync(path.join(root, fontCssPath), "utf8");
for (const [, reference] of fontCss.matchAll(/url\("([^"#]+)(?:#[^"]*)?"\)/g)) {
  if (!fs.existsSync(path.resolve(root, path.dirname(fontCssPath), reference)))
    throw new Error(`Missing icon font: ${reference}`);
}
for (const file of ["app.js", "demo-config.js", "vendor/qrcode.js"])
  new Function(fs.readFileSync(path.join(root, file), "utf8"));
console.log("Verified production HTML, JavaScript, styles, logo, QR library and all icon fonts.");
