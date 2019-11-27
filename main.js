!function(e){var t={};function s(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=t,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s(s.s=0)}([function(e,t,s){"use strict";s.r(t);class r{constructor(){this.id=this.getRandomId()}getRandomId(){function e(e){let t="";const s="abcdefghijklmnopqrstuvwxyz0123456789",r=s.length;for(let n=0;n<e;n++)t+=s.charAt(Math.floor(Math.random()*r));return t}return`${e(5)}-${e(5)}-${e(5)}`}}class n extends r{constructor(e,t,s,r){super(),this.model=e,this.producedYear=t,this.capacity=s,this.averageSpeed=r}showAverageSpeed(){return this.averageSpeed}showCapacityInPounds(){return 2.20462262*this.capacity}}class i extends n{constructor(e,t,s,r,n,i){super(e,s,r,n),this.name=t,this.countOfTeam=i}showAverageSpeed(){return`${this.averageSpeed}nm`}}class o extends n{constructor(e,t,s,r,n,i){super(e,s,r,n),this.licensePlate=t,this.typeOfGas=i}showAverageSpeed(){return`${this.averageSpeed}km`}}class c extends r{constructor(e,t,s){super(),this.model=e,this.cargoCost=t,this.distanceCost=s}}const a=new class{constructor(){this.prefix="JS-Band-"}set(e,t){localStorage.setItem(this.prefix+e,t)}get(e){return localStorage.getItem(this.prefix+e)}};Object.freeze(a);var d=a;class u{render(){}getLi(e,t){const s=document.createElement("li");s.className="list-element";const r=document.createElement("label");r.className="input-title";const n=document.createElement("code");return n.innerText=`${e}:`,r.appendChild(n),s.appendChild(r),s.append(t),s}}class l extends u{constructor(e){super(),this.ship=e}render(){const e=document.createElement("ul");return e.className="list",e.appendChild(this.getLi("Model",this.ship.model)),e.appendChild(this.getLi("Serial number/Name",this.ship.name)),e.appendChild(this.getLi("Produced year",this.ship.producedYear)),e.appendChild(this.getLi("Capacity (in pounds)",this.ship.showCapacityInPounds().toFixed(2))),e.appendChild(this.getLi("Average speed (in nm)",this.ship.showAverageSpeed())),e.appendChild(this.getLi("Count of team",this.ship.countOfTeam)),document.querySelector(".js-ship-list").append(e),e}}class p extends u{constructor(e){super(),this.truck=e}render(){const e=document.createElement("ul");return e.className="list",e.appendChild(this.getLi("Model",this.truck.model)),e.appendChild(this.getLi("License plate",this.truck.licensePlate)),e.appendChild(this.getLi("Produced year",this.truck.producedYear)),e.appendChild(this.getLi("Capacity (in pounds)",this.truck.showCapacityInPounds().toFixed(2))),e.appendChild(this.getLi("Average speed (in km)",this.truck.showAverageSpeed())),e.appendChild(this.getLi("Type of gas",this.truck.typeOfGas)),document.querySelector(".js-add-truck-form").append(e),e}}class h extends u{constructor(e){super(),this.cost=e}render(){const e=document.createElement("ul");return e.className="list",e.appendChild(this.getLi("Transport Model",this.cost.model)),e.appendChild(this.getLi("Cost (cargo)",this.cost.cargoCost)),e.appendChild(this.getLi("Cost (distance)",this.cost.distanceCost)),document.querySelector(".js-add-cost-form").append(e),e}}const m=new class{createTruck(e,t,s,r,n,i){return new o(e,t,s,r,n,i)}createShip(e,t,s,r,n,o){return new i(e,t,s,r,n,o)}};Object.freeze(m);var f=m;function g(e){e.querySelectorAll("input").forEach(e=>{e.value=""})}function y(){g(document.querySelector(".js-add-ship-form"))}function L(){g(document.querySelector(".js-add-truck-form"))}function S(){g(document.querySelector(".js-add-cost-form"))}const v=new class{constructor(){this.shipList=[],this.truckList=[],this.costList=[]}save(){d.set("shipList",JSON.stringify(this.shipList)),d.set("truckList",JSON.stringify(this.truckList)),d.set("costList",JSON.stringify(this.costList))}restore(){this.shipList=this.restoreClasses("shipList",i),this.truckList=this.restoreClasses("truckList",o),this.costList=this.restoreClasses("costList",c)}restoreClasses(e,t){const s=[];if(d.get(e)){JSON.parse(d.get(e)).forEach(e=>{const r=new t;s.push(Object.assign(r,e))})}return s}};v.restore(),v.shipList.forEach(e=>{new l(e).render()}),v.truckList.forEach(e=>{new p(e).render()}),v.costList.forEach(e=>{new h(e).render()}),document.querySelector(".js-add-ship-form").addEventListener("submit",(function(e){e.preventDefault();const t=new FormData(e.target),s=f.createShip(t.get("model"),t.get("name"),t.get("producedYear"),t.get("capacity"),t.get("averageSpeed"),t.get("countOfTeam"));v.shipList.push(s),v.save(),new l(s).render(),y()})),document.querySelector(".js-clear-ship-form").addEventListener("click",y),document.querySelector(".js-add-truck-form").addEventListener("submit",(function(e){e.preventDefault();const t=new FormData(e.target),s=f.createTruck(t.get("model"),t.get("licensePlate"),t.get("producedYear"),t.get("capacity"),t.get("averageSpeed"),t.get("typeOfGas"));v.truckList.push(s),v.save(),new p(s).render(),L()})),document.querySelector(".js-clear-truck-form").addEventListener("click",L),document.querySelector(".js-add-cost-form").addEventListener("submit",(function(e){e.preventDefault();const t=new FormData(e.target),s=new c(t.get("model"),t.get("cargoCost"),t.get("distanceCost"));v.costList.push(s),v.save(),new h(s).render(),S()})),document.querySelector(".js-clear-cost-form").addEventListener("click",S)}]);