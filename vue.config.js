const { defineConfig } = require('@vue/cli-service')
module.exports = {
  pwa:{
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
        swSrc: '/public/service-worker.js',     
    },
    name:"field PWA",
    manifestOptions:{
        capture_links: "existing_client_event",
        url_handlers:[{
            origin: "https://harvest-coin.web.app/"
        }],
        theme_color: "#f3f3f3",
        background_color: "#6891ff",
        icons: [
            {
                purpose: "maskable",
                sizes: "512x512",
                src: 'img/icons/icon512_maskable.png',
                type: "image/png"
            },
            {
                purpose: "any",
                sizes: "512x512",
                src: 'img/icons/icon512_rounded.png',
                type: "image/png"
            }
        ],
        display: "standalone",
        name: "field pwa",
        short_name: "pwa",
        start_url: ".",
    }
}
}

