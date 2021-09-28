<script context="module">
    import * as wasm from "../../example-rust-crate-rs/pkg/example-rust-crate-rs.js";
	// https://vitejs.dev/guide/features.html#webassembly
    import mod from "../../example-rust-crate-rs/pkg/example-rust-crate-rs_bg.wasm"; // this is a small function that contains the path to the wasm file OR base64 of the wasm
	import { browser } from "$app/env";

    async function initModule(viteInitModuleFunction, initFunction) {
        let functionString = viteInitModuleFunction.toString();
        const quoteIndex = functionString.indexOf('"');
        const relUrl = quoteIndex !== -1 ? functionString.slice(quoteIndex + 1, -2) : functionString;
		// this line is crucial for ssr, because node doesnt understand relative urls
        const url = browser ? relUrl : "http://localhost:3000" + relUrl; // TODO: find a way to derive the localhost part dynamically
        return await initFunction(url);
    }

	// https://kit.svelte.dev/docs#loading
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load() {
        return await initModule(mod, wasm.default);
	}
</script>

<script lang="ts">
	import Component1 from '$lib/Component1.svelte';
</script>

<main>
	<!-- The wasm has to be handed down to the component from page because components dont have a load function -->
	<!-- https://kit.svelte.dev/docs#loading -->
	<Component1 wasm={wasm}/>
</main>