<script lang="ts">
    import SectionTitle from '#lib/components/SectionTitle/SectionTitle.svelte';
    import { onMount } from 'svelte';

    let gallery: HTMLElement | undefined;

    const getGallery = () => (window as any).jQuery(gallery);

    const images = [
        '/images/projects/5.png',
        '/images/projects/2.jpg',
        '/images/projects/4.png',
        '/images/projects/1.png',
        '/images/projects/6.png',
        '/images/projects/8.jpg',
        '/images/projects/9.jpg',
        '/images/projects/10.jpg',
        '/images/projects/11.jpg',
        '/images/projects/7.png',
    ];

    onMount(() => {
        const owl = getGallery();

        owl.owlCarousel({
            loop: false,
            nav: false,
            dots: false,
            margin: 40,
            responsive: {
                0: {
                    items: 1,
                    margin: 16,
                },
                768: {
                    items: 3
                }
            }
        });

        return () => owl.trigger('destroy.owl.carousel');
    });
</script>

<div class="projects detail">
    <div class="detail__gallery">
        <div class="container pl-container">
            <SectionTitle title="პროექტები" class="justify-content-between align-items-center">
<div class="d-flex align-items-center">
                    <div class="d-none d-md-flex align-items-center">
                        <button class="section-slider--btn prev projects__slider--prev owl--prev d-flex align-items-center justify-content-center" onclick={() => getGallery().trigger('prev.owl.carousel')}>
                            <img src="/images/slider/prev.svg" alt="წინა" />
                        </button>
                        <button class="section-slider--btn next projects__slider--next owl--next d-flex align-items-center justify-content-center" onclick={() => getGallery().trigger('next.owl.carousel')}>
                            <img src="/images/slider/next.svg" alt="შემდეგი" />
                        </button>
                    </div>
                </div>
</SectionTitle>
        </div>
        <div class="container pl-container">
            <div class="detail__gallery--slider-out">
                <div class="detail__gallery--slider-in">
                    <div class="detail__gallery--slider owl-carousel" bind:this={gallery}>
                        {#each images as src}
                            <div class="detail__gallery--item">
                                <div class="detail__gallery--cover">
                                    <img {src} class="detail__gallery--img" alt="" />
                                </div>
                            </div>
                        {/each}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
