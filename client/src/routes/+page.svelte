<script lang="ts">
    import Slider from '#lib/features/main/slider/Slider.svelte'
    import Group from '#lib/features/main/Group/Group.svelte'
    import Projects from '#lib/features/main/Projects/Projects.svelte'
    import Expert from '#lib/components/Expert/Expert.svelte'
    import Map from '#lib/components/Map/Map.svelte'
    import News from '#lib/features/main/News/News.svelte'
</script>

<Slider />

<main class="main-content">
    <Group />
    <Projects />
    <Expert />
    <Map />
    <News />
</main>