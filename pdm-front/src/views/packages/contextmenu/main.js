import Vue from 'vue';
import store from '@/store'
import Main from './main.vue';
import { PopupManager } from 'element-ui/src/utils/popup';
//import { isVNode } from 'element-ui/src/utils/vdom';

//let ContextMenuConstructor = Vue.extend(require('./main.vue').default); // 子类
let ContextMenuConstructor = Vue.extend(Main) // 子类

let instance; // 实例
let instances = []; // 实例栈 控制关闭
let seed = 1; // id

const ContextMenu = function(options) {
  
  if (Vue.prototype.$isServer) return; // 服务端渲染
  
  options = options || {};
  if (typeof options == 'object') {
    options = {
      position: options // 传值
    };
  }
  

  let id = 'contextmenu_' + seed++; // id
//   let userOnClose = options.onClose;
//   options.onClose = function() { //关闭时的回调函数
//     ContextMenu.close(id, userOnClose);
//   };
  
  instance = new ContextMenuConstructor({ data: options,store }); // 实例
  
  instance.id = id;

  // if (isVNode(instance.position)) { // 允许写render函数控制message的内容
  //   instance.$slots.default = [instance.position];
  //   instance.position = null;
  // }

  instance.vm = instance.$mount(); // 挂载

  document.body.appendChild(instance.vm.$el); // 插入dom

  instance.vm.visible = true; // 可见 v-show="visible"
  instance.dom = instance.vm.$el; // el代理
  
  instance.dom.style.zIndex = PopupManager.nextZIndex(); // 设置 z-index属性
  //instances.push(instance);
  //console.log(instance)
  return instance.vm; // 返回实例
};

/* ['success', 'warning', 'info', 'error'].forEach(type => {
  ContextMenu[type] = options => {
    if (typeof options === 'string') {
      options = {
        message: options
      };
    }
    options.type = type;
    return ContextMenu(options);
  };
}); */

/* ContextMenu.close = function(id, userOnClose) {
  for (let i = 0, len = instances.length; i < len; i++) {
    if (id === instances[i].id) {
      if (typeof userOnClose === 'function') {
        userOnClose(instances[i]);
      }
      instances.splice(i, 1);
      break;
    }
  }
}; */

/* ContextMenu.closeAll = function() {
  for (let i = instances.length - 1; i >= 0; i--) {
    instances[i].close();
  }
}; */

export default ContextMenu;

