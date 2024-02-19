"use strict";(self["webpackChunkhorario"]=self["webpackChunkhorario"]||[]).push([[802],{5746:function(e,t,i){i.r(t),i.d(t,{default:function(){return W}});var s=i(7179),o=i(3058),a=i(5223),n=i(4437),r=i(9531),l=i(5452),c=i(4192),d=i(1610),u=i(5057),h=i(4654),p=i(1012),f=i(3316),m=i(4609),g=i(8914),v=i(4791),S=i(1734),b=i(3276),_=i(911),y=i(1050),x=i(4987),C=i(2653);const D=(0,x.Z)(m.Z,g.Z,S.Z,(0,v.d)("radioGroup"),b.Z);var Z=D.extend().extend({name:"v-radio",inheritAttrs:!1,props:{disabled:Boolean,id:String,label:String,name:String,offIcon:{type:String,default:"$radioOff"},onIcon:{type:String,default:"$radioOn"},readonly:Boolean,value:{default:null}},data:()=>({isFocused:!1}),computed:{classes(){return{"v-radio--is-disabled":this.isDisabled,"v-radio--is-focused":this.isFocused,...this.themeClasses,...this.groupClasses}},computedColor(){if(!this.isDisabled)return _.Z.options.computed.computedColor.call(this)},computedIcon(){return this.isActive?this.onIcon:this.offIcon},computedId(){return f.Z.options.computed.computedId.call(this)},hasLabel:f.Z.options.computed.hasLabel,hasState(){return(this.radioGroup||{}).hasState},isDisabled(){return this.disabled||!!this.radioGroup&&this.radioGroup.isDisabled},isReadonly(){return this.readonly||!!this.radioGroup&&this.radioGroup.isReadonly},computedName(){return this.name||!this.radioGroup?this.name:this.radioGroup.name||`radio-${this.radioGroup._uid}`},rippleState(){return _.Z.options.computed.rippleState.call(this)},validationState(){return(this.radioGroup||{}).validationState||this.computedColor}},methods:{genInput(e){return _.Z.options.methods.genInput.call(this,"radio",e)},genLabel(){return this.hasLabel?this.$createElement(h.Z,{on:{click:_.X},attrs:{for:this.computedId},props:{color:this.validationState,focused:this.hasState}},(0,y.z9)(this,"label")||this.label):null},genRadio(){const{title:e,...t}=this.attrs$;return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(p.Z,this.setTextColor(this.validationState,{props:{dense:this.radioGroup&&this.radioGroup.dense}}),this.computedIcon),this.genInput({name:this.computedName,value:this.value,...t}),this.genRipple(this.setTextColor(this.rippleState))])},onFocus(e){this.isFocused=!0,this.$emit("focus",e)},onBlur(e){this.isFocused=!1,this.$emit("blur",e)},onChange(){this.isDisabled||this.isReadonly||this.isActive||this.toggle()},onKeydown:()=>{}},render(e){const t={staticClass:"v-radio",class:this.classes,on:(0,C.bp)({click:this.onChange},this.listeners$),attrs:{title:this.attrs$.title}};return e("div",t,[this.genRadio(),this.genLabel()])}}),k=(i(7393),i(2021));const P=(0,x.Z)(k.y,f.Z);var R=P.extend({name:"v-radio-group",provide(){return{radioGroup:this}},props:{column:{type:Boolean,default:!0},height:{type:[Number,String],default:"auto"},name:String,row:Boolean,value:null},computed:{classes(){return{...f.Z.options.computed.classes.call(this),"v-input--selection-controls v-input--radio-group":!0,"v-input--radio-group--column":this.column&&!this.row,"v-input--radio-group--row":this.row}}},methods:{genDefaultSlot(){return this.$createElement("div",{staticClass:"v-input--radio-group__input",attrs:{id:this.id,role:"radiogroup","aria-labelledby":this.computedId}},f.Z.options.methods.genDefaultSlot.call(this))},genInputSlot(){const e=f.Z.options.methods.genInputSlot.call(this);return delete e.data.on.click,e},genLabel(){const e=f.Z.options.methods.genLabel.call(this);return e?(e.data.attrs.id=this.computedId,delete e.data.attrs.for,e.tag="legend",e):null},onClick:k.y.options.methods.onClick},render(e){const t=f.Z.options.render.call(this,e);return this._b(t.data,"div",this.attrs$),t}}),w=i(5294),I=i(4544),T=i(5234),$=i(5251),A=i(1002),E=i(2370),L=i(3432),B=function(){var e=this,t=e._self._c;return t(o.Z,{staticClass:"mx-auto mt-5",attrs:{"max-width":"1000"}},[t(r.Z,{staticClass:"tabela",attrs:{headers:e.headersPreferencias,items:e.turnoSelecionado in e.linhasPreferencias&&e.professorSelecionado in e.linhasPreferencias[e.turnoSelecionado]?e.linhasPreferencias[e.turnoSelecionado][e.professorSelecionado]:[],"hide-default-footer":!0,"disable-pagination":"","disable-filtering":"","disable-sort":"",dense:""},scopedSlots:e._u([{key:"top",fn:function(){return[t(A.Z,{attrs:{flat:"",dense:""}},[t(L.Z,{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function({on:i,attrs:s}){return[t(E.qW,e._g(e._b({},"v-toolbar-title",s,!1),i),[e._v(" Preferências ")])]}}])},[t("span",[e._v("Especificar horários preferidos para cada professor")])]),t(u.Z,{staticClass:"ml-2",on:{click:function(t){e.dialogDeletePreferences=!0}}},[e._v("mdi-delete")]),t(T.Z),t(n.Z,{attrs:{cols:"2"}},[null!=e.turnos&&e.turnos.length>1?t(I.Z,{attrs:{items:e.turnos,"item-text":"name","item-value":"id","hide-details":""},model:{value:e.turnoSelecionado,callback:function(t){e.turnoSelecionado=t},expression:"turnoSelecionado"}}):e._e()],1),t(n.Z,{attrs:{cols:"2"}},[null!=e.professores&&e.professores.length>1?t(I.Z,{attrs:{items:e.professores,"item-text":"name","item-value":"id","hide-details":""},model:{value:e.professorSelecionado,callback:function(t){e.professorSelecionado=t},expression:"professorSelecionado"}}):e._e()],1)],1)]},proxy:!0},{key:"item.dia",fn:function(t){return[e._v(" "+e._s(e.diasSemana[t.item.dia].name)+" ")]}},e._l(e.salas,(function(i,a){return{key:`item.${i.id}`,fn:function(n){return[t(d.Z,{key:a,ref:"editDialog",refInFor:!0,attrs:{"return-value":n.item[i.id]},on:{"update:returnValue":function(t){return e.$set(n.item,i.id,t)},"update:return-value":function(t){return e.$set(n.item,i.id,t)}},scopedSlots:e._u([{key:"input",fn:function(){return[t(o.Z,{staticClass:"pb-3",attrs:{flat:""}},[t(I.Z,{attrs:{items:e.tiposPreferencia,"item-text":"text","item-value":"id",label:"Preferir","append-outer-icon":"mdi-delete"},on:{change:function(t){return e.handlePreferenceChange(t,n.index,i.id)},"click:append-outer":function(t){return e.clearPreference(n.index,i.id)}},model:{value:n.item[i.id].tipo,callback:function(t){e.$set(n.item[i.id],"tipo",t)},expression:"props.item[sala.id].tipo"}}),t($.Z,{attrs:{label:"Número de aulas",type:"number",step:"1",min:"0",max:e.aulasPorDiaTurnoSelecionado-1,disabled:4===n.item[i.id].tipo||-1===n.item[i.id].tipo},on:{change:function(t){return e.handleNumberLecturesChange(t,n.index)}},model:{value:n.item[i.id].aulas,callback:function(t){e.$set(n.item[i.id],"aulas",t)},expression:"props.item[sala.id].aulas"}}),t(w.Z,[[2,3].includes(n.item[i.id].tipo)?e._e():t(s.Z,{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.applyToRow(n.index,i.id)}}},[e._v(" Aplicar na linha inteira ")])],1),t(w.Z,[[2,3].includes(n.item[i.id].tipo)?e._e():t(s.Z,{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.applyToColumn(n.index,i.id)}}},[e._v(" Aplicar na coluna inteira ")])],1),t(w.Z,[t(s.Z,{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.applyToDayAllClasses(n.index,i.id)}}},[e._v(" Aplicar no dia em todas salas ")])],1),t(w.Z,[t(s.Z,{attrs:{color:"blue darken-1",text:""},on:{click:e.closeEditDialog}},[e._v(" Fechar ")])],1)],1)]},proxy:!0}],null,!0)},[e._v(" "+e._s(e.formatPreference(n.item[i.id]))+" ")])]}}}))],null,!0)}),t(c.Z),t(r.Z,{staticClass:"tabela mt-5",attrs:{headers:e.headersSalasTurnoSelecionado,items:e.turnoSelecionado in e.linhasRestricoes&&e.professorSelecionado in e.linhasRestricoes[e.turnoSelecionado]?e.linhasRestricoes[e.turnoSelecionado][e.professorSelecionado]:[],"hide-default-footer":!0,"disable-pagination":"","disable-filtering":"","disable-sort":"",dense:""},scopedSlots:e._u([{key:"top",fn:function(){return[t(A.Z,{attrs:{flat:"",dense:""}},[t(L.Z,{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function({on:i,attrs:s}){return[t(E.qW,e._g(e._b({},"v-toolbar-title",s,!1),i),[e._v(" Restrições ")])]}}])},[t("span",[e._v("Proibir ou evitar aulas de um professor nas salas e horários configurados")])]),t(u.Z,{staticClass:"ml-2",on:{click:function(t){e.dialogDeleteRestrictions=!0}}},[e._v("mdi-delete")]),t(L.Z,{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function({on:i,attrs:s}){return[t(u.Z,e._g(e._b({staticClass:"ml-2"},"v-icon",s,!1),i),[e._v("mdi-help")])]}}])},[t("span",[e._v("Para configurar restrições, clique e arraste com o botão esquerdo do mouse na tabela abaixo. Para remover uma restrição, faça o mesmo processo com o botão direito.")])]),t("span",{staticClass:"ml-5"},[e._v(" "+e._s(e.stringTotalAulasProfessorTurno)+" ")]),t(T.Z),t(R,{attrs:{"hide-details":""},model:{value:e.paintMode,callback:function(t){e.paintMode=t},expression:"paintMode"}},[t(w.Z,[t(n.Z,[t(Z,{attrs:{value:"0",label:"Proibir",color:"#D50000"}})],1),t(n.Z,[t(Z,{attrs:{value:"1",label:"Evitar",color:"#607D8B"}})],1)],1)],1)],1)]},proxy:!0},{key:"item",fn:function(i){return[t("tr",[i.item.aula%e.aulasPorDiaTurnoSelecionado===0?t("td",{staticClass:"vertical-text",attrs:{rowspan:e.aulasPorDiaTurnoSelecionado}},[e._v(" "+e._s(e.diasSemana[Math.floor(i.item.aula/e.aulasPorDiaTurnoSelecionado)].name)+" ")]):e._e(),t("td",{style:{"border-bottom":i.item.aula%e.aulasPorDiaTurnoSelecionado===e.aulasPorDiaTurnoSelecionado-1?"1px solid black !important":null,"text-align":"center"}},[e._v(" "+e._s(i.item.aula%e.aulasPorDiaTurnoSelecionado+1)+" ")]),e._l(e.salasTurnoSelecionado,(function(s,o){return t("td",{key:o,style:{"border-bottom":i.item.aula%e.aulasPorDiaTurnoSelecionado===e.aulasPorDiaTurnoSelecionado-1?"1px solid black !important":null,background:e.getColor(i.item[s.id])},on:{mousemove:function(t){return e.paintCell(t,i.item,s.id,i.index)},mousedown:function(t){return e.mouseDownHandler(t,i.index,s.id)},mouseup:function(t){return e.mouseUpHandler(t,i.index,s.id)},contextmenu:e.preventDefault}})}))],2)]}}])}),t(l.Z,{attrs:{"max-width":"500px"},model:{value:e.dialogDeletePreferences,callback:function(t){e.dialogDeletePreferences=t},expression:"dialogDeletePreferences"}},[t(o.Z,[t(a.EB,{staticClass:"text-h6"},[e._v(" Limpar preferências do professor selecionado no turno selecionado? ")]),t(a.h7,[t(T.Z),t(s.Z,{attrs:{color:"blue darken-1",text:""},on:{click:function(t){e.dialogDeletePreferences=!1}}},[e._v("Cancelar")]),t(s.Z,{attrs:{color:"blue darken-1",text:""},on:{click:e.clearPreferences}},[e._v("OK")]),t(T.Z)],1)],1)],1),t(l.Z,{attrs:{"max-width":"500px"},model:{value:e.dialogDeleteRestrictions,callback:function(t){e.dialogDeleteRestrictions=t},expression:"dialogDeleteRestrictions"}},[t(o.Z,[t(a.EB,{staticClass:"text-h6"},[e._v(" Limpar restrições do professor selecionado no turno selecionado? ")]),t(a.h7,[t(T.Z),t(s.Z,{attrs:{color:"blue darken-1",text:""},on:{click:function(t){e.dialogDeleteRestrictions=!1}}},[e._v("Cancelar")]),t(s.Z,{attrs:{color:"blue darken-1",text:""},on:{click:e.clearRestrictions}},[e._v("OK")]),t(T.Z)],1)],1)],1)],1)},O=[],M=i(6308),j=i(6125),V={name:"Restricoes",mixins:[M.Z,j.Z],props:["id"],data(){return{dialog:!1,dialogDelete:!1,editedIndex:-1,editedItem:{id_professor_1:null,id_professor_2:null,id_turno_1:null,id_turno_2:null,dia:null},tiposRestricao:[{id:-1,text:"Permitir (Padrão)"},{id:0,text:"Proibir"},{id:1,text:"Evitar"}],tiposPreferencia:[{id:-1,text:"Nenhuma (Padrão)"},{id:4,text:"Forçar última aula"},{id:2,text:"Primeiras aulas"},{id:3,text:"Últimas aulas"}],lookup:[{icon:"mdi-close-box",class:"proibir"},{icon:"mdi-close-box-outline",class:null}],linhasRestricoes:{},linhasPreferencias:{},diasRestricoes:{},diasRestricoesHeaders:[{text:"Dia",value:"dia"},{text:"Móvel",value:"mobile"}],vinculosDiasRestricoes:[],vinculosDiasRestricoesHeaders:[{text:"Dia",value:"dia"},{text:"Professor 1",value:"id_professor_1"},{text:"Turno 1",value:"id_turno_1"},{text:"Professor 2",value:"id_professor_2"},{text:"Turno 2",value:"id_turno_2"},{text:"Ações",value:"actions"}],aulasPorProfessor:{},rightMouseDown:0,leftMouseDown:0,startRow:null,startCol:null,endRow:null,endCol:null,lastSelection:[],paintMode:"0",dialogDeletePreferences:!1,dialogDeleteRestrictions:!1}},mounted(){this.load()},watch:{professorSelecionado(){this.editedItem=Object.assign({},this.defaultItem)},turnoSelecionado(){this.editedItem=Object.assign({},this.defaultItem)}},methods:{async load(e=!1){try{this.setLoading(e),this.saved(),await this.getStructure();const t={},i={},s={};this.turnos.forEach((e=>{const o=e.id;t[o]={},i[o]={},s[o]={},this.professores.forEach((a=>{t[o][a.id]=[],s[o][a.id]=[];for(let i=0;i<e.classes*this.numero_dias;i++){const e={aula:i},s=this.salas.filter((e=>e.turno===o));s.forEach((t=>e[t.id]=-1)),t[o][a.id].push(e)}i[o][a.id]=[{movable:!1},{movable:!1},{movable:!1},{movable:!1},{movable:!1}];for(let e=0;e<this.numero_dias;e++){const t={dia:e},i=this.salas.filter((e=>e.turno===o));i.forEach((e=>{t[e.id]={aulas:0,tipo:-1}})),s[o][a.id].push(t)}}))}));const o=await this.$axios.get("/restricoes/"+this.id),{restricoes:a,diasRestricoes:n,vinculosDiasRestricoes:r,preferencias:l}=o.data;for(let e of a){const i=e.dia*e.aulas_por_dia+e.aula;t[e.id_turno][e.id_professor][i][e.id_sala]=e.tipo}for(let e of n){const{id_turno:t,id_professor:s,movel:o}=e;o.split(",").forEach(((e,o)=>{i[t][s][o].movable=Boolean(Number(e))}))}for(let e of l){const{id_turno:t,id_sala:i,id_professor:o,dia:a,num_aulas:n,tipo:r}=e,l=s[t][o][a][i];l.tipo=r,4!==r&&(l.aulas=n)}this.linhasRestricoes=t,this.diasRestricoes=i,this.vinculosDiasRestricoes=r,this.linhasPreferencias=s}catch(t){console.error(t)}finally{this.clearLoading()}},async save(e=!0){const{linhasRestricoes:t,vinculosDiasRestricoes:i,diasRestricoes:s,linhasPreferencias:o,id:a}=this,n=await this.$axios.post("/restricoes",{restricoes:t,vinculosDiasRestricoes:i,diasRestricoes:s,linhasPreferencias:o,id:a});200===n.status&&e&&this.load(!0)},closeEditDialog(){this.$refs.editDialog.forEach((e=>{e.isActive=!1}))},editItem(e){this.editedIndex=this.vinculosDiasRestricoes.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem(e){this.editedIndex=this.vinculosDiasRestricoes.indexOf(e),this.editedItem=Object.assign({},e),this.dialogDelete=!0},deleteItemConfirm(){this.vinculosDiasRestricoes.splice(this.editedIndex,1),this.closeDelete()},close(){this.dialog=!1,this.$nextTick((()=>{this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1}))},closeDelete(){this.dialogDelete=!1,this.$nextTick((()=>{this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1}))},saveItem(){this.validateRestrictionDayLink(this.editedItem)?(this.editedIndex>-1?(this.checkChanges(this.vinculosDiasRestricoes[this.editedIndex],this.editedItem),Object.assign(this.vinculosDiasRestricoes[this.editedIndex],this.editedItem)):(this.changed(),this.vinculosDiasRestricoes.push(this.editedItem)),this.close(),this.editedItem=Object.assign({},this.defaultItem)):this.$toast.error("Não é possível vincular restrições de um professor com si mesmo. Isso só é possível se a vinculação for com outro turno.")},validateRestrictionDayLink(e){const{id_professor_1:t,id_professor_2:i,id_turno_1:s,id_turno_2:o,dia:a}=e;if(t===i&&s===o)return!1;for(const n of this.vinculosDiasRestricoes)if(a===n.dia&&(t===n.id_professor_1&&i===n.id_professor_2&&s===n.id_turno_1&&o===n.id_turno_2||t===n.id_professor_2&&i===n.id_professor_1&&s===n.id_turno_2&&o===n.id_turno_1))return!1;return!0},clear(){this.changed();const e=this.professorSelecionado;for(let t=0;t<this.linhasRestricoes[this.turnoSelecionado][e].length;t++)for(const i in this.linhasRestricoes[this.turnoSelecionado][e][t])"aula"!==i&&(this.linhasRestricoes[this.turnoSelecionado][e][t][i]=-1)},preventDefault(e){e.preventDefault()},getClassIndex(e){return this.headersSalasTurnoSelecionado.findIndex((t=>t.value===e))},getColor(e){switch(e){case 0:return"#D50000";case 1:return"#607D8B";default:return null}},paintCell(e,t,i,s){if(this.leftMouseDown||this.rightMouseDown)return this.changed(),void this.fillRegion(this.startRow,s,this.getClassIndex(this.startCol),this.getClassIndex(i))},mouseDownHandler(e,t,i){0===e.button?this.leftMouseDown=1:this.rightMouseDown=1,this.startRow=t,this.startCol=i},mouseUpHandler(e,t,i){this.leftMouseDown=0,this.rightMouseDown=0,this.endRow=t,this.endCol=i,this.lastSelection=[]},fillRegion(e,t,i,s){const o=Math.min(e,t),a=Math.max(e,t),n=Math.min(i,s),r=Math.max(i,s);this.clearLastSelection(),this.lastSelection=[];for(let l=o;l<=a;l++)for(let e=n;e<=r;e++)-1===this.linhasRestricoes[this.turnoSelecionado][this.professorSelecionado][l][this.headersSalasTurnoSelecionado[e].value]&&this.leftMouseDown?(this.linhasRestricoes[this.turnoSelecionado][this.professorSelecionado][l][this.headersSalasTurnoSelecionado[e].value]=Number(this.paintMode),this.lastSelection.push([l,this.headersSalasTurnoSelecionado[e].value])):this.linhasRestricoes[this.turnoSelecionado][this.professorSelecionado][l][this.headersSalasTurnoSelecionado[e].value]===Number(this.paintMode)&&this.rightMouseDown&&(this.lastSelection.push([l,this.headersSalasTurnoSelecionado[e].value,this.linhasRestricoes[this.turnoSelecionado][this.professorSelecionado][l][this.headersSalasTurnoSelecionado[e].value]]),this.linhasRestricoes[this.turnoSelecionado][this.professorSelecionado][l][this.headersSalasTurnoSelecionado[e].value]=-1)},clearLastSelection(){this.lastSelection.forEach((e=>{this.linhasRestricoes[this.turnoSelecionado][this.professorSelecionado][e[0]][e[1]]=e[2]||-1}))},applyToRow(e,t){this.changed();const i=this.professorSelecionado,s={...this.linhasPreferencias[this.turnoSelecionado][i][e][t]};for(const o in this.linhasPreferencias[this.turnoSelecionado][i][e])"dia"!==o&&(this.linhasPreferencias[this.turnoSelecionado][i][e][o]={...s},this.handlePreferenceChange(s,e,o))},applyToColumn(e,t){this.changed();const i=this.professorSelecionado,s={...this.linhasPreferencias[this.turnoSelecionado][i][e][t]};for(let o=0;o<this.linhasPreferencias[this.turnoSelecionado][i].length;o++)this.linhasPreferencias[this.turnoSelecionado][i][o][t]={...s},this.handlePreferenceChange(s,o,t)},applyToDayAllClasses(e,t){this.changed();const i=this.professorSelecionado,s={...this.linhasPreferencias[this.turnoSelecionado][i][e][t]};for(let o=0;o<this.numero_dias;o++)for(const t in this.linhasPreferencias[this.turnoSelecionado][i][e])"dia"!==t&&(this.linhasPreferencias[this.turnoSelecionado][i][o][t]={...s})},handlePreferenceChange(e,t,i){[2,3].includes(e)?this.salasTurnoSelecionado.forEach((i=>{this.linhasPreferencias[this.turnoSelecionado][this.professorSelecionado][t][i.id].tipo=e})):this.salasTurnoSelecionado.forEach((e=>{if(i===e.id)return;let s=this.linhasPreferencias[this.turnoSelecionado][this.professorSelecionado][t][e.id].tipo;[2,3].includes(s)&&(this.linhasPreferencias[this.turnoSelecionado][this.professorSelecionado][t][e.id].tipo=-1)}))},handleNumberLecturesChange(e,t){this.salasTurnoSelecionado.forEach((i=>{this.linhasPreferencias[this.turnoSelecionado][this.professorSelecionado][t][i.id].aulas=e}))},formatPreference(e){const{tipo:t,aulas:i}=e;if(null==t||null==i||-1===t)return null;const s=this.preferenciaLookup[t];if(4===t)return s;if(1===i){if(2===t)return"Primeira aula";if(3===t)return"Última aula"}else if(i>1)return i+" "+s.toLowerCase();return null},clearPreferences(){this.changed();for(let e=0;e<this.linhasPreferencias[this.turnoSelecionado][this.professorSelecionado].length;e++)for(let t in this.linhasPreferencias[this.turnoSelecionado][this.professorSelecionado][e])"dia"!==t&&(this.linhasPreferencias[this.turnoSelecionado][this.professorSelecionado][e][t]={aulas:0,tipo:-1});this.dialogDeletePreferences=!1},clearRestrictions(){this.changed();for(let e=0;e<this.linhasRestricoes[this.turnoSelecionado][this.professorSelecionado].length;e++)for(let t in this.linhasRestricoes[this.turnoSelecionado][this.professorSelecionado][e])"aula"!==t&&(this.linhasRestricoes[this.turnoSelecionado][this.professorSelecionado][e][t]=-1);this.dialogDeleteRestrictions=!1},clearPreference(e,t){console.log("clearPref"),this.changed(),this.closeEditDialog(),this.linhasPreferencias[this.turnoSelecionado][this.professorSelecionado][e][t].tipo=-1,this.linhasPreferencias[this.turnoSelecionado][this.professorSelecionado][e][t].aulas=0,this.handlePreferenceChange(-1,e,t),this.handleNumberLecturesChange(0,e,t)}},computed:{headersPreferencias(){return Array({text:"Dia",value:"dia",align:"center",width:"120px"}).concat(Array.from(this.salasTurnoSelecionado,(e=>({text:e.name,value:e.id}))))},preferenciaLookup(){const e=Array.from(this.tiposPreferencia,(e=>[e.id,e.text]));return Object.fromEntries(e)},diasRestricoesSelecionado(){return null==this.diasRestricoes||null==this.turnoSelecionado||null==this.professorSelecionado?[]:this.turnoSelecionado in this.diasRestricoes?this.diasRestricoes[this.turnoSelecionado][this.professorSelecionado]:[]},vinculosDiasRestricoesProfessorSelecionado(){return this.vinculosDiasRestricoes.filter((e=>[e.id_professor_1,e.id_professor_2].includes(this.professorSelecionado)))},formTitle(){return this.professorSelecionado&&this.turnoSelecionado?-1===this.editedIndex?`Vincular restrições de ${this.professoresLookup[this.professorSelecionado]} (${this.turnosLookup[this.turnoSelecionado]}) a:`:"Editar vínculo":null},defaultItem(){return{id_professor_1:this.professorSelecionado,id_professor_2:null,id_turno_1:this.turnoSelecionado,id_turno_2:null,dia:null}}}},N=V,F=i(3736),G=(0,F.Z)(N,B,O,!1,null,"5db6f106",null),W=G.exports},1610:function(e,t,i){i.d(t,{Z:function(){return c}});var s=i(1649),o=i(3276),a=i(1050),n=i(1903),r=i(496),l=i(4987),c=(0,l.Z)(s.Z,o.Z).extend({name:"v-edit-dialog",props:{cancelText:{default:"Cancel"},large:Boolean,eager:Boolean,persistent:Boolean,saveText:{default:"Save"},transition:{type:String,default:"slide-x-reverse-transition"}},data(){return{isActive:!1}},watch:{isActive(e){e?(this.$emit("open"),setTimeout(this.focus,50)):this.$emit("close")}},methods:{cancel(){this.isActive=!1,this.$emit("cancel")},focus(){const e=this.$refs.content.querySelector("input");e&&e.focus()},genButton(e,t){return this.$createElement(n.Z,{props:{text:!0,color:"primary",light:!0},on:{click:e}},t)},genActions(){return this.$createElement("div",{class:"v-small-dialog__actions"},[this.genButton(this.cancel,this.cancelText),this.genButton((()=>{this.save(this.returnValue),this.$emit("save")}),this.saveText)])},genContent(){return this.$createElement("div",{staticClass:"v-small-dialog__content",on:{keydown:e=>{e.keyCode===a.Do.esc&&this.cancel(),e.keyCode===a.Do.enter&&(this.save(this.returnValue),this.$emit("save"))}},ref:"content"},[this.$slots.input])}},render(e){return e(r.Z,{staticClass:"v-small-dialog",class:this.themeClasses,props:{contentClass:"v-small-dialog__menu-content",transition:this.transition,origin:"top right",right:!0,value:this.isActive,closeOnClick:!this.persistent,closeOnContentClick:!1,eager:this.eager,light:this.light,dark:this.dark},on:{input:e=>this.isActive=e},scopedSlots:{activator:({on:t})=>e("div",{staticClass:"v-small-dialog__activator",on:t},[e("span",{staticClass:"v-small-dialog__activator__content"},this.$slots.default)])}},[this.genContent(),this.large?this.genActions():null])}})},4437:function(e,t,i){i(1884);var s=i(144),o=i(2653),a=i(1050);const n=["sm","md","lg","xl"],r=(()=>n.reduce(((e,t)=>(e[t]={type:[Boolean,String,Number],default:!1},e)),{}))(),l=(()=>n.reduce(((e,t)=>(e["offset"+(0,a.jC)(t)]={type:[String,Number],default:null},e)),{}))(),c=(()=>n.reduce(((e,t)=>(e["order"+(0,a.jC)(t)]={type:[String,Number],default:null},e)),{}))(),d={col:Object.keys(r),offset:Object.keys(l),order:Object.keys(c)};function u(e,t,i){let s=e;if(null!=i&&!1!==i){if(t){const i=t.replace(e,"");s+=`-${i}`}return"col"!==e||""!==i&&!0!==i?(s+=`-${i}`,s.toLowerCase()):s.toLowerCase()}}const h=new Map;t["Z"]=s.ZP.extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...r,offset:{type:[String,Number],default:null},...l,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:e=>["auto","start","end","center","baseline","stretch"].includes(e)},tag:{type:String,default:"div"}},render(e,{props:t,data:i,children:s,parent:a}){let n="";for(const o in t)n+=String(t[o]);let r=h.get(n);if(!r){let e;for(e in r=[],d)d[e].forEach((i=>{const s=t[i],o=u(e,i,s);o&&r.push(o)}));const i=r.some((e=>e.startsWith("col-")));r.push({col:!i||!t.cols,[`col-${t.cols}`]:t.cols,[`offset-${t.offset}`]:t.offset,[`order-${t.order}`]:t.order,[`align-self-${t.alignSelf}`]:t.alignSelf}),h.set(n,r)}return e(t.tag,(0,o.ZP)(i,{class:r}),s)}})},5294:function(e,t,i){i(1884);var s=i(144),o=i(2653),a=i(1050);const n=["sm","md","lg","xl"],r=["start","end","center"];function l(e,t){return n.reduce(((i,s)=>(i[e+(0,a.jC)(s)]=t(),i)),{})}const c=e=>[...r,"baseline","stretch"].includes(e),d=l("align",(()=>({type:String,default:null,validator:c}))),u=e=>[...r,"space-between","space-around"].includes(e),h=l("justify",(()=>({type:String,default:null,validator:u}))),p=e=>[...r,"space-between","space-around","stretch"].includes(e),f=l("alignContent",(()=>({type:String,default:null,validator:p}))),m={align:Object.keys(d),justify:Object.keys(h),alignContent:Object.keys(f)},g={align:"align",justify:"justify",alignContent:"align-content"};function v(e,t,i){let s=g[e];if(null!=i){if(t){const i=t.replace(e,"");s+=`-${i}`}return s+=`-${i}`,s.toLowerCase()}}const S=new Map;t["Z"]=s.ZP.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...d,justify:{type:String,default:null,validator:u},...h,alignContent:{type:String,default:null,validator:p},...f},render(e,{props:t,data:i,children:s}){let a="";for(const o in t)a+=String(t[o]);let n=S.get(a);if(!n){let e;for(e in n=[],m)m[e].forEach((i=>{const s=t[i],o=v(e,i,s);o&&n.push(o)}));n.push({"no-gutters":t.noGutters,"row--dense":t.dense,[`align-${t.align}`]:t.align,[`justify-${t.justify}`]:t.justify,[`align-content-${t.alignContent}`]:t.alignContent}),S.set(a,n)}return e(t.tag,(0,o.ZP)(i,{staticClass:"row",class:n}),s)}})},3432:function(e,t,i){i.d(t,{Z:function(){return u}});var s=i(5840),o=i(8914),a=i(4019),n=i(2524),r=i(7482),l=i(1050),c=i(6596),d=i(4987),u=(0,d.Z)(o.Z,a.Z,n.Z,r.Z).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},openOnFocus:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:()=>({calculatedMinWidth:0,closeDependents:!1}),computed:{calculatedLeft(){const{activator:e,content:t}=this.dimensions,i=!this.bottom&&!this.left&&!this.top&&!this.right,s=!1!==this.attach?e.offsetLeft:e.left;let o=0;return this.top||this.bottom||i?o=s+e.width/2-t.width/2:(this.left||this.right)&&(o=s+(this.right?e.width:-t.width)+(this.right?10:-10)),this.nudgeLeft&&(o-=parseInt(this.nudgeLeft)),this.nudgeRight&&(o+=parseInt(this.nudgeRight)),`${this.calcXOverflow(o,this.dimensions.content.width)}px`},calculatedTop(){const{activator:e,content:t}=this.dimensions,i=!1!==this.attach?e.offsetTop:e.top;let s=0;return this.top||this.bottom?s=i+(this.bottom?e.height:-t.height)+(this.bottom?10:-10):(this.left||this.right)&&(s=i+e.height/2-t.height/2),this.nudgeTop&&(s-=parseInt(this.nudgeTop)),this.nudgeBottom&&(s+=parseInt(this.nudgeBottom)),!1===this.attach&&(s+=this.pageYOffset),`${this.calcYOverflow(s)}px`},classes(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY(){return this.top||this.bottom},offsetX(){return this.left||this.right},styles(){return{left:this.calculatedLeft,maxWidth:(0,l.kb)(this.maxWidth),minWidth:(0,l.kb)(this.minWidth),top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount(){this.$nextTick((()=>{this.value&&this.callActivate()}))},mounted(){"v-slot"===(0,l.sp)(this,"activator",!0)&&(0,c.N6)("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate(){this.runDelay("close")},genActivatorListeners(){const e=s.Z.options.methods.genActivatorListeners.call(this);return this.openOnFocus&&(e.focus=e=>{this.getActivator(e),this.runDelay("open")},e.blur=e=>{this.getActivator(e),this.runDelay("close")}),e.keydown=e=>{e.keyCode===l.Do.esc&&(this.getActivator(e),this.runDelay("close"))},e},genActivatorAttributes(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition(){const e=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[e]):e},genContent(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:{[this.contentClass]:!0,menuable__content__active:this.isActive,"v-tooltip__content--fixed":this.activatorFixed},style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render(e){return e(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((()=>[this.genTransition()])),this.genActivator()])}})},1734:function(e,t,i){var s=i(3176),o=i(144);t["Z"]=o.ZP.extend({name:"rippleable",directives:{ripple:s.Z},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple(e={}){return this.ripple?(e.staticClass="v-input--selection-controls__ripple",e.directives=e.directives||[],e.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",e)):null}}})},911:function(e,t,i){i.d(t,{X:function(){return r}});var s=i(3316),o=i(1734),a=i(564),n=i(4987);function r(e){e.preventDefault()}t["Z"]=(0,n.Z)(s.Z,o.Z,a.Z).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive(){const e=this.value,t=this.internalValue;return this.isMultiple?!!Array.isArray(t)&&t.some((t=>this.valueComparator(t,e))):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,t):Boolean(t):this.valueComparator(t,this.trueValue)},isDirty(){return this.isActive},rippleState(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue(e){this.lazyValue=e,this.hasColor=e}},methods:{genLabel(){const e=s.Z.options.methods.genLabel.call(this);return e?(e.data.on={click:r},e):e},genInput(e,t){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:e,type:e},t),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:r},ref:"input"})},onClick(e){this.onChange(),this.$emit("click",e)},onChange(){if(!this.isInteractive)return;const e=this.value;let t=this.internalValue;if(this.isMultiple){Array.isArray(t)||(t=[]);const i=t.length;t=t.filter((t=>!this.valueComparator(t,e))),t.length===i&&t.push(e)}else t=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(t,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(t,e)?null:e:!t;this.validate(!0,t),this.internalValue=t,this.hasColor=t},onFocus(e){this.isFocused=!0,this.$emit("focus",e)},onBlur(e){this.isFocused=!1,this.$emit("blur",e)},onKeydown(e){}}})},6308:function(e,t){t["Z"]={methods:{applyToRow(e,t){this.closeEditDialog(),this.$emit("applyToRow",this.professorSelecionado,e,t)},applyToColumn(e,t){this.closeEditDialog(),this.$emit("applyToColumn",this.professorSelecionado,e,t)},applyToDay(e,t){this.closeEditDialog(),this.$emit("applyToDay",this.professorSelecionado,e,t)},applyToDayAllClasses(e,t){this.closeEditDialog(),this.$emit("applyToDayAllClasses",this.professorSelecionado,e,t)}}}},7393:function(){}}]);
//# sourceMappingURL=802.3bfcf9eb.js.map