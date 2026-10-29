<script lang="ts">
    import Icon from '#lib/components/Icon/Icon.svelte';
</script>

<div class="col-12 col-lg-6 col-xl-7">
    <div class="ordercall__title">
        <h1 class="ordercall__title--text">
            დეტალური ინფორმაციის მისაღებად
            დაგვიტოვეთ თქვენი საკონტაქტო ინფორმაცია
        </h1>
        <Icon src="/images/ordercall_text_icon.svg" />
    </div>
    <ul class="ordercall__contact d-flex flex-column">
        <li class="ordercall__contact--item d-flex justify-content-lg-start justify-content-center">
            <a href="tel:995322500400" class="ordercall__contact--link d-flex align-items-center">
                <Icon src="/images/call.svg" />
                (+995) 322 500 400
            </a>
        </li>
        <li class="ordercall__contact--item d-flex justify-content-lg-start justify-content-center">
            <a href="mailto:sales@pillarpark.ge" class="ordercall__contact--link d-flex align-items-center">
                <Icon src="/images/mail.svg" />
                sales@pillarpark.ge
            </a>
        </li>
    </ul>
</div>
