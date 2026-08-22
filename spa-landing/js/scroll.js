const header=document.querySelector('[data-header]');addEventListener('scroll',()=>header.classList.toggle('is-scrolled',scrollY>12),{passive:true});
