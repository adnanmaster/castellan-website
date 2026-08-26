# Kapsule Unternehmenswebsite

Eigenständige öffentliche Marketing- und Unternehmenswebsite. Dieses Projekt
enthält keine DNS-Engine, keine Control API und keine Security Console.

```powershell
pnpm install
pnpm dev
```

Produktionsbuild:

```powershell
pnpm build
docker build -t kapsule-company-website .
```
