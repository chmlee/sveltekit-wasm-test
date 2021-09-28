<script lang="ts">
    import type * as wasmType from "../../example-rust-crate-rs/pkg/example-rust-crate-rs";
    export let wasm: typeof wasmType;
</script>

Hello from Svelte!
{wasm.greet()}