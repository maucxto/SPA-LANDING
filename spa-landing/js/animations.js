const intro=document.getElementById('intro');
const introLogo=intro?.querySelector('.intro__logo');
const headerLogo=document.querySelector('.brand img');
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;

const finishIntro=()=>{
  intro?.classList.add('is-done');
  sessionStorage.setItem('spa-antoniros-intro','seen');
};

const flyIntroLogo=()=>{
  if(!intro||!introLogo||!headerLogo||typeof introLogo.animate!=='function'){
    finishIntro();
    return;
  }

  const start=introLogo.getBoundingClientRect();
  const target=headerLogo.getBoundingClientRect();
  const moveX=target.left+target.width/2-(start.left+start.width/2);
  const moveY=target.top+target.height/2-(start.top+start.height/2);
  const targetScale=target.width/start.width;

  intro.classList.add('is-flying');
  const flight=introLogo.animate([
    {transform:'translate3d(0,0,0) scale(1)',opacity:1},
    {transform:`translate3d(${moveX}px,${moveY}px,0) scale(${targetScale})`,opacity:1}
  ],{duration:850,easing:'cubic-bezier(.42,0,1,1)',fill:'forwards'});

  flight.finished.then(()=>{
    headerLogo.classList.add('is-receiving');
    introLogo.style.opacity='0';
    window.setTimeout(()=>{
      headerLogo.classList.remove('is-receiving');
      finishIntro();
    },220);
  }).catch(finishIntro);
};

if(reduce||sessionStorage.getItem('spa-antoniros-intro'))finishIntro();
else window.setTimeout(flyIntroLogo,2850);

const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}}),{threshold:.14});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
