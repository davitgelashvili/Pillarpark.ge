import { asset } from '$app/paths';
export type Slider = {
    image: string,
    title: string,
    description: string
}

export const sliderData: Slider[] = [
    {
        image: asset('images/slider.png'),
        title: 'Pillar Park',
        description: 'ცნობილი ფაქტია, რომ გვერდის წაკითხვად შიგთავსს შეუძლია...'
    },
    {
        image: asset('images/slider.png'),
        title: 'Pillar Park',
        description: 'ცნობილი ფაქტია, რომ გვერდის წაკითხვად შიგთავსს შეუძლია...'
    }
]