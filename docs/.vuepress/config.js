module.exports = {
    theme: 'reco',
    themeConfig: {
        // 博客配置
        blogConfig: {
            category: {
                location: 2,     // 在导航栏菜单中所占的位置，默认2
                text: 'Category' // 默认文案 “分类”
            },
            nav: [
                { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' }
            ],
            tag: {
                location: 3,     // 在导航栏菜单中所占的位置，默认3
                text: 'Tag'      // 默认文案 “标签”
            },
            socialLinks: [     // 信息栏展示社交信息
                { icon: 'reco-github', link: 'https://github.com/recoluan' },
                { icon: 'reco-npm', link: 'https://www.npmjs.com/~reco_luan' }
            ],
            // 密钥
            keyPage: {
                keys: ['32位的 md5 加密密文'], // 1.3.0 版本后需要设置为密文
                color: '#42b983', // 登录页动画球的颜色
                lineColor: '#42b983' // 登录页动画线的颜色
            }
        }
    },
    title: 'Chen\'s blog',
    description: '我的个人网站',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
        ['link', { rel: 'manifest', href: '/photo.jpg' }],// 注入到当前页面的 HTML <head> 中的标签
        ['link', { rel: 'apple-touch-icon', href: '/photo.jpg' }],
    ],
    base: '/', // 这是部署到github相关的配置
    markdown: {
        lineNumbers: false // 代码块显示行号
    },
    serviceWorker: true // 是否开启 PWA
};
