<script lang="ts">
    import type { MenuLink } from './menuLinks.ts';

    let { item }: { item: MenuLink } = $props();
</script>

<li class="sidebar__nav--item">
    <a href={item.href} class="sidebar__nav--link">{item.label}</a>
</li>
