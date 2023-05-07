const { defineConfig } = require('@vue/cli-service')
const SitemapPlugin = require('sitemap-webpack-plugin').default

// base url for deployment
const baseurl = 'https://localhost:8080'

// array containing path objects for sitemap plugin, generates sitemap.xml
const paths = [
  {
    path: '/',
    changefreq: 'always'
  },
  {
    path: '/artworks',
    changefreq: 'always'
  },
  {
    path: '/artistofday',
    changefreq: 'daily'
  },
  {
    path: '/artworkofday',
    changefreq: 'daily'
  },
  {
    path: '/culture',
    changefreq: 'daily'
  },
  {
    path: '/exhibition'
  },
  {
    path: '/about'
  },
  {
    path: '/contact'
  }
]

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '^/api': {
        target: 'https://localhost:7194',
        changeOrigin: true, 
        secure: false,
        pathRewrite: {'^/api': '/api'}
      },
    }
  },
  configureWebpack: {
    plugins: [
      // to direct search engine to baseurl/sitemap.xml endpoint add line containing: `Sitemap: <baseurl>/sitemap.xml` to robots.txt in deployment  
      new SitemapPlugin({ base: baseurl, paths })
    ]
  }
})
