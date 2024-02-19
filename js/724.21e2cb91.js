(self["webpackChunkhorario"]=self["webpackChunkhorario"]||[]).push([[724],{4724:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return j}});var s=i(7179),a=i(3058),r=i(5223),n=i(4437),l=i(6035),o=i(9531),u=i(5452),c=i(6904),d=i(5057),h=i(5294),m=i(4544),f=i(5234),p=i(5251),g=i(1002),b=i(2370),v=function(){var e=this,t=e._self._c;return t("div",[t(a.Z,{staticClass:"mx-auto mt-5",attrs:{"max-width":"1000px"}},[t(o.Z,{attrs:{expanded:e.expanded,headers:e.headers,items:e.professores,"hide-default-footer":!0,"disable-pagination":"","disable-filtering":"","disable-sort":"","show-expand":""},on:{"update:expanded":function(t){e.expanded=t}},scopedSlots:e._u([{key:"top",fn:function(){return[t(g.Z,{attrs:{flat:"",dense:""}},[t(b.qW,[e._v("Aulas")]),t(f.Z),t(s.Z,{attrs:{color:"primary",dark:"",plain:""},on:{click:function(t){return e.openDeleteDialogLectures(null)}}},[e._v(" Limpar ")]),t(s.Z,{attrs:{color:"primary",dark:"",plain:""},on:{click:e.expandAll}},[e._v(" Expandir todos ")]),t(s.Z,{attrs:{color:"primary",dark:"",plain:""},on:{click:e.collapseAll}},[e._v(" Fechar todos ")]),null!=e.turnos&&e.turnos.length>1?t(n.Z,{attrs:{cols:"3"}},[t(m.Z,{attrs:{items:e.turnos,"item-text":"name","item-value":"id","hide-details":""},model:{value:e.turnoSelecionado,callback:function(t){e.turnoSelecionado=t},expression:"turnoSelecionado"}})],1):e._e()],1)]},proxy:!0},{key:"item.number_lectures",fn:function({item:i,index:s}){return[t("span",{key:e.keys[s]||s},[e._v(e._s(e.getTotalLectures(i.id)))])]}},{key:"item.actions",fn:function({item:i}){return[t(s.Z,{attrs:{color:"primary",dark:"",outlined:""},on:{click:function(t){return e.prepareNewSubjectDialog(i.id)}}},[e._v(" Vincular matéria ")]),t(s.Z,{staticClass:"ml-2",attrs:{color:"primary",dark:"",outlined:""},on:{click:function(t){return e.openDeleteDialogLectures(i.id)}}},[e._v(" Limpar ")])]}},{key:"expanded-item",fn:function({headers:i,item:s,index:a}){return[t("td",{attrs:{colspan:i.length}},[t(o.Z,{key:e.reloadInternalTable,attrs:{headers:e.internalTableHeaders,items:e.getInternalTableItems(s.id),"hide-default-footer":!0,"disable-pagination":"","disable-filtering":"","disable-sort":""},scopedSlots:e._u([e._l(e.salasTurnoSelecionado,(function(i,a){return{key:`item.${i.id}`,fn:function(r){return[t(p.Z,{key:a,staticClass:"myInput",attrs:{type:"number",step:"1",min:"0",value:r.item[i.id],flat:"",dense:""},on:{input:function(t){return e.updateLectures(t,s.id,r.item.id_materia,i.id,a)},keydown:function(t){return e.validateKey(t)}}})]}}})),{key:"item.actions",fn:function(i){return[t(d.Z,{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.deleteSubject(s.id,i.item.id_materia)}}},[e._v(" mdi-delete ")])]}}],null,!0)})],1)]}}])})],1),t(u.Z,{attrs:{"max-width":"700px"},model:{value:e.dialogDeleteLectures,callback:function(t){e.dialogDeleteLectures=t},expression:"dialogDeleteLectures"}},[t(a.Z,[t(r.EB,{staticClass:"text-h6"},[e._v(e._s(e.deleteLecturesTitle))]),t(r.h7,[t(f.Z),t(s.Z,{attrs:{color:"primary"},on:{click:function(t){e.dialogDeleteLectures=!1}}},[e._v("Cancelar")]),t(s.Z,{staticClass:"white--text",attrs:{color:"red"},on:{click:e.clearLectures}},[e._v("Zerar aulas")]),t(s.Z,{staticClass:"white--text",attrs:{color:"red"},on:{click:e.unlinkSubjects}},[e._v("Excluir aulas e desvincular matérias")]),t(f.Z)],1)],1)],1),t(u.Z,{attrs:{"max-width":"500px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[t(a.Z,[t(r.EB,[t("span",{staticClass:"text-h5"},[e._v("Vincular matéria")])]),t(r.ZB,[t(l.Z,[t(c.Z,{ref:"form",on:{submit:function(e){e.preventDefault()}}},[t(h.Z,[t(n.Z,{attrs:{cols:"12",sm:"6",md:"4"}},[t(m.Z,{attrs:{label:"Matéria",items:e.materias,"item-text":"name","item-value":"id",rules:[e.rules.required]},model:{value:e.editedItem.id_materia,callback:function(t){e.$set(e.editedItem,"id_materia",t)},expression:"editedItem.id_materia"}})],1)],1)],1)],1)],1),t(r.h7,[t(f.Z),t(s.Z,{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v(" Cancelar ")]),t(s.Z,{attrs:{color:"blue darken-1",text:""},on:{click:e.saveItem}},[e._v(" OK ")])],1)],1)],1),t(u.Z,{attrs:{"max-width":"500px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[t(a.Z,[t(r.EB,{staticClass:"text-h5"},[e._v("Desvincular matéria?")]),t(r.h7,[t(f.Z),t(s.Z,{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v("Cancelar")]),t(s.Z,{attrs:{color:"blue darken-1",text:""},on:{click:e.deleteSubjectConfirm}},[e._v("OK")]),t(f.Z)],1)],1)],1)],1)},S=[],k=(i(6314),i(6125)),y=i(4916),x={name:"Quantidades",props:["id"],mixins:[k.Z,y.Z],components:{},data(){return{aulas:{},items:{},externalTableItems:[],dialog:!1,dialogDelete:!1,editedIndex:-1,editedItem:{id_professor:null,id_materia:null},defaultItem:{id_professor:null,id_materia:null},expanded:[],reloadInternalTable:0,selectedTeacher:null,selectedSubject:null,dialogDeleteLectures:!1,keys:[]}},mounted(){this.load()},watch:{dialog(e){e||this.close()},dialogDelete(e){e||this.closeDelete()}},computed:{headers(){return[{text:"Professor",value:"name",align:"center"},{text:"Aulas no turno",value:"number_lectures",align:"center"},{text:"",value:"data-table-expand",align:"center"},{text:"",value:"actions",width:"400",align:"center"}]},internalTableHeaders(){return Array({text:"Matéria",value:"name",width:"10px",align:"center"}).concat(Array.from(this.salasTurnoSelecionado,(e=>({text:e.name,value:e.id.toString()})))).concat([{text:"Ações",value:"actions",sortable:!1}])},deleteLecturesTitle(){return null!=this.selectedTeacher?"Confirmação - Excluindo aulas de "+this.professoresLookup[this.selectedTeacher]+" no turno selecionado":"Confirmação - Excluindo aulas do turno selecionado"},maxKey(){return Math.max(...this.keys)}},methods:{async load(e=!1){if(this.id)try{this.setLoading(e),await this.getStructure(),this.keys=this.professores.map(((e,t)=>t));const t=await this.$axios.get("/aulas/"+this.id),{aulas:i}=t.data;this.saved();const s={};for(let e of i){const{id_sala:t,id_professor:i,id_turno:a,id_materia:r,numero_aulas:n}=e;Object.hasOwn(s,a)||(s[a]={}),Object.hasOwn(s[a],i)||(s[a][i]={}),Object.hasOwn(s[a][i],r)||(s[a][i][r]={}),s[a][i][r][t]=n,this.items=s}this.fillBlankCells()}catch(t){console.error(t)}finally{this.clearLoading()}},fillBlankCells(){for(const e in this.items)for(const t in this.items[e])for(const i in this.items[e][t])for(const s of this.salas)s.turno===parseInt(e,10)&&null==this.items[e][t][i][s.id]&&(this.items[e][t][i][s.id]=0)},getInternalTableItems(e){let t=[];if(Object.hasOwn(this.items,this.turnoSelecionado)&&Object.hasOwn(this.items[this.turnoSelecionado],e)){const i=Object.keys(this.items[this.turnoSelecionado][e]);i.sort(((e,t)=>this.materiasLookup[e]<this.materiasLookup[t]?-1:this.materiasLookup[e]>this.materiasLookup[t]?1:0));for(let s of i){const i={id_materia:s,name:this.materiasLookup[s],...this.items[this.turnoSelecionado][e][s]};t.push(i)}}return t},getTotalLectures(e){let t=0;if(this.items[this.turnoSelecionado]&&this.items[this.turnoSelecionado][e])for(const i in this.items[this.turnoSelecionado][e])for(const s in this.items[this.turnoSelecionado][e][i])t+=Number(this.items[this.turnoSelecionado][e][i][s]);return t},save(e=!0){const{items:t}=this;this.$axios.post("/aulas",{id_configuracao:this.id,linhas_aulas:t}).then((t=>{200===t.status&&e&&this.load(!0)})).catch((e=>console.log(e)))},close(){this.dialog=!1,this.$nextTick((()=>{this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1}))},closeDelete(){this.dialogDelete=!1,this.$nextTick((()=>{this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1}))},saveItem(){if(!this.validate())return;this.changed();const{id_professor:e,id_materia:t}=this.editedItem;Object.hasOwn(this.items,this.turnoSelecionado)||(this.items[this.turnoSelecionado]={}),Object.hasOwn(this.items[this.turnoSelecionado],e)||(this.items[this.turnoSelecionado][e]={}),Object.hasOwn(this.items[this.turnoSelecionado][e],t)||(this.items[this.turnoSelecionado][e][t]={}),this.salasTurnoSelecionado.forEach((i=>{Object.hasOwn(this.items[this.turnoSelecionado][e][t],i.id)||(this.items[this.turnoSelecionado][e][t][i.id]=0)})),this.reloadInternalTable+=1,this.close()},prepareNewSubjectDialog(e){this.setSelectedTeacher(e),this.editedItem.id_professor=e,this.resetValidation(),this.dialog=!0},setSelectedTeacher(e){this.selectedTeacher=e},setSelectedSubject(e){this.selectedSubject=e},deleteSubject(e,t){this.setSelectedTeacher(e),this.setSelectedSubject(t),this.dialogDelete=!0},deleteSubjectConfirm(){delete this.items[this.turnoSelecionado][this.selectedTeacher][this.selectedSubject],this.reloadInternalTable+=1,this.dialogDelete=!1,this.changed()},updateLectures(e,t,i,s,a){this.checkChanges(this.items[this.turnoSelecionado][t][i][s],e),this.items[this.turnoSelecionado][t][i][s]=e;const r=Math.max(...this.keys)+1;this.$set(this.keys,a,r)},validateKey(e){const t=[8];t.includes(e.keyCode)||!isNaN(e.key)&&e.key.trim().length||e.preventDefault()},openDeleteDialogLectures(e){this.setSelectedTeacher(e),this.dialogDeleteLectures=!0},clearLecturesFromTeacher(e){if(null!=e)for(const t in this.items[this.turnoSelecionado][e])for(const i in this.items[this.turnoSelecionado][e][t])this.items[this.turnoSelecionado][e][t][i]=0},clearLectures(){if(this.changed(),this.dialogDeleteLectures=!1,null!=this.selectedTeacher)this.clearLecturesFromTeacher(this.selectedTeacher);else for(const e of this.professores)this.clearLecturesFromTeacher(e.id);this.reloadInternalTable+=1},unlinkSubjectsFromTeacher(e){null!=e&&(this.items[this.turnoSelecionado][e]={})},unlinkSubjects(){if(this.changed(),this.dialogDeleteLectures=!1,null!=this.selectedTeacher)this.unlinkSubjectsFromTeacher(this.selectedTeacher);else for(const e of this.professores)this.unlinkSubjectsFromTeacher(e.id);this.reloadInternalTable+=1},expandAll(){this.expanded=[...this.professores]},collapseAll(){this.expanded=[]}}},_=x,Z=i(3736),w=(0,Z.Z)(_,v,S,!1,null,"2f1e3e92",null),j=w.exports},6904:function(e,t,i){"use strict";var s=i(4987),a=i(4609),r=i(380);t["Z"]=(0,s.Z)(a.Z,(0,r.J)("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(e){const t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput(e){const t=e=>e.$watch("hasError",(t=>{this.$set(this.errorBag,e._uid,t)}),{immediate:!0}),i={_uid:e._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?i.shouldValidate=e.$watch("shouldValidate",(s=>{s&&(this.errorBag.hasOwnProperty(e._uid)||(i.valid=t(e)))})):i.valid=t(e),i},validate(){return 0===this.inputs.filter((e=>!e.validate(!0))).length},reset(){this.inputs.forEach((e=>e.reset())),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout((()=>{this.errorBag={}}),0)},resetValidation(){this.inputs.forEach((e=>e.resetValidation())),this.resetErrorBag()},register(e){this.inputs.push(e),this.watchers.push(this.watchInput(e))},unregister(e){const t=this.inputs.find((t=>t._uid===e._uid));if(!t)return;const i=this.watchers.find((e=>e._uid===t._uid));i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter((e=>e._uid!==t._uid)),this.inputs=this.inputs.filter((e=>e._uid!==t._uid)),this.$delete(this.errorBag,t._uid)}},render(e){return e("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:e=>this.$emit("submit",e)}},this.$slots.default)}})},4437:function(e,t,i){"use strict";i(1884);var s=i(144),a=i(2653),r=i(1050);const n=["sm","md","lg","xl"],l=(()=>n.reduce(((e,t)=>(e[t]={type:[Boolean,String,Number],default:!1},e)),{}))(),o=(()=>n.reduce(((e,t)=>(e["offset"+(0,r.jC)(t)]={type:[String,Number],default:null},e)),{}))(),u=(()=>n.reduce(((e,t)=>(e["order"+(0,r.jC)(t)]={type:[String,Number],default:null},e)),{}))(),c={col:Object.keys(l),offset:Object.keys(o),order:Object.keys(u)};function d(e,t,i){let s=e;if(null!=i&&!1!==i){if(t){const i=t.replace(e,"");s+=`-${i}`}return"col"!==e||""!==i&&!0!==i?(s+=`-${i}`,s.toLowerCase()):s.toLowerCase()}}const h=new Map;t["Z"]=s.ZP.extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...l,offset:{type:[String,Number],default:null},...o,order:{type:[String,Number],default:null},...u,alignSelf:{type:String,default:null,validator:e=>["auto","start","end","center","baseline","stretch"].includes(e)},tag:{type:String,default:"div"}},render(e,{props:t,data:i,children:s,parent:r}){let n="";for(const a in t)n+=String(t[a]);let l=h.get(n);if(!l){let e;for(e in l=[],c)c[e].forEach((i=>{const s=t[i],a=d(e,i,s);a&&l.push(a)}));const i=l.some((e=>e.startsWith("col-")));l.push({col:!i||!t.cols,[`col-${t.cols}`]:t.cols,[`offset-${t.offset}`]:t.offset,[`order-${t.order}`]:t.order,[`align-self-${t.alignSelf}`]:t.alignSelf}),h.set(n,l)}return e(t.tag,(0,a.ZP)(i,{class:l}),s)}})},5294:function(e,t,i){"use strict";i(1884);var s=i(144),a=i(2653),r=i(1050);const n=["sm","md","lg","xl"],l=["start","end","center"];function o(e,t){return n.reduce(((i,s)=>(i[e+(0,r.jC)(s)]=t(),i)),{})}const u=e=>[...l,"baseline","stretch"].includes(e),c=o("align",(()=>({type:String,default:null,validator:u}))),d=e=>[...l,"space-between","space-around"].includes(e),h=o("justify",(()=>({type:String,default:null,validator:d}))),m=e=>[...l,"space-between","space-around","stretch"].includes(e),f=o("alignContent",(()=>({type:String,default:null,validator:m}))),p={align:Object.keys(c),justify:Object.keys(h),alignContent:Object.keys(f)},g={align:"align",justify:"justify",alignContent:"align-content"};function b(e,t,i){let s=g[e];if(null!=i){if(t){const i=t.replace(e,"");s+=`-${i}`}return s+=`-${i}`,s.toLowerCase()}}const v=new Map;t["Z"]=s.ZP.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:u},...c,justify:{type:String,default:null,validator:d},...h,alignContent:{type:String,default:null,validator:m},...f},render(e,{props:t,data:i,children:s}){let r="";for(const a in t)r+=String(t[a]);let n=v.get(r);if(!n){let e;for(e in n=[],p)p[e].forEach((i=>{const s=t[i],a=b(e,i,s);a&&n.push(a)}));n.push({"no-gutters":t.noGutters,"row--dense":t.dense,[`align-${t.align}`]:t.align,[`justify-${t.justify}`]:t.justify,[`align-content-${t.alignContent}`]:t.alignContent}),v.set(r,n)}return e(t.tag,(0,a.ZP)(i,{staticClass:"row",class:n}),s)}})},4916:function(e,t){"use strict";function i(e){return null==e||0===String(e).trim().length}t["Z"]={data(){return{rules:{required:e=>null!=e&&String(e).trim().length>0||"Obrigatório",greaterThanZero:e=>t=>i(t)?!0!==e||"Deve ser um número maior que zero":/^[1-9]\d*$/.test(t)||"Deve ser um número maior que zero",greaterOrEqualThanZero:e=>{if(null==e)return"Deve ser um número maior ou igual a zero";const t=parseInt(e,10);return Number.isInteger(t)&&t>=0||"Deve ser um número maior ou igual a zero"},lessThanOrEqual:(e,t)=>s=>{if(i(s))return!0!==t||"Deve ser um número menor ou igual a "+e;const a=parseInt(s,10);return Number.isInteger(a)&&a<=e||"Deve ser um número menor ou igual a "+e}}}},methods:{resetValidation(e){null!=e&&null!=this.$refs[e]?this.$refs[e].resetValidation():null!=this.$refs.form&&this.$refs.form.resetValidation()},validate(e){return null!=e&&null!=this.$refs[e]?this.$refs[e].validate():null!=this.$refs.form?this.$refs.form.validate():void 0}}}},6314:function(e,t,i){var s=i(2109),a=i(2597);s({target:"Object",stat:!0},{hasOwn:a})}}]);
//# sourceMappingURL=724.21e2cb91.js.map