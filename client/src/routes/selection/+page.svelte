<script lang="ts">
    import SelectionForm from "#lib/components/SelectionForm/SelectionForm.svelte";
    import SelectionCover from "#lib/components/SelectionCover/SelectionCover.svelte";
    import PageTitle from "#lib/components/PageTitle/PageTitle.svelte";
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
