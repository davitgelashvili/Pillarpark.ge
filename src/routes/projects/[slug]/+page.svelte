<script lang="ts">
    import DetailSlider from '#lib/features/projects/detail/DetailSlider.svelte';
    import ProjectDesc from '#lib/features/projects/detail/ProjectDesc.svelte';
    import ProjectGallery from '#lib/features/projects/detail/ProjectGallery.svelte';
    import ProjectConditions from '#lib/features/projects/detail/ProjectConditions.svelte';
    import SelectionCover from '#lib/components/SelectionCover/SelectionCover.svelte';
    import Expert from '#lib/components/Expert/Expert.svelte';
    import Map from '#lib/components/Map/Map.svelte';
</script>

<DetailSlider />

<main class="main-content">
    <ProjectDesc />
    <ProjectGallery />
    <ProjectConditions />
    <Expert />
    <SelectionCover />
    <Map />
</main>
