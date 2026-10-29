<script lang="ts">
    import type { FooterSocial } from './footer.ts';

    let { item }: { item: FooterSocial } = $props();
</script>

<li class="footer__socs--item">
    <a href={item.href} class="footer__socs--link" aria-label={item.label}>
        <img src={item.icon} class="footer__socs--icon" alt="" />
    </a>
</li>
