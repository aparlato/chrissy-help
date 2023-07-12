function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function u(t,e){t.appendChild(e)}function c(t,e,n){t.insertBefore(e,n||null)}function s(t){t.parentNode.removeChild(t)}function i(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function a(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function d(){return f(" ")}function p(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function m(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function h(t){return""===t?null:+t}function g(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function v(t,e){t.value=null==e?"":e}let $;function b(t){$=t}const x=[],y=[],_=[],w=[],k=Promise.resolve();let E=!1;function j(t){_.push(t)}const N=new Set;let A=0;function C(){const t=$;do{for(;A<x.length;){const t=x[A];A++,b(t),O(t.$$)}for(b(null),x.length=0,A=0;y.length;)y.pop()();for(let t=0;t<_.length;t+=1){const e=_[t];N.has(e)||(N.add(e),e())}_.length=0}while(x.length);for(;w.length;)w.pop()();E=!1,N.clear(),b(t)}function O(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(j)}}const F=new Set;function L(t,e){t&&t.i&&(F.delete(t),t.i(e))}function S(t,n,l,u){const{fragment:c,on_mount:s,on_destroy:i,after_update:a}=t.$$;c&&c.m(n,l),u||j((()=>{const n=s.map(e).filter(r);i?i.push(...n):o(n),t.$$.on_mount=[]})),a.forEach(j)}function T(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function q(t,e){-1===t.$$.dirty[0]&&(x.push(t),E||(E=!0,k.then(C)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function B(e,r,l,u,c,i,a,f=[-1]){const d=$;b(e);const p=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(d?d.$$.context:[])),callbacks:n(),dirty:f,skip_bound:!1,root:r.target||d.$$.root};a&&a(p.root);let m=!1;if(p.ctx=l?l(e,r.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return p.ctx&&c(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),m&&q(e,t)),n})):[],p.update(),m=!0,o(p.before_update),p.fragment=!!u&&u(p.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);p.fragment&&p.fragment.l(t),t.forEach(s)}else p.fragment&&p.fragment.c();r.intro&&L(e.$$.fragment),S(e,r.target,r.anchor,r.customElement),C()}b(d)}class D{$destroy(){T(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function G(t,e,n){const o=t.slice();return o[8]=e[n],o}function M(t,e,n){const o=t.slice();return o[11]=e[n],o[13]=n,o}function P(t){let e,n,o,r;function l(...e){return t[6](t[13],...e)}return{c(){e=a("input"),m(e,"class","input svelte-xp7wdr"),m(e,"type","number"),e.value=n=t[11].value,m(e,"step","0.01")},m(t,n){c(t,e,n),o||(r=p(e,"change",l),o=!0)},p(o,r){t=o,1&r&&n!==(n=t[11].value)&&e.value!==n&&(e.value=n)},d(t){t&&s(e),o=!1,r()}}}function z(t){let e,n=t[2],o=[];for(let e=0;e<n.length;e+=1)o[e]=H(G(t,n,e));return{c(){e=a("div");for(let t=0;t<o.length;t+=1)o[t].c();m(e,"class","results-container svelte-xp7wdr")},m(t,n){c(t,e,n);for(let t=0;t<o.length;t+=1)o[t].m(e,null)},p(t,r){if(4&r){let l;for(n=t[2],l=0;l<n.length;l+=1){const u=G(t,n,l);o[l]?o[l].p(u,r):(o[l]=H(u),o[l].c(),o[l].m(e,null))}for(;l<o.length;l+=1)o[l].d(1);o.length=n.length}},d(t){t&&s(e),i(o,t)}}}function H(t){let e,n,o,r,l,i,p,m=t[8].combo.join(", ")+"",h=t[8].outliers.join(", ")+"";return{c(){e=a("div"),n=f("Combos: "),o=f(m),r=d(),l=a("div"),i=f("Outliers: "),p=f(h)},m(t,s){c(t,e,s),u(e,n),u(e,o),c(t,r,s),c(t,l,s),u(l,i),u(l,p)},p(t,e){4&e&&m!==(m=t[8].combo.join(", ")+"")&&g(o,m),4&e&&h!==(h=t[8].outliers.join(", ")+"")&&g(p,h)},d(t){t&&s(e),t&&s(r),t&&s(l)}}}function I(e){let n,r,l,g,$,b,x,y,_,w,k,E,j,N,A,C=e[0],O=[];for(let t=0;t<C.length;t+=1)O[t]=P(M(e,C,t));let F=e[2]&&z(e);return{c(){n=a("div"),r=a("div"),l=a("div");for(let t=0;t<O.length;t+=1)O[t].c();g=d(),$=a("button"),$.textContent="Add input",b=d(),x=a("div"),y=a("label"),_=f("Desired sum\n        "),w=a("input"),k=d(),E=a("button"),E.textContent="Get combos and outliers",j=d(),F&&F.c(),m($,"class","add-input-button svelte-xp7wdr"),m(l,"class","column svelte-xp7wdr"),m(w,"class","input svelte-xp7wdr"),m(w,"type","number"),m(w,"step","0.01"),m(E,"class","get-outliers-button svelte-xp7wdr"),m(x,"class","column svelte-xp7wdr"),m(r,"class","inputs-container svelte-xp7wdr"),m(n,"class","body svelte-xp7wdr")},m(t,o){c(t,n,o),u(n,r),u(r,l);for(let t=0;t<O.length;t+=1)O[t].m(l,null);u(l,g),u(l,$),u(r,b),u(r,x),u(x,y),u(y,_),u(y,w),v(w,e[1]),u(x,k),u(x,E),u(n,j),F&&F.m(n,null),N||(A=[p($,"click",e[4]),p(w,"input",e[7]),p(E,"click",e[5])],N=!0)},p(t,[e]){if(9&e){let n;for(C=t[0],n=0;n<C.length;n+=1){const o=M(t,C,n);O[n]?O[n].p(o,e):(O[n]=P(o),O[n].c(),O[n].m(l,g))}for(;n<O.length;n+=1)O[n].d(1);O.length=C.length}2&e&&h(w.value)!==t[1]&&v(w,t[1]),t[2]?F?F.p(t,e):(F=z(t),F.c(),F.m(n,null)):F&&(F.d(1),F=null)},i:t,o:t,d(t){t&&s(n),i(O,t),F&&F.d(),N=!1,o(A)}}}function J(t,e,n){let o=[{value:0,id:0}],r=0,l=[];const u=(t,e)=>{let r=t.target.value;r=Number(Number(r).toFixed(2));let l=o.filter((t=>t.id!==e));l=l.concat({id:e,value:r}),n(0,o=l.sort(((t,e)=>{t.id,e.id})))};return[o,r,l,u,()=>{const t=o?.[o.length-1]?.value??1;n(0,o=o.concat([{id:o.length,value:t}]))},()=>{n(2,l=((t,e)=>{const n=t.map(((t,e)=>({value:t,id:e}))),o=(t=>t.reduce(((t,e)=>t.concat(t.map((t=>[e].concat(t))))),[[]]))(n),r=o.filter((t=>{const n=t.map((t=>t.value));return Number(n.reduce(((t,e)=>t+e),0).toFixed(2))===e})),l=[];for(const t of r){const e=n.filter((e=>{const{id:n}=e;return!t.some((t=>t.id===n))}));l.push({combo:t.map((t=>t.value)),outliers:e.map((t=>t.value))})}return l})(o.map((t=>t.value)),Number(r.toFixed(2))))},(t,e)=>u(e,t),function(){r=h(this.value),n(1,r)}]}class K extends D{constructor(t){super(),B(this,t,J,I,l,{})}}function Q(e){let n,o,r,l,i;return l=new K({}),{c(){var t;n=a("base"),o=d(),r=a("main"),(t=l.$$.fragment)&&t.c(),m(n,"href","/"),m(r,"class","svelte-2y1l8u")},m(t,e){u(document.head,n),c(t,o,e),c(t,r,e),S(l,r,null),i=!0},p:t,i(t){i||(L(l.$$.fragment,t),i=!0)},o(t){!function(t,e,n,o){if(t&&t.o){if(F.has(t))return;F.add(t),(void 0).c.push((()=>{F.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}(l.$$.fragment,t),i=!1},d(t){s(n),t&&s(o),t&&s(r),T(l)}}}class R extends D{constructor(t){super(),B(this,t,null,Q,l,{})}}const U=(t,e)=>new R({target:t,props:e});export{U as startApp};
//# sourceMappingURL=bundle.js.map
