import { defineClientAppEnhance } from '@vuepress/client'
import AboutLayout from './theme/layouts/AboutLayout.vue'

export default defineClientAppEnhance(({ app }) => {
    app.component('AboutLayout', AboutLayout)
  })