<script>
    import Button from "../ui/Button.svelte";
    import Select from "../ui/Select.svelte";
</script>

<div>
    <form
        class="expert__form d-flex align-items-center flex-md-nowrap flex-wrap"
    >
        <div class="expert__form--item">
            <Select
                name="პროექტი"
                data={[
                    {
                        name: 1,
                    },
                ]}
            />
        </div>
        <div class="expert__form--item">
            <Select name="ფართი" data={[]} />
        </div>
        <div class="expert__form--item">
            <Select name="ფასი" data={[]} />
        </div>
        <div class="expert__form--item">
            <Select name="ოთახები" data={[]} />
        </div>
        <Button title="ძებნა" icon="/images/search.svg" />
    </form>
</div>
