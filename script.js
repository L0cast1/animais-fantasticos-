

function InitTabNav(){
const tabmenu = document.querySelectorAll('.js-tabmenu li')
const tabcontent = document.querySelectorAll('.js-tabcontent section')
tabcontent[0].classList.add('ativo')

function colocartab(index){
  tabcontent.forEach((section) => {
    section.classList.remove('ativo')
  })

  tabcontent[index].classList.add('ativo')

};


tabmenu.forEach((itemMenu,index) =>{
  itemMenu.addEventListener('click', () => {
    colocartab(index);
  });
});
}
InitTabNav()

function InitAccordion(){
const accordionlist = document.querySelectorAll('.js-accordion dt')
const activeclass = 'ativo'
if(accordionlist.length){
accordionlist[0].classList.add(activeclass)
accordionlist[0].nextElementSibling.classList.add(activeclass)

function activeaccordion(){
  this.classList.toggle('ativo');
 this.nextElementSibling.classList.toggle(activeclass)
}

accordionlist.forEach((item) => {
  item.addEventListener('click', activeaccordion);
});
}
}
InitAccordion();


function InitAnimacaoScroll(){
const sections = document.querySelectorAll('.js-scroll');
if(sections.length){
const windowMetade = window.innerHeight * 0.6;

function AnimaScroll(){
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const isSection = (sectionTop - windowMetade) < 0;
    if(isSection){
      section.classList.add('ativo');
    } else {
      section.classList.remove('ativo');
    }
  });

};
AnimaScroll();

window.addEventListener('scroll', AnimaScroll)
};
}
InitAnimacaoScroll();

