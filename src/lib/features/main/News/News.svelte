<script lang="ts">
	import { asset } from '$app/paths';
    import SectionTitle from '#lib/components/SectionTitle/SectionTitle.svelte';
    import { onMount } from "svelte";
    import NewsItem from "./NewsItem.svelte";
    import { newsData } from "./News";

    let slider: HTMLElement | undefined;

    const getSlider = () => (window as any).jQuery(slider);

    onMount(() => {
        const newsSlider = getSlider();

        newsSlider.owlCarousel({
            loop: false,
            nav: false,
            dots: false,
            margin: 40,
            responsive: {
                0: {
                    items: 1,
                    margin: 16,
                    stagePadding: 40,
                },
                768: {
                    items: 3,
                },
            },
        });

        return () => newsSlider.trigger("destroy.owl.carousel");
    });
</script>

<div class="news">
    <div class="news__section">
        <div class="container pl-container">
            <SectionTitle title="სიახლეები" class="justify-content-between align-items-center">
<div class="d-flex align-items-center">
                    <li class="section-view">
                        <a href="#"> ყველა </a>
                    </li>
                    <div class="d-none d-md-flex align-items-center">
                        <button
                            class="section-slider--btn prev news__slider--prev owl--prev d-flex align-items-center justify-content-center"
                            onclick={() =>
                                getSlider().trigger("prev.owl.carousel")}
                        >
                            <img src={asset('images/slider/prev.svg')} alt="" />
                        </button>
                        <button
                            class="section-slider--btn next news__slider--next owl--next d-flex align-items-center justify-content-center"
                            onclick={() =>
                                getSlider().trigger("next.owl.carousel")}
                        >
                            <img src={asset('images/slider/next.svg')} alt="" />
                        </button>
                    </div>
                </div>
</SectionTitle>
            <div class="news__slider owl-carousel" bind:this={slider}>
                {#each newsData as item}
                    <NewsItem {item} />
                {/each}
            </div>
        </div>
    </div>
</div>
