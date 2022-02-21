import Vue from 'vue';
import { Button, Container, Main, Header, Aside, Row, Col, Menu, Submenu, MenuItem, Table, TableColumn, Input, Autocomplete, Popconfirm, Card, Divider, Message, Progress, Popover} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from '../router'
import http from 'axios'
Vue.prototype.$http = http
Vue.prototype.$Message = Message
Vue.use(Popover);
Vue.use(Divider);
Vue.use(Card);
Vue.use(Progress);
Vue.use(Popconfirm)
Vue.use(Button);
Vue.use(Container);
Vue.use(Main);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Row)
Vue.use(Col)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Input)
Vue.use(Autocomplete)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
