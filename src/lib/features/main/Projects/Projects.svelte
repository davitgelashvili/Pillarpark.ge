<script lang="ts">
    import SectionTitle from '#lib/components/SectionTitle/SectionTitle.svelte';
    import { onMount } from "svelte";
    import ProjectItem from "./ProjectItem.svelte";

    import { projectsData } from "./Projects";

    let slider: HTMLElement | undefined;

    const getSlider = () => (window as any).jQuery(slider);

    onMount(() => {
        const projectsSlider = getSlider();

        projectsSlider.owlCarousel({
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
                    items: 2,
                },
            },
        });

        return () => projectsSlider.trigger("destroy.owl.carousel");
    });
</script>

<div class="projects">
    <div class="projects__section">
        <div class="container pl-container">
            <SectionTitle title="ჩვენი პროექტები" class="justify-content-between align-items-center">
<div class="d-flex align-items-center">
                    <li class="section-view">
                        <a href="/projects"> ყველა </a>
                    </li>
                    <div class="d-none d-md-flex align-items-center">
                        <button
                            class="section-slider--btn prev projects__slider--prev owl--prev d-flex align-items-center justify-content-center"
                            onclick={() =>
                                getSlider().trigger("prev.owl.carousel")}
                        >
                            <img src="/images/slider/prev.svg" alt="წინა" />
                        </button>
                        <button
                            class="section-slider--btn next projects__slider--next owl--next d-flex align-items-center justify-content-center"
                            onclick={() =>
                                getSlider().trigger("next.owl.carousel")}
                        >
                            <img src="/images/slider/next.svg" alt="შემდეგი" />
                        </button>
                    </div>
                </div>
</SectionTitle>
            <div class="projects__slider owl-carousel" bind:this={slider}>
                {#each projectsData as item}
                    <ProjectItem {item} />
                {/each}
            </div>
        </div>
    </div>
</div>
