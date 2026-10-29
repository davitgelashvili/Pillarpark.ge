<script lang="ts">
    import { onMount } from 'svelte';

    let { src, alt = '' }: { src: string; alt?: string } = $props();

    let svg = $state('');

    onMount(async () => {
        const res = await fetch(src);
        if (!res.ok) return;

        const doc = new DOMParser().parseFromString(await res.text(), 'image/svg+xml');
        svg = doc.querySelector('svg')?.outerHTML ?? '';
    });
</script>

{#if svg}
    <span style="display: contents" role="img" aria-label={alt}>{@html svg}</span>
{:else}
    <img {src} {alt}  />
{/if}
