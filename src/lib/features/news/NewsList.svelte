<script>
	import { asset, resolve } from '$app/paths';
</script>
<div class="news__list">
    <div class="container pl-container">
        <div class="row">
            <div class="col-12 col-md-6">
                <div class="news__item">
                    <div class="news__item--cover news__list--cover">
                        <img
                            src={asset('images/slider/slider1.png')}
                            class="news__item--img" alt="" />
                    </div>
                    <h1 class="news__item--title">
                        ცნობილი ფაქტია, რომ გვერდის წაკითხვად შიგთავსს
                        შეუძლია მკითხველის ყურადღება...
                    </h1>
                    <li class="news__item--more">
                        <a href={resolve('/news/1')} class="news__item--link">
                            გაიგე მეტი
                            <img src={asset('images/more.svg')} alt="" />
                        </a>
                    </li>
                </div>
            </div>
            <!-- item end -->
            <div class="col-12 col-md-6">
                <div class="news__item">
                    <div class="news__item--cover news__list--cover">
                        <img
                            src={asset('images/slider/slider1.png')}
                            class="news__item--img" alt="" />
                    </div>
                    <h1 class="news__item--title">
                        ცნობილი ფაქტია, რომ გვერდის წაკითხვად შიგთავსს
                        შეუძლია მკითხველის ყურადღება...
                    </h1>
                    <li class="news__item--more">
                        <a href={resolve('/news/1')} class="news__item--link">
                            გაიგე მეტი
                            <img src={asset('images/more.svg')} alt="" />
                        </a>
                    </li>
                </div>
            </div>
            <!-- item end -->
            <div class="col-12 col-md-6">
                <div class="news__item">
                    <div class="news__item--cover news__list--cover">
                        <img
                            src={asset('images/slider/slider1.png')}
                            class="news__item--img" alt="" />
                    </div>
                    <h1 class="news__item--title">
                        ცნობილი ფაქტია, რომ გვერდის წაკითხვად შიგთავსს
                        შეუძლია მკითხველის ყურადღება...
                    </h1>
                    <li class="news__item--more">
                        <a href={resolve('/news/1')} class="news__item--link">
                            გაიგე მეტი
                            <img src={asset('images/more.svg')} alt="" />
                        </a>
                    </li>
                </div>
            </div>
            <!-- item end -->
        </div>
    </div>
</div>
