import"./assets/styles-a37513eb.js";document.addEventListener("DOMContentLoaded",function(){const e={email:"",message:""},a=document.querySelector(".feedback-form"),o=a.querySelector('input[name="email"]'),m=a.querySelector('textarea[name="message"]'),s=localStorage.getItem("feedback-form-state");if(s){const t=JSON.parse(s);e.email=t.email,e.message=t.message,o.value=e.email,m.value=e.message}a.addEventListener("input",function(t){const{name:n,value:r}=t.target;e[n]=r.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(e))}),a.addEventListener("submit",function(t){t.preventDefault(),e.email&&e.message?(console.log(e),localStorage.removeItem("feedback-form-state"),a.reset(),e.email="",e.message=""):alert("Будь ласка, заповніть обидва поля")})});
//# sourceMappingURL=commonHelpers2.js.map
