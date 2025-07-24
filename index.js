import{a as p,S as f,i}from"./assets/vendor-5YrzWRhu.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const m="51463831-466a64c9262f6e860993cdb47",y="https://pixabay.com/api/";async function g(o){const r={key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await p.get(y,{params:r})).data}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),h=new f(".gallery a",{captionsData:"alt",captionDelay:250});function b(o){const r=o.map(({webformatURL:s,largeImageURL:n,tags:e,likes:t,views:a,comments:d,downloads:u})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${n}">
          <img class="gallery-image" src="${s}" alt="${e}" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${t}</p>
          <p><b>Views:</b> ${a}</p>
          <p><b>Comments:</b> ${d}</p>
          <p><b>Downloads:</b> ${u}</p>
        </div>
      </li>`).join("");c.insertAdjacentHTML("beforeend",r),h.refresh()}function L(){c.innerHTML=""}function w(){l.classList.remove("hidden")}function v(){l.classList.add("hidden")}document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector(".form"),r=o.elements["search-text"];o.addEventListener("submit",async s=>{s.preventDefault();const n=r.value.trim();if(!n){i.warning({message:"Please enter a search term.",position:"topRight"});return}w(),L();try{const e=await g(n);if(!e.hits.length){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(e.hits)}catch(e){i.error({message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(e)}finally{v()}})});
//# sourceMappingURL=index.js.map
