function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(n)}function o(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let a;function c(t,e){return a||(a=document.createElement("a")),a.href=e,t===a.href}function l(t,n,r,s){return t[1]&&s?e(r.ctx.slice(),t[1](s(n))):r.ctx}function u(t,e,n,r,s,o,i){const a=function(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|s[r];return t}return e.dirty|s}return e.dirty}(e,r,s,o);if(a){const s=l(e,n,r,i);t.p(s,a)}}function f(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function d(t){return null==t?"":t}let h,p,m=!1;function g(t,e,n,r){for(;t<e;){const s=t+(e-t>>1);n(s)<=r?t=s+1:e=s}return t}function b(t,e){if(m){for(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if("HEAD"===t.nodeName){const t=[];for(let n=0;n<e.length;n++){const r=e[n];void 0!==r.claim_order&&t.push(r)}e=t}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let s=0;for(let t=0;t<e.length;t++){const o=e[t].claim_order,i=(s>0&&e[n[s]].claim_order<=o?s+1:g(1,s,(t=>e[n[t]].claim_order),o))-1;r[t]=n[i]+1;const a=i+1;n[a]=t,s=Math.max(a,s)}const o=[],i=[];let a=e.length-1;for(let t=n[s]+1;0!=t;t=r[t-1]){for(o.push(e[t-1]);a>=t;a--)i.push(e[a]);a--}for(;a>=0;a--)i.push(e[a]);o.reverse(),i.sort(((t,e)=>t.claim_order-e.claim_order));for(let e=0,n=0;e<i.length;e++){for(;n<o.length&&i[e].claim_order>=o[n].claim_order;)n++;const r=n<o.length?o[n]:null;t.insertBefore(i[e],r)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);null!==t.actual_end_child&&void 0===t.actual_end_child.claim_order;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?void 0===e.claim_order&&e.parentNode===t||t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else e.parentNode!==t&&t.appendChild(e)}function v(t,e,n){t.insertBefore(e,n||null)}function y(t,e,n){m&&!n?b(t,e):e.parentNode===t&&e.nextSibling==n||t.insertBefore(e,n||null)}function $(t){t.parentNode.removeChild(t)}function _(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function w(t){return document.createElement(t)}function E(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function S(t){return document.createTextNode(t)}function x(){return S(" ")}function T(){return S("")}function A(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function N(t){return function(e){return e.preventDefault(),t.call(this,e)}}function P(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function I(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const r in e)null==e[r]?t.removeAttribute(r):"style"===r?t.style.cssText=e[r]:"__value"===r?t.value=t[r]=e[r]:n[r]&&n[r].set?t[r]=e[r]:P(t,r,e[r])}function L(t){return Array.from(t.childNodes)}function R(t){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0})}function k(t,e,n,r,s=!1){R(t);const o=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const e=n(o);return void 0===e?t.splice(r,1):t[r]=e,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const e=n(o);return void 0===e?t.splice(r,1):t[r]=e,s?void 0===e&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return r()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function O(t,e,n,r){return k(t,(t=>t.nodeName===e),(t=>{const e=[];for(let r=0;r<t.attributes.length;r++){const s=t.attributes[r];n[s.name]||e.push(s.name)}e.forEach((e=>t.removeAttribute(e)))}),(()=>r?E(e):w(e)))}function H(t,e){return k(t,(t=>3===t.nodeType),(t=>{const n=""+e;if(t.data.startsWith(n)){if(t.data.length!==n.length)return t.splitText(n.length)}else t.data=n}),(()=>S(e)),!0)}function C(t){return H(t," ")}function U(t,e,n){for(let r=n;r<t.length;r+=1){const n=t[r];if(8===n.nodeType&&n.textContent.trim()===e)return r}return t.length}function j(t){const e=U(t,"HTML_TAG_START",0),n=U(t,"HTML_TAG_END",e);if(e===n)return new z;R(t);const r=t.splice(e,n+1);$(r[0]),$(r[r.length-1]);const s=r.slice(1,r.length-1);for(const e of s)e.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new z(s)}function M(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function D(t,e){t.value=null==e?"":e}function G(){if(void 0===h){h=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(t){h=!0}}return h}function q(t,e){"static"===getComputedStyle(t).position&&(t.style.position="relative");const n=w("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const r=G();let s;return r?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",s=A(window,"message",(t=>{t.source===n.contentWindow&&e()}))):(n.src="about:blank",n.onload=()=>{s=A(n.contentWindow,"resize",e)}),function(t,e){t.appendChild(e)}(t,n),()=>{(r||s&&n.contentWindow)&&s(),$(n)}}function B(t,e=document.body){return Array.from(e.querySelectorAll(t))}class z extends class{constructor(){this.e=this.n=null}c(t){this.h(t)}m(t,e,n=null){this.e||(this.e=w(e.nodeName),this.t=e,this.c(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)v(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach($)}}{constructor(t){super(),this.e=this.n=null,this.l=t}c(t){this.l?this.n=this.l:super.c(t)}i(t){for(let e=0;e<this.n.length;e+=1)y(this.t,this.n[e],t)}}function K(t){p=t}function J(){if(!p)throw new Error("Function called outside component initialization");return p}function V(t){J().$$.on_mount.push(t)}function W(t){J().$$.after_update.push(t)}function F(t){J().$$.on_destroy.push(t)}const Y=[],X=[],Q=[],Z=[],tt=Promise.resolve();let et=!1;function nt(t){Q.push(t)}let rt=!1;const st=new Set;function ot(){if(!rt){rt=!0;do{for(let t=0;t<Y.length;t+=1){const e=Y[t];K(e),it(e.$$)}for(K(null),Y.length=0;X.length;)X.pop()();for(let t=0;t<Q.length;t+=1){const e=Q[t];st.has(e)||(st.add(e),e())}Q.length=0}while(Y.length);for(;Z.length;)Z.pop()();et=!1,rt=!1,st.clear()}}function it(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(nt)}}const at=new Set;let ct;function lt(){ct={r:0,c:[],p:ct}}function ut(){ct.r||s(ct.c),ct=ct.p}function ft(t,e){t&&t.i&&(at.delete(t),t.i(e))}function dt(t,e,n,r){if(t&&t.o){if(at.has(t))return;at.add(t),ct.c.push((()=>{at.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function ht(t,e){const n={},r={},s={$$scope:1};let o=t.length;for(;o--;){const i=t[o],a=e[o];if(a){for(const t in i)t in a||(r[t]=1);for(const t in a)s[t]||(n[t]=a[t],s[t]=1);t[o]=a}else for(const t in i)s[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function pt(t){return"object"==typeof t&&null!==t?t:{}}function mt(t){t&&t.c()}function gt(t,e){t&&t.l(e)}function bt(t,e,r,i){const{fragment:a,on_mount:c,on_destroy:l,after_update:u}=t.$$;a&&a.m(e,r),i||nt((()=>{const e=c.map(n).filter(o);l?l.push(...e):s(e),t.$$.on_mount=[]})),u.forEach(nt)}function vt(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function yt(t,e){-1===t.$$.dirty[0]&&(Y.push(t),et||(et=!0,tt.then(ot)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function $t(e,n,o,i,a,c,l,u=[-1]){const f=p;K(e);const d=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:a,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:n.context||[]),callbacks:r(),dirty:u,skip_bound:!1,root:n.target||f.$$.root};l&&l(d.root);let h=!1;if(d.ctx=o?o(e,n.props||{},((t,n,...r)=>{const s=r.length?r[0]:n;return d.ctx&&a(d.ctx[t],d.ctx[t]=s)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](s),h&&yt(e,t)),n})):[],d.update(),h=!0,s(d.before_update),d.fragment=!!i&&i(d.ctx),n.target){if(n.hydrate){m=!0;const t=L(n.target);d.fragment&&d.fragment.l(t),t.forEach($)}else d.fragment&&d.fragment.c();n.intro&&ft(e.$$.fragment),bt(e,n.target,n.anchor,n.customElement),m=!1,ot()}K(f)}class _t{$destroy(){vt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const wt=[];function Et(e,n=t){let r;const s=new Set;function o(t){if(i(e,t)&&(e=t,r)){const t=!wt.length;for(const t of s)t[1](),wt.push(t,e);if(t){for(let t=0;t<wt.length;t+=2)wt[t][0](wt[t+1]);wt.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(i,a=t){const c=[i,a];return s.add(c),1===s.size&&(r=n(o)||t),i(e),()=>{s.delete(c),0===s.size&&(r(),r=null)}}}}const St={};var xt={owner:"berty",repo:"uptime",sites:[{name:"berty.tech",url:"https://www.berty.tech"},{name:"yolo.berty.io",url:"https://yolo.berty.io/"},{name:"translate.berty.community",url:"https://translate.berty.community"},{name:"vote.berty.community",url:"https://vote.berty.community"},{name:"berty.community",url:"https://berty.community/"},{name:"services.berty.tech",url:"https://services.berty.tech/authorize"},{name:"assets.berty.tech",url:"https://assets.berty.tech/"},{name:"shop.berty.tech",url:"https://shop.berty.tech"},{name:"p2p.paris",url:"https://p2p.paris"},{name:"francep2p.org",url:"https://francep2p.org"},{name:"prom.berty.io",url:"https://prom.berty.io/",expectedStatusCodes:[401]},{name:"ssh@svc-fr-1",url:"svc-fr-1.berty.io",port:22,check:"tcp-ping"},{name:"ssh@svc-ams-1",url:"svc-ams-1.berty.io",port:22,check:"tcp-ping"},{name:"rdvp@svc-fr-1",url:"51.159.21.214",port:4040,check:"tcp-ping"},{name:"rdvp@svc-ams-1",url:"51.15.25.224",port:4040,check:"tcp-ping"}],"status-website":{cname:"uptime.berty.io",logoUrl:"https://raw.githubusercontent.com/upptime/upptime.js.org/master/static/img/icon.svg",name:"Upptime",introTitle:"**Upptime** is the open-source uptime monitor and status page, powered entirely by GitHub.",introMessage:"This is a sample status page which uses **real-time** data from our [GitHub repository](https://github.com/upptime/upptime). No server required — just GitHub Actions, Issues, and Pages. [**Get your own for free**](https://github.com/upptime/upptime)",navbar:[{title:"Status",href:"/"},{title:"GitHub",href:"https://github.com/$OWNER/$REPO"}]},path:"https://uptime.berty.io",i18n:{activeIncidents:"Active Incidents",allSystemsOperational:"All systems are operational",incidentReport:"Incident #$NUMBER report →",activeIncidentSummary:"Opened at $DATE with $POSTS posts",incidentTitle:"Incident $NUMBER Details",incidentDetails:"Incident Details",incidentFixed:"Fixed",incidentOngoing:"Ongoing",incidentOpenedAt:"Opened at",incidentClosedAt:"Closed at",incidentSubscribe:"Subscribe to Updates",incidentViewOnGitHub:"View on GitHub",incidentCommentSummary:"Posted at $DATE by $AUTHOR",incidentBack:"← Back to all incidents",pastIncidents:"Past Incidents",pastIncidentsResolved:"Resolved in $MINUTES minutes with $POSTS posts",liveStatus:"Live Status",overallUptime:"Overall uptime: $UPTIME",overallUptimeTitle:"Overall uptime",averageResponseTime:"Average response time: $TIMEms",averageResponseTimeTitle:"Average response",sevelDayResponseTime:"7-day response time",responseTimeMs:"Response time (ms)",up:"Up",down:"Down",degraded:"Degraded",ms:"ms",loading:"Loading",navGitHub:"GitHub",footer:"This page is [open source]($REPO), powered by [Upptime](https://upptime.js.org)",rateLimitExceededTitle:"Rate limit exceedeed",rateLimitExceededIntro:"You have exceeded the number of requests you can do in an hour, so you'll have to wait before accessing this website again. Alternately, you can add a GitHub Personal Access Token to continue to use this website.",rateLimitExceededWhatDoesErrorMean:"What does this error mean?",rateLimitExceededErrorMeaning:"This website uses the GitHub API to access real-time data about our websites' status. By default, GitHub allows each IP address 60 requests per hour, which you have consumed.",rateLimitExceededErrorHowCanFix:"How can I fix it?",rateLimitExceededErrorFix:"You can wait for another hour and your IP address' limit will be restored. Alternately, you can add your GitHub Personal Access Token, which gives you an additional 5,000 requests per hour.",rateLimitExceededGeneratePAT:"Learn how to generate a Personal Access Token",rateLimitExceededHasSet:"You have a personal access token set.",rateLimitExceededRemoveToken:"Remove token",rateLimitExceededGitHubPAT:"GitHub Personal Access Token",rateLimitExceededCopyPastePAT:"Copy and paste your token",rateLimitExceededSaveToken:"Save token",errorTitle:"An error occurred",errorIntro:"An error occurred in trying to get the latest status details.",errorText:"You can try again in a few moments.",errorHome:"Go to the homepage",pastScheduledMaintenance:"Past Scheduled Maintenance",scheduledMaintenance:"Scheduled Maintenance",scheduledMaintenanceSummaryStarted:"Started at $DATE for $DURATION minutes",scheduledMaintenanceSummaryStarts:"Starts at $DATE for $DURATION minutes",startedAt:"Started at",startsAt:"Starts at",duration:"Duration",durationMin:"$DURATION minutes",incidentCompleted:"Completed",incidentScheduled:"Scheduled"}};function Tt(t,e,n){const r=t.slice();return r[1]=e[n],r}function At(e){let n,r,s,o=xt["status-website"]&&!xt["status-website"].hideNavLogo&&function(e){let n,r;return{c(){n=w("img"),this.h()},l(t){n=O(t,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){P(n,"alt",""),c(n.src,r=xt["status-website"].logoUrl)||P(n,"src",r),P(n,"class","svelte-a08hsz")},m(t,e){y(t,n,e)},p:t,d(t){t&&$(n)}}}(),i=xt["status-website"]&&!xt["status-website"].hideNavTitle&&function(e){let n,r,s=xt["status-website"].name+"";return{c(){n=w("div"),r=S(s)},l(t){n=O(t,"DIV",{});var e=L(n);r=H(e,s),e.forEach($)},m(t,e){y(t,n,e),b(n,r)},p:t,d(t){t&&$(n)}}}();return{c(){n=w("div"),r=w("a"),o&&o.c(),s=x(),i&&i.c(),this.h()},l(t){n=O(t,"DIV",{});var e=L(n);r=O(e,"A",{href:!0,class:!0});var a=L(r);o&&o.l(a),s=C(a),i&&i.l(a),a.forEach($),e.forEach($),this.h()},h(){P(r,"href",xt["status-website"].logoHref||xt.path),P(r,"class","logo svelte-a08hsz")},m(t,e){y(t,n,e),b(n,r),o&&o.m(r,null),b(r,s),i&&i.m(r,null)},p(t,e){xt["status-website"]&&!xt["status-website"].hideNavLogo&&o.p(t,e),xt["status-website"]&&!xt["status-website"].hideNavTitle&&i.p(t,e)},d(t){t&&$(n),o&&o.d(),i&&i.d()}}}function Nt(t){let e,n,r,s,o,i,a=t[1].title+"";return{c(){e=w("li"),n=w("a"),r=S(a),i=x(),this.h()},l(t){e=O(t,"LI",{});var s=L(e);n=O(s,"A",{"aria-current":!0,href:!0,class:!0});var o=L(n);r=H(o,a),o.forEach($),i=C(s),s.forEach($),this.h()},h(){P(n,"aria-current",s=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0),P(n,"href",o=t[1].href.replace("$OWNER",xt.owner).replace("$REPO",xt.repo)),P(n,"class","svelte-a08hsz")},m(t,s){y(t,e,s),b(e,n),b(n,r),b(e,i)},p(t,e){1&e&&s!==(s=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0)&&P(n,"aria-current",s)},d(t){t&&$(e)}}}function Pt(e){let n,r,s,o,i,a=xt["status-website"]&&xt["status-website"].logoUrl&&At(),c=xt["status-website"]&&xt["status-website"].navbar&&function(t){let e,n=xt["status-website"].navbar,r=[];for(let e=0;e<n.length;e+=1)r[e]=Nt(Tt(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=T()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=T()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);y(t,e,n)},p(t,s){if(1&s){let o;for(n=xt["status-website"].navbar,o=0;o<n.length;o+=1){const i=Tt(t,n,o);r[o]?r[o].p(i,s):(r[o]=Nt(i),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(t){_(r,t),t&&$(e)}}}(e),l=xt["status-website"]&&xt["status-website"].navbarGitHub&&!xt["status-website"].navbar&&function(e){let n,r,s,o=xt.i18n.navGitHub+"";return{c(){n=w("li"),r=w("a"),s=S(o),this.h()},l(t){n=O(t,"LI",{});var e=L(n);r=O(e,"A",{href:!0,class:!0});var i=L(r);s=H(i,o),i.forEach($),e.forEach($),this.h()},h(){P(r,"href",`https://github.com/${xt.owner}/${xt.repo}`),P(r,"class","svelte-a08hsz")},m(t,e){y(t,n,e),b(n,r),b(r,s)},p:t,d(t){t&&$(n)}}}();return{c(){n=w("nav"),r=w("div"),a&&a.c(),s=x(),o=w("ul"),c&&c.c(),i=x(),l&&l.c(),this.h()},l(t){n=O(t,"NAV",{class:!0});var e=L(n);r=O(e,"DIV",{class:!0});var u=L(r);a&&a.l(u),s=C(u),o=O(u,"UL",{class:!0});var f=L(o);c&&c.l(f),i=C(f),l&&l.l(f),f.forEach($),u.forEach($),e.forEach($),this.h()},h(){P(o,"class","svelte-a08hsz"),P(r,"class","container svelte-a08hsz"),P(n,"class","svelte-a08hsz")},m(t,e){y(t,n,e),b(n,r),a&&a.m(r,null),b(r,s),b(r,o),c&&c.m(o,null),b(o,i),l&&l.m(o,null)},p(t,[e]){xt["status-website"]&&xt["status-website"].logoUrl&&a.p(t,e),xt["status-website"]&&xt["status-website"].navbar&&c.p(t,e),xt["status-website"]&&xt["status-website"].navbarGitHub&&!xt["status-website"].navbar&&l.p(t,e)},i:t,o:t,d(t){t&&$(n),a&&a.d(),c&&c.d(),l&&l.d()}}}function It(t,e,n){let{segment:r}=e;return t.$$set=t=>{"segment"in t&&n(0,r=t.segment)},[r]}class Lt extends _t{constructor(t){super(),$t(this,t,It,Pt,i,{segment:0})}}var Rt={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function kt(t){return t.replace(RegExp("^"+(t.match(/^(\t| )+/)||"")[0],"gm"),"")}function Ot(t){return(t+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ht(t,e){var n,r,s,o,i,a=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,c=[],l="",u=e||{},f=0;function d(t){var e=Rt[t[1]||""],n=c[c.length-1]==t;return e?e[1]?(n?c.pop():c.push(t),e[0|n]):e[0]:t}function h(){for(var t="";c.length;)t+=d(c[c.length-1]);return t}for(t=t.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(t,e,n){return u[e.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");s=a.exec(t);)r=t.substring(f,s.index),f=a.lastIndex,n=s[0],r.match(/[^\\](\\\\)*\\$/)||((i=s[3]||s[4])?n='<pre class="code '+(s[4]?"poetry":s[2].toLowerCase())+'"><code'+(s[2]?' class="language-'+s[2].toLowerCase()+'"':"")+">"+kt(Ot(i).replace(/^\n+|\n+$/g,""))+"</code></pre>":(i=s[6])?(i.match(/\./)&&(s[5]=s[5].replace(/^\d+/gm,"")),o=Ht(kt(s[5].replace(/^\s*[>*+.-]/gm,""))),">"==i?i="blockquote":(i=i.match(/\./)?"ol":"ul",o=o.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+i+">"+o+"</"+i+">"):s[8]?n='<img src="'+Ot(s[8])+'" alt="'+Ot(s[7])+'">':s[10]?(l=l.replace("<a>",'<a href="'+Ot(s[11]||u[r.toLowerCase()])+'">'),n=h()+"</a>"):s[9]?n="<a>":s[12]||s[14]?n="<"+(i="h"+(s[14]?s[14].length:s[13]>"="?1:2))+">"+Ht(s[12]||s[15],u)+"</"+i+">":s[16]?n="<code>"+Ot(s[16])+"</code>":(s[17]||s[1])&&(n=d(s[17]||"--"))),l+=r,l+=n;return(l+t.substring(f)+h()).replace(/^\n+|\n+$/g,"")}function Ct(t,e,n){const r=t.slice();return r[3]=e[n],r}function Ut(t,e,n){const r=t.slice();return r[3]=e[n],r}function jt(t,e,n){const r=t.slice();return r[8]=e[n],r}function Mt(e){let n;return{c(){n=w("link"),this.h()},l(t){n=O(t,"LINK",{rel:!0,href:!0}),this.h()},h(){P(n,"rel","stylesheet"),P(n,"href",`${xt.path}/themes/${(xt["status-website"]||{}).theme||"light"}.css`)},m(t,e){y(t,n,e)},p:t,d(t){t&&$(n)}}}function Dt(e){let n;return{c(){n=w("link"),this.h()},l(t){n=O(t,"LINK",{rel:!0,href:!0}),this.h()},h(){P(n,"rel","stylesheet"),P(n,"href",(xt["status-website"]||{}).themeUrl)},m(t,e){y(t,n,e)},p:t,d(t){t&&$(n)}}}function Gt(e){let n,r;return{c(){n=w("script"),this.h()},l(t){n=O(t,"SCRIPT",{src:!0}),L(n).forEach($),this.h()},h(){c(n.src,r=e[8].src)||P(n,"src",r),n.async=!!e[8].async,n.defer=!!e[8].async},m(t,e){y(t,n,e)},p:t,d(t){t&&$(n)}}}function qt(e){let n;return{c(){n=w("link"),this.h()},l(t){n=O(t,"LINK",{rel:!0,href:!0,media:!0}),this.h()},h(){P(n,"rel",e[3].rel),P(n,"href",e[3].href),P(n,"media",e[3].media)},m(t,e){y(t,n,e)},p:t,d(t){t&&$(n)}}}function Bt(e){let n;return{c(){n=w("meta"),this.h()},l(t){n=O(t,"META",{name:!0,content:!0}),this.h()},h(){P(n,"name",e[3].name),P(n,"content",e[3].content)},m(t,e){y(t,n,e)},p:t,d(t){t&&$(n)}}}function zt(e){let n,r,s,o,i,a,c,f,d,h,p,m,g,v,E,S,A,N,I=Ht(xt.i18n.footer.replace(/\$REPO/,`https://github.com/${xt.owner}/${xt.repo}`))+"",R=(xt["status-website"]||{}).customHeadHtml&&function(e){let n,r,s=(xt["status-website"]||{}).customHeadHtml+"";return{c(){n=new z,r=T(),this.h()},l(t){n=j(t),r=T(),this.h()},h(){n.a=r},m(t,e){n.m(s,t,e),y(t,r,e)},p:t,d(t){t&&$(r),t&&n.d()}}}();let k=((xt["status-website"]||{}).themeUrl?Dt:Mt)(e),H=(xt["status-website"]||{}).scripts&&function(t){let e,n=(xt["status-website"]||{}).scripts,r=[];for(let e=0;e<n.length;e+=1)r[e]=Gt(jt(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=T()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=T()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);y(t,e,n)},p(t,s){if(0&s){let o;for(n=(xt["status-website"]||{}).scripts,o=0;o<n.length;o+=1){const i=jt(t,n,o);r[o]?r[o].p(i,s):(r[o]=Gt(i),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(t){_(r,t),t&&$(e)}}}(e),U=(xt["status-website"]||{}).links&&function(t){let e,n=(xt["status-website"]||{}).links,r=[];for(let e=0;e<n.length;e+=1)r[e]=qt(Ut(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=T()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=T()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);y(t,e,n)},p(t,s){if(0&s){let o;for(n=(xt["status-website"]||{}).links,o=0;o<n.length;o+=1){const i=Ut(t,n,o);r[o]?r[o].p(i,s):(r[o]=qt(i),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(t){_(r,t),t&&$(e)}}}(e),M=(xt["status-website"]||{}).metaTags&&function(t){let e,n=(xt["status-website"]||{}).metaTags,r=[];for(let e=0;e<n.length;e+=1)r[e]=Bt(Ct(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=T()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=T()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);y(t,e,n)},p(t,s){if(0&s){let o;for(n=(xt["status-website"]||{}).metaTags,o=0;o<n.length;o+=1){const i=Ct(t,n,o);r[o]?r[o].p(i,s):(r[o]=Bt(i),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(t){_(r,t),t&&$(e)}}}(e),D=xt["status-website"].css&&function(e){let n,r,s=`<style>${xt["status-website"].css}</style>`;return{c(){n=new z,r=T(),this.h()},l(t){n=j(t),r=T(),this.h()},h(){n.a=r},m(t,e){n.m(s,t,e),y(t,r,e)},p:t,d(t){t&&$(r),t&&n.d()}}}(),G=xt["status-website"].js&&function(e){let n,r,s=`<script>${xt["status-website"].js}<\/script>`;return{c(){n=new z,r=T(),this.h()},l(t){n=j(t),r=T(),this.h()},h(){n.a=r},m(t,e){n.m(s,t,e),y(t,r,e)},p:t,d(t){t&&$(r),t&&n.d()}}}(),q=(xt["status-website"]||{}).customBodyHtml&&function(e){let n,r,s=(xt["status-website"]||{}).customBodyHtml+"";return{c(){n=new z,r=T(),this.h()},l(t){n=j(t),r=T(),this.h()},h(){n.a=r},m(t,e){n.m(s,t,e),y(t,r,e)},p:t,d(t){t&&$(r),t&&n.d()}}}();m=new Lt({props:{segment:e[0]}});const K=e[2].default,J=function(t,e,n,r){if(t){const s=l(t,e,n,r);return t[0](s)}}(K,e,e[1],null);return{c(){R&&R.c(),n=T(),k.c(),r=w("link"),s=w("link"),o=w("link"),H&&H.c(),i=T(),U&&U.c(),a=T(),M&&M.c(),c=T(),D&&D.c(),f=T(),G&&G.c(),d=T(),h=x(),q&&q.c(),p=x(),mt(m.$$.fragment),g=x(),v=w("main"),J&&J.c(),E=x(),S=w("footer"),A=w("p"),this.h()},l(t){const e=B('[data-svelte="svelte-ri9y7q"]',document.head);R&&R.l(e),n=T(),k.l(e),r=O(e,"LINK",{rel:!0,href:!0}),s=O(e,"LINK",{rel:!0,type:!0,href:!0}),o=O(e,"LINK",{rel:!0,type:!0,href:!0}),H&&H.l(e),i=T(),U&&U.l(e),a=T(),M&&M.l(e),c=T(),D&&D.l(e),f=T(),G&&G.l(e),d=T(),e.forEach($),h=C(t),q&&q.l(t),p=C(t),gt(m.$$.fragment,t),g=C(t),v=O(t,"MAIN",{class:!0});var l=L(v);J&&J.l(l),l.forEach($),E=C(t),S=O(t,"FOOTER",{class:!0});var u=L(S);A=O(u,"P",{}),L(A).forEach($),u.forEach($),this.h()},h(){P(r,"rel","stylesheet"),P(r,"href",`${xt.path}/global.css`),P(s,"rel","icon"),P(s,"type","image/svg"),P(s,"href",(xt["status-website"]||{}).faviconSvg||(xt["status-website"]||{}).favicon||"https://raw.githubusercontent.com/koj-co/upptime/master/assets/icon.svg"),P(o,"rel","icon"),P(o,"type","image/png"),P(o,"href",(xt["status-website"]||{}).favicon||"/logo-192.png"),P(v,"class","container"),P(S,"class","svelte-jbr799")},m(t,e){R&&R.m(document.head,null),b(document.head,n),k.m(document.head,null),b(document.head,r),b(document.head,s),b(document.head,o),H&&H.m(document.head,null),b(document.head,i),U&&U.m(document.head,null),b(document.head,a),M&&M.m(document.head,null),b(document.head,c),D&&D.m(document.head,null),b(document.head,f),G&&G.m(document.head,null),b(document.head,d),y(t,h,e),q&&q.m(t,e),y(t,p,e),bt(m,t,e),y(t,g,e),y(t,v,e),J&&J.m(v,null),y(t,E,e),y(t,S,e),b(S,A),A.innerHTML=I,N=!0},p(t,[e]){(xt["status-website"]||{}).customHeadHtml&&R.p(t,e),k.p(t,e),(xt["status-website"]||{}).scripts&&H.p(t,e),(xt["status-website"]||{}).links&&U.p(t,e),(xt["status-website"]||{}).metaTags&&M.p(t,e),xt["status-website"].css&&D.p(t,e),xt["status-website"].js&&G.p(t,e),(xt["status-website"]||{}).customBodyHtml&&q.p(t,e);const n={};1&e&&(n.segment=t[0]),m.$set(n),J&&J.p&&(!N||2&e)&&u(J,K,t,t[1],N?e:-1,null,null)},i(t){N||(ft(m.$$.fragment,t),ft(J,t),N=!0)},o(t){dt(m.$$.fragment,t),dt(J,t),N=!1},d(t){R&&R.d(t),$(n),k.d(t),$(r),$(s),$(o),H&&H.d(t),$(i),U&&U.d(t),$(a),M&&M.d(t),$(c),D&&D.d(t),$(f),G&&G.d(t),$(d),t&&$(h),q&&q.d(t),t&&$(p),vt(m,t),t&&$(g),t&&$(v),J&&J.d(t),t&&$(E),t&&$(S)}}}function Kt(t,e,n){let{$$slots:r={},$$scope:s}=e,{segment:o}=e;return t.$$set=t=>{"segment"in t&&n(0,o=t.segment),"$$scope"in t&&n(1,s=t.$$scope)},[o,s,r]}class Jt extends _t{constructor(t){super(),$t(this,t,Kt,zt,i,{segment:0})}}function Vt(t){let e,n,r=t[1].stack+"";return{c(){e=w("pre"),n=S(r)},l(t){e=O(t,"PRE",{});var s=L(e);n=H(s,r),s.forEach($)},m(t,r){y(t,e,r),b(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&M(n,r)},d(t){t&&$(e)}}}function Wt(e){let n,r,s,o,i,a,c,l,u,f=e[1].message+"";document.title=n=e[0];let d=e[2]&&e[1].stack&&Vt(e);return{c(){r=x(),s=w("h1"),o=S(e[0]),i=x(),a=w("p"),c=S(f),l=x(),d&&d.c(),u=T(),this.h()},l(t){B('[data-svelte="svelte-1moakz"]',document.head).forEach($),r=C(t),s=O(t,"H1",{class:!0});var n=L(s);o=H(n,e[0]),n.forEach($),i=C(t),a=O(t,"P",{class:!0});var h=L(a);c=H(h,f),h.forEach($),l=C(t),d&&d.l(t),u=T(),this.h()},h(){P(s,"class","svelte-17w3omn"),P(a,"class","svelte-17w3omn")},m(t,e){y(t,r,e),y(t,s,e),b(s,o),y(t,i,e),y(t,a,e),b(a,c),y(t,l,e),d&&d.m(t,e),y(t,u,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&M(o,t[0]),2&e&&f!==(f=t[1].message+"")&&M(c,f),t[2]&&t[1].stack?d?d.p(t,e):(d=Vt(t),d.c(),d.m(u.parentNode,u)):d&&(d.d(1),d=null)},i:t,o:t,d(t){t&&$(r),t&&$(s),t&&$(i),t&&$(a),t&&$(l),d&&d.d(t),t&&$(u)}}}function Ft(t,e,n){let{status:r}=e,{error:s}=e;return t.$$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,s=t.error)},[r,s,false]}class Yt extends _t{constructor(t){super(),$t(this,t,Ft,Wt,i,{status:0,error:1})}}function Xt(t){let n,r,s;const o=[t[4].props];var i=t[4].component;function a(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}return i&&(n=new i(a())),{c(){n&&mt(n.$$.fragment),r=T()},l(t){n&&gt(n.$$.fragment,t),r=T()},m(t,e){n&&bt(n,t,e),y(t,r,e),s=!0},p(t,e){const s=16&e?ht(o,[pt(t[4].props)]):{};if(i!==(i=t[4].component)){if(n){lt();const t=n;dt(t.$$.fragment,1,0,(()=>{vt(t,1)})),ut()}i?(n=new i(a()),mt(n.$$.fragment),ft(n.$$.fragment,1),bt(n,r.parentNode,r)):n=null}else i&&n.$set(s)},i(t){s||(n&&ft(n.$$.fragment,t),s=!0)},o(t){n&&dt(n.$$.fragment,t),s=!1},d(t){t&&$(r),n&&vt(n,t)}}}function Qt(t){let e,n;return e=new Yt({props:{error:t[0],status:t[1]}}),{c(){mt(e.$$.fragment)},l(t){gt(e.$$.fragment,t)},m(t,r){bt(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(ft(e.$$.fragment,t),n=!0)},o(t){dt(e.$$.fragment,t),n=!1},d(t){vt(e,t)}}}function Zt(t){let e,n,r,s;const o=[Qt,Xt],i=[];function a(t,e){return t[0]?0:1}return e=a(t),n=i[e]=o[e](t),{c(){n.c(),r=T()},l(t){n.l(t),r=T()},m(t,n){i[e].m(t,n),y(t,r,n),s=!0},p(t,s){let c=e;e=a(t),e===c?i[e].p(t,s):(lt(),dt(i[c],1,1,(()=>{i[c]=null})),ut(),n=i[e],n?n.p(t,s):(n=i[e]=o[e](t),n.c()),ft(n,1),n.m(r.parentNode,r))},i(t){s||(ft(n),s=!0)},o(t){dt(n),s=!1},d(t){i[e].d(t),t&&$(r)}}}function te(t){let n,r;const s=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[Zt]},$$scope:{ctx:t}};for(let t=0;t<s.length;t+=1)o=e(o,s[t]);return n=new Jt({props:o}),{c(){mt(n.$$.fragment)},l(t){gt(n.$$.fragment,t)},m(t,e){bt(n,t,e),r=!0},p(t,[e]){const r=12&e?ht(s,[4&e&&{segment:t[2][0]},8&e&&pt(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(ft(n.$$.fragment,t),r=!0)},o(t){dt(n.$$.fragment,t),r=!1},d(t){vt(n,t)}}}function ee(t,e,n){let{stores:r}=e,{error:s}=e,{status:o}=e,{segments:i}=e,{level0:a}=e,{level1:c=null}=e,{notify:l}=e;var u,f;return W(l),u=St,f=r,J().$$.context.set(u,f),t.$$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,s=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,i=t.segments),"level0"in t&&n(3,a=t.level0),"level1"in t&&n(4,c=t.level1),"notify"in t&&n(6,l=t.notify)},[s,o,i,a,c,r,l]}class ne extends _t{constructor(t){super(),$t(this,t,ee,te,i,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const re=[],se=[{js:()=>Promise.all([import("./index.03e9a3c6.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","index-5f8caab7.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.0c4c0915.js"),__inject_styles(["client-04be1abb.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./[number].90812361.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-c4ffc2b4.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./[number].0c3f11dd.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-bc1bb552.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./error.eb05f0a0.js"),__inject_styles(["client-04be1abb.css","error-64ad0d96.css"])]).then((function(t){return t[0]}))}],oe=(ie=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:t=>({number:ie(t[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:t=>({number:ie(t[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var ie;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function ae(t,e,n,r){return new(n||(n=Promise))((function(s,o){function i(t){try{c(r.next(t))}catch(t){o(t)}}function a(t){try{c(r.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?s(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,a)}c((r=r.apply(t,e||[])).next())}))}function ce(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let le,ue=1;const fe="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},de={};let he,pe;function me(t){const e=Object.create(null);return t.length?(t=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(t).entries()]:t.slice(1).split("&").map((t=>{const[,e,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));return[e,n]})))(t).reduce(((t,[e,n])=>("string"==typeof t[e]&&(t[e]=[t[e]]),"object"==typeof t[e]?t[e].push(n):t[e]=n,t)),e):e}function ge(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(he))return null;let e=t.pathname.slice(he.length);if(""===e&&(e="/"),!re.some((t=>t.test(e))))for(let n=0;n<oe.length;n+=1){const r=oe[n],s=r.pattern.exec(e);if(s){const n=me(t.search),o=r.parts[r.parts.length-1],i=o.params?o.params(s):{},a={host:location.host,path:e,query:n,params:i};return{href:t.href,route:r,match:s,page:a}}}}function be(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=ce(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=ge(s);if(o){$e(o,null,e.hasAttribute("sapper:noscroll"),s.hash),t.preventDefault(),fe.pushState({id:le},"",s.href)}}function ve(){return{x:pageXOffset,y:pageYOffset}}function ye(t){if(de[le]=ve(),t.state){const e=ge(new URL(location.href));e?$e(e,t.state.id):location.href=location.href}else!function(t){ue=t}(ue+1),function(t){le=t}(ue),fe.replaceState({id:le},"",location.href)}function $e(t,e,n,r){return ae(this,void 0,void 0,(function*(){const s=!!e;if(s)le=e;else{const t=ve();de[le]=t,le=e=++ue,de[le]=n?t:{x:0,y:0}}if(yield pe(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=de[e];r&&(t=document.getElementById(r.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),de[le]=n,n&&(s||t)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function _e(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let we,Ee=null;function Se(t){const e=ce(t.target);e&&e.hasAttribute("sapper:prefetch")&&function(t){const e=ge(new URL(t,_e(document)));if(e)Ee&&t===Ee.href||(Ee={href:t,promise:Ge(e)}),Ee.promise}(e.href)}function xe(t){clearTimeout(we),we=setTimeout((()=>{Se(t)}),20)}function Te(t,e={noscroll:!1,replaceState:!1}){const n=ge(new URL(t,_e(document)));if(n){const r=$e(n,null,e.noscroll);return fe[e.replaceState?"replaceState":"pushState"]({id:le},"",t),r}return location.href=t,new Promise((()=>{}))}const Ae="undefined"!=typeof __SAPPER__&&__SAPPER__;let Ne,Pe,Ie,Le=!1,Re=[],ke="{}";const Oe={page:function(t){const e=Et(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe((e=>{(void 0===r||n&&e!==r)&&t(r=e)}))}}}({}),preloading:Et(null),session:Et(Ae&&Ae.session)};let He,Ce,Ue;function je(t,e){const{error:n}=t;return Object.assign({error:n},e)}function Me(t){return ae(this,void 0,void 0,(function*(){Ne&&Oe.preloading.set(!0);const e=function(t){return Ee&&Ee.href===t.href?Ee.promise:Ge(t)}(t),n=Pe={},r=yield e,{redirect:s}=r;if(n===Pe)if(s)yield Te(s.location,{replaceState:!0});else{const{props:e,branch:n}=r;yield De(n,e,je(e,t.page))}}))}function De(t,e,n){return ae(this,void 0,void 0,(function*(){Oe.page.set(n),Oe.preloading.set(!1),Ne?Ne.$set(e):(e.stores={page:{subscribe:Oe.page.subscribe},preloading:{subscribe:Oe.preloading.subscribe},session:Oe.session},e.level0={props:yield Ie},e.notify=Oe.page.notify,Ne=new ne({target:Ue,props:e,hydrate:!0})),Re=t,ke=JSON.stringify(n.query),Le=!0,Ce=!1}))}function Ge(t){return ae(this,void 0,void 0,(function*(){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},i={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(s&&(s.statusCode!==t||s.location!==e))throw new Error("Conflicting redirects");s={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};if(!Ie){const t=()=>({});Ie=Ae.preloaded[0]||t.call(i,{host:n.host,path:n.path,query:n.query,params:{}},He)}let a,c=1;try{const s=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;a=yield Promise.all(e.parts.map(((e,a)=>ae(this,void 0,void 0,(function*(){const f=r[a];if(function(t,e,n,r){if(r!==ke)return!0;const s=Re[t];return!!s&&(e!==s.segment||!(!s.match||JSON.stringify(s.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(a,f,l,s)&&(u=!0),o.segments[c]=r[a+1],!e)return{segment:f};const d=c++;let h;if(Ce||u||!Re[a]||Re[a].part!==e.i){u=!1;const{default:r,preload:s}=yield se[e.i].js();let o;o=Le||!Ae.preloaded[a+1]?s?yield s.call(i,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},He):{}:Ae.preloaded[a+1],h={component:r,props:o,segment:f,match:l,part:e.i}}else h=Re[a];return o[`level${d}`]=h})))))}catch(t){o.error=t,o.status=500,a=[]}return{redirect:s,props:o,branch:a}}))}var qe,Be,ze;Oe.session.subscribe((t=>ae(void 0,void 0,void 0,(function*(){if(He=t,!Le)return;Ce=!0;const e=ge(new URL(location.href)),n=Pe={},{redirect:r,props:s,branch:o}=yield Ge(e);n===Pe&&(r?yield Te(r.location,{replaceState:!0}):yield De(o,s,je(s,e.page)))})))),qe={target:document.querySelector("#sapper")},Be=qe.target,Ue=Be,ze=Ae.baseUrl,he=ze,pe=Me,"scrollRestoration"in fe&&(fe.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{fe.scrollRestoration="auto"})),addEventListener("load",(()=>{fe.scrollRestoration="manual"})),addEventListener("click",be),addEventListener("popstate",ye),addEventListener("touchstart",Se),addEventListener("mousemove",xe),Ae.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:r,preloaded:s,status:o,error:i}=Ae;Ie||(Ie=s&&s[0]);const a={error:i,status:o,session:r,level0:{props:Ie},level1:{props:{status:o,error:i},component:Yt},segments:s},c=me(n);De([],a,{host:t,path:e,query:c,params:{},error:i})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;fe.replaceState({id:ue},"",e);const n=ge(new URL(location.href));if(n)return $e(n,ue,!0,t)}));export{vt as A,A as B,s as C,X as D,j as E,c as F,d as G,z as H,B as I,Ht as J,E as K,Te as L,D as M,N,e as O,I as P,ht as Q,W as R,_t as S,F as T,f as U,pt as V,nt as W,q as X,L as a,H as b,O as c,$ as d,w as e,P as f,y as g,b as h,$t as i,x as j,C as k,lt as l,dt as m,t as n,ut as o,ft as p,V as q,xt as r,i as s,S as t,M as u,T as v,_ as w,mt as x,gt as y,bt as z};

import __inject_styles from './inject_styles.803b7e80.js';