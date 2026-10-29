<script lang="ts">
  import PageTitle from "#lib/components/PageTitle/PageTitle.svelte";
  import Select from "#lib/components/ui/Select.svelte";
</script>

<PageTitle
  title="აირჩიეთ ბინა"
  class="container pl-container justify-content-md-between"
>
  <div class="d-none d-md-flex">
    <div class="selecthouse__selectarea d-flex align-items-center">
      <p class="selecthouse__selectarea--title">ბლოკი</p>
      <Select name="A" data={[]} />
    </div>
    <div class="selecthouse__selectarea d-flex align-items-center">
      <p class="selecthouse__selectarea--title">სართული</p>
      <Select name="8" data={[]} />
    </div>
  </div>
</PageTitle>
