import { resolve } from '$app/paths';
export type MenuLink = {
    label: string,
    href: string
}

export const menuLinks: MenuLink[] = [
    { label: 'მთავარი', href: resolve('/') },
    { label: 'პროექტები', href: resolve('/projects') },
    { label: 'შეარჩიე ბინა', href: resolve('/selection') },
    { label: 'სიახლეები', href: resolve('/news') },
    { label: 'ლაივ კამერები', href: resolve('/livecamera') },
    { label: 'კონტაქტი', href: resolve('/ordercall') }
]
