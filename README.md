# Sveltekit+Rust SSR Template Proof of Concept

**TLDR:** Uses iframes and Sveltekit pages to run wasm on server side.

- `fix-new-urls.js` is run during `node run build` to bypass [#5169](https://github.com/vitejs/vite/issues/5169)
- [Wasm-bindgen](https://github.com/rustwasm/wasm-bindgen) glue code is not instanceable so it has to be isolated with iframes if one desires to use a wasm component more than once
- "Wasm components" are implemented as Sveltekit pages due to lack of top level async support in Svelte components [#5501](https://github.com/sveltejs/svelte/issues/5501)

## Requirements
- [Node.js](https://nodejs.org/en/)
- [Rust + wasm-pack](https://rustwasm.github.io/docs/book/game-of-life/setup.html)
- You may or may not need visual studio build tools installed

## Steps
- `npm install`
- Be sure to run `npm run dev` at least once to compile rust stuff
  
## Notes
- You may get internal server errors when you run `npm run dev`. Just terminate the process and run again or ignore.
