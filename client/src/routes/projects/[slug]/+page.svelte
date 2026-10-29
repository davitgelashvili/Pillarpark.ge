<script lang="ts">
    import DetailSlider from '#lib/features/projects/detail/DetailSlider.svelte';
    import ProjectDesc from '#lib/features/projects/detail/ProjectDesc.svelte';
    import ProjectGallery from '#lib/features/projects/detail/ProjectGallery.svelte';
    import ProjectConditions from '#lib/features/projects/detail/ProjectConditions.svelte';
    import ProjectBlockSelect from '#lib/features/projects/detail/ProjectBlockSelect.svelte';
    import Expert from '#lib/features/main/Expert/Expert.svelte';
    import Map from '#lib/features/main/Map/Map.svelte';
</script>

<DetailSlider />

<main class="main-content">
    <ProjectDesc />
    <ProjectGallery />
    <ProjectConditions />
    <Expert />
    <ProjectBlockSelect />
    <Map />
</main>
