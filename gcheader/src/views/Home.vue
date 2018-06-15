<template>
     <!-- header on -->
        <header class="page-header">
            <div class="row" >
                <span id="logo">
                    <!-- Header App  -->
                    <main-logo :logo="headerLogo"></main-logo>
                </span>
                <!-- drop on -->
                <span class="js-header-icon">
                    <a title="Menu" href="#">
                        <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">Menu</font>
                        </font>
                    </a>
                </span>
                <div class="header-dropdown">
                        <nav class="header-nav" id="header">
                                <ul v-if="headerNav.length > 0">
                    <!-- Dynamic Header Menu Set -->
                    <header-menu v-for="menu in headerNav" v-bind:key="menu.id" v-bind:menu="menu"></header-menu>
                    <div class="header-dossier">
                        <a href="https://dossier.greenchoice.nl/?utm_source=greenchoicenl&amp;utm_medium=button&amp;utm_campaign=mdbuttongreenchoicenl"
                            class="icon-user" title="My file">
                            <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">My file</font>
                            </font>
                        </a>
                    </div>
                </ul>
                    </nav>
                    <nav class="header-quick">
                        <ul class="landing">
                            <li>
                                <a href="https://www.greenchoice.nl/" title="Website">
                                    <font style="vertical-align: inherit;">
                                        <font style="vertical-align: inherit;">Private</font>
                                    </font>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.greenchoice.nl/zakelijk/" title="For Business">
                                    <font style="vertical-align: inherit;">
                                        <font style="vertical-align: inherit;">For Business</font>
                                    </font>
                                </a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <a href="https://www.greenchoice.nl/over-ons/" title="About Greenchoice">
                                    <font style="vertical-align: inherit;">
                                        <font style="vertical-align: inherit;">About Greenchoice</font>
                                    </font>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.greenchoice.nl/klantenservice/" title="Customer service">
                                    <font style="vertical-align: inherit;">
                                        <font style="vertical-align: inherit;">Customer service</font>
                                    </font>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)" title="Add Menu">
                                    <font style="vertical-align: inherit;">
                                        <font style="vertical-align: inherit;">Add Menu</font>
                                    </font>
                                </a>
                            </li>
                        </ul>
                        <div class="header-search">
                            <form method="get" action="/zoeken/">
                                <label for="header_search_inp">
                                    <font style="vertical-align: inherit;">
                                        <font style="vertical-align: inherit;">Search</font>
                                    </font>
                                </label>
                                <input id="header_search_inp" type="text" name="s" value="" placeholder="Zoeken">
                                <button type="submit">
                                    <span>
                                        <font style="vertical-align: inherit;">
                                            <font style="vertical-align: inherit;">Search</font>
                                        </font>
                                    </span>
                                </button>
                            </form>
                        </div>
                    </nav>
                </div>
                <!-- drop off -->
            </div>
        </header>
        <!-- header off -->
</template>

<script lang="ts">
/* eslint-disable */
import { Component, Vue } from "vue-property-decorator";
import HeaderMenu from "@/components/HeaderMenu.vue"; // @ is an alias to /src
import MainLogo from "@/components/MainLogo.vue";

@Component({
  components: {
    HeaderMenu,
    MainLogo
  },
  data() {
    return {
      /**
       * Scope for microService flexibility : Currently using JSON only
       */
      headerLogo: {
        logoClass: "header-logo",
        href: "/",
        title: "Greenchoice",
        imgSrc: "https://www.greenchoice.nl/images/logo.png"
      },
      headerNav:  this.$parent.$data.sharedState.menus
    };
  }
})
export default class Home extends Vue {}
</script>
