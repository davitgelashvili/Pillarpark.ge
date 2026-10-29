<script lang="ts">
    let {
        name,
        data,
    }: {
        name: string;
        data: any
    } = $props();
</script>

<select class="expert__form--select">
    <option class="expert__form--option">{name}</option>
    {#each data as item}
        <option class="expert__form--option">{item.name}</option>
    {/each}
</select>
