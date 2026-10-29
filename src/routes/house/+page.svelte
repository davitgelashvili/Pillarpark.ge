<script lang="ts">
    import PageTitle from "#lib/components/PageTitle/PageTitle.svelte";
    import Expert from "#lib/components/Expert/Expert.svelte";
    import HouseInfo from "#lib/features/house/HouseInfo.svelte";
    import HouseOtherHouses from "#lib/features/house/HouseOtherHouses.svelte";
    import FloorMobile from "#lib/components/FloorMobile/FloorMobile.svelte";
</script>

<div class="page-content">
    <div class="house">
        <PageTitle title="Pillar Park დიღომი 8-ში" />
        <HouseInfo />
    </div>
    <HouseOtherHouses />

    <FloorMobile title="სართულის შეცვლა" />
    <Expert />
</div>
