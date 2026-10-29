<script lang="ts">
    import HouseSelectBar from '#lib/features/selecthouse/HouseSelectBar.svelte';
    import HouseArea from '#lib/features/selecthouse/HouseArea.svelte';
    import HouseLocation from '#lib/features/selecthouse/HouseLocation.svelte';
    import HouseList from '#lib/features/selecthouse/HouseList.svelte';
    import HouseFloorMobile from '#lib/features/selecthouse/HouseFloorMobile.svelte';
    import Expert from '#lib/features/main/Expert/Expert.svelte';
</script>

<div class="page-content">
        <div class="selecthouse">
<HouseSelectBar />
  
<HouseArea />
<HouseLocation />
</div>
<HouseList />
<HouseFloorMobile />
    </div>
        <Expert />
        
