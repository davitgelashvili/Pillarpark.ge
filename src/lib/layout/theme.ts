import { resolve } from '$app/paths';

export const isLightHeaderPage = (pathname: string) => {
    const route = pathname.replace(resolve('/'), '/');
    return route === '/' || /^\/projects\/[^/]+/.test(route);
};
