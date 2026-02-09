# Trendix – Multi-Vendor Dropshipping Platform

Trendix is a mobile-first, story-driven, multi-vendor marketplace that connects vendors, independent dropshippers, and end customers with a distinct, non-grid, vertical storytelling experience.

## What’s included
- **Original UX/UI system** with asymmetrical, modular panels and progressive disclosure.
- **Role-based architecture** for customers, vendors, and dropshippers.
- **Automation-ready workflows** for routing, payouts, inventory sync, and disputes.
- **Scalable technical foundation** with a React/Next.js-ready frontend and Node.js API.

## Repo structure
```
apps/
  web/      # UI prototype + React structure
  api/      # Node.js API skeleton
docs/       # Brand system, UX, schema, API, workflows, deployment
```

## Quick start (prototype)
```bash
cd apps/web
python -m http.server 4173
```
Then open http://localhost:4173 to preview the UI prototype.

## API dev (skeleton)
```bash
cd apps/api
npm install
npm run dev
```

## Docs
- Brand & UI system: `docs/brand.md`
- UX flows & IA: `docs/ux-flow.md`
- Database schema: `docs/schema.sql`
- API architecture: `docs/api.md`
- Automation workflows: `docs/automation.md`
- Security & compliance: `docs/security.md`
- Deployment guide: `docs/deployment.md`
