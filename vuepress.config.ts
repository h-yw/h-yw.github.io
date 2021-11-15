module.exports = {
    base: '/',
    lang: 'zh-CN',
    title: 'Mr.Hou',
    description: 'Mr.Hou的一亩三分地',
    search: true,
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    ],
    theme:'@vuepress/theme-default',
    themeConfig: {
        home:'/',
        navbar:[
            {text:'首页',link:'/'},
            {text:'技术',link:'/tech/README.md'},
            {text:'关于',link:'/about/'},
        ],
        sidebar:'auto',
        logo: '/images/hero.png',
        darkMode: true,
        repo: 'https://gitee.com/mr_houyw/hblog',
        repoLabel: '查看源码',
        editLinks: false,
        editLinkText: '编辑本篇',
        lastUpdated: true,
        lastUpdateText: '上次更新',
        tip: 'TIP',
        waring: 'WARING',
        danger: 'DANGER',
        notFound: ['404,是去了另一个星球吧...'],
        backToHome: '停下来，回去吧。',
        openInNewWindow: '打开新天地吧！',
        toggleDarkMode: '切换色彩模式',
        toggleSidebar: '切换侧边栏',
        themePlugins: {
            activeHeaderLinks: true,
            backToTop: true,
            git: true,
            mediumZoom: true,
            nprogress: true,
        }
    },
    markdownit: {
        anchor: {
            level: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            slugify: slugify,
            permalink: true,
            permalinkBefore: true,
            permalinkSymbol: '¶',
            permalinkClass: 'header-anchor',
            permalinkSymbolClass: 'header-anchor-symbol',
            permalinkHrefClass: 'header-anchor-href',
            permalinkIgnoreIfEmpty: true,
            permalinkAttributes: {
                'aria-label': 'Permalink to this section',
            }
        }
    
    }
}