<script context="module">
    import * as wasm from "$lib/example-rust-crate-rs/pkg/example-rust-crate-rs.js";
    import mod from "$lib/example-rust-crate-rs/pkg/example-rust-crate-rs_bg.wasm?url";
    import Component1 from '$lib/Component1.svelte';
	import { browser } from "$app/env";

	// export const ssr = false;
	
	// https://kit.svelte.dev/docs#loading
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page }) {
		!browser && await wasm.default("http://localhost:3000" + mod);
		return { props: { test: page.query.get("test") } };
	}
</script>

<script>
    export let test;
</script>

<!-- The wasm has to be handed down to the component from page because components dont have a load function -->
<!-- await is required so HMR works normally -->
<!-- https://kit.svelte.dev/docs#loading -->
{#await (browser ? wasm.default(mod) : true) then _}
    <Component1 wasm={ wasm } test={ test }/>
{/await}