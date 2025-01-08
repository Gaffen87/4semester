Vitest er et testing framework til javascript

1. installer vitest
   `npm install -D vitest`
2. indsæt et test script i package.json
```
   "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "test": "vitest",
    "test:ui": "vitest --ui"
  },
```
Derefter kan test runneren køres ved at bruge `npm test` eller `npm run test:ui`
3. For at kunne teste react components skal vi bruge react testing library
   `npm install -D @testing-library/react`
4. Herefter skal vi bruge en emulering af en browser DOM til at teste i. Her findes fx JSDOM og HappyDOM. HappyDOM skulle være hurtigere end JSDOM, men er knap så omfattende. Vi går med JSDOM
   `npm install -D jsdom`
5. Vi skal fortælle vitest at jsdom skal bruges som test environment ved at lave en vitest.config.ts fil og tilføje følgende:
```
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
  },
});
```
6. Til sidst skal vi bruge jest-dom biblioteket til at teste imod DOM, så vi fx. kan se om et bestemt element findes i DOM
   `npm install -D @testing-library/jest-dom`
   