/* empty css                      */import{a as f,S as p,i as n}from"./assets/vendor-Cq7ZUixy.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g="https://pixabay.com/api/",y="53482364-9a18e1e8aa6a751435db46016";function h(i){const r={key:y,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0};return f.get(g,{params:r}).then(o=>o.data)}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),b=new p(".gallery a",{captionsData:"alt",captionDelay:250});function L(i){let r="";i.map(o=>{const{webformatURL:a,largeImageURL:e,tags:t,likes:s,views:u,comments:m,downloads:d}=o;r+=`
            <li class="gallery-item">
                <a class="gallery-link" href="${e}">
                    <img
                        class="gallery-image"
                        src="${a}"
                        alt="${t}"
                    />
                    </a> 
                    <div class="info">
                        <p><b>Likes</b> ${s}</p>
                        <p><b>Views</b> ${u}</p>
                        <p><b>Comments</b> ${m}</p>
                        <p><b>Downloads</b> ${d}</p>  
                </div>
            </li>
   `}),l.insertAdjacentHTML("beforeend",r),b.refresh()}function w(){l.innerHTML=""}function S(){c.classList.remove("is-hidden")}function q(){c.classList.add("is-hidden")}const v=document.querySelector(".form");v.addEventListener("submit",P);function P(i){i.preventDefault();const r=i.currentTarget.elements["search-text"].value.trim();if(!r){n.warning({title:"Warning",message:"Please enter a search query",position:"topRight"});return}S(),w(),h(r).then(o=>{if(!o.hits.length){n.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(o.hits)}).catch(o=>{n.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(o)}).finally(()=>{q()})}
//# sourceMappingURL=index.js.map
