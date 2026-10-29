<script lang="ts">
    import type { GroupStat } from './Group.ts';

    let { item }: { item: GroupStat } = $props();
</script>

<div class="col-md-4">
    <div class="group__footer--item d-md-block d-flex align-items-center justify-content-between">
        <div class="d-flex d-md-block">
            <img src={item.icon} class="group__footer--icon" alt="" />
            <p class="group__footer--count">{item.count}</p>
        </div>
        <p class="group__footer--title">{item.title}</p>
    </div>
</div>
