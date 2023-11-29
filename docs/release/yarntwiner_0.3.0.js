window.storyFormat({"name":"YarnTwiner","version":"0.3.0","author":"Khan-ali Ibrahim (KXI System)","description":"The Twine story format that lets you write and export to Yarn!","image":"https://kxi-system.github.io/YarnTwiner/logo.png","url":"https://github.com/KXI-System/YarnTwiner","license":"MIT License","proofing":false,"source":"<!doctype html>\n<html lang=\"en\">\n<head>\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"/>\n    <meta charset=\"utf-8\"/>\n    <title>{{STORY_NAME}} - YarnTwiner</title>\n  <script type=\"module\" crossorigin>\nvar Lt=Object.defineProperty;var $t=(e,t,n)=>t in e?Lt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var _e=(e,t,n)=>($t(e,typeof t!=\"symbol\"?t+\"\":t,n),n);(function(){const t=document.createElement(\"link\").relList;if(t&&t.supports&&t.supports(\"modulepreload\"))return;for(const a of document.querySelectorAll('link[rel=\"modulepreload\"]'))i(a);new MutationObserver(a=>{for(const c of a)if(c.type===\"childList\")for(const r of c.addedNodes)r.tagName===\"LINK\"&&r.rel===\"modulepreload\"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin===\"use-credentials\"?c.credentials=\"include\":a.crossOrigin===\"anonymous\"?c.credentials=\"omit\":c.credentials=\"same-origin\",c}function i(a){if(a.ep)return;a.ep=!0;const c=n(a);fetch(a.href,c)}})();function X(){}function Ve(e){return e()}function Be(){return Object.create(null)}function te(e){e.forEach(Ve)}function Je(e){return typeof e==\"function\"}function Qe(e,t){return e!=e?t==t:e!==t||e&&typeof e==\"object\"||typeof e==\"function\"}function Dt(e){return Object.keys(e).length===0}function T(e,t){e.appendChild(t)}function fe(e,t,n){e.insertBefore(t,n||null)}function J(e){e.parentNode&&e.parentNode.removeChild(e)}function Bt(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function k(e){return document.createElement(e)}function ye(e){return document.createTextNode(e)}function z(){return ye(\" \")}function jt(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function ae(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Pt(e){return Array.from(e.childNodes)}function Ht(e,t){t=\"\"+t,e.data!==t&&(e.data=t)}let Ne;function Z(e){Ne=e}const W=[],je=[];let Y=[];const Pe=[],Ut=Promise.resolve();let Me=!1;function Gt(){Me||(Me=!0,Ut.then(et))}function xe(e){Y.push(e)}const Ee=new Set;let F=0;function et(){if(F!==0)return;const e=Ne;do{try{for(;F<W.length;){const t=W[F];F++,Z(t),Ft(t.$$)}}catch(t){throw W.length=0,F=0,t}for(Z(null),W.length=0,F=0;je.length;)je.pop()();for(let t=0;t<Y.length;t+=1){const n=Y[t];Ee.has(n)||(Ee.add(n),n())}Y.length=0}while(W.length);for(;Pe.length;)Pe.pop()();Me=!1,Ee.clear(),Z(e)}function Ft(e){if(e.fragment!==null){e.update(),te(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(xe)}}function Kt(e){const t=[],n=[];Y.forEach(i=>e.indexOf(i)===-1?t.push(i):n.push(i)),n.forEach(i=>i()),Y=t}const ue=new Set;let H;function Wt(){H={r:0,c:[],p:H}}function zt(){H.r||te(H.c),H=H.p}function V(e,t){e&&e.i&&(ue.delete(e),e.i(t))}function Oe(e,t,n,i){if(e&&e.o){if(ue.has(e))return;ue.add(e),H.c.push(()=>{ue.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function He(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function Yt(e){e&&e.c()}function tt(e,t,n){const{fragment:i,after_update:a}=e.$$;i&&i.m(t,n),xe(()=>{const c=e.$$.on_mount.map(Ve).filter(Je);e.$$.on_destroy?e.$$.on_destroy.push(...c):te(c),e.$$.on_mount=[]}),a.forEach(xe)}function nt(e,t){const n=e.$$;n.fragment!==null&&(Kt(n.after_update),te(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Xt(e,t){e.$$.dirty[0]===-1&&(W.push(e),Gt(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function it(e,t,n,i,a,c,r=null,s=[-1]){const u=Ne;Z(e);const g=e.$$={fragment:null,ctx:[],props:c,update:X,not_equal:a,bound:Be(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:Be(),dirty:s,skip_bound:!1,root:t.target||u.$$.root};r&&r(g.root);let d=!1;if(g.ctx=n?n(e,t.props||{},(p,m,...w)=>{const y=w.length?w[0]:m;return g.ctx&&a(g.ctx[p],g.ctx[p]=y)&&(!g.skip_bound&&g.bound[p]&&g.bound[p](y),d&&Xt(e,p)),m}):[],g.update(),d=!0,te(g.before_update),g.fragment=i?i(g.ctx):!1,t.target){if(t.hydrate){const p=Pt(t.target);g.fragment&&g.fragment.l(p),p.forEach(J)}else g.fragment&&g.fragment.c();t.intro&&V(e.$$.fragment),tt(e,t.target,t.anchor),et()}Z(u)}class rt{constructor(){_e(this,\"$$\");_e(this,\"$$set\")}$destroy(){nt(this,1),this.$destroy=X}$on(t,n){if(!Je(n))return X;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const a=i.indexOf(n);a!==-1&&i.splice(a,1)}}$set(t){this.$$set&&!Dt(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const qt=\"4\";typeof window<\"u\"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(qt);function Zt(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,\"default\")?e.default:e}function st(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error(\"map is read-only\")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error(\"set is read-only\")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(t=>{const n=e[t],i=typeof n;(i===\"object\"||i===\"function\")&&!Object.isFrozen(n)&&st(n)}),e}class Ue{constructor(t){t.data===void 0&&(t.data={}),this.data=t.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function ot(e){return e.replace(/&/g,\"&amp;\").replace(/</g,\"&lt;\").replace(/>/g,\"&gt;\").replace(/\"/g,\"&quot;\").replace(/'/g,\"&#x27;\")}function j(e,...t){const n=Object.create(null);for(const i in e)n[i]=e[i];return t.forEach(function(i){for(const a in i)n[a]=i[a]}),n}const Vt=\"</span>\",Ge=e=>!!e.scope,Jt=(e,{prefix:t})=>{if(e.startsWith(\"language:\"))return e.replace(\"language:\",\"language-\");if(e.includes(\".\")){const n=e.split(\".\");return[`${t}${n.shift()}`,...n.map((i,a)=>`${i}${\"_\".repeat(a+1)}`)].join(\" \")}return`${t}${e}`};class Qt{constructor(t,n){this.buffer=\"\",this.classPrefix=n.classPrefix,t.walk(this)}addText(t){this.buffer+=ot(t)}openNode(t){if(!Ge(t))return;const n=Jt(t.scope,{prefix:this.classPrefix});this.span(n)}closeNode(t){Ge(t)&&(this.buffer+=Vt)}value(){return this.buffer}span(t){this.buffer+=`<span class=\"${t}\">`}}const Fe=(e={})=>{const t={children:[]};return Object.assign(t,e),t};class Se{constructor(){this.rootNode=Fe(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(t){this.top.children.push(t)}openNode(t){const n=Fe({scope:t});this.add(n),this.stack.push(n)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(t){return this.constructor._walk(t,this.rootNode)}static _walk(t,n){return typeof n==\"string\"?t.addText(n):n.children&&(t.openNode(n),n.children.forEach(i=>this._walk(t,i)),t.closeNode(n)),t}static _collapse(t){typeof t!=\"string\"&&t.children&&(t.children.every(n=>typeof n==\"string\")?t.children=[t.children.join(\"\")]:t.children.forEach(n=>{Se._collapse(n)}))}}class en extends Se{constructor(t){super(),this.options=t}addText(t){t!==\"\"&&this.add(t)}startScope(t){this.openNode(t)}endScope(){this.closeNode()}__addSublanguage(t,n){const i=t.root;n&&(i.scope=`language:${n}`),this.add(i)}toHTML(){return new Qt(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function Q(e){return e?typeof e==\"string\"?e:e.source:null}function ct(e){return G(\"(?=\",e,\")\")}function tn(e){return G(\"(?:\",e,\")*\")}function nn(e){return G(\"(?:\",e,\")?\")}function G(...e){return e.map(n=>Q(n)).join(\"\")}function rn(e){const t=e[e.length-1];return typeof t==\"object\"&&t.constructor===Object?(e.splice(e.length-1,1),t):{}}function Re(...e){return\"(\"+(rn(e).capture?\"\":\"?:\")+e.map(i=>Q(i)).join(\"|\")+\")\"}function lt(e){return new RegExp(e.toString()+\"|\").exec(\"\").length-1}function sn(e,t){const n=e&&e.exec(t);return n&&n.index===0}const on=/\\[(?:[^\\\\\\]]|\\\\.)*\\]|\\(\\??|\\\\([1-9][0-9]*)|\\\\./;function me(e,{joinWith:t}){let n=0;return e.map(i=>{n+=1;const a=n;let c=Q(i),r=\"\";for(;c.length>0;){const s=on.exec(c);if(!s){r+=c;break}r+=c.substring(0,s.index),c=c.substring(s.index+s[0].length),s[0][0]===\"\\\\\"&&s[1]?r+=\"\\\\\"+String(Number(s[1])+a):(r+=s[0],s[0]===\"(\"&&n++)}return r}).map(i=>`(${i})`).join(t)}const cn=/\\b\\B/,at=\"[a-zA-Z]\\\\w*\",Ae=\"[a-zA-Z_]\\\\w*\",ut=\"\\\\b\\\\d+(\\\\.\\\\d+)?\",ft=\"(-?)(\\\\b0[xX][a-fA-F0-9]+|(\\\\b\\\\d+(\\\\.\\\\d*)?|\\\\.\\\\d+)([eE][-+]?\\\\d+)?)\",gt=\"\\\\b(0b[01]+)\",ln=\"!|!=|!==|%|%=|&|&&|&=|\\\\*|\\\\*=|\\\\+|\\\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\\\?|\\\\[|\\\\{|\\\\(|\\\\^|\\\\^=|\\\\||\\\\|=|\\\\|\\\\||~\",an=(e={})=>{const t=/^#![ ]*\\//;return e.binary&&(e.begin=G(t,/.*\\b/,e.binary,/\\b.*/)),j({scope:\"meta\",begin:t,end:/$/,relevance:0,\"on:begin\":(n,i)=>{n.index!==0&&i.ignoreMatch()}},e)},ee={begin:\"\\\\\\\\[\\\\s\\\\S]\",relevance:0},un={scope:\"string\",begin:\"'\",end:\"'\",illegal:\"\\\\n\",contains:[ee]},fn={scope:\"string\",begin:'\"',end:'\"',illegal:\"\\\\n\",contains:[ee]},gn={begin:/\\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\\b/},he=function(e,t,n={}){const i=j({scope:\"comment\",begin:e,end:t,contains:[]},n);i.contains.push({scope:\"doctag\",begin:\"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)\",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const a=Re(\"I\",\"a\",\"is\",\"so\",\"us\",\"to\",\"at\",\"if\",\"in\",\"it\",\"on\",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return i.contains.push({begin:G(/[ ]+/,\"(\",a,/[.]?[:]?([.][ ]|[ ])/,\"){3}\")}),i},hn=he(\"//\",\"$\"),dn=he(\"/\\\\*\",\"\\\\*/\"),pn=he(\"#\",\"$\"),bn={scope:\"number\",begin:ut,relevance:0},_n={scope:\"number\",begin:ft,relevance:0},En={scope:\"number\",begin:gt,relevance:0},wn={scope:\"regexp\",begin:/\\/(?=[^/\\n]*\\/)/,end:/\\/[gimuy]*/,contains:[ee,{begin:/\\[/,end:/\\]/,relevance:0,contains:[ee]}]},yn={scope:\"title\",begin:at,relevance:0},Mn={scope:\"title\",begin:Ae,relevance:0},xn={begin:\"\\\\.\\\\s*\"+Ae,relevance:0},On=function(e){return Object.assign(e,{\"on:begin\":(t,n)=>{n.data._beginMatch=t[1]},\"on:end\":(t,n)=>{n.data._beginMatch!==t[1]&&n.ignoreMatch()}})};var le=Object.freeze({__proto__:null,APOS_STRING_MODE:un,BACKSLASH_ESCAPE:ee,BINARY_NUMBER_MODE:En,BINARY_NUMBER_RE:gt,COMMENT:he,C_BLOCK_COMMENT_MODE:dn,C_LINE_COMMENT_MODE:hn,C_NUMBER_MODE:_n,C_NUMBER_RE:ft,END_SAME_AS_BEGIN:On,HASH_COMMENT_MODE:pn,IDENT_RE:at,MATCH_NOTHING_RE:cn,METHOD_GUARD:xn,NUMBER_MODE:bn,NUMBER_RE:ut,PHRASAL_WORDS_MODE:gn,QUOTE_STRING_MODE:fn,REGEXP_MODE:wn,RE_STARTERS_RE:ln,SHEBANG:an,TITLE_MODE:yn,UNDERSCORE_IDENT_RE:Ae,UNDERSCORE_TITLE_MODE:Mn});function Nn(e,t){e.input[e.index-1]===\".\"&&t.ignoreMatch()}function Sn(e,t){e.className!==void 0&&(e.scope=e.className,delete e.className)}function Rn(e,t){t&&e.beginKeywords&&(e.begin=\"\\\\b(\"+e.beginKeywords.split(\" \").join(\"|\")+\")(?!\\\\.)(?=\\\\b|\\\\s)\",e.__beforeBegin=Nn,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,e.relevance===void 0&&(e.relevance=0))}function mn(e,t){Array.isArray(e.illegal)&&(e.illegal=Re(...e.illegal))}function An(e,t){if(e.match){if(e.begin||e.end)throw new Error(\"begin & end are not supported with match\");e.begin=e.match,delete e.match}}function Tn(e,t){e.relevance===void 0&&(e.relevance=1)}const vn=(e,t)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error(\"beforeMatch cannot be used with starts\");const n=Object.assign({},e);Object.keys(e).forEach(i=>{delete e[i]}),e.keywords=n.keywords,e.begin=G(n.beforeMatch,ct(n.begin)),e.starts={relevance:0,contains:[Object.assign(n,{endsParent:!0})]},e.relevance=0,delete n.beforeMatch},kn=[\"of\",\"and\",\"for\",\"in\",\"not\",\"or\",\"if\",\"then\",\"parent\",\"list\",\"value\"],Cn=\"keyword\";function ht(e,t,n=Cn){const i=Object.create(null);return typeof e==\"string\"?a(n,e.split(\" \")):Array.isArray(e)?a(n,e):Object.keys(e).forEach(function(c){Object.assign(i,ht(e[c],t,c))}),i;function a(c,r){t&&(r=r.map(s=>s.toLowerCase())),r.forEach(function(s){const u=s.split(\"|\");i[u[0]]=[c,In(u[0],u[1])]})}}function In(e,t){return t?Number(t):Ln(e)?0:1}function Ln(e){return kn.includes(e.toLowerCase())}const Ke={},U=e=>{console.error(e)},We=(e,...t)=>{console.log(`WARN: ${e}`,...t)},K=(e,t)=>{Ke[`${e}/${t}`]||(console.log(`Deprecated as of ${e}. ${t}`),Ke[`${e}/${t}`]=!0)},ge=new Error;function dt(e,t,{key:n}){let i=0;const a=e[n],c={},r={};for(let s=1;s<=t.length;s++)r[s+i]=a[s],c[s+i]=!0,i+=lt(t[s-1]);e[n]=r,e[n]._emit=c,e[n]._multi=!0}function $n(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw U(\"skip, excludeBegin, returnBegin not compatible with beginScope: {}\"),ge;if(typeof e.beginScope!=\"object\"||e.beginScope===null)throw U(\"beginScope must be object\"),ge;dt(e,e.begin,{key:\"beginScope\"}),e.begin=me(e.begin,{joinWith:\"\"})}}function Dn(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw U(\"skip, excludeEnd, returnEnd not compatible with endScope: {}\"),ge;if(typeof e.endScope!=\"object\"||e.endScope===null)throw U(\"endScope must be object\"),ge;dt(e,e.end,{key:\"endScope\"}),e.end=me(e.end,{joinWith:\"\"})}}function Bn(e){e.scope&&typeof e.scope==\"object\"&&e.scope!==null&&(e.beginScope=e.scope,delete e.scope)}function jn(e){Bn(e),typeof e.beginScope==\"string\"&&(e.beginScope={_wrap:e.beginScope}),typeof e.endScope==\"string\"&&(e.endScope={_wrap:e.endScope}),$n(e),Dn(e)}function Pn(e){function t(r,s){return new RegExp(Q(r),\"m\"+(e.case_insensitive?\"i\":\"\")+(e.unicodeRegex?\"u\":\"\")+(s?\"g\":\"\"))}class n{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(s,u){u.position=this.position++,this.matchIndexes[this.matchAt]=u,this.regexes.push([u,s]),this.matchAt+=lt(s)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const s=this.regexes.map(u=>u[1]);this.matcherRe=t(me(s,{joinWith:\"|\"}),!0),this.lastIndex=0}exec(s){this.matcherRe.lastIndex=this.lastIndex;const u=this.matcherRe.exec(s);if(!u)return null;const g=u.findIndex((p,m)=>m>0&&p!==void 0),d=this.matchIndexes[g];return u.splice(0,g),Object.assign(u,d)}}class i{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(s){if(this.multiRegexes[s])return this.multiRegexes[s];const u=new n;return this.rules.slice(s).forEach(([g,d])=>u.addRule(g,d)),u.compile(),this.multiRegexes[s]=u,u}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(s,u){this.rules.push([s,u]),u.type===\"begin\"&&this.count++}exec(s){const u=this.getMatcher(this.regexIndex);u.lastIndex=this.lastIndex;let g=u.exec(s);if(this.resumingScanAtSamePosition()&&!(g&&g.index===this.lastIndex)){const d=this.getMatcher(0);d.lastIndex=this.lastIndex+1,g=d.exec(s)}return g&&(this.regexIndex+=g.position+1,this.regexIndex===this.count&&this.considerAll()),g}}function a(r){const s=new i;return r.contains.forEach(u=>s.addRule(u.begin,{rule:u,type:\"begin\"})),r.terminatorEnd&&s.addRule(r.terminatorEnd,{type:\"end\"}),r.illegal&&s.addRule(r.illegal,{type:\"illegal\"}),s}function c(r,s){const u=r;if(r.isCompiled)return u;[Sn,An,jn,vn].forEach(d=>d(r,s)),e.compilerExtensions.forEach(d=>d(r,s)),r.__beforeBegin=null,[Rn,mn,Tn].forEach(d=>d(r,s)),r.isCompiled=!0;let g=null;return typeof r.keywords==\"object\"&&r.keywords.$pattern&&(r.keywords=Object.assign({},r.keywords),g=r.keywords.$pattern,delete r.keywords.$pattern),g=g||/\\w+/,r.keywords&&(r.keywords=ht(r.keywords,e.case_insensitive)),u.keywordPatternRe=t(g,!0),s&&(r.begin||(r.begin=/\\B|\\b/),u.beginRe=t(u.begin),!r.end&&!r.endsWithParent&&(r.end=/\\B|\\b/),r.end&&(u.endRe=t(u.end)),u.terminatorEnd=Q(u.end)||\"\",r.endsWithParent&&s.terminatorEnd&&(u.terminatorEnd+=(r.end?\"|\":\"\")+s.terminatorEnd)),r.illegal&&(u.illegalRe=t(r.illegal)),r.contains||(r.contains=[]),r.contains=[].concat(...r.contains.map(function(d){return Hn(d===\"self\"?r:d)})),r.contains.forEach(function(d){c(d,u)}),r.starts&&c(r.starts,s),u.matcher=a(u),u}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes(\"self\"))throw new Error(\"ERR: contains `self` is not supported at the top-level of a language.  See documentation.\");return e.classNameAliases=j(e.classNameAliases||{}),c(e)}function pt(e){return e?e.endsWithParent||pt(e.starts):!1}function Hn(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(t){return j(e,{variants:null},t)})),e.cachedVariants?e.cachedVariants:pt(e)?j(e,{starts:e.starts?j(e.starts):null}):Object.isFrozen(e)?j(e):e}var Un=\"11.9.0\";class Gn extends Error{constructor(t,n){super(t),this.name=\"HTMLInjectionError\",this.html=n}}const we=ot,ze=j,Ye=Symbol(\"nomatch\"),Fn=7,bt=function(e){const t=Object.create(null),n=Object.create(null),i=[];let a=!0;const c=\"Could not find the language '{}', did you forget to load/include a language module?\",r={disableAutodetect:!0,name:\"Plain text\",contains:[]};let s={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\\blang(?:uage)?-([\\w-]+)\\b/i,classPrefix:\"hljs-\",cssSelector:\"pre code\",languages:null,__emitter:en};function u(o){return s.noHighlightRe.test(o)}function g(o){let h=o.className+\" \";h+=o.parentNode?o.parentNode.className:\"\";const E=s.languageDetectRe.exec(h);if(E){const O=D(E[1]);return O||(We(c.replace(\"{}\",E[1])),We(\"Falling back to no-highlight mode for this block.\",o)),O?E[1]:\"no-highlight\"}return h.split(/\\s+/).find(O=>u(O)||D(O))}function d(o,h,E){let O=\"\",S=\"\";typeof h==\"object\"?(O=o,E=h.ignoreIllegals,S=h.language):(K(\"10.7.0\",\"highlight(lang, code, ...args) has been deprecated.\"),K(\"10.7.0\",`Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277`),S=o,O=h),E===void 0&&(E=!0);const C={code:O,language:S};re(\"before:highlight\",C);const B=C.result?C.result:p(C.language,C.code,E);return B.code=C.code,re(\"after:highlight\",B),B}function p(o,h,E,O){const S=Object.create(null);function C(l,f){return l.keywords[f]}function B(){if(!b.keywords){R.addText(N);return}let l=0;b.keywordPatternRe.lastIndex=0;let f=b.keywordPatternRe.exec(N),_=\"\";for(;f;){_+=N.substring(l,f.index);const x=L.case_insensitive?f[0].toLowerCase():f[0],A=C(b,x);if(A){const[$,Ct]=A;if(R.addText(_),_=\"\",S[x]=(S[x]||0)+1,S[x]<=Fn&&(ce+=Ct),$.startsWith(\"_\"))_+=f[0];else{const It=L.classNameAliases[$]||$;I(f[0],It)}}else _+=f[0];l=b.keywordPatternRe.lastIndex,f=b.keywordPatternRe.exec(N)}_+=N.substring(l),R.addText(_)}function se(){if(N===\"\")return;let l=null;if(typeof b.subLanguage==\"string\"){if(!t[b.subLanguage]){R.addText(N);return}l=p(b.subLanguage,N,!0,De[b.subLanguage]),De[b.subLanguage]=l._top}else l=w(N,b.subLanguage.length?b.subLanguage:null);b.relevance>0&&(ce+=l.relevance),R.__addSublanguage(l._emitter,l.language)}function v(){b.subLanguage!=null?se():B(),N=\"\"}function I(l,f){l!==\"\"&&(R.startScope(f),R.addText(l),R.endScope())}function Ce(l,f){let _=1;const x=f.length-1;for(;_<=x;){if(!l._emit[_]){_++;continue}const A=L.classNameAliases[l[_]]||l[_],$=f[_];A?I($,A):(N=$,B(),N=\"\"),_++}}function Ie(l,f){return l.scope&&typeof l.scope==\"string\"&&R.openNode(L.classNameAliases[l.scope]||l.scope),l.beginScope&&(l.beginScope._wrap?(I(N,L.classNameAliases[l.beginScope._wrap]||l.beginScope._wrap),N=\"\"):l.beginScope._multi&&(Ce(l.beginScope,f),N=\"\")),b=Object.create(l,{parent:{value:b}}),b}function Le(l,f,_){let x=sn(l.endRe,_);if(x){if(l[\"on:end\"]){const A=new Ue(l);l[\"on:end\"](f,A),A.isMatchIgnored&&(x=!1)}if(x){for(;l.endsParent&&l.parent;)l=l.parent;return l}}if(l.endsWithParent)return Le(l.parent,f,_)}function mt(l){return b.matcher.regexIndex===0?(N+=l[0],1):(be=!0,0)}function At(l){const f=l[0],_=l.rule,x=new Ue(_),A=[_.__beforeBegin,_[\"on:begin\"]];for(const $ of A)if($&&($(l,x),x.isMatchIgnored))return mt(f);return _.skip?N+=f:(_.excludeBegin&&(N+=f),v(),!_.returnBegin&&!_.excludeBegin&&(N=f)),Ie(_,l),_.returnBegin?0:f.length}function Tt(l){const f=l[0],_=h.substring(l.index),x=Le(b,l,_);if(!x)return Ye;const A=b;b.endScope&&b.endScope._wrap?(v(),I(f,b.endScope._wrap)):b.endScope&&b.endScope._multi?(v(),Ce(b.endScope,l)):A.skip?N+=f:(A.returnEnd||A.excludeEnd||(N+=f),v(),A.excludeEnd&&(N=f));do b.scope&&R.closeNode(),!b.skip&&!b.subLanguage&&(ce+=b.relevance),b=b.parent;while(b!==x.parent);return x.starts&&Ie(x.starts,l),A.returnEnd?0:f.length}function vt(){const l=[];for(let f=b;f!==L;f=f.parent)f.scope&&l.unshift(f.scope);l.forEach(f=>R.openNode(f))}let oe={};function $e(l,f){const _=f&&f[0];if(N+=l,_==null)return v(),0;if(oe.type===\"begin\"&&f.type===\"end\"&&oe.index===f.index&&_===\"\"){if(N+=h.slice(f.index,f.index+1),!a){const x=new Error(`0 width match regex (${o})`);throw x.languageName=o,x.badRule=oe.rule,x}return 1}if(oe=f,f.type===\"begin\")return At(f);if(f.type===\"illegal\"&&!E){const x=new Error('Illegal lexeme \"'+_+'\" for mode \"'+(b.scope||\"<unnamed>\")+'\"');throw x.mode=b,x}else if(f.type===\"end\"){const x=Tt(f);if(x!==Ye)return x}if(f.type===\"illegal\"&&_===\"\")return 1;if(pe>1e5&&pe>f.index*3)throw new Error(\"potential infinite loop, way more iterations than matches\");return N+=_,_.length}const L=D(o);if(!L)throw U(c.replace(\"{}\",o)),new Error('Unknown language: \"'+o+'\"');const kt=Pn(L);let de=\"\",b=O||kt;const De={},R=new s.__emitter(s);vt();let N=\"\",ce=0,P=0,pe=0,be=!1;try{if(L.__emitTokens)L.__emitTokens(h,R);else{for(b.matcher.considerAll();;){pe++,be?be=!1:b.matcher.considerAll(),b.matcher.lastIndex=P;const l=b.matcher.exec(h);if(!l)break;const f=h.substring(P,l.index),_=$e(f,l);P=l.index+_}$e(h.substring(P))}return R.finalize(),de=R.toHTML(),{language:o,value:de,relevance:ce,illegal:!1,_emitter:R,_top:b}}catch(l){if(l.message&&l.message.includes(\"Illegal\"))return{language:o,value:we(h),illegal:!0,relevance:0,_illegalBy:{message:l.message,index:P,context:h.slice(P-100,P+100),mode:l.mode,resultSoFar:de},_emitter:R};if(a)return{language:o,value:we(h),illegal:!1,relevance:0,errorRaised:l,_emitter:R,_top:b};throw l}}function m(o){const h={value:we(o),illegal:!1,relevance:0,_top:r,_emitter:new s.__emitter(s)};return h._emitter.addText(o),h}function w(o,h){h=h||s.languages||Object.keys(t);const E=m(o),O=h.filter(D).filter(ke).map(v=>p(v,o,!1));O.unshift(E);const S=O.sort((v,I)=>{if(v.relevance!==I.relevance)return I.relevance-v.relevance;if(v.language&&I.language){if(D(v.language).supersetOf===I.language)return 1;if(D(I.language).supersetOf===v.language)return-1}return 0}),[C,B]=S,se=C;return se.secondBest=B,se}function y(o,h,E){const O=h&&n[h]||E;o.classList.add(\"hljs\"),o.classList.add(`language-${O}`)}function M(o){let h=null;const E=g(o);if(u(E))return;if(re(\"before:highlightElement\",{el:o,language:E}),o.dataset.highlighted){console.log(\"Element previously highlighted. To highlight again, first unset `dataset.highlighted`.\",o);return}if(o.children.length>0&&(s.ignoreUnescapedHTML||(console.warn(\"One of your code blocks includes unescaped HTML. This is a potentially serious security risk.\"),console.warn(\"https://github.com/highlightjs/highlight.js/wiki/security\"),console.warn(\"The element with unescaped HTML:\"),console.warn(o)),s.throwUnescapedHTML))throw new Gn(\"One of your code blocks includes unescaped HTML.\",o.innerHTML);h=o;const O=h.textContent,S=E?d(O,{language:E,ignoreIllegals:!0}):w(O);o.innerHTML=S.value,o.dataset.highlighted=\"yes\",y(o,E,S.language),o.result={language:S.language,re:S.relevance,relevance:S.relevance},S.secondBest&&(o.secondBest={language:S.secondBest.language,relevance:S.secondBest.relevance}),re(\"after:highlightElement\",{el:o,result:S,text:O})}function ne(o){s=ze(s,o)}const _t=()=>{ie(),K(\"10.6.0\",\"initHighlighting() deprecated.  Use highlightAll() now.\")};function Et(){ie(),K(\"10.6.0\",\"initHighlightingOnLoad() deprecated.  Use highlightAll() now.\")}let Te=!1;function ie(){if(document.readyState===\"loading\"){Te=!0;return}document.querySelectorAll(s.cssSelector).forEach(M)}function wt(){Te&&ie()}typeof window<\"u\"&&window.addEventListener&&window.addEventListener(\"DOMContentLoaded\",wt,!1);function yt(o,h){let E=null;try{E=h(e)}catch(O){if(U(\"Language definition for '{}' could not be registered.\".replace(\"{}\",o)),a)U(O);else throw O;E=r}E.name||(E.name=o),t[o]=E,E.rawDefinition=h.bind(null,e),E.aliases&&ve(E.aliases,{languageName:o})}function Mt(o){delete t[o];for(const h of Object.keys(n))n[h]===o&&delete n[h]}function xt(){return Object.keys(t)}function D(o){return o=(o||\"\").toLowerCase(),t[o]||t[n[o]]}function ve(o,{languageName:h}){typeof o==\"string\"&&(o=[o]),o.forEach(E=>{n[E.toLowerCase()]=h})}function ke(o){const h=D(o);return h&&!h.disableAutodetect}function Ot(o){o[\"before:highlightBlock\"]&&!o[\"before:highlightElement\"]&&(o[\"before:highlightElement\"]=h=>{o[\"before:highlightBlock\"](Object.assign({block:h.el},h))}),o[\"after:highlightBlock\"]&&!o[\"after:highlightElement\"]&&(o[\"after:highlightElement\"]=h=>{o[\"after:highlightBlock\"](Object.assign({block:h.el},h))})}function Nt(o){Ot(o),i.push(o)}function St(o){const h=i.indexOf(o);h!==-1&&i.splice(h,1)}function re(o,h){const E=o;i.forEach(function(O){O[E]&&O[E](h)})}function Rt(o){return K(\"10.7.0\",\"highlightBlock will be removed entirely in v12.0\"),K(\"10.7.0\",\"Please use highlightElement now.\"),M(o)}Object.assign(e,{highlight:d,highlightAuto:w,highlightAll:ie,highlightElement:M,highlightBlock:Rt,configure:ne,initHighlighting:_t,initHighlightingOnLoad:Et,registerLanguage:yt,unregisterLanguage:Mt,listLanguages:xt,getLanguage:D,registerAliases:ve,autoDetection:ke,inherit:ze,addPlugin:Nt,removePlugin:St}),e.debugMode=function(){a=!1},e.safeMode=function(){a=!0},e.versionString=Un,e.regex={concat:G,lookahead:ct,either:Re,optional:nn,anyNumberOfTimes:tn};for(const o in le)typeof le[o]==\"object\"&&st(le[o]);return Object.assign(e,le),e},q=bt({});q.newInstance=()=>bt({});var Kn=q;q.HighlightJS=q;q.default=q;const Xe=Zt(Kn);function Wn(e){const t={scope:\"variable\",begin:new RegExp(\"(?<!\\\\w)\\\\$[^ \\\\n]+\")};return{aliases:[\"yarn\",\"yarnspinner\"],contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.BACKSLASH_ESCAPE,{scope:\"tag\",begin:/<<|>>/},{scope:\"tag\",begin:/---|===/},{begin:new RegExp(\"(?<=\\\\<\\\\<)\"),end:/(?=\\>\\>)/,contains:[e.NUMBER_MODE,e.QUOTE_STRING_MODE,t,{scope:\"keywords\",beginKeywords:\"if else endif jump set call declare\"},{scope:\"operators\",beginKeywords:\"to and or not is eq neq le leq ge lt le gt gte\"}]},t,{className:\"keyword \",begin:/->/},{scope:\"comment\",begin:new RegExp(\"(?<!\\\\w)\\\\#[^ \\\\n]+\")}]}}function zn(e){let t,n,i,a,c,r,s,u,g,d,p=e[1].value+\"\",m,w;return{c(){t=k(\"div\"),n=k(\"p\"),i=k(\"span\"),a=ye(e[0]),c=ye(\".yarn\"),r=z(),s=k(\"button\"),s.textContent=\"Save Yarn File\",u=z(),g=k(\"pre\"),d=k(\"code\"),ae(s,\"class\",\"download svelte-6jya6\"),ae(g,\"class\",\"hljs language-yarn code-block svelte-6jya6\"),ae(t,\"class\",\"file\")},m(y,M){fe(y,t,M),T(t,n),T(n,i),T(i,a),T(i,c),T(n,r),T(n,s),T(t,u),T(t,g),T(g,d),d.innerHTML=p,m||(w=jt(s,\"click\",e[2]),m=!0)},p(y,[M]){M&1&&Ht(a,y[0]),M&2&&p!==(p=y[1].value+\"\")&&(d.innerHTML=p)},i:X,o:X,d(y){y&&J(t),m=!1,w()}}}function Yn(e,t){let n=new File([e],t,{type:\"application/octet-stream\"}),i=document.createElement(\"a\");i.href=window.URL.createObjectURL(n),i.download=n.name,document.body.appendChild(i),i.dispatchEvent(new MouseEvent(\"click\",{bubbles:!0,cancelable:!0,view:window})),i.remove(),window.URL.revokeObjectURL(i.href)}function Xn(e,t,n){let{fileName:i}=t,{codeData:a}=t,c;Xe.registerLanguage(\"yarn\",Wn),c=Xe.highlight(a,{language:\"yarn\"});function r(){Yn(a,i+\".yarn\")}return e.$$set=s=>{\"fileName\"in s&&n(0,i=s.fileName),\"codeData\"in s&&n(3,a=s.codeData)},[i,c,r,a]}class qn extends rt{constructor(t){super(),it(this,t,Xn,zn,Qe,{fileName:0,codeData:3})}}function Zn(e){return e.map(t=>{var u;let n={name:\"\",headers:[],content:\"\",file:\"main\",order:0},i=!1,a=t.getAttribute(\"name\");n.name=a?a.replace(/[\\s\\.]/g,\"_\"):\"\";let c=(u=t.getAttribute(\"tags\"))==null?void 0:u.split(\" \");c=c??[],n.headers=c.reduce((g,d)=>{if(!d)return g;if(d.includes(\"@\"))return d===\"@raw\"&&(n.raw=!0),d===\"@comment\"&&(i=!0),d===\"@ignore\"&&(n.ignore=!0),d.includes(\"@order\")&&(n.order=Number(d.split(\":\")[1])),d.includes(\"@file\")&&(n.file=d.split(\":\")[1]),g;let p=\"tags\",m=\"\";if(d.includes(\"&\")){let y=d.slice(1).replace(\"-\",\" \").split(\":\");p=y[0],m=y[1]}let w=g.findIndex(y=>y.name===p);return w!==-1?g[w].value+=\" \"+m:g.push({name:p.trim(),value:m.trim()}),g},n.headers);let r=t.getAttribute(\"position\");n.headers.push({name:\"position\",value:r??\"0,0\"});let s=t.textContent??\"\";return n.content=s.replace(/\\[\\[(.*?)\\]\\]/g,(g,d)=>`<<jump ${d}>>`),i&&(n.content=n.content.replace(/^/gm,\"// \")),n})}function Vn(e,t=!1){return e.sort((n,i)=>n.order-i.order).reduce((n,i)=>{if(i.ignore&&!t)return n;if(i.raw)return`${n}${i.content}\n\n`;let a=i.headers.reduce((c,r)=>(c.push(`${r.name}: ${r.value}`),c),[]);return`${n}title: ${i.name}\n${a.join(`\n`)}\n---\n${i.content}\n===\n\n`},\"\")}function qe(e,t,n){const i=e.slice();return i[4]=t[n],i}function Ze(e){let t,n,i,a;return t=new qn({props:{fileName:e[4].fileName,codeData:e[4].fileData}}),{c(){Yt(t.$$.fragment),n=z(),i=k(\"hr\")},m(c,r){tt(t,c,r),fe(c,n,r),fe(c,i,r),a=!0},p:X,i(c){a||(V(t.$$.fragment,c),a=!0)},o(c){Oe(t.$$.fragment,c),a=!1},d(c){c&&(J(n),J(i)),nt(t,c)}}}function Jn(e){let t,n,i,a,c,r,s,u,g,d=He(e[1]),p=[];for(let w=0;w<d.length;w+=1)p[w]=Ze(qe(e,d,w));const m=w=>Oe(p[w],1,1,()=>{p[w]=null});return{c(){t=k(\"main\"),n=k(\"div\"),i=k(\"h1\"),i.textContent=`${e[0]} - YarnTwiner`,a=z(),c=k(\"p\"),c.textContent=\"Thanks for using YarnTwiner, below is your story converted into a yarn script. Remember, YarnTwiner can't check if the yarn script is valid or not!\",r=z(),s=k(\"hr\"),u=z();for(let w=0;w<p.length;w+=1)p[w].c();ae(n,\"class\",\"content\")},m(w,y){fe(w,t,y),T(t,n),T(n,i),T(n,a),T(n,c),T(n,r),T(n,s),T(t,u);for(let M=0;M<p.length;M+=1)p[M]&&p[M].m(t,null);g=!0},p(w,[y]){if(y&2){d=He(w[1]);let M;for(M=0;M<d.length;M+=1){const ne=qe(w,d,M);p[M]?(p[M].p(ne,y),V(p[M],1)):(p[M]=Ze(ne),p[M].c(),V(p[M],1),p[M].m(t,null))}for(Wt(),M=d.length;M<p.length;M+=1)m(M);zt()}},i(w){if(!g){for(let y=0;y<d.length;y+=1)V(p[y]);g=!0}},o(w){p=p.filter(Boolean);for(let y=0;y<p.length;y+=1)Oe(p[y]);g=!1},d(w){w&&J(t),Bt(p,w)}}}function Qn(e){const t=document.querySelectorAll(\"tw-storydata\")[0],n=Object.values(document.querySelectorAll(\"tw-storydata > tw-passagedata\")),i=t.getAttribute(\"name\"),a=Zn(n).reduce((c,r)=>{const s=c.findIndex(u=>u.fileName===r.file);return s===-1?c.push({fileName:r.file,nodes:[r]}):c[s].nodes.push(r),c},[{fileName:\"main\",nodes:[]}]).reduce((c,r)=>(c.push({fileName:r.fileName===\"main\"?i:r.fileName,fileData:Vn(r.nodes)}),c),[]);return[i,a]}class ei extends rt{constructor(t){super(),it(this,t,Qn,Jn,Qe,{})}}new ei({target:document.getElementById(\"app\")});\n\n</script>\n  <style>\nbody{margin:auto;padding:1em;max-width:60em}tw-storydata{display:none}pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}/*!\n  Theme: GitHub Dark Dimmed\n  Description: Dark dimmed theme as seen on github.com\n  Author: github.com\n  Maintainer: @Hirse\n  Updated: 2021-05-15\n\n  Colors taken from GitHub's CSS\n*/.hljs{color:#adbac7;background:#22272e}.hljs-doctag,.hljs-keyword,.hljs-meta .hljs-keyword,.hljs-template-tag,.hljs-template-variable,.hljs-type,.hljs-variable.language_{color:#f47067}.hljs-title,.hljs-title.class_,.hljs-title.class_.inherited__,.hljs-title.function_{color:#dcbdfb}.hljs-attr,.hljs-attribute,.hljs-literal,.hljs-meta,.hljs-number,.hljs-operator,.hljs-variable,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id{color:#6cb6ff}.hljs-regexp,.hljs-string,.hljs-meta .hljs-string{color:#96d0ff}.hljs-built_in,.hljs-symbol{color:#f69d50}.hljs-comment,.hljs-code,.hljs-formula{color:#768390}.hljs-name,.hljs-quote,.hljs-selector-tag,.hljs-selector-pseudo{color:#8ddb8c}.hljs-subst{color:#adbac7}.hljs-section{color:#316dca;font-weight:700}.hljs-bullet{color:#eac55f}.hljs-emphasis{color:#adbac7;font-style:italic}.hljs-strong{color:#adbac7;font-weight:700}.hljs-addition{color:#b4f1b4;background-color:#1b4721}.hljs-deletion{color:#ffd8d3;background-color:#78191b}.code-block.svelte-6jya6{white-space:pre-wrap;overflow:auto;word-break:break-word;padding:1rem;max-height:25em;overflow-y:scroll}.download.svelte-6jya6{float:right}\n\n</style>\n</head>\n<body>\n    {{STORY_DATA}}\n    <div id=\"app\"></div>\n</body>\n</html>\n"});