<script lang="ts">
    import { onMount } from "svelte";
    import { sliderData } from "./slider";
    import SliderItem from "./SliderItem.svelte";

    onMount(() => {
        const jq = (window as any).jQuery;
        const content = jq(".slider__content");

        content.owlCarousel({
            loop: false,
            nav: false,
            dots: true,
            dotsContainer: ".slider__dots",
            responsive: {
                0: {
                    items: 1,
                },
            },
        });

        jq(".slider__dots--item").on("click", function (this: HTMLElement) {
            content.trigger("to.owl.carousel", [jq(this).index(), 300]);
            jq(".slider__dots--item").removeClass("active");
            jq(this).addClass("active");
        });

        return () => content.trigger("destroy.owl.carousel");
    });
</script>

<section class="slider">
    <div class="slider__container">
        <div class="slider__content owl-carousel">
            {#each sliderData as item}
                <SliderItem {item} />
            {/each}
        </div>
        <div class="container d-flex justify-content-md-end">
            <div
                class="slider__dots owl-dots d-flex align-items-center justify-content-center"
            >
                <div class="slider__dots--item active"></div>
                <div class="slider__dots--item"></div>
            </div>
        </div>
    </div>
</section>
