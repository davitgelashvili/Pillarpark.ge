import { asset } from '$app/paths';
export type FooterContact = {
    icon: string,
    label: string,
    value: string,
    href: string,
    external?: boolean
}

export type FooterSocial = {
    icon: string,
    label: string,
    href: string
}

export const footerContacts: FooterContact[] = [
    {
        icon: asset('images/footer/call.svg'),
        label: 'ტელეფონი:',
        value: '(032) 2-100-100',
        href: 'tel:+995322100100'
    },
    {
        icon: asset('images/footer/mail.svg'),
        label: 'ელ.ფოსტა:',
        value: 'info@pillarpark.ge',
        href: 'mailto:info@pillarpark.ge'
    },
    {
        icon: asset('images/footer/location_on.svg'),
        label: 'მისამართი:',
        value: 'თბ. კრწანისის 24ა',
        href: 'https://www.google.com/maps/search/?api=1&query=Pillar+Park',
        external: true
    }
]

export const footerSocials: FooterSocial[] = [
    { icon: asset('images/footer/fb.svg'), label: 'Facebook', href: '#' },
    { icon: asset('images/footer/yt.svg'), label: 'YouTube', href: '#' },
    { icon: asset('images/footer/in.svg'), label: 'LinkedIn', href: '#' },
    { icon: asset('images/footer/ig.svg'), label: 'Instagram', href: '#' }
]
