!function(){var e=function(e,t){try{var n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){throw console.error(e.message),e}},t=function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){throw console.error(e.message),e}},n="tasks",a=document.getElementById("myInput"),o=1;function d(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o,a=document.createElement("li"),d=document.createTextNode(e);a.appendChild(d),a.dataset.id=n,t&&(a.className="checked"),myUL.appendChild(a),i(a)}var r=function(e,t){return{text:e,isDone:t,id:o}};function i(e){var t=document.createElement("SPAN"),n=document.createTextNode("×");t.className="close",t.appendChild(n),e.appendChild(t)}var c=document.getElementById("addBtn"),s=document.getElementById("myUL");c.addEventListener("click",(function(){var i=a.value.trim();i?(d(i),a.value="",function(a){var d=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=t(n)||[],c=r(a,d);void 0===i?e(n,[c]):(i.push(c),e(n,i));o+=1}(i)):alert("You must write something!")})),s.addEventListener("click",(function(a){var o=a.target,d=t(n);if("LI"===o.tagName){o.classList.toggle("checked");var r=d.findIndex((function(e){return Number(e.id)===Number(o.dataset.id)}));d[r].isDone=!d[r].isDone}else if(o.classList.contains("close")){o.parentNode.remove();var i=d.findIndex((function(e){return Number(e.id)===Number(o.parentNode.dataset.id)}));d.splice(i,1)}e(n,d)})),window.addEventListener("DOMContentLoaded",(function(){var e=t(n);void 0!==e&&e.length>0?(e.forEach((function(e){return d(e.text,e.isDone,e.id)})),o=e[e.length-1].id+1):o=1}))}();
//# sourceMappingURL=index.353e0367.js.map