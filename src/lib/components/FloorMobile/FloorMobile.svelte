<script lang="ts">
	import { resolve } from '$app/paths';
    import SectionTitle from '#lib/components/SectionTitle/SectionTitle.svelte';

    let { title = '' }: { title?: string } = $props();
</script>

<div class="m-select-floor d-block d-md-none">
    {#if title}
        <SectionTitle {title} class="justify-content-center" />
    {/if}
    <div class={title ? 'container' : 'container pl-container'}>
        <div class="m-select-floor__container">
            <div class="row">
                <div class="col-4">
                    <li class="disable">
                        <a href="#">
                            1
                        </a>
                    </li>
                </div>
                <div class="col-4">
                    <li class="">
                        <a href={resolve('/selecthouse')}>
                            2
                        </a>
                    </li>
                </div>
                <div class="col-4">
                    <li class="">
                        <a href="#">
                            3
                        </a>
                    </li>
                </div>
                <div class="col-4">
                    <li class="">
                        <a href="#">
                            4
                        </a>
                    </li>
                </div>
                <div class="col-4">
                    <li class="disable">
                        <a href="#">
                            5
                        </a>
                    </li>
                </div>
                <div class="col-4">
                    <li class="">
                        <a href="#">
                            6
                        </a>
                    </li>
                </div>
            </div>
        </div>
    </div>
</div>
