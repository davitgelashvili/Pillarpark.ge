<script lang="ts">
    import type { Snippet } from 'svelte';

    let { title, class: className = '', children }: { title: string; class?: string; children?: Snippet } = $props();
</script>

<div class="page-header d-flex justify-content-center align-items-center {className}">
    <h1 class="page-title">{title}</h1>
    {@render children?.()}
</div>
