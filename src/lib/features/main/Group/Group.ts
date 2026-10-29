import { asset } from '$app/paths';
export type GroupStat = {
    icon: string,
    count: string,
    title: string
}

export const groupStats: GroupStat[] = [
    {
        icon: asset('images/group/rule.svg'),
        count: '24 000 000+',
        title: 'ჯამური ინვესტიცია'
    },
    {
        icon: asset('images/group/tree.svg'),
        count: '10 000+',
        title: 'კმაყოფილი მომხარებელი'
    },
    {
        icon: asset('images/group/door.svg'),
        count: '10',
        title: 'მიმდინარე პროექტი'
    }
]
