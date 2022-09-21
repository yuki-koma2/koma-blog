export const routes = {
    top: {
        path: '/',
        description: "this is a top page"
    },
    blog: {
        path: (options?: routingOption) => `/blog${options}`,
        description: "blog post list",
        detail: {
            path: (contentId: number) => `/blog/${contentId}`,
            description: "blog post detail",
        }
    }
}

export type routingOption = `?${string}`