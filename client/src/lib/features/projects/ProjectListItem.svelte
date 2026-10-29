<script lang="ts">
    import type { ProjectEntry } from './projects.ts';

    let { item }: { item: ProjectEntry } = $props();
</script>

<div class="projects__item">
    <div class="row">
        <div class="col-12 col-lg-6">
            <div class="projects__item--cover">
                <img src={item.image} alt={item.title} />
            </div>
        </div>
        <div class="col-12 col-lg-6">
            <div class="projects__item--body">
                <div class="projects__item--head d-flex justify-content-between align-items-start">
                    <div>
                        <h1 class="projects__item--title">{item.title}</h1>
                        <p class="projects__item--location">
                            <img src="/images/article_location.svg" alt="" />
                            {item.location}
                        </p>
                    </div>
                    <div class="projects__item--status">
                        სტატუსი: {item.status}%
                    </div>
                </div>
                <div class="projects__item--desc">
                    {item.description}
                </div>
                <li class="projects__item--more">
                    <a href="/projects/{item.slug}" class="projects__item--link">დეტალურად</a>
                </li>
            </div>
        </div>
    </div>
</div>
