export type MenuLink = {
    label: string,
    href: string
}

export const menuLinks: MenuLink[] = [
    { label: 'მთავარი', href: '/' },
    { label: 'პროექტები', href: '/projects' },
    { label: 'შეარჩიე ბინა', href: '/selection' },
    { label: 'სიახლეები', href: '/news' },
    { label: 'ლაივ კამერები', href: '/livecamera' },
    { label: 'კონტაქტი', href: '/ordercall' }
]
