# Israa Almahmoud — Interactive Portfolio

HTML, CSS and JavaScript. No build step, backend or API keys required. Open `index.html` directly in a browser, or run `python -m http.server 8085 --bind 127.0.0.1` and visit http://127.0.0.1:8085.

## Projects

The homepage opens with the developer introduction and original code card. The collection contains VYRO, Mochi’s Garden, Nexora, Monvex Mobile, Monvex Web, Bloomly and JARVIS. Python projects are excluded. Existing case studies are retained. Each collection project has a dedicated detail page.

## Mini apps

“Try the mini app” opens a keyboard-accessible dialog. Demos reset when closed and use sample data:

- VYRO: choose exercises, log weights and reps, remove sets, inspect volume, finish a workout. Uses exercise illustrations from the original project.
- Nexora: create, complete, filter and delete tasks.
- Monvex: add income and expenses, remove transactions and review updated balances.
- Bloomly: track habits across a week.
- Mochi’s Garden: move with arrows or buttons, collect carrots and decorate.
- JARVIS: clearly labelled scripted chat; no live AI or microphone.
- Movies: search fictional titles and toggle favorites.
- Solar: adjust panels, power and sun hours for an illustrative calculation.

## Languages

NL, EN and Arabic are available in the navigation. Dutch is the default. The preference is stored when storage is available and carried in internal links. Arabic uses RTL layout. Ordinary scripts allow translations to work when opening the HTML file directly.

Descriptions are based on local project documentation. Visuals and demos are portfolio interpretations, not screenshots or full copies of the applications. The assistant has no verified repository URL. The existing custom domain is configured in CNAME.

## Themes

The navigation switch selects Cyber (dark) or Princess (light). The choice is saved locally and carried in internal links. `?theme=light` and `?theme=dark` select a theme explicitly; earlier `princess.html` and `?theme=princess` links remain compatible.

## Publishing updates

After changing CSS or JavaScript, run `python tools/version-assets.py`, then upload the updated HTML, CSS, JavaScript, and images together. Asset URLs include a content version so browsers fetch updated styles instead of mixing a new page with an old stylesheet.
