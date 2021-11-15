module.exports = {
    title: "Mr.Hou",
    description: "Just playing around",
    themeConfig: {
        dateFormat: "YYYY-MM-DD",
        nav: [{
            text: "首页",
            link: "/"
        },
        {
            text: "技术",
            link: "/tech/"
        },
        {
            text: "生活",
            link: "/life/"
        },
        {
            text: "Tags",
            link: "/tag/"
        },
        {
            text: "关于",
            link: "/about.md"
        },
        {
            text: "Github",
            link: "https://github.com/h-yw"
        },
        ],
        footer: {
            contact: [{
                type: "github",
                link: "https://github.com/h-yw",
            },],
            copyright: [{
                text: "MIT Licensed | Copyright © 2020 Mr.Hou",
            },],
        },
        directories: [{
            id: "post",
            dirname: "_posts",
            path: "/",
            itemPermalink: "/:year/:month/:slug",
            itemPermalinkFlat: "/:slug",
            order: 1,
        },
        {
            id: "life",
            dirname: "_life",
            path: "/life/",
            title: "生活",
            itemPermalink: "/life/:year/:month/:slug",
            itemPermalinkFlat: "/life/:slug",
            order: 2,
        },
        {
            id: "tech",
            dirname: "_tech",
            path: "/tech/",
            title: "技术",
            itemPermalink: "/tech/:year/:month/:slug",
            itemPermalinkFlat: "/tech/:slug",
            order: 3,
        },
        {
            id: "tag",
            dirname: "_tags",
            path: "/tag/",
            title: "标签",
            itemPermalink: "/tag/:year/:month/:slug",
            itemPermalinkFlat: "/tag/:slug",
            order: 4,
        },
        {
            id: "about",
            dirname: "about",
            path: "/about.md",
            title: "关于",
            order: 5,
        },
        ],
        globalPagination: {
            prevText: "上一页",
            nextText: "下一页",
            lengthPerPage: 5,
            pageGap: 1,
        },
        paginationComponent: "Pagination",
        summary: true,
        summaryLength: 120,
        smoothScroll: true,
        lastUpdated: "最近写的吧...",
        sidebar: "auto",
        /*         comment: {
                    service: "vssue",
                    owner: "h-yw",
                    repo: "blog",
                    clientId: "",
                    clientSecret: "",
                    autoCreateIssue: true,
                    autoCreateComment: true,
                    autoCreateLabel: true,
                    autoCreateMilestone: true,
                    autoCreateAssignee: true,
                    autoCreateProject: true,
                    autoCreateComponent: true,
                    autoCreateVersion: true,
                    autoCreateBranch: true,
                } */

    },
    plugins: [
        "@vuepress/container"
    ],
    markdown: {
        lineNumbers: true,
        toc: {
            includeLevel: [2, 3]
        },
        anchor: {
            permalink: true,
            permalinkBefore: true,
            permalinkSymbol: "⚓",
        }
    },
    // configureWebpack: {
    //     resolve: {
    //         alias: {
    //             '@img': 'public'
    //         }
    //     }
    // }
};
