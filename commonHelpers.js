import{a as c,S as f,i as u}from"./assets/vendor-43ae9e23.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&d(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const h="live_KMp19QzhJ8I3AYtoYghEXNrVMJ0hyUFwtzrQZM9zSgjtPw0LAitW0Eqio1Rvg0Np";c.defaults.headers.common["x-api-key"]=h;const m="https://api.thecatapi.com/v1";async function p(){return c.get(m+"/breeds").then(t=>t.data).catch(t=>{throw new Error(t)})}async function g(t){return c.get(`${m}/images/search?breed_ids=${t}`).then(r=>r.data[0]).catch(r=>{throw new Error(r)})}const a=document.querySelector("#breed-select"),n=document.querySelector(".loader"),l=document.querySelector(".cat-info");new f({select:a,settings:{placeholderText:"Please, select a breed",disabled:!0},events:{afterChange:t=>{y(t[0].value)}}});n.classList.remove("hidden");p().then(t=>{const r=t.map(s=>({text:s.name,value:s.id}));a.slim.setData([{text:"Please, select a breed",value:"",disabled:!0},...r]),a.slim.enable(),n.classList.add("hidden")}).catch(t=>{n.classList.add("hidden"),u.error({title:"Error",message:"Cannot fetch data. Please, try again later.",position:"topRight"})});function y(t){l.classList.add("hidden"),t&&(n.classList.remove("hidden"),g(t).then(r=>{const s=r.breeds[0];document.querySelector("img.cat-info-image").src=r.url,document.querySelector(".cat-info-title").textContent=s.name,document.querySelector(".cat-info-description").textContent=s.description,document.querySelector(".cat-info-temperament").innerHTML="<strong>Temperament</strong>: "+s.temperament,l.classList.remove("hidden"),n.classList.add("hidden")}).catch(r=>{n.classList.add("hidden"),u.error({title:"Error",message:"Cannot fetch data. Please, try again later.",position:"topRight"})}))}
//# sourceMappingURL=commonHelpers.js.map
