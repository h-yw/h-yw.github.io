<script setup lang='ts'>
// import "tailwindcss/tailwind.css"
import Layout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
import {usePageFrontmatter} from '@vuepress/client'
let frontmatter= usePageFrontmatter().value
console.log(frontmatter);

</script>
<template>
<Layout>
  <!-- <template #page>
    <div>
      <Content/>
    </div>
  </template> -->
</Layout>
</template>

<style lang='scss' scoped>
</style>
