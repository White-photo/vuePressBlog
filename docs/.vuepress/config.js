
module.exports = {
    title: "vuepress-theme-reco",  //这里是博客标题
    description: 'A simple and beautiful vuepress blog theme .',  //博客描述
    dest: 'public',  // 博客部署时输出的文件夹
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],  //favicon图标设置
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
    ],
    theme: 'reco',  // vuepress挂载的主题
    themeConfig: {
        //导航栏
        // nav: [
        //     { text: 'Home', link: '/', icon: 'reco-home' },  //text:导航标题内容，icon：图标样式
        //     { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
        //     { text: 'Docs',
        //         icon: 'reco-message',
        //         items: [
        //             { text: 'vuepress-reco', link: '/docs/theme-reco/' }  //item： 子导航
        //         ]
        //     },
        //     { text: 'Contact',
        //         icon: 'reco-message',
        //         items: [
        //             { text: 'GitHub', link: 'https://github.com/recoluan', icon: 'reco-github' }
        //         ]
        //     }
        // ],
        // 侧边栏设置
        sidebar: {
            '/docs/theme-reco/': [
                '',
                'theme',
                'plugin',
                'api'
            ]
        },
        type: 'blog',
        // 博客设置
        blogConfig: {
            category: {
                location: 2, // 在导航栏菜单中所占的位置，默认2
                text: 'Category' // 默认 “分类”
            },
            tag: {
                location: 3, // 在导航栏菜单中所占的位置，默认3
                text: 'Tag' // 默认 “标签”
            }
        },
        plugins: [
            [
                //先安装在配置， npm install @vuepress-reco/vuepress-plugin-kan-ban-niang --save
                "@vuepress-reco/vuepress-plugin-kan-ban-niang",
                {
                    theme: ['blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku', 'z16'],
                    clean: false,
                    messages: {
                        welcome: '我是lookroot欢迎你的关注 ',
                        home: '心里的花，我想要带你回家。',
                        theme: '好吧，希望你能喜欢我的其他小伙伴。',
                        close: '再见哦'
                    },
                    width: 240,
                    height: 352
                }
            ],
            [
                //鼠标点击特效 先安装在配置， npm install vuepress-plugin-cursor-effects --save
                "cursor-effects",
                {
                    size: 3,                    // size of the particle, default: 2
                    shape: ['circle'],  // shape of the particle, default: 'star'
                    zIndex: 999999999           // z-index property of the canvas, default: 999999999
                }
            ],
            [
                //动态标题 先安装在配置， npm install vuepress-plugin-dynamic-title --save
                "dynamic-title",
                {
                    showIcon: "/favicon.ico",
                    showText: "(/≧▽≦/)咦！又好了！",
                    hideIcon: "/failure.ico",
                    hideText: "(●—●)喔哟，崩溃啦！",
                    recoverTime: 2000
                }
            ],
            [
                //图片放大插件 先安装在配置， npm install @vuepress\plugin-medium-zoom --save
                '@vuepress\plugin-medium-zoom', {
                selector: '.page img',
                delay: 1000,
                options: {
                    margin: 24,
                    background: 'rgba(25,18,25,0.9)',
                    scrollOffset: 40
                }
            }
            ],
            [
                //插件广场的流程图插件 先安装在配置 npm install vuepress-plugin-flowchart --save
                'flowchart'
            ],
            [
                //插件广场的sitemap插件 先安装在配置 npm install vuepress-plugin-sitemap --save
                'sitemap', {
                hostname: 'https://www.glassysky.site'
            }
            ],
            ["vuepress-plugin-nuggets-style-copy", {
                copyText: "复制代码",  //vuepress复制粘贴提示插件P 先安装在配置 npm install vuepress-plugin-nuggets-style-copy --save
                tip: {
                    content: "复制成功!"
                }
            }],
            ["@vuepress-yard/vuepress-plugin-window",{
                title: "远方有你伴余生の公告",  //vuepress公告插件 先安装在配置 npm install @vuepress-yard/vuepress-plugin-window --save
                contentInfo: {
                    title: "欢迎进来的小耳朵 🎉🎉🎉",
                    needImg: true,
                    imgUrl: "https://reinness.com/avatar.png",
                    content: "喜欢博皮可以到博客园关注教程",
                    contentStyle: ""
                },
                bottomInfo: {
                    btnText: '关于',
                    linkTo: 'https://cnblogs.com/glassysky'
                },
                closeOnce: false
            }]
        ],
        //友情链接
        friendLink: [
            {
                title: '午后南杂',
                desc: 'Enjoy when you can, and endure when you must.',
                email: '1156743527@qq.com',
                link: 'https://www.recoluan.com'
            },
            {
                title: 'vuepress-theme-reco',
                desc: 'A simple and beautiful vuepress Blog & Doc theme.',
                avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
                link: 'https://vuepress-theme-reco.recoluan.com'
            },
        ],
        //博客自定义LOGO
        logo: '../logo.jpg',
        // 搜索设置
        search: true,
        searchMaxSuggestions: 10,
        // 自动形成侧边导航
        // sidebar: 'auto',
        // 最后更新时间
        lastUpdated: 'Last Updated',
        // 作者
        author: 'reco_luan',
        // 作者头像
        authorAvatar: '/avatar.png',
        // 备案号
        record: 'xxxx',
        // 项目开始时间
        startYear: '2017'
        /**
         * 密钥 (if your blog is private)
         */

        //私有仓库key和密码
        // keyPage: {
        //   keys: ['your password'],
        //   color: '#42b983',
        //   lineColor: '#42b983'
        // },

        /**
         *评论
         * valine 设置 (if you need valine comment )
         */

        // valineConfig: {
        //   appId: '...',// your appId
        //   appKey: '...', // your appKey
        // }
    },
    markdown: {
        lineNumbers: true
    }
}