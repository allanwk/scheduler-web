"use strict";(self["webpackChunkhorario"]=self["webpackChunkhorario"]||[]).push([[349],{9349:function(t,e,i){i.r(e),i.d(e,{default:function(){return w}});var a=i(7179),r=i(3058),s=i(5223),o=i(4437),n=i(6035),l=i(9531),d=i(5452),u=i(6904),c=i(5057),h=i(5294),m=i(4544),f=i(5234),g=i(5251),v=i(1002),p=function(){var t=this,e=t._self._c;return e(l.Z,{attrs:{"disable-pagination":"","disable-filtering":"",dense:"","hide-default-footer":"",items:t.configurations,headers:t.headers,loading:t.loading,"loading-text":"Carregando","no-data-text":"Nenhuma configuração encontrada"},scopedSlots:t._u([{key:"top",fn:function(){return[e(v.Z,{attrs:{flat:""}},[e(f.Z),e(a.Z,{staticClass:"mb-2 ml-2",attrs:{color:"primary",dark:""},on:{click:t.getDefaultConfigs}},[t._v(" Restaurar para o padrão ")]),e(a.Z,{staticClass:"mb-2 ml-2",attrs:{color:"primary",dark:""},on:{click:t.save}},[t._v(" Salvar ")])],1),e(d.Z,{attrs:{"max-width":"500px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(r.Z,[e(s.EB,[e("span",{staticClass:"text-h5"},[t._v("Editar configuração")])]),e(s.ZB,[e(n.Z,[e(u.Z,{ref:"form",on:{submit:function(t){t.preventDefault()}}},[e(h.Z,[e(o.Z,{attrs:{cols:"12",sm:"6",md:"4"}},[e(m.Z,{attrs:{label:"Obrigatório",items:t.yesNo,rules:[t.rules.required]},model:{value:t.editedItem.obrigatorio,callback:function(e){t.$set(t.editedItem,"obrigatorio",e)},expression:"editedItem.obrigatorio"}})],1),e(o.Z,{attrs:{cols:"12",sm:"6",md:"4"}},[e(g.Z,{attrs:{label:"Chave",rules:[t.rules.required]},model:{value:t.editedItem.chave_xml,callback:function(e){t.$set(t.editedItem,"chave_xml",e)},expression:"editedItem.chave_xml"}})],1),e(o.Z,{attrs:{cols:"12",sm:"6",md:"4"}},[e(g.Z,{attrs:{number:"",label:"Valor",rules:[t.rules.required,t.rules.greaterOrEqualThanZero]},model:{value:t.editedItem.valor,callback:function(e){t.$set(t.editedItem,"valor",e)},expression:"editedItem.valor"}})],1)],1)],1)],1)],1),e(s.h7,[e(f.Z),e(a.Z,{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v(" Cancelar ")]),e(a.Z,{attrs:{color:"blue darken-1",text:""},on:{click:t.saveItem}},[t._v(" OK ")])],1)],1)],1)]},proxy:!0},{key:"item.obrigatorio",fn:function(e){return[t._v(" "+t._s(e.item.obrigatorio?"Sim":"Não")+" ")]}},{key:"item.actions",fn:function(i){return[e(c.Z,{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editItem(i.item)}}},[t._v(" mdi-pencil ")])]}}],null,!0)})},x=[],_=i(6125),b=i(4916),I={name:"ConfiguracoesGeraacao",props:["idConfiguracao"],mixins:[_.Z,b.Z],data(){return{headers:[{text:"Chave",value:"chave_xml"},{text:"Métrica associada",value:"desc_metrica"},{text:"Valor",value:"valor"},{text:"Obrigatório",value:"obrigatorio"},{text:"Ações",value:"actions"}],configurations:[],editedItem:{chave_xml:null,valor:0,tipo:"setting",obrigatorio:0},defaultItem:{chave_xml:null,valor:0,tipo:"setting",obrigatorio:0},editedIndex:-1,dialog:!1,yesNo:[{text:"Sim",value:1},{text:"Não",value:0}],loading:!1}},mounted(){this.load()},methods:{async load(){try{this.loading=!0;const t=await this.$axios.get("/configuracoes_geracao",{params:{id_configuracao:this.idConfiguracao}});this.configurations=t.data}catch(t){console.error(t)}finally{this.loading=!1}},async save(){const t=await this.$axios.post("/configuracoes_geracao",{id_configuracao:this.idConfiguracao,configuracoes:this.configurations});200===t.status&&(this.$emit("close-dialog"),this.load())},async getDefaultConfigs(){const t=await this.$axios.post("/command/clonar_configuracoes_padrao",{id_configuracao:this.idConfiguracao});200===t.status&&this.load()},editItem(t){this.editedIndex=this.configurations.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},saveItem(){this.validate()&&(this.editedIndex>-1?Object.assign(this.configurations[this.editedIndex],this.editedItem):this.configurations.push(this.editedItem),this.close())},close(){this.dialog=!1,this.$nextTick((()=>{this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1}))}},watch:{dialog(t){t||this.close()}}},Z=I,$=i(3736),k=(0,$.Z)(Z,p,x,!1,null,null,null),w=k.exports},6904:function(t,e,i){var a=i(4987),r=i(4609),s=i(380);e["Z"]=(0,a.Z)(r.Z,(0,s.J)("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",(e=>{this.$set(this.errorBag,t._uid,e)}),{immediate:!0}),i={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?i.shouldValidate=t.$watch("shouldValidate",(a=>{a&&(this.errorBag.hasOwnProperty(t._uid)||(i.valid=e(t)))})):i.valid=e(t),i},validate(){return 0===this.inputs.filter((t=>!t.validate(!0))).length},reset(){this.inputs.forEach((t=>t.reset())),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout((()=>{this.errorBag={}}),0)},resetValidation(){this.inputs.forEach((t=>t.resetValidation())),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find((e=>e._uid===t._uid));if(!e)return;const i=this.watchers.find((t=>t._uid===e._uid));i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter((t=>t._uid!==e._uid)),this.inputs=this.inputs.filter((t=>t._uid!==e._uid)),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})},4916:function(t,e){function i(t){return null==t||0===String(t).trim().length}e["Z"]={data(){return{rules:{required:t=>null!=t&&String(t).trim().length>0||"Obrigatório",greaterThanZero:t=>e=>i(e)?!0!==t||"Deve ser um número maior que zero":/^[1-9]\d*$/.test(e)||"Deve ser um número maior que zero",greaterOrEqualThanZero:t=>{if(null==t)return"Deve ser um número maior ou igual a zero";const e=parseInt(t,10);return Number.isInteger(e)&&e>=0||"Deve ser um número maior ou igual a zero"},lessThanOrEqual:(t,e)=>a=>{if(i(a))return!0!==e||"Deve ser um número menor ou igual a "+t;const r=parseInt(a,10);return Number.isInteger(r)&&r<=t||"Deve ser um número menor ou igual a "+t}}}},methods:{resetValidation(t){null!=t&&null!=this.$refs[t]?this.$refs[t].resetValidation():null!=this.$refs.form&&this.$refs.form.resetValidation()},validate(t){return null!=t&&null!=this.$refs[t]?this.$refs[t].validate():null!=this.$refs.form?this.$refs.form.validate():void 0}}}}}]);
//# sourceMappingURL=349.750034a3.js.map