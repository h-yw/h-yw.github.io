const { path } = require("@vuepress/utils");

module.exports = {
  // 站点配置
  lang: "zh-CN",
  title: "Mr.Hou",
  description: "Mr.Hou",
  base: "/",
  theme: path.resolve(__dirname, "./theme"),
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    // ['link', { type: 'text/css', rel: 'stylesheet', href: 'https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css' }]
  ],

  // 插件
  plugins: [
    [
      '@vuepress/plugin-google-analytics',
      {
        id: 'UA-158973717-1',
      }
    ],
    [
      '@vuepress/register-components',
      {
        componentsDir: path.resolve(__dirname, './docs/.vuepress/theme/components'),
      }
    ], [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: '快找找看',
          },
          '/zh/': {
            placeholder: '快找找看',
          }
        },
        hotKeys: ['s', '/'],
        searchMaxSuggestions: 10,
        isSearchable: () => true,
        getExtrFields: page => page.frontmatter.tags ?? [],
      }
    ],
    [
      '@vuepress/plugin-prismjs',
      {
        preloadLanguages: ['markdown', 'javascript', 'bash']
      }
    ]
  ],
  // 主题配置
  themeConfig: {
    navbar: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "技术",
        link: "/Tech.md",
      },
      {
        text: "Life",
        link: "/Life.md",
      },
      {
        text: "关于",
        link: "/About.md",
      },
    ],
    logo: '',
    logoDark: '',
    repo: 'https://github.com/h-yw/h-yw',
    repoLabel: 'Github',
    editLinks: true,
    editLinkText: "哎，还得改😒",
    docsRepo: "https://github.com/h-yw/h-yw",
    lastUpdated: true,
    lastUpdatedText: "上次更新",
    notFound: ['哇偶，流浪到另一个星球了...', '啊哦...世界不美好，但我还是要苟且偷生呢！', '哇偶，这个世界空空荡荡', '呃...这世界白无聊赖。'],
    backToHome: '快回去吧...',
    openInNewWindow: '打开新世界吧！',
    toggleDarkMode: '切换暗色模式',
    toggleSidebar: '切换侧边栏',
    themePlugins:{
      activeHeaderLinks: true,
      backToTop: true,
      container:{
        tip: true,
        warning: true,
        danger: true,
        details: true,
        codeGroup: true,
        codeGroupItem: true,
      },
      mediumZoom: true,
      nprogress: true,
    }
  },
  markdown:{
    code:{
      highlightLines:true,
      lineNumbers:true,
      preWrapper:true,
      vPre:true,
    },

  }
};
