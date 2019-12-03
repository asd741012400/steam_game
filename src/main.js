import 'babel-polyfill'
import Vue from "vue"
import App from "./App"
import router from "./router"
import store from "./store/index.js"
import Vuex from 'vuex'
import VueI18n from 'vue-i18n'
import LangJAPANESE from './lang/japanese'
import LangCHINESE from './lang/chinese'


//语言包
Vue.use(VueI18n);

let localeLang = "chinese"
if(window.navigator.language == 'ja') {
  localeLang = "japanese"
}
const i18n = new VueI18n({
  locale: localeLang,
  messages: {
    'japanese': LangJAPANESE,
    'chinese': LangCHINESE
  }
})

//公共js
import base from '@/utils/base'
Vue.prototype.$base = base

// 引入列表公共组件
import BaseList from '@/components/common/base-list.vue'

  //日期范围组件

import getPage from '@/assets/page.js'
Vue.prototype.$defalutPage = getPage

//全局过滤器
import { computedMapDict, filtersMapDict } from '@/assets/dict'
Vue.mixin({
  computed: {
    ...computedMapDict()
  },
  filters: {
    ...filtersMapDict()
  }
})



//element ui
import {
  Pagination,
  Dialog,
  Autocomplete,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Input,
  InputNumber,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Switch,
  Select,
  Option,
  OptionGroup,
  Link,
  Button,
  ButtonGroup,
  Table,
  TableColumn,
  DatePicker,
  TimeSelect,
  TimePicker,
  Popover,
  Tooltip,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormItem,
  Tabs,
  TabPane,
  Tag,
  Tree,
  Alert,
  Slider,
  Icon,
  Row,
  Col,
  Upload,
  Progress,
  Badge,
  Card,
  Rate,
  Steps,
  Step,
  Carousel,
  CarouselItem,
  Collapse,
  CollapseItem,
  Cascader,
  ColorPicker,
  Transfer,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Loading,
  MessageBox,
  Message,
  Notification,
  Calendar,
    Backtop,
} from 'element-ui';
Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.component(Form.name, Form);
Vue.component(FormItem.name, FormItem);
Vue.component(Input.name, Input);
Vue.component(Radio.name, Radio);
Vue.component(Switch.name, Switch);
Vue.component(Checkbox.name, Checkbox);
Vue.component(Message.name, Message);
Vue.component(Container.name, Container);
Vue.component(Aside.name, Aside);
Vue.component(Header.name, Header);
Vue.component(Main.name, Main);
Vue.component(Menu.name, Menu);
Vue.component(MenuItem.name, MenuItem);
Vue.component(MenuItemGroup.name, MenuItemGroup);
Vue.component(Submenu.name, Submenu);
Vue.component(Row.name, Row);
Vue.component(Col.name, Col);
Vue.component(Pagination.name, Pagination);
Vue.component(Table.name, Table);
Vue.component(TableColumn.name, TableColumn);
Vue.component(Dropdown.name, Dropdown);
Vue.component(DropdownItem.name, DropdownItem);
Vue.component(DropdownMenu.name, DropdownMenu);
Vue.component(Option.name, Option);
Vue.component(DatePicker.name, DatePicker);
Vue.component(Dialog.name, Dialog);
Vue.component(Radio.name, Radio);
Vue.component(Step.name, Step);
Vue.component(Steps.name, Steps);
Vue.component(Autocomplete.name, Autocomplete);
Vue.component(InputNumber.name, InputNumber);
Vue.component(Tag.name, Tag);
Vue.component(Card.name, Card);
Vue.component(CheckboxGroup.name, CheckboxGroup);
Vue.component(Upload.name, Upload);
Vue.component(Progress.name, Progress);
Vue.component(Tree.name, Tree)
Vue.component(Tabs.name, Tabs);
Vue.component(TabPane.name, TabPane);
Vue.component(Breadcrumb.name, Breadcrumb)
Vue.component(BreadcrumbItem.name, BreadcrumbItem)
Vue.component(Calendar.name, Calendar)
Vue.component(ButtonGroup.name, ButtonGroup)
Vue.component(Alert.name, Alert)
Vue.component(Badge.name, Badge)
Vue.component(RadioGroup.name, RadioGroup)
Vue.component(RadioButton.name, RadioButton)
Vue.component(CheckboxButton.name, CheckboxButton)
Vue.component(Link.name, Link)
Vue.component(Tooltip.name, Tooltip)
Vue.component(BaseList.name, BaseList);
Vue.component(Backtop.name, Backtop);

import 'element-ui/lib/theme-chalk/index.css'


import '@/assets/css/common.css'
import '@/assets/css/index.scss'

// import '@/assets/css/element-variables.scss'


Vue.use(Vuex)
Vue.config.productionTip = false
Vue.use(Loading.directive);
//设置elm组件为small
Vue.prototype.$ELEMENT = { size: 'small' };
//全局消息框
Vue.prototype.$message = Message;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$maxLength = 256;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
