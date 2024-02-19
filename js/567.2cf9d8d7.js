"use strict";(self["webpackChunkhorario"]=self["webpackChunkhorario"]||[]).push([[567],{9905:function(e,t,i){i.r(t),i.d(t,{default:function(){return I}});var r=i(7179),s=i(3058),a=i(5223),n=i(4437),l=i(6035),o=i(9531),d=i(5452),u=i(6904),c=i(5057),f=i(5294),h=i(5234),m=i(5251),g=i(1002),p=i(2370),v=function(){var e=this,t=e._self._c;return t("div",[t(s.Z,{staticClass:"mx-auto mt-5",attrs:{"max-width":"1000px"}},[t(o.Z,{attrs:{headers:e.headers,items:e.items,"hide-default-footer":!0,"disable-pagination":"","disable-filtering":"","disable-sort":""},scopedSlots:e._u([{key:"top",fn:function(){return[t(g.Z,{attrs:{flat:""}},[t(p.qW,[e._v("Turnos")]),t(h.Z),t(d.Z,{attrs:{"max-width":"500px"},scopedSlots:e._u([{key:"activator",fn:function({on:i,attrs:s}){return[t(r.Z,e._g(e._b({staticClass:"mb-2",attrs:{color:"primary",dark:"",disabled:e.locked}},"v-btn",s,!1),i),[e._v(" Novo turno ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[t(s.Z,[t(a.EB,[t("span",{staticClass:"text-h5"},[e._v(e._s(e.formTitle))])]),t(a.ZB,[t(l.Z,[t(u.Z,{ref:"form",on:{submit:function(e){e.preventDefault()}}},[t(f.Z,[t(n.Z,{attrs:{cols:"12",sm:"6"}},[t(m.Z,{attrs:{label:"Nome do turno",rules:[e.rules.required]},model:{value:e.editedItem.name,callback:function(t){e.$set(e.editedItem,"name",t)},expression:"editedItem.name"}})],1),t(n.Z,{attrs:{cols:"12",sm:"6"}},[t(m.Z,{attrs:{label:"Aulas por dia",rules:[e.rules.required,e.rules.greaterThanZero(!0)]},model:{value:e.editedItem.classes,callback:function(t){e.$set(e.editedItem,"classes",t)},expression:"editedItem.classes"}})],1)],1)],1)],1)],1),t(a.h7,[t(h.Z),t(r.Z,{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v(" Cancelar ")]),t(r.Z,{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v(" OK ")])],1)],1)],1),t(d.Z,{attrs:{"max-width":"500px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[t(s.Z,[t(a.EB,{staticClass:"text-h5"},[e._v("Tem certeza que deseja excluir esse turno? ")]),t(a.h7,[t(h.Z),t(r.Z,{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v("Cancelar")]),t(r.Z,{attrs:{color:"blue darken-1",text:""},on:{click:e.deleteItemConfirm}},[e._v("OK")]),t(h.Z)],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function({item:i}){return[t(c.Z,{staticClass:"mr-2",attrs:{small:"",disabled:e.locked},on:{click:function(t){return e.editItem(i)}}},[e._v(" mdi-pencil ")]),t(c.Z,{attrs:{small:"",disabled:e.locked},on:{click:function(t){return e.deleteItem(i)}}},[e._v(" mdi-delete ")])]}}])})],1)],1)},b=[],y=i(4916),Z={name:"TabelaTurnos",props:["items","locked"],mixins:[y.Z],data(){return{headers:[{text:"Nome",value:"name"},{text:"Aulas por dia",value:"classes",width:"30%"},{text:"Ações",value:"actions",sortable:!1,width:"10%"}],editedIndex:-1,editedItem:{name:"",classes:0},defaultItem:{name:"",classes:0,children:[]},dialogDelete:!1,dialog:!1,formTitle:null}},watch:{dialog(e){e||this.close(),!0===e&&this.resetValidation()},dialogDelete(e){e||this.closeDelete()}},methods:{editItem(e){this.editedIndex=this.items.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem(e){this.editedIndex=this.items.indexOf(e),this.editedItem=Object.assign({},e),this.dialogDelete=!0},deleteItemConfirm(){this.$emit("delete",this.editedIndex),this.closeDelete()},close(){this.dialog=!1,this.$nextTick((()=>{this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1,this.$refs.form.resetValidation()}))},closeDelete(){this.dialogDelete=!1,this.$nextTick((()=>{this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1}))},save(){this.$refs.form.validate()&&(this.$emit("save",this.editedIndex,this.editedItem),this.close())}}},$=Z,x=i(3736),k=(0,x.Z)($,v,b,!1,null,null,null),I=k.exports},4192:function(e,t,i){i.d(t,{Z:function(){return s}});var r=i(3276),s=r.Z.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render(e){let t;return this.$attrs.role&&"separator"!==this.$attrs.role||(t=this.vertical?"vertical":"horizontal"),e("hr",{class:{"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical,...this.themeClasses},attrs:{role:"separator","aria-orientation":t,...this.$attrs},on:this.$listeners})}})},6904:function(e,t,i){var r=i(4987),s=i(4609),a=i(380);t["Z"]=(0,r.Z)(s.Z,(0,a.J)("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(e){const t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput(e){const t=e=>e.$watch("hasError",(t=>{this.$set(this.errorBag,e._uid,t)}),{immediate:!0}),i={_uid:e._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?i.shouldValidate=e.$watch("shouldValidate",(r=>{r&&(this.errorBag.hasOwnProperty(e._uid)||(i.valid=t(e)))})):i.valid=t(e),i},validate(){return 0===this.inputs.filter((e=>!e.validate(!0))).length},reset(){this.inputs.forEach((e=>e.reset())),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout((()=>{this.errorBag={}}),0)},resetValidation(){this.inputs.forEach((e=>e.resetValidation())),this.resetErrorBag()},register(e){this.inputs.push(e),this.watchers.push(this.watchInput(e))},unregister(e){const t=this.inputs.find((t=>t._uid===e._uid));if(!t)return;const i=this.watchers.find((e=>e._uid===t._uid));i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter((e=>e._uid!==t._uid)),this.inputs=this.inputs.filter((e=>e._uid!==t._uid)),this.$delete(this.errorBag,t._uid)}},render(e){return e("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:e=>this.$emit("submit",e)}},this.$slots.default)}})},4437:function(e,t,i){i(1884);var r=i(144),s=i(2653),a=i(1050);const n=["sm","md","lg","xl"],l=(()=>n.reduce(((e,t)=>(e[t]={type:[Boolean,String,Number],default:!1},e)),{}))(),o=(()=>n.reduce(((e,t)=>(e["offset"+(0,a.jC)(t)]={type:[String,Number],default:null},e)),{}))(),d=(()=>n.reduce(((e,t)=>(e["order"+(0,a.jC)(t)]={type:[String,Number],default:null},e)),{}))(),u={col:Object.keys(l),offset:Object.keys(o),order:Object.keys(d)};function c(e,t,i){let r=e;if(null!=i&&!1!==i){if(t){const i=t.replace(e,"");r+=`-${i}`}return"col"!==e||""!==i&&!0!==i?(r+=`-${i}`,r.toLowerCase()):r.toLowerCase()}}const f=new Map;t["Z"]=r.ZP.extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...l,offset:{type:[String,Number],default:null},...o,order:{type:[String,Number],default:null},...d,alignSelf:{type:String,default:null,validator:e=>["auto","start","end","center","baseline","stretch"].includes(e)},tag:{type:String,default:"div"}},render(e,{props:t,data:i,children:r,parent:a}){let n="";for(const s in t)n+=String(t[s]);let l=f.get(n);if(!l){let e;for(e in l=[],u)u[e].forEach((i=>{const r=t[i],s=c(e,i,r);s&&l.push(s)}));const i=l.some((e=>e.startsWith("col-")));l.push({col:!i||!t.cols,[`col-${t.cols}`]:t.cols,[`offset-${t.offset}`]:t.offset,[`order-${t.order}`]:t.order,[`align-self-${t.alignSelf}`]:t.alignSelf}),f.set(n,l)}return e(t.tag,(0,s.ZP)(i,{class:l}),r)}})},6035:function(e,t,i){i.d(t,{Z:function(){return n}});i(9027),i(1884);var r=i(144);function s(e){return r.ZP.extend({name:`v-${e}`,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(t,{props:i,data:r,children:s}){r.staticClass=`${e} ${r.staticClass||""}`.trim();const{attrs:a}=r;if(a){r.attrs={};const e=Object.keys(a).filter((e=>{if("slot"===e)return!1;const t=a[e];return e.startsWith("data-")?(r.attrs[e]=t,!1):t||"string"===typeof t}));e.length&&(r.staticClass+=` ${e.join(" ")}`)}return i.id&&(r.domProps=r.domProps||{},r.domProps.id=i.id),t(i.tag,r,s)}})}var a=i(2653),n=s("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(e,{props:t,data:i,children:r}){let s;const{attrs:n}=i;return n&&(i.attrs={},s=Object.keys(n).filter((e=>{if("slot"===e)return!1;const t=n[e];return e.startsWith("data-")?(i.attrs[e]=t,!1):t||"string"===typeof t}))),t.id&&(i.domProps=i.domProps||{},i.domProps.id=t.id),e(t.tag,(0,a.ZP)(i,{staticClass:"container",class:Array({"container--fluid":t.fluid}).concat(s||[])}),r)}})},5294:function(e,t,i){i(1884);var r=i(144),s=i(2653),a=i(1050);const n=["sm","md","lg","xl"],l=["start","end","center"];function o(e,t){return n.reduce(((i,r)=>(i[e+(0,a.jC)(r)]=t(),i)),{})}const d=e=>[...l,"baseline","stretch"].includes(e),u=o("align",(()=>({type:String,default:null,validator:d}))),c=e=>[...l,"space-between","space-around"].includes(e),f=o("justify",(()=>({type:String,default:null,validator:c}))),h=e=>[...l,"space-between","space-around","stretch"].includes(e),m=o("alignContent",(()=>({type:String,default:null,validator:h}))),g={align:Object.keys(u),justify:Object.keys(f),alignContent:Object.keys(m)},p={align:"align",justify:"justify",alignContent:"align-content"};function v(e,t,i){let r=p[e];if(null!=i){if(t){const i=t.replace(e,"");r+=`-${i}`}return r+=`-${i}`,r.toLowerCase()}}const b=new Map;t["Z"]=r.ZP.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d},...u,justify:{type:String,default:null,validator:c},...f,alignContent:{type:String,default:null,validator:h},...m},render(e,{props:t,data:i,children:r}){let a="";for(const s in t)a+=String(t[s]);let n=b.get(a);if(!n){let e;for(e in n=[],g)g[e].forEach((i=>{const r=t[i],s=v(e,i,r);s&&n.push(s)}));n.push({"no-gutters":t.noGutters,"row--dense":t.dense,[`align-${t.align}`]:t.align,[`justify-${t.justify}`]:t.justify,[`align-content-${t.alignContent}`]:t.alignContent}),b.set(a,n)}return e(t.tag,(0,s.ZP)(i,{staticClass:"row",class:n}),r)}})},4916:function(e,t){function i(e){return null==e||0===String(e).trim().length}t["Z"]={data(){return{rules:{required:e=>null!=e&&String(e).trim().length>0||"Obrigatório",greaterThanZero:e=>t=>i(t)?!0!==e||"Deve ser um número maior que zero":/^[1-9]\d*$/.test(t)||"Deve ser um número maior que zero",greaterOrEqualThanZero:e=>{if(null==e)return"Deve ser um número maior ou igual a zero";const t=parseInt(e,10);return Number.isInteger(t)&&t>=0||"Deve ser um número maior ou igual a zero"},lessThanOrEqual:(e,t)=>r=>{if(i(r))return!0!==t||"Deve ser um número menor ou igual a "+e;const s=parseInt(r,10);return Number.isInteger(s)&&s<=e||"Deve ser um número menor ou igual a "+e}}}},methods:{resetValidation(e){null!=e&&null!=this.$refs[e]?this.$refs[e].resetValidation():null!=this.$refs.form&&this.$refs.form.resetValidation()},validate(e){return null!=e&&null!=this.$refs[e]?this.$refs[e].validate():null!=this.$refs.form?this.$refs.form.validate():void 0}}}},1884:function(){}}]);
//# sourceMappingURL=567.2cf9d8d7.js.map