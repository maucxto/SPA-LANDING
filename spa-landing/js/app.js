const WHATSAPP_NUMBER='525564492530';
const makeWhatsAppUrl=(message)=>`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
document.querySelectorAll('[data-whatsapp]').forEach(link=>{link.href=makeWhatsAppUrl(link.dataset.message||'Hola, quiero información sobre Spa AntoniRos.');link.target='_blank';link.rel='noopener'});
document.getElementById('year').textContent=new Date().getFullYear();

const services={
  faciales:[
    {name:'Limpieza Facial',duration:'90 min',price:'$820',image:'assets/services/tratamiento-01-limpieza-facial-v1.png'},
    {name:'Rejuvenecimiento con hilos tensores tópicos',duration:'60 min',price:'$1,500',image:'assets/services/tratamiento-02-hilos-tensores-topicos-v1.png'},
    {name:'Radiofrecuencia Facial',duration:'20 min',price:'$450',image:'assets/services/tratamiento-03-radiofrecuencia-facial-v1.png'},
    {name:'Facial Whitening',duration:'60 min',price:'$970',image:'assets/services/tratamiento-04-facial-whitening-v1.png'}
  ],
  masajes:[
    {name:'Masaje Personalizado',duration:'60 min',price:'$800 a $1,400',image:'assets/services/masaje-01-personalizado-v1.png'},
    {name:'Drenaje Linfático',duration:'60 min',price:'$830',image:'assets/services/masaje-02-drenaje-linfatico-v1.png'},
    {name:'Tratamiento Posquirúrgico',duration:'20 a 45 min',price:'$200 a $800',image:'assets/services/masaje-03-posquirurgico-v1.png'},
    {name:'Masaje Descontracturante',duration:'60 min',price:'$1,200',image:'assets/services/masaje-01-personalizado-v1.png'}
  ],
  aparatologia:[
    {name:'Cavitación',duration:'20 min por zona',price:'$300',image:'assets/services/aparatologia-01-cavitacion-final.png'},
    {name:'Vacuum Terapia',duration:'15 min por zona',price:'$450',image:'assets/services/aparatologia-02-vacuum-terapia-final.png'},
    {name:'Criolipólisis',duration:'45 min por sesión',price:'$1,800',image:'assets/services/aparatologia-03-criolipolisis-final.png'}
  ],
  corporales:[
    {name:'Anticelulitis',duration:'20 a 45 min',price:'$500 a $1,200',image:'assets/services/corporal-01-anticelulitis-final.png'},
    {name:'Reductivo Manual',duration:'40 min',price:'$850 por zona',image:'assets/services/corporal-02-reductivo-manual-final.png'},
    {name:'Mesoterapia',duration:'14 min',price:'10 sesiones sugeridas',image:'assets/services/corporal-03-mesoterapia-final.png'}
  ],
};
const labels={faciales:'Tratamientos',masajes:'Masajes',aparatologia:'Aparatología',corporales:'Tratamientos corporales'};
const list=document.getElementById('service-list');
function renderServices(category){list.innerHTML=services[category].map((item,index)=>`<article class="service-card"><div class="service-card__top"><span class="service-card__category">${labels[category]}</span><span class="service-card__number">${String(index+1).padStart(2,'0')}</span></div><div class="service-card__art${item.image?' service-card__art--photo':''}" aria-hidden="true">${item.image?`<img src="${item.image}" alt="" loading="lazy">`:'<span></span>'}</div><h3>${item.name}</h3><div class="service-card__meta"><span>${item.duration}</span><strong>${item.price}</strong></div><a class="service-card__action" target="_blank" rel="noopener" href="${makeWhatsAppUrl('Hola, quiero reservar '+item.name+' en Spa AntoniRos.')}"><span>Reservar</span><span aria-hidden="true">↗</span></a></article>`).join('');list.scrollLeft=0}
document.querySelectorAll('[data-category]').forEach(tab=>tab.addEventListener('click',()=>{document.querySelectorAll('[data-category]').forEach(t=>t.setAttribute('aria-selected','false'));tab.setAttribute('aria-selected','true');renderServices(tab.dataset.category)}));renderServices('faciales');

const valueCarousel=document.querySelector('[data-value-carousel]');
if(valueCarousel){
  const mobileQuery=window.matchMedia('(max-width: 47.999rem)');
  const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
  let valueIndex=0;
  let valueTimer;
  const stopValueCarousel=()=>{if(valueTimer){window.clearInterval(valueTimer);valueTimer=undefined}};
  const startValueCarousel=()=>{
    stopValueCarousel();
    if(!mobileQuery.matches||reducedMotion.matches)return;
    valueTimer=window.setInterval(()=>{
      const cards=[...valueCarousel.children];
      if(!cards.length)return;
      valueIndex=(valueIndex+1)%cards.length;
      valueCarousel.scrollTo({left:cards[valueIndex].offsetLeft-valueCarousel.offsetLeft,behavior:'smooth'});
    },4500);
  };
  valueCarousel.addEventListener('scroll',()=>{
    const cards=[...valueCarousel.children];
    if(!cards.length)return;
    valueIndex=cards.reduce((closest,card,index)=>Math.abs(card.offsetLeft-valueCarousel.offsetLeft-valueCarousel.scrollLeft)<Math.abs(cards[closest].offsetLeft-valueCarousel.offsetLeft-valueCarousel.scrollLeft)?index:closest,0);
  },{passive:true});
  valueCarousel.addEventListener('pointerdown',stopValueCarousel,{passive:true});
  valueCarousel.addEventListener('pointerup',startValueCarousel,{passive:true});
  mobileQuery.addEventListener('change',startValueCarousel);
  reducedMotion.addEventListener('change',startValueCarousel);
  startValueCarousel();
}
