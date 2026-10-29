<script lang="ts">
    import type { Slider } from "./slider";

    let { item }: { item: Slider } = $props();
</script>

<div class="slider__item">
    <img src={item.image} class="slider__item--cover" alt="" />
    <div class="slider__item--body">
        <div class="container pl-container">
            <div class="d-flex flex-column align-items-end">
                <h1 class="slider__item--title">{item.title}</h1>
                <h1 class="slider__item--desc">
                    {item.description}
                </h1>
            </div>
        </div>
    </div>
</div>
