import preprocess from 'svelte-preprocess';
import { ViteRsw } from 'vite-plugin-rsw';

/** @type {import('@sveltejs/kit').Config} */
export const config = {
	preprocess: preprocess(),

	kit: {
		// Ssr only works if you comment out the first three lines of the init function in example-rust-package-rs/pkg/example-rust-package-rs.js
		// It has to be done every time the rust files are recompiled, so keep ssr and prerender off during development.
		// Technically it can be automated away but i dont want to delve into that

		// The lines you have to comment out:
		//  // if (typeof input === 'undefined') {
		//  // 	input = new URL('example-rust-crate-rs_bg.wasm', import.meta.url);
		//  // }
		// ssr: false,
		target: '#svelte',
		vite: { 
			plugins: [ 
				// https://github.com/lencx/vite-plugin-rsw#plugin-options
				// TODO: different configs for dev and build environments
				ViteRsw({ 
					root: "src/lib/",
					crates: [{ name: "example-rust-crate-rs" }],
					unwatch: ["*/pkg/*"],
					profile: process.env.NODE_ENV === 'production' ? "release" : "dev",
				}) 
			]
		}
	}
};

export default config;