import{a,b as o,c as n,e as t}from"../chunk-LUA6IJKY.js";import{n as r,q as C}from"../chunk-ZWBBCUH2.js";function i(){return!!(navigator.credentials&&navigator.credentials.create&&navigator.credentials.get&&window.PublicKeyCredential)}function s(){return a().map(e=>({id:e.rawId,type:e.type}))}async function c(){n(await r({publicKey:{challenge:"CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC",rp:{name:"Localhost, Inc."},user:{id:"IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII",name:"test_user",displayName:"Test User"},pubKeyCredParams:[{type:"public-key",alg:-7}],excludeCredentials:s(),authenticatorSelection:{userVerification:"discouraged"},extensions:{credProps:!0}}}))}async function u(){await C({publicKey:{challenge:"CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC",allowCredentials:s(),userVerification:"discouraged"}})}async function d(){o([])}async function l(){document.querySelector("#supported .status").textContent="\u2026",document.querySelector("#supported .status").textContent=i()?" \u2705":" \u274C"}window.addEventListener("load",()=>{try{document.querySelector("#register").addEventListener("click",t("#register .status",c)),document.querySelector("#authenticate").addEventListener("click",t("#authenticate .status",u)),document.querySelector("#clear").addEventListener("click",t("#clear .status",d)),document.querySelector("#supported").addEventListener("click",l)}catch(e){console.error(e)}});
//# sourceMappingURL=index.js.map
