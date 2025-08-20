# React Port of Angular App

How to run:

1) Configure npm registry if behind corporate proxy.

```bash
npm config set registry https://registry.npmjs.org/
# Or use your internal mirror if required
```

2) Install deps and run dev server:

```bash
cd react-app
npm install
npm run dev
```

Environment variables:

- Create `.env.local` with:

```
VITE_API_URL=https://localhost:8080/portfolio-service/api/v1/
```

Routing parity:

- `/health` -> health check
- `/portfolio-management` -> Portfolio Management page
- `/portfolio-management/portfolio-editor` -> Portfolio Editor
- `/logout` -> placeholder logout

Assets:

- Header uses `/assets/images/UHC_Lockup_wht_RGB.png` from the root Angular assets. Vite serves from project root `public`. If needed, copy that image to `react-app/public/assets/images`.


