<script lang="ts">
    import SectionTitle from '#lib/components/SectionTitle/SectionTitle.svelte';
    import { onMount } from 'svelte';
    let otherhouse: HTMLElement | undefined;
    const getSlider = () => (window as any).jQuery(otherhouse);
    onMount(() => {
        const slider = getSlider();
        slider.owlCarousel({
            loop: false,
            nav: false,
            dots: false,
            margin: 40,
            responsive: {
                0: { items: 1, margin: 16, stagePadding: 40 },
                768: { items: 3 },
            },
        });
        return () => slider.trigger("destroy.owl.carousel");
    });
</script>

    <div class="house__otherhouse">
        <div class="container-fluid container-md">
            <SectionTitle title="მსგავსი ბინები" class="justify-content-between align-items-center">
<div class="d-flex align-items-center">
                    <div class="d-none d-md-flex align-items-center">
                        <button
                            class="section-slider--btn prev projects__slider--prev owl--prev d-flex align-items-center justify-content-center"
                            onclick={() =>
                                getSlider().trigger("prev.owl.carousel")}
                        >
                            <img src="/images/slider/prev.svg" />
                        </button>
                        <button
                            class="section-slider--btn next projects__slider--next owl--next d-flex align-items-center justify-content-center"
                            onclick={() =>
                                getSlider().trigger("next.owl.carousel")}
                        >
                            <img src="/images/slider/next.svg" />
                        </button>
                    </div>
                </div>
</SectionTitle>
            <div
                class="house__otherhouse--slider owl-carousel"
                bind:this={otherhouse}
            >
                <div class="projects__item house__otherhouse--item">
                    <div class="projects__item--cover house__otherhouse--cover">
                        <img src="/images/home.png" />
                    </div>
                    <div class="projects__item--body house__otherhouse--body">
                        <div
                            class="projects__item--head d-flex justify-content-between align-items-start"
                        >
                            <div>
                                <h1 class="projects__item--title">
                                    <a href="" class="house__otherhouse--link">
                                        ბინა 10
                                    </a>
                                </h1>
                            </div>
                        </div>
                        <ul class="house__otherhouse--desc">
                            <li>ბლოკი: A</li>
                            <li>სართული: 24</li>
                            <li>საერთო ფართი: 80მ2</li>
                            <li>ფასი: $104,422 ($105/მ2)</li>
                        </ul>
                        <li class="projects__item--more d-flex d-md-none">
                            <a
                                href="/projects/digomi-8"
                                class="projects__item--link">არჩევა</a
                            >
                        </li>
                    </div>
                </div>
                <!-- item end -->
                <div class="projects__item house__otherhouse--item">
                    <div class="projects__item--cover house__otherhouse--cover">
                        <img src="/images/home.png" />
                    </div>
                    <div class="projects__item--body house__otherhouse--body">
                        <div
                            class="projects__item--head d-flex justify-content-between align-items-start"
                        >
                            <div>
                                <h1 class="projects__item--title">
                                    <a href="" class="house__otherhouse--link">
                                        ბინა 10
                                    </a>
                                </h1>
                            </div>
                        </div>
                        <ul class="house__otherhouse--desc">
                            <li>ბლოკი: A</li>
                            <li>სართული: 24</li>
                            <li>საერთო ფართი: 80მ2</li>
                            <li>ფასი: $104,422 ($105/მ2)</li>
                        </ul>
                        <li class="projects__item--more d-flex d-md-none">
                            <a
                                href="/projects/digomi-8"
                                class="projects__item--link">არჩევა</a
                            >
                        </li>
                    </div>
                </div>
                <!-- item end -->
                <div class="projects__item house__otherhouse--item">
                    <div class="projects__item--cover house__otherhouse--cover">
                        <img src="/images/home.png" />
                    </div>
                    <div class="projects__item--body house__otherhouse--body">
                        <div
                            class="projects__item--head d-flex justify-content-between align-items-start"
                        >
                            <div>
                                <h1 class="projects__item--title">
                                    <a href="" class="house__otherhouse--link">
                                        ბინა 10
                                    </a>
                                </h1>
                            </div>
                        </div>
                        <ul class="house__otherhouse--desc">
                            <li>ბლოკი: A</li>
                            <li>სართული: 24</li>
                            <li>საერთო ფართი: 80მ2</li>
                            <li>ფასი: $104,422 ($105/მ2)</li>
                        </ul>
                        <li class="projects__item--more d-flex d-md-none">
                            <a
                                href="/projects/digomi-8"
                                class="projects__item--link">არჩევა</a
                            >
                        </li>
                    </div>
                </div>
                <!-- item end -->
                <div class="projects__item house__otherhouse--item">
                    <div class="projects__item--cover house__otherhouse--cover">
                        <img src="/images/home.png" />
                    </div>
                    <div class="projects__item--body house__otherhouse--body">
                        <div
                            class="projects__item--head d-flex justify-content-between align-items-start"
                        >
                            <div>
                                <h1 class="projects__item--title">
                                    <a href="" class="house__otherhouse--link">
                                        ბინა 10
                                    </a>
                                </h1>
                            </div>
                        </div>
                        <ul class="house__otherhouse--desc">
                            <li>ბლოკი: A</li>
                            <li>სართული: 24</li>
                            <li>საერთო ფართი: 80მ2</li>
                            <li>ფასი: $104,422 ($105/მ2)</li>
                        </ul>
                        <li class="projects__item--more d-flex d-md-none">
                            <a
                                href="/projects/digomi-8"
                                class="projects__item--link">არჩევა</a
                            >
                        </li>
                    </div>
                </div>
                <!-- item end -->
            </div>
        </div>
    </div>
