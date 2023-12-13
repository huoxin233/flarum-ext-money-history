(()=>{var t={n:o=>{var e=o&&o.__esModule?()=>o.default:()=>o;return t.d(e,{a:e}),e},d:(o,e)=>{for(var r in e)t.o(e,r)&&!t.o(o,r)&&Object.defineProperty(o,r,{enumerable:!0,get:e[r]})},o:(t,o)=>Object.prototype.hasOwnProperty.call(t,o),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},o={};(()=>{"use strict";t.r(o);const e=flarum.core.compat["forum/app"];var r=t.n(e);const n=flarum.core.compat["common/extend"],s=flarum.core.compat["forum/components/UserPage"];var a=t.n(s);const i=flarum.core.compat["common/components/LinkButton"];var u=t.n(i);function l(t,o){return l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,o){return t.__proto__=o,t},l(t,o)}function c(t,o){t.prototype=Object.create(o.prototype),t.prototype.constructor=t,l(t,o)}const p=flarum.core.compat.Component;var y=t.n(p);const d=flarum.core.compat.app;var h=t.n(d);const f=flarum.core.compat["components/LoadingIndicator"];var g=t.n(f);const v=flarum.core.compat["components/Button"];var b=t.n(v);const M=flarum.core.compat["components/Link"];var x=t.n(M);const H=flarum.core.compat["helpers/avatar"];var O=t.n(H);const R=flarum.core.compat["helpers/username"];var _=t.n(R),j=function(t){function o(){return t.apply(this,arguments)||this}return c(o,t),o.prototype.view=function(){var t=this.attrs.userMoneyHistory,o=t.changeTime(),e=t.money(),r=t.sourceDesc(),n=t.id(),s=t.user(),a=t.createUser(),i=app.translator.trans("C"===t.type()?"mattoid-money-history.forum.record.money-out":"mattoid-money-history.forum.record.money-in"),u="C"===t.type()?"color:red":"color:green";return m("div",{className:"transferHistoryContainer"},m("div",{style:"padding-top: 5px;"},m("b",null,app.translator.trans("mattoid-money-history.forum.record.money-list-type"),": "),m("span",{style:u},i)," | ",m("b",null,app.translator.trans("mattoid-money-history.forum.record.money-list-assign-at"),": "),o),m("div",{style:"padding-top: 5px;"},m("b",null,app.translator.trans("mattoid-money-history.forum.record.money-list-id"),": "),n," | ",m("b",null,app.translator.trans("mattoid-money-history.forum.record.money-list-from-user"),": "),m(x(),{href:"#",className:"moneyHistoryUser",style:"color:var(--heading-color)"},O()(a)," ",_()(a))," | ",m("b",null,app.translator.trans("mattoid-money-history.forum.record.money-list-target-user"),": "),m(x(),{href:"#",className:"moneyHistoryUser",style:"color:var(--heading-color)"},O()(s)," ",_()(s))," | ",m("b",null,app.translator.trans("mattoid-money-history.forum.record.money-list-amount"),": "),e,m("span",null,"| ",m("b",null,app.translator.trans("mattoid-money-history.forum.record.money-list-transfer-notes"),": "),r)))},o}(y()),P=function(t){function o(){return t.apply(this,arguments)||this}c(o,t);var e=o.prototype;return e.oninit=function(o){t.prototype.oninit.call(this,o),this.loading=!0,this.moreResults=!1,this.userMoneyHistory=[],this.user=this.attrs.params.user,this.loadResults()},e.view=function(){var t=this;return this.loading&&g().component({size:"large"}),m("div",null,m("div",{style:"padding-bottom:10px; font-size: 24px;font-weight: bold;"},h().translator.trans("mattoid-money-history.forum.title")),m("ul",{style:"margin: 0;padding: 0;list-style-type: none;position: relative;"},this.userMoneyHistory.map((function(t){return m("li",{style:"padding-top:5px",key:t.id,"data-id":t.id},j.component({userMoneyHistory:t}))}))),!this.loading&&0===this.userMoneyHistory.length&&m("div",null,m("div",{style:"font-size:1.4em;color: var(--muted-more-color);text-align: center;height: 300px;line-height: 100px;"},h().translator.trans("mattoid-money-history.forum.list-empty"))),this.hasMoreResults()&&m("div",{style:"text-align:center;padding:20px"},m(b(),{className:"Button Button--primary",disabled:this.loading,loading:this.loading,onclick:function(){return t.loadMore()}},h().translator.trans("mattoid-money-history.forum.money-list-load-more"))))},e.loadMore=function(){this.loading=!0,this.loadResults(this.userMoneyHistory.length)},e.parseResults=function(t){return this.moreResults=!!t.payload.links&&!!t.payload.links.next,[].push.apply(this.userMoneyHistory,t),this.loading=!1,m.redraw(),t},e.hasMoreResults=function(){return this.moreResults},e.loadResults=function(t){void 0===t&&(t=0);var o="/users/"+this.user.id()+"/money/history";return h().store.find(o,{filter:{user:this.user.id()},page:{offset:t}}).catch((function(){})).then(this.parseResults.bind(this))},o}(y()),U=function(t){function o(){return t.apply(this,arguments)||this}c(o,t);var e=o.prototype;return e.oninit=function(o){t.prototype.oninit.call(this,o),this.loadUser(m.route.param("username"))},e.content=function(){return m("div",{className:"MoneyHistoryPage"},P.component({params:{user:this.user}}))},o}(a());const k=flarum.core.compat["common/Model"];var w=t.n(k),N=function(t){function o(){return t.apply(this,arguments)||this}return c(o,t),o}(w());Object.assign(N.prototype,{type:w().attribute("type"),money:w().attribute("money"),sourceDesc:w().attribute("source_desc"),changeTime:w().attribute("change_time"),user:w().hasOne("user"),createUser:w().hasOne("createUser")}),r().initializers.add("flarum-ext-money-history",(function(){r().store.models.userMoneyHistory=N,r().routes.userMoneyHistory={path:"/u/:username/money/history",component:U},(0,n.extend)(a().prototype,"navItems",(function(t){r().session.user&&t.add("userMoneyHistory",u().component({href:r().route("userMoneyHistory",{username:r().session.user.username()}),icon:"fas fa-money-bill"},r().translator.trans("mattoid-money-history.forum.nav")))}))}))})(),module.exports=o})();
//# sourceMappingURL=forum.js.map