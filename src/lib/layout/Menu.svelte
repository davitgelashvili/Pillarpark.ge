<script lang="ts">
    import { menu } from "#lib/layout/menu.svelte.ts";
    import { page } from "$app/state";
    import MenuLink from "./MenuLink.svelte";
    import { menuLinks } from "./menuLinks.ts";

    $effect(() => {
        page.url.pathname;
        menu.open = false;
    });

    $effect(() => {
        document.body.style.overflow = menu.open ? "hidden" : "auto";
    });
</script>

<div class="menu" style:display={menu.open ? "block" : "none"}>
    <div
        class="menu__bg"
        onclick={() => (menu.open = false)}
        role="presentation"
    ></div>
    <div class="container-fluid container-md pl-container">
        <div class="row justify-content-end">
            <div class="col-12 col-md-6 col-lg-5 col-xl-4">
                <div class="menu__content">
                    <div class="menu__content--bg"></div>
                    <div class="sidebar">
                        <div class="container">
                            <div class="row align-items-center">
                                <div class="col-6 d-block d-md-none">
                                    <a href="/" class="header__logo">
                                        <img
                                            src="/images/logo_green.png"
                                            class="imgtosvg"
                                            alt=""
                                        />
                                    </a>
                                </div>
                                <div class="col-6 col-md-12">
                                    <div
                                        class="d-flex align-items-end flex-column"
                                    >
                                        <div>
                                            <div
                                                class="d-flex justify-content-end align-items-center"
                                            >
                                                <li class="header__order">
                                                    <a
                                                        href="/ordercall"
                                                        class="header__order--btn d-flex align-items-center"
                                                    >
                                                        <img
                                                            src="/images/order_icon.svg"
                                                            class="imgtosvg"
                                                            alt=""
                                                        />
                                                        <p
                                                            class="d-none d-md-block"
                                                        >
                                                            შეუკვეთე ზარი
                                                        </p>
                                                    </a>
                                                </li>
                                                <div class="header__lang">
                                                    ENG
                                                </div>
                                                <button
                                                    class="header__burger close-menu"
                                                    type="button"
                                                    aria-label="მენიუს დახურვა"
                                                    onclick={() =>
                                                        (menu.open = false)}
                                                >
                                                    <img
                                                        src="/images/close.svg"
                                                        class="imgtosvg"
                                                        alt=""
                                                    />
                                                </button>
                                            </div>
                                            <ul
                                                class="sidebar__nav d-none d-md-block"
                                            >
                                                {#each menuLinks as item}
                                                    <MenuLink {item} />
                                                {/each}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ul class="sidebar__nav d-block d-md-none">
                            {#each menuLinks as item}
                                <MenuLink {item} />
                            {/each}
                        </ul>
                        <div class="sidebar__footer d-block d-md-none">
                            <div class="container">
                                <li class="header__order">
                                    <a
                                        href="/ordercall"
                                        class="header__order--btn d-flex align-items-center"
                                    >
                                        <img
                                            src="/images/order_icon.svg"
                                            class="imgtosvg"
                                            alt=""
                                        />
                                        <p>შეუკვეთე ზარი</p>
                                    </a>
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
