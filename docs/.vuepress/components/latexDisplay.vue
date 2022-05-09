<template>
  <div ref="latex" class="katex" v-html="rawHTML"></div>
</template>

<script>
import katex from 'katex'
import 'katex/dist/katex.css'

export default {
  name: 'latexDisplay',
  data() {
    return {
      rawHTML: '',
    };
  },
  mounted() {
    console.log('----------ok!')
    this.rawHTML = katex.renderToString(this.$slots.default[0].text, {
      throwOnError: false,
    })
    /*
    // 另一种方法
    katex.render(this.$slots.default[0].text, this.$refs.latex, {
      throwOnError: false,
    })
    */
  },
};
</script>

<style>
.katex {
  text-align: center;
  font-size: 18px;
}
</style>
