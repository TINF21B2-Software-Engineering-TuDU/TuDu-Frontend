# TuDu - Frontend

This is the frontend to our project "TuDu - Taskmanager"! We are using the new framework **svelteKit** in combination with **Vite**. In comparison to pure **svelte**, it has some advantages:
- testing using **vitest**
- server and client side rendering
- handling of backend requests
- streamlined routing
- strict typing of models and writables to have access to data across multiple pages

## Run, Build, Test 

To run the development environment:
```bash
npm run dev
```

To check for errors and warnings: 
```bash
npm run check
```

### Building:

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.


### Testing
```bash
npm run test
```

With coverage: 
```bash
npm run test:coverage
```