var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n="Expected a function",i=0/0,o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,c="object"==typeof self&&self&&self.Object===Object&&self,s=l||c||Function("return this")(),d=Object.prototype.toString,v=Math.max,m=Math.min,g=function(){return s.Date.now()};function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==d.call(t))return i;if(p(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=p(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var l=a.test(e);return l||u.test(e)?f(e.slice(2),l?2:8):r.test(e)?i:+e}t=function(e,t,i){var o=!0,r=!0;if("function"!=typeof e)throw TypeError(n);return p(i)&&(o="leading"in i?!!i.leading:o,r="trailing"in i?!!i.trailing:r),function(e,t,i){var o,r,a,u,f,l,c=0,s=!1,d=!1,b=!0;if("function"!=typeof e)throw TypeError(n);function j(t){var n=o,i=r;return o=r=void 0,c=t,u=e.apply(i,n)}function T(e){var n=e-l,i=e-c;return void 0===l||n>=t||n<0||d&&i>=a}function h(){var e,n,i,o=g();if(T(o))return O(o);f=setTimeout(h,(e=o-l,n=o-c,i=t-e,d?m(i,a-n):i))}function O(e){return(f=void 0,b&&o)?j(e):(o=r=void 0,u)}function S(){var e,n=g(),i=T(n);if(o=arguments,r=this,l=n,i){if(void 0===f)return c=e=l,f=setTimeout(h,t),s?j(e):u;if(d)return f=setTimeout(h,t),j(l)}return void 0===f&&(f=setTimeout(h,t)),u}return t=y(t)||0,p(i)&&(s=!!i.leading,a=(d="maxWait"in i)?v(y(i.maxWait)||0,t):a,b="trailing"in i?!!i.trailing:b),S.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=l=r=f=void 0},S.flush=function(){return void 0===f?u:O(g())},S}(e,t,{leading:o,maxWait:t,trailing:r})};const b="feedback-form-state",j=document.querySelector(".feedback-form");j.addEventListener("input",(function(e){return e&&e.__esModule?e.default:e})(t)(function(e){T={email:h.value,message:O.value},localStorage.setItem(b,JSON.stringify(T))},500)),j.addEventListener("submit",function(e){if(e.preventDefault(),console.log({email:h.value,message:O.value}),""===h.value||""===O.value)return alert(`Будь ласка, заповніть всі обов'язкові поля.`);localStorage.removeItem(b),e.currentTarget.reset()});let T=JSON.parse(localStorage.getItem(b))||{};const{email:h,message:O}=j.elements;T&&(h.value=T.email||"",O.value=T.message||"");
//# sourceMappingURL=03-feedback.490cc27f.js.map
