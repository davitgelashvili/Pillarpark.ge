<script lang="ts">
    import PageTitle from "#lib/components/PageTitle/PageTitle.svelte";
    import ProjectListItem from "./ProjectListItem.svelte";
    import { projectsList } from "./projects.ts";
</script>

<div class="projects">
    <PageTitle title="ჩვენი პროექტები" />
    <div class="container pl-container">
        <div class="projects__list">
            {#each projectsList as item}
                <ProjectListItem {item} />
            {/each}
        </div>
    </div>
</div>
