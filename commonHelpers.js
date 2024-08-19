import{S as d,i as p}from"./assets/vendor-f33cd494.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const h="https://pixabay.com/api/",m=t=>{const o=new URLSearchParams({key:"45491471-a9703abbe87dc4841cd0b555c",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${h}/?${o}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})},f=t=>`
  <li class="gallery-card">
    <a class="gallery_link" href ="${t.largeImageURL}">
    <img class="gallery-img" src="${t.webformatURL}" alt="${t.tags}" title="${t.tags}"/>
    <ul class ="image-details">
    <p>Likes<span>${t.likes}</span></p>
    <p>Views<span>${t.views}</span></p>
    <p>Commets<span>${t.comments}</span></p>
    <p>Downloads<span>${t.downloads}</span></p>
    </ul>
    </a>
  </li>
  `,y=new d(".js-gallery a",{animationSpeed:250}),c=document.querySelector(".js-search-form"),i=document.querySelector(".js-gallery"),l=()=>c.reset(),u=document.querySelector(".js-loader"),g=()=>{u.classList.remove("is-hidden")},L=t=>{t.preventDefault(),g();const o=c.elements.user_query.value;m(o).then(s=>{if(s.hits.length===0){p.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),i.innerHTML="",l();return}i.innerHTML="";const a=s.hits.map(e=>f(e)).join("");i.insertAdjacentHTML("beforeend",a),l(),y.refresh()}).catch(s=>{console.log(s)}).finally(()=>{u.classList.add("is-hidden")})};c.addEventListener("submit",L);
//# sourceMappingURL=commonHelpers.js.map
