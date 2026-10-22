# BlueLMS NextGen product-vision demo

A static, navigation-only demonstration prepared for BGDL management. All records and statistics are fictional demo data. This is not a production LMS.

## Run

```powershell
npm ci
npm run dev
```

Open `http://127.0.0.1:4173`.

## Build

```powershell
npm run check
npm run build
```

The portable static output is written to `dist/`.

## Vercel deployment

Connect this repository to the existing Vercel project and use `main` as the
Production Branch. Set Root Directory to the repository root (leave it blank).
Pushes to the connected production branch trigger production deployments.

The committed `vercel.json` sets Framework Preset to Other, installs with
`npm ci`, builds with `npm run build`, and publishes `dist`. Node.js 24 is
specified in `package.json`. No environment variables or running Node server
are needed. All routes use URL hashes, so no catch-all rewrite is necessary.

The production build validates the application and its generated assets,
including Phosphor fonts and the QR library. Share links and QR codes use the
current deployment domain automatically. Lab session data is local to each
browser and deployment origin.

If deployment fails, check the failed deployment's Build Logs. Confirm that
the project uses the repository root, the Git integration is connected, and
the production branch is `main`. After changing an old project's build
settings, redeploy once without the build cache. Do not use `npm run dev` as
the production build command.
