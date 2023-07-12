function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function u(t,e){t.appendChild(e)}function c(t,e,n){t.insertBefore(e,n||null)}function s(t){t.parentNode.removeChild(t)}function i(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function a(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function d(){return f(" ")}function p(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function m(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function g(t){return""===t?null:+t}function h(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function v(t,e){t.value=null==e?"":e}let $;function b(t){$=t}const y=[],x=[],_=[],q=[],k=Promise.resolve();let z=!1;function E(t){_.push(t)}const j=new Set;let w=0;function N(){const t=$;do{for(;w<y.length;){const t=y[w];w++,b(t),A(t.$$)}for(b(null),y.length=0,w=0;x.length;)x.pop()();for(let t=0;t<_.length;t+=1){const e=_[t];j.has(e)||(j.add(e),e())}_.length=0}while(y.length);for(;q.length;)q.pop()();z=!1,j.clear(),b(t)}function A(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(E)}}const C=new Set;function O(t,e){t&&t.i&&(C.delete(t),t.i(e))}function F(t,n,l,u){const{fragment:c,on_mount:s,on_destroy:i,after_update:a}=t.$$;c&&c.m(n,l),u||E((()=>{const n=s.map(e).filter(r);i?i.push(...n):o(n),t.$$.on_mount=[]})),a.forEach(E)}function L(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function S(t,e){-1===t.$$.dirty[0]&&(y.push(t),z||(z=!0,k.then(N)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function T(e,r,l,u,c,i,a,f=[-1]){const d=$;b(e);const p=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(d?d.$$.context:[])),callbacks:n(),dirty:f,skip_bound:!1,root:r.target||d.$$.root};a&&a(p.root);let m=!1;if(p.ctx=l?l(e,r.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return p.ctx&&c(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),m&&S(e,t)),n})):[],p.update(),m=!0,o(p.before_update),p.fragment=!!u&&u(p.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);p.fragment&&p.fragment.l(t),t.forEach(s)}else p.fragment&&p.fragment.c();r.intro&&O(e.$$.fragment),F(e,r.target,r.anchor,r.customElement),N()}b(d)}class B{$destroy(){L(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function D(t,e,n){const o=t.slice();return o[8]=e[n],o}function G(t,e,n){const o=t.slice();return o[11]=e[n],o[13]=n,o}function M(t){let e,n,o,r;function l(...e){return t[6](t[13],...e)}return{c(){e=a("input"),m(e,"class","input svelte-gqzp1t"),m(e,"type","number"),e.value=n=t[11].value,m(e,"step","0.01")},m(t,n){c(t,e,n),o||(r=p(e,"change",l),o=!0)},p(o,r){t=o,1&r&&n!==(n=t[11].value)&&e.value!==n&&(e.value=n)},d(t){t&&s(e),o=!1,r()}}}function P(t){let e,n=t[2],o=[];for(let e=0;e<n.length;e+=1)o[e]=H(D(t,n,e));return{c(){e=a("div");for(let t=0;t<o.length;t+=1)o[t].c();m(e,"class","results-container svelte-gqzp1t")},m(t,n){c(t,e,n);for(let t=0;t<o.length;t+=1)o[t].m(e,null)},p(t,r){if(4&r){let l;for(n=t[2],l=0;l<n.length;l+=1){const u=D(t,n,l);o[l]?o[l].p(u,r):(o[l]=H(u),o[l].c(),o[l].m(e,null))}for(;l<o.length;l+=1)o[l].d(1);o.length=n.length}},d(t){t&&s(e),i(o,t)}}}function H(t){let e,n,o,r,l,i,p,g,v,$=t[8].combo.join(", ")+"",b=t[8].outliers.join(", ")+"";return{c(){e=a("div"),n=a("div"),o=f("Combo: "),r=f($),l=d(),i=a("div"),p=f("Outliers: "),g=f(b),v=d(),m(e,"class","indiv-results svelte-gqzp1t")},m(t,s){c(t,e,s),u(e,n),u(n,o),u(n,r),u(e,l),u(e,i),u(i,p),u(i,g),u(e,v)},p(t,e){4&e&&$!==($=t[8].combo.join(", ")+"")&&h(r,$),4&e&&b!==(b=t[8].outliers.join(", ")+"")&&h(g,b)},d(t){t&&s(e)}}}function I(e){let n,r,l,h,$,b,y,x,_,q,k,z,E,j,w,N=e[0],A=[];for(let t=0;t<N.length;t+=1)A[t]=M(G(e,N,t));let C=e[2]&&P(e);return{c(){n=a("div"),r=a("div"),l=a("div");for(let t=0;t<A.length;t+=1)A[t].c();h=d(),$=a("button"),$.textContent="Add input",b=d(),y=a("div"),x=a("label"),_=f("Desired sum\n        "),q=a("input"),k=d(),z=a("button"),z.textContent="Get combos and outliers",E=d(),C&&C.c(),m($,"class","add-input-button svelte-gqzp1t"),m(l,"class","column svelte-gqzp1t"),m(q,"class","input svelte-gqzp1t"),m(q,"type","number"),m(q,"step","0.01"),m(z,"class","get-outliers-button svelte-gqzp1t"),m(y,"class","column svelte-gqzp1t"),m(r,"class","inputs-container svelte-gqzp1t"),m(n,"class","body svelte-gqzp1t")},m(t,o){c(t,n,o),u(n,r),u(r,l);for(let t=0;t<A.length;t+=1)A[t].m(l,null);u(l,h),u(l,$),u(r,b),u(r,y),u(y,x),u(x,_),u(x,q),v(q,e[1]),u(y,k),u(y,z),u(n,E),C&&C.m(n,null),j||(w=[p($,"click",e[4]),p(q,"input",e[7]),p(z,"click",e[5])],j=!0)},p(t,[e]){if(9&e){let n;for(N=t[0],n=0;n<N.length;n+=1){const o=G(t,N,n);A[n]?A[n].p(o,e):(A[n]=M(o),A[n].c(),A[n].m(l,h))}for(;n<A.length;n+=1)A[n].d(1);A.length=N.length}2&e&&g(q.value)!==t[1]&&v(q,t[1]),t[2]?C?C.p(t,e):(C=P(t),C.c(),C.m(n,null)):C&&(C.d(1),C=null)},i:t,o:t,d(t){t&&s(n),i(A,t),C&&C.d(),j=!1,o(w)}}}function J(t,e,n){let o=[{value:0,id:0}],r=0,l=[];const u=(t,e)=>{let r=t.target.value;r=Number(Number(r).toFixed(2));let l=o.filter((t=>t.id!==e));l=l.concat({id:e,value:r}),n(0,o=l.sort(((t,e)=>{t.id,e.id})))};return[o,r,l,u,()=>{const t=o?.[o.length-1]?.value??1;n(0,o=o.concat([{id:o.length,value:t}]))},()=>{n(2,l=((t,e)=>{const n=t.map(((t,e)=>({value:t,id:e}))),o=(t=>t.reduce(((t,e)=>t.concat(t.map((t=>[e].concat(t))))),[[]]))(n),r=o.filter((t=>{const n=t.map((t=>t.value));return Number(n.reduce(((t,e)=>t+e),0).toFixed(2))===e})),l=[];for(const t of r){const e=n.filter((e=>{const{id:n}=e;return!t.some((t=>t.id===n))}));l.push({combo:t.map((t=>t.value)),outliers:e.map((t=>t.value))})}return l})(o.map((t=>t.value)),Number(r.toFixed(2))))},(t,e)=>u(e,t),function(){r=g(this.value),n(1,r)}]}class K extends B{constructor(t){super(),T(this,t,J,I,l,{})}}function Q(e){let n,o,r,l,i;return l=new K({}),{c(){var t;n=a("base"),o=d(),r=a("main"),(t=l.$$.fragment)&&t.c(),m(n,"href","/chrissy-help/"),m(r,"class","svelte-2y1l8u")},m(t,e){u(document.head,n),c(t,o,e),c(t,r,e),F(l,r,null),i=!0},p:t,i(t){i||(O(l.$$.fragment,t),i=!0)},o(t){!function(t,e,n,o){if(t&&t.o){if(C.has(t))return;C.add(t),(void 0).c.push((()=>{C.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}(l.$$.fragment,t),i=!1},d(t){s(n),t&&s(o),t&&s(r),L(l)}}}class R extends B{constructor(t){super(),T(this,t,null,Q,l,{})}}const U=(t,e)=>new R({target:t,props:e});export{U as startApp};
//# sourceMappingURL=bundle.js.map