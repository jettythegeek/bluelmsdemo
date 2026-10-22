const http = require("http");
const fs = require("fs");
const path = require("path");
const root = path.resolve(__dirname, "..");
const port = Number(process.env.PORT || 4173);
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
};
http
  .createServer((req, res) => {
    const pathname = decodeURIComponent(req.url.split("?")[0]);
    let file = pathname === "/" ? "index.html" : pathname.replace(/^\//, "");
    if (file === "vendor/qrcode.js")
      file = "node_modules/qrcode-generator/qrcode.js";
    if (file.startsWith("vendor/phosphor/"))
      file = file.replace(
        "vendor/phosphor/",
        "node_modules/@phosphor-icons/web/src/",
      );
    const target = path.resolve(root, file);
    if (
      !target.startsWith(root) ||
      !fs.existsSync(target) ||
      fs.statSync(target).isDirectory()
    )
      file = "index.html";
    const finalPath = path.join(root, file);
    res.writeHead(200, {
      "Content-Type":
        types[path.extname(finalPath)] || "application/octet-stream",
      "Cache-Control": "no-store",
    });
    fs.createReadStream(finalPath).pipe(res);
  })
  .listen(port, "127.0.0.1", () =>
    console.log(`BlueLMS demo: http://127.0.0.1:${port}`),
  );
