module.exports = {
    base:'/',
    title: "Mr.Hou",
    description: "一方世界",
    head: [
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
        ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }]
    ],
    navbar: [{
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
    themeConfig: {
        logo:'https://vuejs.org/images/logo.png',
        darkMode: true,
        repo:'https://github.com/h-yw/h-yw.github.io',
        repoLabel: 'Github',
        sidebar: "auto",
        editLink: true,
        editLinkText:'不会还要改吧？',
        docsRepo: 'https://github.com/h-yw/h-yw.github.io',
        docsBranch: 'master',
        docsDir: 'blog',
        editLinkPattern: ':repo/edit/:branch/:path',
        lastUpdated: true,
        lastUpdatedText: '最近改的',
        contributors: true,
        contributorsText: '作者',
        notFound: ['404,是去了另一个星球吧...'],
        backToHome: '停下来，回去吧。',
        openInNewWindow: '打开新天地吧！',
        toggleDarkMode: '切换色彩模式',
        toggleSidebar: '切换侧边栏',
        dateFormat: "YYYY-MM-DD",
        themePlugins: {
            activeHeaderLinks: true,
            backToTop: true,
            git: true,
            mediumZoom: true,
            nprogress: true
        }
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

    }
};