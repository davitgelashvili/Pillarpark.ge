import { asset } from '$app/paths';
export type ProjectEntry = {
    slug: string,
    image: string,
    title: string,
    location: string,
    status: number,
    description: string
}

const description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit minus natus sed dolore mollitia repellat, inventore temporibus molestiae excepturi ipsum quia quo accusamus dignissimos, ipsam necessitatibus iure veritatis, illo unde quasi repudiandae fugiat sint vero? similique aut nulla rerum ipsum. Quisquam!'

export const projectsList: ProjectEntry[] = [
    {
        slug: 'digomi-8',
        image: asset('images/projects/571X492-.png'),
        title: 'Pillar Park დიღომი 8',
        location: 'თბილისი, დიღმის 8',
        status: 80,
        description
    },
    {
        slug: 'samgori',
        image: asset('images/projects/samgori.jpeg'),
        title: 'Pillar Park სამგორი',
        location: 'თბილისი, დიღმის 8',
        status: 80,
        description
    }
]
