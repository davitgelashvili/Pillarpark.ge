<script lang="ts">
	import { asset } from '$app/paths';
    import SectionTitle from '#lib/components/SectionTitle/SectionTitle.svelte';
    import GroupStat from './GroupStat.svelte';
    import { groupStats } from './Group.ts';
</script>

<div class="group">
    <div class="container pl-container">
        <div class="row flex-lg-wrap flex-wrap-reverse">
            <div class="col-lg-8">
                <div class="group__body">
                    <SectionTitle title="Pillar ჯგუფი" class="justify-content-between mb-0" titleClass="group__body--title" />
                    <div class="group__body--desc">
                        <p>
                            ცნობილი ფაქტია, რომ გვერდის წაკითხვად შიგთავსს შეუძლია მკითხველის ყურადღება მიიზიდოს და დიზაინის აღქმაში ხელი შეუშალოს. Lorem Ipsum-ის გამოყენებით ვღებულობთ იმაზე მეტ-ნაკლებად სწორი გადანაწილების ტექსტს, ვიდრე ერთიდაიგივე 
                        </p>
                        <br />
                        <p>
                            ცნობილი ფაქტია, რომ გვერდის წაკითხვად შიგთავსს შეუძლია მკითხველის ყურადღება მიიზიდოს და დიზაინის აღქმაში ხელი შეუშალოს. Lorem Ipsum-ის გამოყენები
                        </p>
                    </div>
                    <div class="group__footer">
                        <div class="row">
                            {#each groupStats as item}
                                <GroupStat {item} />
                            {/each}
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 d-flex justify-content-lg-end align-items-start justify-content-center">
                <!-- <img src={asset('images/group_cover.svg')} class="group__cover imgtosvg" alt="" /> -->
                <svg id="Layer_1" data-name="Layer 1" class="group__cover" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 93.8 123.19">
                  <defs>
                    <style>
                      .cls-1 {
                        fill: #789868;
                      }
                    </style>
                  </defs>
                  <path class="cls-1" d="m41.78,36.9c-14.27,10.53-29.63,7.61-29.63,7.61-2.43.73-4.84-1.17-4.84-3.8V8.33c0-1.55,1.21-2.8,2.69-2.8h45.22c11.84.88,4.16,18.39-13.44,31.37Z"/>
                  <path class="cls-1" d="m40.71,116H10.5c-1.76,0-3.19-1.49-3.19-3.32v-58.38c0-1.72,1.34-3.11,2.99-3.11,0,0,16.89.64,27.13,19.34,5.16,9.41,6.13,33.51,6.31,42.25.04,1.77-1.33,3.22-3.03,3.22Z"/>
                  <path class="cls-1" d="m50.05,82.62c-3.13-.09-5.73-2.54-6.15-5.78-.92-7.16-1.98-19.91.79-27.23,6.14-16.28,18.71-25.33,25.17-29.09,2.38-1.38,5.37-.88,7.19,1.23,4.18,4.82,10.93,14.31,10.09,24.46-2.79,33.5-26.31,36.73-37.09,36.41Z"/>
                </svg>
            </div>
        </div>
    </div>
</div>