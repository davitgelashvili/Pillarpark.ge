<script lang="ts">
    import { page } from '$app/state';
    import { menu } from '#lib/layout/menu.svelte.ts';
    import Icon from '#lib/components/Icon/Icon.svelte';
    import { isLightHeaderPage } from '#lib/layout/theme.ts';

    const logo = $derived(
        isLightHeaderPage(page.url.pathname) ? '/images/logo_white.png' : '/images/logo_green.png'
    );
</script>

    <header class="header">
        <div class="container pl-container">
            <div class="header__container">
                <div class="row">
                    <div class="col-6">
                        <a href="/" class="header__logo">
                            <img src={logo} class="imgtosvg" alt="Pillar Park" />
                        </a>
                    </div>
                    <div class="col-6 d-flex justify-content-end align-items-center">
                        <li class="header__order">
                            <a href="/ordercall" class="header__order--btn d-flex align-items-center">
                                <Icon src="/images/order_icon.svg" />
                                <p class="d-none d-md-block">შეუკვეთე ზარი</p>
                            </a>
                        </li>
                        <div class="header__lang">
                            ENG
                        </div>
                        <button class="header__burger open-menu" type="button" aria-label="მენიუს გახსნა" onclick={() => (menu.open = true)}>
                            <Icon src="/images/burger.svg" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </header>