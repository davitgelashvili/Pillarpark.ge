<script lang="ts">
    import Icon from '#lib/components/Icon/Icon.svelte';
</script>

<div class="col-12 col-lg-6 col-xl-5">
    <form class="ordercall__form">
        <div class="row">
            <div class="col-12">
                <div class="ordercall__form--head">
                    <h1 class="ordercall__form--title">
                        შეავსეთ ფორმა
                    </h1>
                </div>
            </div>
            <div class="col-6">
                <label class="input">
                    <input type="text" placeholder="" class="input__field" />
                    <span class="input__title">სახელი *</span>
                </label>
            </div>
            <div class="col-6">
                <label class="input">
                    <input type="text" placeholder="" class="input__field"/>
                    <span class="input__title">გვარი *</span>
                </label>
            </div>
            <div class="col-12 col-md-6">
                <label class="input">
                    <select>
                        <option>+995</option>
                    </select>
                    <input type="text" placeholder="" class="input__field"/>
                    <span class="input__title" style="left: 107px">მობილური *</span>
                </label>
            </div>
            <div class="col-12 col-md-6">
                <label class="input">
                    <input type="text" placeholder="" class="input__field"/>
                    <span class="input__title">ელ.ფოსტა *</span>
                </label>
            </div>
            <div class="col-12">
                <label class="input">
                    <textarea rows="4" placeholder="" class="input__field"></textarea>
                    <span class="input__title">შეტყობინება</span>
                </label>
            </div>
            <div class="col-12">
                <button class="ordercall__form--btn d-flex align-items-center justify-content-center">
                    გაგზავნა
                    <Icon src="/images/send_icon.svg" />
                </button>
            </div>
        </div>
    </form>
</div>
