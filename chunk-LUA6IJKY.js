function i(){return JSON.parse(localStorage.webauthnExampleRegistrations||"[]")}function a(t,r=!0){localStorage.webauthnExampleRegistrations=JSON.stringify(t,null,"  "),s()}function c(t){let r=i();r.push(t),a(r)}function e(){return document.querySelector("#registrations")}function s(){e().value=JSON.stringify(i(),null,"  ")}function u(t,r){return async function(){document.querySelector("#error").textContent="",document.querySelector(t).textContent="\u2026";try{await r(),document.querySelector(t).textContent=" \u2705"}catch(o){document.querySelector(t).textContent=" \u274C",console.error(o),document.querySelector("#error").textContent=o}}}async function n(){document.querySelector("#error").textContent="",e().style.backgroundColor="rgba(255, 127, 0, 0.5)";try{a(JSON.parse(e().value),!1),e().style.backgroundColor="rgba(0, 255, 0, 0.5)"}catch(t){e().style.backgroundColor="rgba(255, 0, 0, 0.5)",console.error(t),document.querySelector("#error").textContent=t}}window.addEventListener("load",()=>{try{s(),e().addEventListener("keyup",n),e().addEventListener("change",n),e().addEventListener("paste",n)}catch(t){console.error(t)}});export{i as a,a as b,c,s as d,u as e};
//# sourceMappingURL=chunk-LUA6IJKY.js.map