(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/gequxinxi/add-or-update"],{1852:function(e,n,t){"use strict";var i={"w-picker":function(){return Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(t.bind(null,"b8ba"))}},r=function(){var e=this,n=e.$createElement;e._self._c},u=[];t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return u})),t.d(n,"a",(function(){return i}))},"6faa":function(e,n,t){"use strict";(function(e){t("d332"),t("921b");i(t("66fd"));var n=i(t("dbad"));function i(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},9314:function(e,n,t){},c477:function(e,n,t){"use strict";t.r(n);var i=t("e543"),r=t.n(i);for(var u in i)"default"!==u&&function(e){t.d(n,e,(function(){return i[e]}))}(u);n["default"]=r.a},dbad:function(e,n,t){"use strict";t.r(n);var i=t("1852"),r=t("c477");for(var u in r)"default"!==u&&function(e){t.d(n,e,(function(){return r[e]}))}(u);t("eebb");var a,c=t("f0c5"),o=Object(c["a"])(r["default"],i["b"],i["c"],!1,null,"7dd2ac3d",null,!1,i["a"],a);n["default"]=o.exports},e543:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=r(t("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function u(e,n,t,i,r,u,a){try{var c=e[u](a),o=c.value}catch(s){return void t(s)}c.done?n(o):Promise.resolve(o).then(i,r)}function a(e){return function(){var n=this,t=arguments;return new Promise((function(i,r){var a=e.apply(n,t);function c(e){u(a,i,r,c,o,"next",e)}function o(e){u(a,i,r,c,o,"throw",e)}c(void 0)}))}}var c=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("b8ba"))}.bind(null,t)).catch(t.oe)},o={data:function(){return{ruleForm:{gequmingcheng:"",gequfenlei:"",zhuanjimingcheng:"",faxingfang:"",geshou:"",bofangshizhang:"",yinpin:"",geci:"",fengmian:"",clicktime:"",clicknum:""},gequfenleiOptions:[],gequfenleiIndex:0,user:{},ro:{gequmingcheng:!1,gequfenlei:!1,zhuanjimingcheng:!1,faxingfang:!1,geshou:!1,bofangshizhang:!1,yinpin:!1,geci:!1,fengmian:!1,clicktime:!1,clicknum:!1}}},components:{wPicker:c},computed:{},onLoad:function(){var n=a(i.default.mark((function n(t){var r,u,a,c;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.getStorageSync("nowTable"),n.next=3,this.$api.session(r);case 3:return u=n.sent,this.user=u.data,n.next=7,this.$api.option("gequfenlei","leixing",{});case 7:if(u=n.sent,this.gequfenleiOptions=u.data,this.ruleForm.userid=e.getStorageSync("userid"),t.refid&&(this.ruleForm.refid=t.refid,this.ruleForm.nickname=e.getStorageSync("nickname")),!t.id){n.next=17;break}return this.ruleForm.id=t.id,n.next=15,this.$api.info("gequxinxi",this.ruleForm.id);case 15:u=n.sent,this.ruleForm=u.data;case 17:if(!t.cross){n.next=68;break}a=e.getStorageSync("crossObj"),n.t0=i.default.keys(a);case 20:if((n.t1=n.t0()).done){n.next=68;break}if(c=n.t1.value,"gequmingcheng"!=c){n.next=26;break}return this.ruleForm.gequmingcheng=a[c],this.ro.gequmingcheng=!0,n.abrupt("continue",20);case 26:if("gequfenlei"!=c){n.next=30;break}return this.ruleForm.gequfenlei=a[c],this.ro.gequfenlei=!0,n.abrupt("continue",20);case 30:if("zhuanjimingcheng"!=c){n.next=34;break}return this.ruleForm.zhuanjimingcheng=a[c],this.ro.zhuanjimingcheng=!0,n.abrupt("continue",20);case 34:if("faxingfang"!=c){n.next=38;break}return this.ruleForm.faxingfang=a[c],this.ro.faxingfang=!0,n.abrupt("continue",20);case 38:if("geshou"!=c){n.next=42;break}return this.ruleForm.geshou=a[c],this.ro.geshou=!0,n.abrupt("continue",20);case 42:if("bofangshizhang"!=c){n.next=46;break}return this.ruleForm.bofangshizhang=a[c],this.ro.bofangshizhang=!0,n.abrupt("continue",20);case 46:if("yinpin"!=c){n.next=50;break}return this.ruleForm.yinpin=a[c],this.ro.yinpin=!0,n.abrupt("continue",20);case 50:if("geci"!=c){n.next=54;break}return this.ruleForm.geci=a[c],this.ro.geci=!0,n.abrupt("continue",20);case 54:if("fengmian"!=c){n.next=58;break}return this.ruleForm.fengmian=a[c],this.ro.fengmian=!0,n.abrupt("continue",20);case 58:if("clicktime"!=c){n.next=62;break}return this.ruleForm.clicktime=a[c],this.ro.clicktime=!0,n.abrupt("continue",20);case 62:if("clicknum"!=c){n.next=66;break}return this.ruleForm.clicknum=a[c],this.ro.clicknum=!0,n.abrupt("continue",20);case 66:n.next=20;break;case 68:this.styleChange();case 69:case"end":return n.stop()}}),n,this)})));function t(e){return n.apply(this,arguments)}return t}(),methods:{styleChange:function(){this.$nextTick((function(){}))},clicktimeConfirm:function(e){console.log(e),this.ruleForm.clicktime=e.result,this.$forceUpdate()},gequfenleiChange:function(e){this.gequfenleiIndex=e.target.value,this.ruleForm.gequfenlei=this.gequfenleiOptions[this.gequfenleiIndex]},yinpinTap:function(){var e=this;this.$api.uploadMedia((function(n){e.ruleForm.yinpin=e.$base.url+"upload/"+n.file,e.$forceUpdate()}))},fengmianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.fengmian=e.$base.url+"upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=a(i.default.mark((function e(){return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.gequmingcheng){e.next=3;break}return this.$utils.msg("歌曲名称不能为空"),e.abrupt("return");case 3:if(!this.ruleForm.clicknum||this.$validate.isIntNumer(this.ruleForm.clicknum)){e.next=6;break}return this.$utils.msg("点击次数应输入整数"),e.abrupt("return");case 6:if(!this.ruleForm.id){e.next=11;break}return e.next=9,this.$api.update("gequxinxi",this.ruleForm);case 9:e.next=13;break;case 11:return e.next=13,this.$api.add("gequxinxi",this.ruleForm);case 13:this.$utils.msgBack("提交成功");case 14:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,t=n.getFullYear(),i=n.getMonth()+1,r=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),i=i>9?i:"0"+i,r=r>9?r:"0"+r,"".concat(t,"-").concat(i,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};n.default=o}).call(this,t("543d")["default"])},eebb:function(e,n,t){"use strict";var i=t("9314"),r=t.n(i);r.a}},[["6faa","common/runtime","common/vendor"]]]);