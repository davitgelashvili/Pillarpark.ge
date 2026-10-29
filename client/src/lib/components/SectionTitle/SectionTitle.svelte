<script lang="ts">
    import type { Snippet } from 'svelte';

    let { title, class: className = '', titleClass = '', children }: { title: string; class?: string; titleClass?: string; children?: Snippet } = $props();
</script>

<div class="section-header d-flex justify-content-center align-items-center {className}">
    <h1 class="section-title {titleClass}">{title}</h1>
    {@render children?.()}
</div>
