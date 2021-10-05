<script lang="ts">
    import type * as wasmType from "$lib/example-rust-crate-rs/pkg/example-rust-crate-rs";
    export let wasm: typeof wasmType;
    export let test: string;
</script>

Hello from Svelte!
{test}
{wasm.greet()}