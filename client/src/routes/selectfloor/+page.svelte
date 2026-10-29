<script lang="ts">
    import FloorPlan from '#lib/features/selectfloor/FloorPlan.svelte';
    import FloorMobile from '#lib/features/selectfloor/FloorMobile.svelte';
    import PageTitle from '#lib/components/PageTitle/PageTitle.svelte';
    import Expert from '#lib/features/main/Expert/Expert.svelte';
</script>

<div class="page-content">
        <div class="selectfloor">
    <PageTitle title="აირჩიეთ სართული" />
<FloorPlan />

<FloorMobile />
</div>
        <Expert />
        
    </div>
