const { defineConfig } = require('@vue/cli-service')
module.exports = {
  pwa:{
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
        swSrc: '/public/service-worker.js',     
    },
    name:"field PWA",
    manifestOptions:{
        theme_color: "#f3f3f3",
        background_color: "#6891ff",
        icons: [
            {
                purpose: "maskable",
                sizes: "512x512",
                src: 'img/icons/coin.png',
                type: "image/png"
            },
            {
                purpose: "any",
                sizes: "512x512",
                src: 'img/icons/coin.png',
                type: "image/png"
            }
        ],
        display: "standalone",
        name: "field pwa",
        short_name: "pwa",
        start_url: "."
    }
}
}

