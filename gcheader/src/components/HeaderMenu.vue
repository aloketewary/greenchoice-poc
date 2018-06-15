/* eslint-disable */
<template>
  <li :class="menu.liClass">
            <em v-if="menu.subMenus.length > 0" class="arrow"></em>
            <a :href="menu.link" :class="menu.icon" :title="menu.title">
                <span>
                    <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;" v-html="menu.dispName"></font>
                    </font>
                </span>
            </a>
            <div class="header-sub-nav" v-if="menu.subMenus.length > 0">
                <ul>
                <li v-for="submenu in menu.subMenus" v-bind:key="submenu.id">
                     <a :href="submenu.link" :title="submenu.title">
                         <font style="vertical-align: inherit;">
                           <font style="vertical-align: inherit;" v-html="submenu.dispName"></font>
                     </font>
                   </a>
                </li>
                </ul>
            </div>
        </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HeaderMenu extends Vue {
  @Prop() private menu!: Object;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
