module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'mydemo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
	  
     // { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.0/css/bulma.min.css' },
     // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Code+Pro:400,700' },
	 
	  
    ],

    css: [
      // node.js module but we specify the pre-processor
      { src: '~assets/main.sass', lang: 'sass' },
      // { src: 'bulma/bulma.sass', lang: 'sass' },
      { src: 'font-awesome/scss/font-awesome.scss', lang: 'scss' },
    ],

  },
  /*
  ** Customize the progress bar color
  */
  // loading: { color: '#3B8070' },
  loading:false,
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: [
        // Simple usage
        'nuxt-buefy','jquery',

        // Or you can customize
        ['nuxt-buefy', { css: false, materialDesignIcons: false }],
  ],
}
