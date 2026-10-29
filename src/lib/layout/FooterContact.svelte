<script lang="ts">
    import type { FooterContact } from './footer.ts';

    let { item }: { item: FooterContact } = $props();
</script>

<li class="footer__contact--item">
    <a
        href={item.href}
        class="footer__contact--link d-flex align-items-center"
        target={item.external ? '_blank' : undefined}
        rel={item.external ? 'noopener noreferrer' : undefined}
    >
        <img src={item.icon} class="footer__contact--icon" alt="" />
        <p class="footer__contact--name">{item.label}</p>
        <p class="footer__contact--value">{item.value}</p>
    </a>
</li>
