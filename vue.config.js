const { defineConfig } = require('@vue/cli-service')
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? 'skyro' : '/'}
module.exports = {
  pwa:{
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
                src: "img/icons/icon512_maskable.png",
                type: "image/png"
            },
            {
                purpose: "any",
                sizes: "512x512",
                src: "img/icons/icon512_rounded.png",
                type: "image/png"
            }
        ],
        orientation: "portrait",
        display: "standalone",
        name: "skyro pwa test",
        short_name: "pwa",
        start_url: ".",
        workboxOptions: 'index.html'
    
    }
}
}

