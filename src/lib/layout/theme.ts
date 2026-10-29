export const isLightHeaderPage = (pathname: string) =>
    pathname === '/' || /^\/projects\/[^/]+/.test(pathname);
