(()=>{var a={n:t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return a.d(e,{a:e}),e},d:(t,e)=>{for(var s in e)a.o(e,s)&&!a.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},o:(a,t)=>Object.prototype.hasOwnProperty.call(a,t),r:a=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})}},t={};(()=>{"use strict";a.r(t);const e=flarum.core.compat["admin/app"];var s=a.n(e);s().initializers.add("blomstra-search",(function(){var a=new Map;["arabic","armenian","basque","bengali","brazilian","bulgarian","catalan","cjk","czech","danish","dutch","english","estonian","finnish","french","galician","german","greek","hindi","hungarian","indonesian","irish","italian","latvian","lithuanian","norwegian","persian","portuguese","romanian","russian","sorani","spanish","swedish","turkish","thai"].forEach((function(t){a.set(t,t)})),s().extensionData.for("blomstra-search").registerSetting({setting:"blomstra-search.elastic-endpoint",label:s().translator.trans("blomstra-search.admin.elastic-endpoint"),type:"input"}).registerSetting({setting:"blomstra-search.elastic-username",label:s().translator.trans("blomstra-search.admin.elastic-username"),type:"input"}).registerSetting({setting:"blomstra-search.elastic-password",label:s().translator.trans("blomstra-search.admin.elastic-password"),type:"password"}).registerSetting({setting:"blomstra-search.elastic-index",label:s().translator.trans("blomstra-search.admin.elastic-index"),default:"flarum",type:"input"}).registerSetting({setting:"blomstra-search.analyzer-language",label:s().translator.trans("blomstra-search.admin.analyzer.label"),help:s().translator.trans("blomstra-search.admin.analyzer.help"),type:"select",options:Object.fromEntries(a.entries()),default:"english"}).registerSetting({setting:"blomstra-search.elastic-index",label:s().translator.trans("blomstra-search.admin.elastic-index"),default:"flarum",type:"input"}).registerSetting({setting:"blomstra-search.search-discussion-subjects",label:s().translator.trans("blomstra-search.admin.search-discussion-subjects"),type:"switch"}).registerSetting({setting:"blomstra-search.search-post-bodies",label:s().translator.trans("blomstra-search.admin.search-post-bodies"),type:"switch"}).registerSetting({setting:"blomstra-search.match-sentences",label:s().translator.trans("blomstra-search.admin.match-sentences"),type:"switch"}).registerSetting({setting:"blomstra-search.match-words",label:s().translator.trans("blomstra-search.admin.match-words"),type:"switch"})}))})(),module.exports=t})();
//# sourceMappingURL=admin.js.map