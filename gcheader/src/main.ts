import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
/* eslint-disable */
new Vue({
  router,
  store,
  data: {
    url: 'http://localhost:8180/api/menus',
    sharedState: store.state,
    validTypes: ["application/json", "vnd.api+json"],
  },
  methods: {

    getData: function (url: string) {
      console.log(url);
      return fetch(url)
        .then((response: any) => {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          let contentType = response.headers.get("content-type");
          let valid = false;
          if (contentType) {
            this.validTypes.forEach((type: any) => {
              if (contentType.includes(type)) {
                valid = true;
              }
            });
            if (valid) {
              return response.json();
            }
          }
          throw new TypeError(
            'Content returned from "' +
            url +
            '" is not valid json. \ncontentType: ' +
            contentType
          );
        })
        .catch((err: any) => {
          console.error(err);
        });
    }
  },
  mounted: function () {
    this.getData(this.url).then((menus: any) => {
      this.sharedState.menus = menus;
    });
  },
  render: h => h(App)
}).$mount('#app')
