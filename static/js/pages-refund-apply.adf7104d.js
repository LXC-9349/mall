(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-refund-apply"],{"2a31":function(e,t,a){"use strict";a.r(t);var i=a("f34f"),r=a.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(o);t["default"]=r.a},"2e6c":function(e,t,a){"use strict";a("6a54");var i=a("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.sendBack=t.list=t.goods=t.detail=t.apply=void 0;var r=i(a("9b1b")),o=i(a("48f3")),n={list:"work_mall/mall/order/after_sales/list",goods:"refund/goods",apply:"work_mall/mall/order/after_sales",detail:"work_mall/mall/order/after_sales/detail/",sendBack:"work_mall/mall/order/after_sales/sendBack"};t.list=function(e){return o.default.post(n.list,e)};t.goods=function(e,t){return o.default.get(n.goods,(0,r.default)({orderGoodsId:e},t))};t.apply=function(e){return o.default.post(n.apply,e)};t.detail=function(e){return o.default.get(n.detail+e)};t.sendBack=function(e){return o.default.post(n.sendBack,e)}},"51fc":function(e,t,a){var i=a("c86c");t=i(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 引入uView全局scss变量文件 */.container[data-v-839772d2]{padding-bottom:calc(constant(safe-area-inset-bottom) + %?140?%);padding-bottom:calc(env(safe-area-inset-bottom) + %?140?%)}.row-title[data-v-839772d2]{color:#888;margin-bottom:%?20?%}.goods-detail[data-v-839772d2]{padding:%?24?% %?20?%}.goods-detail .left .goods-image[data-v-839772d2]{display:block;width:%?150?%;height:%?150?%}.goods-detail .right[data-v-839772d2]{padding-left:%?20?%}.goods-detail .goods-props[data-v-839772d2]{margin-top:%?14?%;height:%?40?%;color:#ababab;font-size:%?24?%;overflow:hidden}.goods-detail .goods-props .goods-props-item[data-v-839772d2]{display:inline-block;margin-right:%?14?%;padding:%?4?% %?16?%;border-radius:%?12?%;background-color:#f5f5f5;width:auto}\r\n/* 服务类型 */.row-service[data-v-839772d2]{padding:%?24?% %?20?%}.service-switch .switch-item[data-v-839772d2]{padding:%?6?% %?30?%;margin-right:%?25?%;border-radius:%?10?%;border:1px solid #b1b1b1;color:#888}.service-switch .switch-item.active[data-v-839772d2]{color:#fc1e56;border:1px solid #fc1e56}\r\n/* 申请原因 */.row-textarea[data-v-839772d2]{padding:%?24?% %?20?%}.row-textarea .textarea[data-v-839772d2]{width:100%;height:%?220?%;padding:%?12?%;border:%?1?% solid #e8e8e8;border-radius:%?5?%;box-sizing:border-box;font-size:%?26?%}\r\n/* 退款金额 */.row-money[data-v-839772d2]{padding:%?24?% %?20?%}.row-money .row-title[data-v-839772d2]{margin-bottom:0;margin-right:%?30?%}.row-voucher[data-v-839772d2]{padding:%?24?% %?20?%}.row-voucher .image-list[data-v-839772d2]{padding:0 %?20?%;margin-top:%?20?%;margin-bottom:%?-20?%}.row-voucher .image-list[data-v-839772d2]:after{clear:both;content:" ";display:table}.row-voucher .image-list .image[data-v-839772d2]{display:block;width:100%;height:100%}.row-voucher .image-list .image-picker[data-v-839772d2],\r\n.row-voucher .image-list .image-preview[data-v-839772d2]{width:%?184?%;height:%?184?%;margin-right:%?30?%;margin-bottom:%?30?%;float:left}.row-voucher .image-list .image-picker[data-v-839772d2]:nth-child(3n+0),\r\n.row-voucher .image-list .image-preview[data-v-839772d2]:nth-child(3n+0){margin-right:0}.row-voucher .image-list .image-picker[data-v-839772d2]{display:flex;flex-direction:column;justify-content:center;align-items:center;border:%?1?% dashed #ccc;color:#ccc}.row-voucher .image-list .image-picker .choose-icon[data-v-839772d2]{font-size:%?48?%;margin-bottom:%?6?%}.row-voucher .image-list .image-picker .choose-text[data-v-839772d2]{font-size:%?24?%}.row-voucher .image-list .image-preview[data-v-839772d2]{position:relative}.row-voucher .image-list .image-preview .image-delete[data-v-839772d2]{position:absolute;top:%?-15?%;right:%?-15?%;height:%?42?%;width:%?42?%;line-height:%?42?%;background:rgba(0,0,0,.64);border-radius:50%;color:#f5f9f6;font-weight:bolder;font-size:%?22?%;z-index:10;text-align:center}.footer-fixed[data-v-839772d2]{position:fixed;bottom:var(--window-bottom);left:0;right:0;z-index:11;box-shadow:0 %?-4?% %?40?% 0 hsla(0,0%,59.2%,.24);background:#fff;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.footer-fixed .btn-wrapper[data-v-839772d2]{height:%?120?%;display:flex;align-items:center;padding:0 %?20?%}.footer-fixed .btn-item[data-v-839772d2]{flex:1;font-size:%?28?%;height:%?80?%;line-height:%?80?%;text-align:center;color:#f5f9f6;border-radius:%?50?%}.footer-fixed .btn-item-main[data-v-839772d2]{background:linear-gradient(90deg,#f9211c,#ff6335)}.footer-fixed .btn-item-main.disabled[data-v-839772d2]{background:#ff9779}',""]),e.exports=t},"6ccf":function(e,t,a){"use strict";a("6a54");var i=a("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(a("7bf7")),o=new r.default([{key:"WAIT",name:"待审核",value:0},{key:"REVIEWED",name:"已同意",value:10},{key:"REJECTED",name:"已拒绝",value:20}]);t.default=o},"70a8":function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){}));var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.isLoading?e._e():a("v-uni-view",{staticClass:"container"},[a("v-uni-view",{staticClass:"goods-detail b-f dis-flex flex-dir-row"},[a("v-uni-view",{staticClass:"left"},[a("v-uni-image",{staticClass:"goods-image",attrs:{src:e.$filePath(e.order.item.goodsCoverImg)}})],1),a("v-uni-view",{staticClass:"right dis-flex flex-box flex-dir-column flex-x-around"},[a("v-uni-view",{staticClass:"goods-name"},[a("v-uni-text",{staticClass:"twoline-hide"},[e._v(e._s(e.order.item.goodsName))])],1),a("v-uni-view",{staticClass:"dis-flex col-9 f-24"},[a("v-uni-view",{staticClass:"flex-box"},[a("v-uni-view",{staticClass:"goods-props clearfix"},e._l(e.order.item.specList,(function(t,i){return a("v-uni-view",{key:i,staticClass:"goods-props-item"},[a("v-uni-text",{staticClass:"group-name"},[e._v(e._s(t.name)+":")]),a("v-uni-text",[e._v(e._s(t.list.at(0).name)+"；")])],1)})),1)],1),a("v-uni-text",{staticClass:"t-r"},[e._v("×"+e._s(e.order.item.goodsCount))])],1)],1)],1),a("v-uni-view",{staticClass:"row-service b-f m-top20"},[a("v-uni-view",{staticClass:"row-title"},[e._v("服务类型")]),a("v-uni-view",{staticClass:"service-switch dis-flex"},e._l(e.RefundTypeEnum.data,(function(t,i){return a("v-uni-view",{key:i,staticClass:"switch-item",class:{active:e.formData.type==t.value},on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.onSwitchService(t.value)}}},[e._v(e._s(t.name))])})),1)],1),a("v-uni-view",{staticClass:"row-textarea b-f m-top20"},[a("v-uni-view",{staticClass:"row-title"},[e._v("申请原因")]),a("v-uni-view",{staticClass:"content"},[a("v-uni-textarea",{staticClass:"textarea",attrs:{maxlength:"2000",placeholder:"请详细填写申请原因，注意保持商品的完好，建议您先与卖家沟通",placeholderStyle:"color:#ccc"},model:{value:e.formData.reason,callback:function(t){e.$set(e.formData,"reason",t)},expression:"formData.reason"}})],1)],1),e.formData.type==e.RefundTypeEnum.THK.value||e.formData.type==e.RefundTypeEnum.TK.value?a("v-uni-view",{staticClass:"row-money b-f m-top20 dis-flex"},[a("v-uni-view",{staticClass:"row-title"},[e._v("退款金额")]),a("v-uni-view",{staticClass:"form-item"},[a("v-uni-input",{staticClass:"form-item--input",attrs:{type:"number",disabled:!0,placeholderStyle:"color:#ccc"},model:{value:e.formData.refundMoney,callback:function(t){e.$set(e.formData,"refundMoney",t)},expression:"formData.refundMoney"}})],1)],1):e._e(),a("v-uni-view",{staticClass:"row-voucher b-f m-top20"},[a("v-uni-view",{staticClass:"row-title"},[e._v("上传凭证 (最多6张)")]),a("v-uni-view",{staticClass:"image-list"},[e._l(e.proofList,(function(t,i){return a("v-uni-view",{key:i,staticClass:"image-preview"},[a("v-uni-text",{staticClass:"image-delete iconfont icon-shanchu",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.deleteImage(i)}}}),a("v-uni-image",{staticClass:"image",attrs:{mode:"aspectFill",src:t.path}})],1)})),e.proofList.length<e.maxImageLength?a("v-uni-view",{staticClass:"image-picker",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.chooseImage()}}},[a("v-uni-text",{staticClass:"choose-icon iconfont icon-camera"}),a("v-uni-text",{staticClass:"choose-text"},[e._v("上传图片")])],1):e._e()],2)],1),a("v-uni-view",{staticClass:"footer-fixed"},[a("v-uni-view",{staticClass:"btn-wrapper"},[a("v-uni-view",{staticClass:"btn-item btn-item-main",class:{disabled:e.disabled},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleSubmit()}}},[e._v("确认提交")])],1)],1)],1)},r=[]},"7bf7":function(e,t,a){"use strict";a("6a54");var i=a("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("7a76"),a("c9b5"),a("fd3c"),a("aa9c"),a("5ef2");var r=i(a("80b1")),o=i(a("efe5")),n=function(){function e(t){var a=this;(0,r.default)(this,e);var i=[],o=[];if(!Array.isArray(t))throw new Error("param is not an array!");t.map((function(e){e.key&&e.name&&(i.push(e.key),o.push(e.value),a[e.key]=e,e.key!==e.value&&(a[e.value]=e))})),this.data=t,this.keyArr=i,this.valueArr=o}return(0,o.default)(e,[{key:"keyOf",value:function(e){return this.data[this.keyArr.indexOf(e)]}},{key:"valueOf",value:function(e){return this.data[this.valueArr.indexOf(e)]}},{key:"getNameByKey",value:function(e){var t=this.keyOf(e);if(!t)throw new Error("No enum constant"+e);return t.name}},{key:"getNameByValue",value:function(e){var t=this.valueOf(e);if(!t)throw new Error("No enum constant"+e);return t.name}},{key:"getValueByKey",value:function(e){var t=this.keyOf(e);if(!t)throw new Error("No enum constant"+e);return t.key}},{key:"getData",value:function(){return this.data}}]),e}(),s=n;t.default=s},"7f1b":function(e,t,a){"use strict";a("6a54");var i=a("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AuditStatusEnum",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"RefundStatusEnum",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"RefundTypeEnum",{enumerable:!0,get:function(){return n.default}});var r=i(a("6ccf")),o=i(a("918a")),n=i(a("c037"))},"849c":function(e,t,a){"use strict";a("6a54");var i=a("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.image=function(e,t){return n(e,t,"profile","gb")},t.uploadFile=n;var r=i(a("48f3")),o=a("4df0");function n(e,t,a,i){var n={};return n.file=e,(0,o.isEmpty)(a)||(n.bucket=a),(0,o.isEmpty)(t)||(n.fileName=t),(0,o.isEmpty)(i)||(n.oss=i),r.default.upload_file("/work_file/file/upload",n)}},"8ecc":function(e,t,a){"use strict";a("6a54");var i=a("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.api=void 0,t.cancel=function(e){if(!Array.isArray(e))return o.default.post(n.cancel,{ids:[e]});return o.default.post(n.cancel,{ids:e})},t.comment=function(e){return o.default.post(n.comment,e)},t.del=function(e){if(!Array.isArray(e))return o.default.post(n.del,{ids:[e]});return o.default.post(n.del,{ids:e})},t.detail=function(e){return o.default.get(n.detail,{itemId:e})},t.express=function(e,t){return o.default.get(n.express,(0,r.default)({orderId:e},t))},t.list=function(e){return o.default.post(n.list,e)},t.receipt=function(e){if(!Array.isArray(e))return o.default.post(n.receipt,{ids:[e]});return o.default.post(n.receipt,{ids:e})},t.todoCounts=function(){return o.default.get(n.todoCounts)};var r=i(a("9b1b")),o=i(a("48f3")),n={todoCounts:"work_mall/mall/order/order_count",list:"work_mall/mall/order/find",detail:"work_mall/mall/order/detail",express:"order/express",cancel:"work_mall/mall/order/cancel",receipt:"work_mall/mall/order/receipt",pay:"work_mall/mall/order/pay",pay_status:"work_mall/mall/order/pay/",del:"work_mall/mall/order/del",comment:"work_mall/mall/order/comment"};t.api=n},"918a":function(e,t,a){"use strict";a("6a54");var i=a("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(a("7bf7")),o=new r.default([{key:"NORMAL",name:"进行中",value:0},{key:"REJECTED",name:"已拒绝",value:10},{key:"COMPLETED",name:"已完成",value:20},{key:"CANCELLED",name:"已取消",value:30}]);t.default=o},b2ae:function(e,t,a){var i=a("51fc");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var r=a("967d").default;r("0fdf98b0",i,!0,{sourceMap:!1,shadowMode:!1})},c037:function(e,t,a){"use strict";a("6a54");var i=a("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(a("7bf7")),o=new r.default([{key:"TH",name:"退换",value:0},{key:"THK",name:"退货退款",value:1},{key:"TK",name:"仅退款",value:2},{key:"BF",name:"补发",value:3}]);t.default=o},c61b:function(e,t,a){"use strict";a.r(t);var i=a("70a8"),r=a("2a31");for(var o in r)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return r[e]}))}(o);a("f923");var n=a("828b"),s=Object(n["a"])(r["default"],i["b"],i["c"],!1,null,"839772d2",null,!1,i["a"],void 0);t["default"]=s.exports},f34f:function(e,t,a){"use strict";(function(e){a("6a54");var i=a("3639").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("c223"),a("dd2b"),a("fd3c"),a("bf0f"),a("18f7"),a("de6c"),a("aa9c");var r=a("7f1b"),o=i(a("849c")),n=i(a("2e6c")),s=i(a("8ecc")),d={data:function(){return{RefundTypeEnum:r.RefundTypeEnum,isLoading:!0,itemId:null,goods:{},formData:{proofList:[],type:0,reason:"",refundMoney:0},proofList:[],maxImageLength:6,disabled:!1}},onLoad:function(e){var t=e.itemId;this.itemId=t,this.getGoodsDetail()},methods:{getGoodsDetail:function(){var e=this;e.isLoading=!0,s.detail(e.orderId).then((function(t){e.order=t.data,e.statusDict=t.dict.order_status,e.oId=e.order.item.orderId,e.isLoading=!1,e.formData.itemIds=[e.order.item.id],e.formData.refundMoney=e.order.item.price/100}))},onSwitchService:function(e){this.formData.type=e},chooseImage:function(){var e=this,t=e.proofList;uni.chooseImage({count:6-t.length,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(a){var i=a.tempFiles;e.proofList=t.concat(i)}})},deleteImage:function(e){this.proofList.splice(e,1)},handleSubmit:function(){var t=this,a=t.proofList;if(!0===t.disabled)return!1;t.disabled=!0,a.length>0?t.uploadFile().then((function(){return t.onSubmit()})).catch((function(a){t.disabled=!1,0!==a.statusCode&&t.$toast(a.errMsg),e.log("err",a)})):t.onSubmit()},onSubmit:function(){var e=this;n.apply(e.formData).then((function(t){e.$toast("已提交至售后"),setTimeout((function(){e.disabled=!1,uni.navigateBack()}),1500)})).catch((function(t){return e.disabled=!1}))},uploadFile:function(){var e=this,t=(e.proofList,e.proofList.map((function(e){return e})));return new Promise((function(a,i){Promise.all(t.map((function(t,a){return new Promise((function(a,i){o.image(t,t.name).then((function(t){e.formData.proofList.push(t),a(t)})).catch(i)}))}))).then(a,i)}))}}};t.default=d}).call(this,a("ba7c")["default"])},f923:function(e,t,a){"use strict";var i=a("b2ae"),r=a.n(i);r.a}}]);