<script lang="ts">
    import type { News } from "./News";

    let { item }: { item: News } = $props();
</script>

<div class="news__item">
    <div class="news__item--cover news__slider--cover">
        <img src={item.image} class="news__item--img" />
    </div>
    <h1 class="news__item--title">
        {item.title}
    </h1>
    <li class="news__item--more">
        <a href={item.slug} class="news__item--link">
            გაიგე მეტი
            <img src="/images/more.svg" />
        </a>
    </li>
</div>
