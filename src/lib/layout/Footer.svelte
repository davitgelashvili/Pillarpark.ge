<script lang="ts">
    import FooterContact from './FooterContact.svelte';
    import FooterSocial from './FooterSocial.svelte';
    import { footerContacts, footerSocials } from './footer.ts';
</script>

<footer class="footer">
    <div class="container pl-container">
        <div class="footer__container">
            <ul class="footer__contact">
                {#each footerContacts as item}
                    <FooterContact {item} />
                {/each}
            </ul>
            <ul class="footer__socs d-flex align-items-center">
                {#each footerSocials as item}
                    <FooterSocial {item} />
                {/each}
            </ul>
        </div>
    </div>
</footer>
