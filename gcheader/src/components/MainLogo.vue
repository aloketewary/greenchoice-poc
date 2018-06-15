/* eslint-disable */
<template>
   <div :class="logo.logoClass">
        <a :href="logo.href" :title="logo.title">
            <img :src="logo.imgSrc" :alt="logo.title">
        </a>
    </div>
</template>

<script lang="ts">
/* eslint-disable */
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HeaderMenu extends Vue {
  @Prop() private logo!: Object;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
