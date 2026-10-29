<script lang="ts">
    import PageTitle from "#lib/components/PageTitle/PageTitle.svelte";
    import Expert from "#lib/features/main/Expert/Expert.svelte";
    import HouseInfo from "#lib/features/house/HouseInfo.svelte";
    import HouseOtherHouses from "#lib/features/house/HouseOtherHouses.svelte";
    import HouseFloorMobile from "#lib/features/house/HouseFloorMobile.svelte";
</script>

<div class="page-content">
    <div class="house">
        <PageTitle title="Pillar Park დიღომი 8-ში" />
<HouseInfo />
    </div>
<HouseOtherHouses />

<HouseFloorMobile />
    <Expert />
</div>
