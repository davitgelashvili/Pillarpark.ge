<script lang="ts">
    import SelectionForm from '#lib/features/selection/SelectionForm.svelte';
    import SelectionCover from '#lib/features/selection/SelectionCover.svelte';
    import PageTitle from '#lib/components/PageTitle/PageTitle.svelte';
</script>

<div class="page-content">
        <div class="selection">
    <PageTitle title="შეარჩიე პროექტი" />
    <div class="selection__container">
<SelectionForm />

<SelectionCover />
    </div>
</div>
        
    </div>
