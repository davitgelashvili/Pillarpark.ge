<script lang="ts">
    import HouseList from '#lib/features/selecthouse/HouseList.svelte';
    import HouseFloorMobile2 from '#lib/features/selecthouse/HouseFloorMobile2.svelte';
    import SectionTitle from '#lib/components/SectionTitle/SectionTitle.svelte';
    import Expert from '#lib/components/Expert/Expert.svelte';
    import { goto } from '$app/navigation';
</script>

<div class="page-content">
        
<HouseList />
<HouseFloorMobile2 />
</div>
        <Expert />
        
