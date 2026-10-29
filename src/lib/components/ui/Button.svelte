<script lang="ts">
    let { 
        title,
        icon,
    }: { 
        title: String
        icon: string
    } = $props();
</script>

<button class="expert__form--btn">
    <img src={icon} alt="" />
    {title}
</button>
