<script lang="ts">
	import { asset, resolve } from '$app/paths';
    import type { News } from "./News";

    let { item }: { item: News } = $props();
</script>

<div class="news__item">
    <div class="news__item--cover news__slider--cover">
        <img src={item.image} class="news__item--img" alt="" />
    </div>
    <h1 class="news__item--title">
        {item.title}
    </h1>
    <li class="news__item--more">
        <a href={resolve(`/news/${item.slug}`)} class="news__item--link">
            გაიგე მეტი
            <img src={asset('images/more.svg')} alt="" />
        </a>
    </li>
</div>
