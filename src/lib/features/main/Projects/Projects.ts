export type Project = {
    image: string,
    title: string,
    location: string,
    status: number
}

export const projectsData: Project[] = [
    {
        image: '/images/projects/digomi.png',
        title: 'Pillar Park დიღომი 8',
        location: 'თბილისი, დიღომის 8, ლაშა ლაშხიას ქ. 10',
        status: 90
    },
    {
        image: '/images/projects/samgori.jpeg',
        title: 'Pillar Park სამგორი',
        location: 'თბილისი, სამგორი',
        status: 0
    }
]
