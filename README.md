# Sveltekit+Rust SSR Template Proof of Concept

## Requirements
- [Node.js](https://nodejs.org/en/)
- [Rust + wasm-pack](https://rustwasm.github.io/docs/book/game-of-life/setup.html)
- You may or may not need visual studio build tools installed

## Steps
- `npm install`
- Be sure to run `npm run dev` at least once to compile rust stuff
- (Optional) enable ssr in `svelte.config.js`
  
## Notes
- If you want to use ssr, you have to comment out the first three lines of the init function in `example-rust-crate-rs/pkg/example-rust-crate-rs.js` every time rust stuff is recompiled, or some part of the build process(vite?) says that these lines are illegal in ssr mode

```javascript
if (typeof input === 'undefined') {
	input = new URL('example-rust-crate_bg.wasm', import.meta.url);
}
```
- Due to this limitation, ssr and prerendering should be turned off in `svelte.config.js` during development
- Do not move your rust crate into the src directory, [ViteRsw](https://github.com/lencx/vite-plugin-rsw) will go into an endless loop because ViteRsw recompiles rust every time something changes in the src directory, even in the pkg directory, which logically should be excluded.
- You may get internal server errors you run `npm run dev`. Just terminate the process and run again. As far as I can tell, its a bug somewhere upstream
