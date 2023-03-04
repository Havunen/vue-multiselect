<template>
  <div class="tabs"></div><a class="tabs__link" v-for="lang in langs" v-bind:class="{'tabs__link--active': lang === current}" @click="select(lang)">{{lang}}</a>
</template>

<script>
export default {
  props: ['langs', 'current'],
  methods: {
    select (lang) {
      this.$emit('select', lang)
    }
  }
}
</script>
