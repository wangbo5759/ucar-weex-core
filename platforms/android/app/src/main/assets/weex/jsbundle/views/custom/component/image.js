// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 206);
/******/ })
/************************************************************************/
/******/ ({

/***/ 139:
/***/ (function(module, exports) {

module.exports = {
  "container": {
    "flex": 1
  },
  "img-wraper": {
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "img-item": {
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "img": {
    "width": 300,
    "height": 250
  }
}

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(19)
)

/* script */
__vue_exports__ = __webpack_require__(16)

/* template */
var __vue_template__ = __webpack_require__(21)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/dzc/que/ucar/ucar-weex/src/include/navbar.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-6529303a"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(18)
)

/* script */
__vue_exports__ = __webpack_require__(17)

/* template */
var __vue_template__ = __webpack_require__(20)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/dzc/que/ucar/ucar-weex/src/include/navpage.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-43235710"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

module.exports = {
  props: {
    dataRole: { default: 'navbar' },
    //导航条背景色
    backgroundColor: { default: 'black' },
    //导航条高度
    height: { default: 88 },
    //导航条标题
    title: { default: '' },
    //导航条标题颜色
    titleColor: { default: 'black' },
    //title紧邻的图片
    centerTitleImageSrc: { default: '' },
    //右侧按钮图片
    rightItemSrc: { default: '' },
    //右侧第二个按钮图片
    rightItemSiblingSrc: { default: '' },
    //右侧按钮标题
    rightItemTitle: { default: '' },
    //右侧按钮标题颜色
    rightItemColor: { default: 'black' },
    //左侧按钮图片
    leftItemSrc: { default: '' },
    //左侧第二个按钮图片
    leftItemSiblingSrc: { default: '' },
    //左侧按钮标题
    leftItemTitle: { default: '' },
    //左侧按钮颜色
    leftItemColor: { default: 'black' }
  },
  methods: {
    onclickrightitem: function onclickrightitem(e) {
      this.$emit('naviBarRightItemClick');
    },
    onclickleftitem: function onclickleftitem(e) {
      this.$emit('naviBarLeftItemClick');
    },
    onclickrightsiblingitem: function onclickrightsiblingitem(e) {
      this.$emit('naviBarRightSiblingItemClick');
    },
    onclickleftsiblingitem: function onclickleftsiblingitem(e) {
      this.$emit('naviBarLeftSiblingItemClick');
    },
    onClickCenterTitleImage: function onClickCenterTitleImage(e) {
      this.$emit('onClickCenterTitleImage');
    }
  },
  events: {
    naviBarLeftItemClick: function naviBarLeftItemClick(e) {
      //navigator.pop(()=>{})
      console.log('pop');
    }
  }
};

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var config = __webpack_require__(8);

module.exports = {
  components: {
    navbar: __webpack_require__(14)
  },

  props: {
    dataRole: { default: 'none' },
    backgroundColor: { default: "#385198" },
    height: { default: weex.config.env.platform == 'android' ? 100 : 128 },
    title: { default: "" },
    titleColor: { default: "#ffffff" },
    rightItemSrc: { default: '' },
    rightItemTitle: { default: '' },
    rightItemColor: { default: "#ffffff" },
    rightItemSiblingSrc: { default: '' },
    leftItemSrc: { default: config.image('icon_arrow_back.png') },
    leftItemTitle: { default: '' },
    leftItemColor: { default: "#ffffff" },
    leftItemSiblingSrc: { default: '' },
    centerTitleImageSrc: { default: '' }
  },
  methods: {
    naviBarRightItemClick: function naviBarRightItemClick(e) {
      this.$emit('naviBarRightItemClick', e);
    },
    naviBarRightSiblingItemClick: function naviBarRightSiblingItemClick(e) {
      this.$emit('naviBarRightSiblingItemClick', e);
    },
    naviBarLeftItemClick: function naviBarLeftItemClick(e) {
      this.$emit('naviBarLeftItemClick', e);
    },
    naviBarLeftSiblingItemClick: function naviBarLeftSiblingItemClick(e) {
      this.$emit('naviBarLeftSiblingItemClick', e);
    },
    onClickCenterTitleImage: function onClickCenterTitleImage(e) {
      this.$emit('onClickCenterTitleImage', e);
    }
  }
};

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "top": 0,
    "left": 0,
    "right": 0,
    "bottom": 0,
    "width": 750
  }
}

/***/ }),

/***/ 19:
/***/ (function(module, exports) {

module.exports = {
  "container": {
    "flexDirection": "row",
    "position": "fixed",
    "top": 0,
    "left": 0,
    "right": 0,
    "width": 750
  },
  "right-text-outer": {
    "position": "absolute",
    "bottom": 0,
    "right": 0,
    "minWidth": 88,
    "minHeight": 88,
    "flexDirection": "row",
    "justifyContent": "flex-end",
    "alignItems": "center"
  },
  "right-text": {
    "lineHeight": 88,
    "fontSize": 32,
    "marginRight": 20
  },
  "left-text": {
    "position": "absolute",
    "bottom": 5,
    "left": 10,
    "minWidth": 80,
    "lineHeight": 80,
    "textAlign": "center",
    "fontSize": 32,
    "marginLeft": 50
  },
  "center-title": {
    "position": "absolute",
    "bottom": 25,
    "left": 172,
    "right": 172,
    "display": "flex",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "center-text": {
    "textAlign": "center",
    "fontSize": 36,
    "fontWeight": "bold"
  },
  "center-title-image": {
    "width": 50,
    "height": 50,
    "marginLeft": 10
  },
  "left-image": {
    "position": "absolute",
    "bottom": 20,
    "left": 28,
    "width": 50,
    "height": 50
  },
  "right-image-outer": {
    "position": "absolute",
    "bottom": 0,
    "right": 0,
    "height": 88,
    "minWidth": 88,
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "right-image": {
    "width": 50,
    "height": 50
  },
  "right-image-sibling": {
    "position": "absolute",
    "bottom": 20,
    "right": 100,
    "width": 50,
    "height": 50
  },
  "left-image-sibling": {
    "position": "absolute",
    "bottom": 20,
    "left": 100,
    "width": 50,
    "height": 50
  }
}

/***/ }),

/***/ 20:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('navbar', {
    attrs: {
      "dataRole": _vm.dataRole,
      "height": _vm.height,
      "backgroundColor": _vm.backgroundColor,
      "title": _vm.title,
      "titleColor": _vm.titleColor,
      "leftItemSrc": _vm.leftItemSrc,
      "leftItemTitle": _vm.leftItemTitle,
      "leftItemColor": _vm.leftItemColor,
      "leftItemSiblingSrc": _vm.leftItemSiblingSrc,
      "rightItemSrc": _vm.rightItemSrc,
      "rightItemTitle": _vm.rightItemTitle,
      "rightItemColor": _vm.rightItemColor,
      "rightItemSiblingSrc": _vm.rightItemSiblingSrc,
      "centerTitleImageSrc": _vm.centerTitleImageSrc
    },
    on: {
      "naviBarRightItemClick": _vm.naviBarRightItemClick,
      "naviBarRightSiblingItemClick": _vm.naviBarRightSiblingItemClick,
      "naviBarLeftItemClick": _vm.naviBarLeftItemClick,
      "naviBarLeftSiblingItemClick": _vm.naviBarLeftSiblingItemClick,
      "onClickCenterTitleImage": _vm.onClickCenterTitleImage
    }
  }), _c('div', {
    staticClass: ["wrapper"],
    style: {
      marginTop: _vm.height
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 200:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["container"],
    on: {
      "onAndroidBack": _vm.onAndroidBack
    }
  }, [_c('navpage', {
    attrs: {
      "backgroundColor": "#3e50b5",
      "title": "Image"
    },
    on: {
      "naviBarLeftItemClick": _vm.naviBarLeftItemClick
    }
  }), _c('div', {
    staticClass: ["img-wraper"]
  }, _vm._l((_vm.imgArr), function(item, index) {
    return _c('div', {
      staticClass: ["img-item"]
    }, [_c('image', {
      staticClass: ["img"],
      attrs: {
        "src": item
      }
    })])
  })), _c('image', {
    staticStyle: {
      width: "560px",
      height: "200px"
    },
    attrs: {
      "src": "assets:///image/test.jpg",
      "placeholder": "assets:///image/1test.jpg"
    }
  }), _c('image', {
    staticStyle: {
      width: "560px",
      height: "200px"
    },
    attrs: {
      "src": "assets:///image/test.jpg",
      "placeholder": "file:///sdcard../../1test.jpg"
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(139)
)

/* script */
__vue_exports__ = __webpack_require__(41)

/* template */
var __vue_template__ = __webpack_require__(200)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/dzc/que/ucar/ucar-weex/src/views/custom/component/image.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-d6a561e2"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__
module.exports.el = 'true'
new Vue(module.exports)


/***/ }),

/***/ 21:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["container"],
    style: {
      height: _vm.height,
      backgroundColor: _vm.backgroundColor
    },
    attrs: {
      "dataRole": _vm.dataRole
    }
  }, [(_vm.rightItemTitle) ? _c('div', {
    staticClass: ["right-text-outer"],
    on: {
      "click": _vm.onclickrightitem
    }
  }, [_c('text', {
    staticClass: ["right-text"],
    style: {
      color: _vm.rightItemColor
    },
    attrs: {
      "naviItemPosition": "right"
    }
  }, [_vm._v(_vm._s(_vm.rightItemTitle))])]) : _vm._e(), (_vm.rightItemSrc) ? _c('div', {
    staticClass: ["right-image-outer"],
    on: {
      "click": _vm.onclickrightitem
    }
  }, [_c('image', {
    staticClass: ["right-image"],
    attrs: {
      "naviItemPosition": "right",
      "src": _vm.rightItemSrc
    }
  })]) : _vm._e(), (_vm.rightItemSiblingSrc) ? _c('image', {
    staticClass: ["right-image-sibling"],
    attrs: {
      "naviItemPosition": "right",
      "src": _vm.rightItemSiblingSrc
    },
    on: {
      "click": _vm.onclickrightsiblingitem
    }
  }) : _vm._e(), (_vm.leftItemTitle) ? _c('text', {
    staticClass: ["left-text"],
    style: {
      color: _vm.leftItemColor
    },
    attrs: {
      "naviItemPosition": "left"
    },
    on: {
      "click": _vm.onclickleftitem
    }
  }, [_vm._v(_vm._s(_vm.leftItemTitle))]) : _vm._e(), (_vm.leftItemSrc) ? _c('image', {
    staticClass: ["left-image"],
    attrs: {
      "naviItemPosition": "left",
      "src": _vm.leftItemSrc
    },
    on: {
      "click": _vm.onclickleftitem
    }
  }) : _vm._e(), (_vm.leftItemSiblingSrc) ? _c('image', {
    staticClass: ["left-image-sibling"],
    attrs: {
      "naviItemPosition": "left",
      "src": _vm.leftItemSiblingSrc
    },
    on: {
      "click": _vm.onclickleftsiblingitem
    }
  }) : _vm._e(), _c('div', {
    staticClass: ["center-title"]
  }, [_c('text', {
    staticClass: ["center-text"],
    style: {
      color: _vm.titleColor
    },
    attrs: {
      "naviItemPosition": "center"
    }
  }, [_vm._v(_vm._s(_vm.title))]), (_vm.centerTitleImageSrc) ? _c('image', {
    staticClass: ["center-title-image"],
    attrs: {
      "naviItemPosition": "center",
      "src": _vm.centerTitleImageSrc
    },
    on: {
      "click": _vm.onClickCenterTitleImage
    }
  }) : _vm._e()])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(8);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    navpage: __webpack_require__(15)
  },
  data: function data() {
    return {
      imgArr: []
    };
  },

  computed: {},
  created: function created() {
    console.log("image.vue created");
    this.imgArr = ['https://img.alicdn.com/tps/TB1z.55OFXXXXcLXXXXXXXXXXXX-560-560.jpg', _index2.default.image('test.jpg')];
  },

  methods: {
    naviBarLeftItemClick: function naviBarLeftItemClick(e) {
      console.log(e);
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.image = image;
function js(jsURL) {
    var bundleUrl = weex.config.bundleUrl;
    var baseURL = bundleUrl.substring(0, bundleUrl.lastIndexOf("/"));
    //是否在同级目录，若不在，则需要以下处理
    var flag = jsURL.indexOf('../') !== -1;
    if (flag) {
        var arr = jsURL.split('../');
        for (var index = 0; index < arr.length - 1; index++) {
            baseURL = baseURL.substring(0, baseURL.lastIndexOf('/'));
        }
        jsURL = arr[arr.length - 1];
    }
    return baseURL + '/' + jsURL;
}

function params(key) {
    var bundleUrl = weex.config.bundleUrl;
    var reg = new RegExp('[?|&]' + key + '=([^&]+)');
    var match = bundleUrl.match(reg);
    return match && match[1];
}

function getUrlParam() {
    var paramsJson = params('params');
    if (paramsJson) {
        return JSON.parse(paramsJson);
    }
    return '';
}
function toParams(obj) {
    var param = "";
    for (var name in obj) {
        if (typeof obj[name] != 'function') {
            param += "&" + name + "=" + encodeURI(obj[name]);
        }
    }
    return param.substring(1);
}

/**
 *
 * */
function image(imgURL) {
    // if (weex.config.env.platform == 'android') {
    //     return "assets:///image/" + imgURL;
    // } else {
    //     return "assets:///image/" + imgURL
    // }
    return "assets:///image/" + imgURL;
}

exports.default = {
    js: js,
    image: image,
    params: params,
    toParams: toParams,
    getUrlParam: getUrlParam
};

/***/ })

/******/ });