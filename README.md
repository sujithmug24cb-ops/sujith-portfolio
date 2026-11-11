# Sujith M — Professional Student Portfolio

A responsive React + Vite portfolio with a dark blue/purple gradient theme.

## Requirements
- Node.js (LTS recommended)
- VS Code
- Internet connection for Google Fonts (optional)

## Run locally (Windows PowerShell)

1. Extract this ZIP file.
2. Open the extracted `sujith-portfolio` folder in VS Code.
3. Open **Terminal → New Terminal**.
4. Install dependencies:

   ```powershell
   npm install
   ```

5. Start the development server:

   ```powershell
   npm run dev
   ```

6. Open the URL printed in the terminal (usually `http://localhost:5173`).

## Personalise before publishing

Open `src/App.jsx` and update:
- `your.email@example.com` with your real email address.
- GitHub and LinkedIn profile URLs in the hero social links.
- Add your actual project GitHub links and screenshots.
- Confirm the technologies and project descriptions match what you have implemented.
- Add certificates and any additional education details when available.

The profile icon is currently a designed initials placeholder. Replace it with your own photo only if you want one.

## Production build

```powershell
npm run build
```

The production website is generated in the `dist` folder.

## Suggested deployment
You can deploy the project using Vercel or Netlify. Push the project to GitHub, import the repository into your hosting provider, and use:
- Build command: `npm run build`
- Output directory: `dist`
