<script lang="ts">
    import { onMount } from 'svelte';

    let visible = $state(true);

    onMount(() => {
        const hide = () => (visible = false);

        if (document.readyState === 'complete') hide();
        else window.addEventListener('load', hide, { once: true });
    });
</script>

{#if visible}
<div class="loader">
    <div class="loader__content">
        <svg class="circular" viewBox="25 25 50 50">
            <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"></circle>
        </svg>
    </div>
</div>
{/if}
