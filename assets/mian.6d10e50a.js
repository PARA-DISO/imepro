import{o as i,c as o,F as m,r as d,u as r,a as f,t as u,b as a,_ as g,d as h,e as y}from"./recentry_news.f81ae7c7.js";const l=[{name:"Gamma Correction",image_file:"default.png",short_description:"\u30AC\u30F3\u30DE\u88DC\u6B63(\u660E\u308B\u3055\u88DC\u6B63)\u3092\u884C\u3046"},{name:"Gray Scale",image_file:"default.png",short_description:"\u30B0\u30EC\u30FC\u30B9\u30B1\u30FC\u30EB\u753B\u50CF\u3078\u5909\u63DB\u3059\u308B"},{name:"Sepia Tone",image_file:"default.png",short_description:"\u30BB\u30D4\u30A2\u8ABF\u753B\u50CF\u3078\u5909\u63DB\u3059\u308B"},{name:"HSL",image_file:"default.png",short_description:"HSL\u30AB\u30E9\u30FC\u3078\u5909\u63DB\u3057\u5024\u3092\u64CD\u4F5C\u3059\u308B"},{name:"HSV",image_file:"default.png",short_description:"HSV\u30AB\u30E9\u30FC\u3078\u5909\u63DB\u3057\u5024\u3092\u64CD\u4F5C\u3059\u308B"},{name:"RGB",image_file:"default.png",short_description:"RGB\u30AB\u30E9\u30FC\u306E\u5024\u3092\u64CD\u4F5C\u3059\u308B"}];function S(n){let t=n.split(/[-_ ]+/),s;return t.forEach((_,c)=>{let e=_.toLowerCase();c==0?s=e:s+=e[0].toUpperCase()+e.slice(1)}),s}const z={class:"functions_list list anchor_list"},B=["href"],L=["data-list-name"],w={__name:"function_list",props:{display_size:Number},setup(n){const t=n,s=t.display_size<0||l.length<display_size?l.length:t.display_size;return console.log(s),(_,c)=>(i(),o("ul",z,[(i(!0),o(m,null,d(r(l).filter((e,p)=>p<r(s)),e=>(i(),o("a",{key:e.name.replaceAll(" ",""),href:"/"+r(S)(e.name)},[f("li",{"data-list-name":e.name},u(e.short_description),9,L)],8,B))),128))]))}};a(g).mount("#navigation");a(h).mount("#footer");a(w,{display_size:-1}).mount("#functions");a(y,{page:0,display_size:10}).mount("#news_contents");
