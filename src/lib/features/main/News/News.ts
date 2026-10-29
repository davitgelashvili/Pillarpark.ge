import { asset } from '$app/paths';
export type News = {
    slug: string,
    image: string,
    title: string
}

export const newsData: News[] = [
    {
        slug: '1',
        image: asset('images/slider/slider1.png'),
        title: 'ცნობილი ფაქტია, რომ გვერდის წაკითხვად შიგთავსს შეუძლია მკითხველის ყურადღება...'
    },
    {
        slug: '2',
        image: asset('images/slider/slider1.png'),
        title: 'ცნობილი ფაქტია, რომ გვერდის წაკითხვად შიგთავსს შეუძლია მკითხველის ყურადღება...'
    },
    {
        slug: '3',
        image: asset('images/slider/slider1.png'),
        title: 'ცნობილი ფაქტია, რომ გვერდის წაკითხვად შიგთავსს შეუძლია მკითხველის ყურადღება...'
    },
    {
        slug: '4',
        image: asset('images/slider/slider1.png'),
        title: 'ცნობილი ფაქტია, რომ გვერდის წაკითხვად შიგთავსს შეუძლია მკითხველის ყურადღება...'
    }
]
