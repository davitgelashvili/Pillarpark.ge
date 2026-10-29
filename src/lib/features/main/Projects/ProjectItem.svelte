<script lang="ts">
	import { asset } from '$app/paths';
    import type { Project } from "./Projects";

    let { item }: { item: Project } = $props();
</script>

<div class="projects__slider--item">
    <div class="projects__slider--cover">
        <p class="projects__slider--status">სტატუსი: {item.status}%</p>
        <img
            src={item.image}
            class="projects__slider--img"
            alt="Pillar Park დიღომი 8"
        />
    </div>
    <h1 class="projects__slider--title">{item.title}</h1>
    <p class="projects__slider--location">
        <img src={asset('images/article_location.svg')} alt="" />
        {item.location}
    </p>
</div>
