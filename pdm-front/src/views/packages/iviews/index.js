import Vue from 'vue'
//ivews 按需引入
import clickoutside from 'iview/src/directives/clickoutside' // 自定义指令
import 'iview/dist/styles/iview.css' // 样式
import {
    Alert,
    AutoComplete,
    Avatar,
    Badge,
    Button,
    Card,
    Carousel,
    Cascader,
    Checkbox,
    Collapse,
    ColorPicker,
    DatePicker,
    Dropdown,
    Form,
    Icon,
    Input,
    InputNumber,
    Menu,
    Message,
    Modal,
    Notice,
    Page,
    Poptip,
    Progress,
    Radio,
    Rate,
    Slider,
    Spin,
    Steps,
    Table,
    Tabs,
    Tag,
    Timeline,
    TimePicker,
    Tooltip,
    Transfer,
    Tree,
    Upload
  } from 'iview'

import { Row, Col } from 'iview/src/components/grid'
import { Select, Option, OptionGroup } from 'iview/src/components/select'

const components = {
    Alert,
    AutoComplete,
    Avatar,
    Badge,
    Button,
    ButtonGroup: Button.Group,
    Card,
    Carousel,
    CarouselItem: Carousel.Item,
    Cascader,
    Checkbox,
    CheckboxGroup: Checkbox.Group,
    Col,
    Collapse,
    ColorPicker,
    DatePicker,
    Dropdown,
    DropdownItem: Dropdown.Item,
    DropdownMenu: Dropdown.Menu,
    Form,
    FormItem: Form.Item,
    Icon,
    Input,
    InputNumber,
    Menu,
    MenuGroup: Menu.Group,
    MenuItem: Menu.Item,
    Submenu: Menu.Sub,
    Message,
    Modal,
    Notice,
    Option,
    OptionGroup,
    Page,
    Panel: Collapse.Panel,
    Poptip,
    Progress,
    Radio,
    RadioGroup: Radio.Group,
    Rate,
    Row,
    Select,
    Slider,
    Spin,
    Step: Steps.Step,
    Steps,
    Table,
    Tabs,
    TabPane: Tabs.Pane,
    Tag,
    Timeline,
    TimelineItem: Timeline.Item,
    TimePicker,
    Tooltip,
    Transfer,
    Tree,
    Upload
  }
// Object.keys 遍历对象属性 返回字符串数组
// forEach 遍历数组  
Object.keys(components).forEach(key => {
   // 生产环境
    if (process.env.NODE !== 'production') {
      //console.log(typeof components) 
    } 
    // 注册组件 components[key]返回属性key值
    Vue.component('i' + key, components[key])
  })

Vue.prototype.$Message = Message
Vue.prototype.$Notice = Notice
Vue.prototype.$Spin = Spin

// 自定义指令
Vue.directive('clickoutside',clickoutside)