!function(e,t){for(var r in t)e[r]=t[r]}(exports,function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([,function(e,t){function r(e){switch((e-1)%12+1){case 1:return"Capricorn";case 2:return"Aquarius";case 3:return"Pisces";case 4:return"Aries";case 5:return"Taurus";case 6:return"Gemini";case 7:return"Cancer";case 8:return"Leo";case 9:return"Virgo";case 10:return"Libra";case 11:return"Scorpio";case 12:return"Sagittarius"}}t.handler=function(e,t,n){const o=e.queryStringParameters.tokenId,u={name:"Token #"+o,description:"This is a basic NFT with token Id #"+o,external_url:"https://block-workshop.netlify.com/",home_url:"https://block-workshop.netlify.com/",image:"https://dummyimage.com/600x400/000/fff/&text=token%20"+o,image_url:"https://dummyimage.com/600x400/000/fff/&text=token%20"+o,attributes:[{trait_type:"zodiac",value:r(o)}],properties:[{key:"zodiac",value:r(o),type:"string"}],tags:["cool","hot","mild"]};console.log("EVENT",e),console.log("CONTEXT",t),n(null,{statusCode:200,body:JSON.stringify(u)})}}]));