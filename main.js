import EmblaCarousel from 'embla-carousel'


//Function to set up intersection observer to be apply to apply currently intersecting section styles to the appropriate link in the navBar.
function setUpObserver() {
  //Adding a style element to be apply to apply the pseudo-element style as well.
  const styleElement = document.head.appendChild(document.createElement('style'));
  styleElement.innerHTML = '.navBar a.active::after {transform: scaleX(1);transform-origin: left;}'

  //Setting up the thresholds, we will be observing the viewport so we don't have to specify a root.
  const options = {
    threshold: [0.35, 0.65],
  };

  const changeActiveSec = (entries) => {
    entries.forEach((entry) => {
      // const prevIntersect = document.querySelector('.active');
      // //removes active class if the current section that was previously intersecting is no longer intersecting.
      // if (!entry.isIntersecting && prevIntersect) {
      //   prevIntersect.classList.remove('active');
      // }
      // if (entry.isIntersecting) {

      //   //Only removing class if there exists a current navBar link with the class active, there exists no link with the active class on initial load
      //   if (prevIntersect) {
      //     prevIntersect.classList.remove('active');
      //   };

      //refactored!! All we need to do is set the boolean for the toggle as the entry.isIntersecting expression! Now if it is intersecting it will add the class and if not it removes it. All with a single expression addition to the toggle!

      //need a conditional for lookbook because its so big
      const id = entry.target.getAttribute('id');
      // if (id === 'lookbook') {
      //   return document.querySelector(`[href="#${id}"]`).classList.toggle("active", entry.intersectionRatio > 0.35);
      // };

      const newActive = document.querySelector(`[href="#${id}"]`).classList.toggle("active", entry.intersectionRatio > 0.55 || (entry.isIntersecting && id === 'lookbook'));
      // }
    })
  }

  const observer = new IntersectionObserver(changeActiveSec, options)

  //Targetting only sections with an id attribute value
  const sectionsWithId = [...(document.querySelectorAll('section'))].filter(section => section.id);
  console.log(sectionsWithId);

  //Observing all the sections with an ID, which are sections that are linked in the navBar :D
  sectionsWithId.forEach(section => observer.observe(section));
}

//Embla config
function initEmbla() {
  const emblaNode = document.querySelector('.embla');
  const options = { loop: true, containScroll: false, align: 'center', startIndex: 1 };
  const emblaApi = EmblaCarousel(emblaNode, options);
}

//Hiding hero until it is fully loaded;
function hideUntilLoaded() {
  const heroImg = document.querySelector('.hero_image');
  function loaded() {
    heroImg.classList.add('loaded')
  }

  if (!heroImg.complete) {
    heroImg.classList.add('not-loaded');
    heroImg.addEventListener('load', loaded);
  }
}



//Applying hamburger menu animations
function applyNavAnimations() {
  const hamburgerButton = document.querySelector('.hamburger_nav');
  const navBar = document.querySelector('.navBar');
  const navElement = document.querySelector('.navigation');
  
  hamburgerButton.addEventListener('click', () => {
    //Closure baby! Didn't even notice we were utilizing closure here. Even after applyNavAnimations returned, our listener handler still has access to the DOM nodes we queried. :D

    //#TODO, upon opening the nav menu we should lock our focus within it and close the menu upon a user navigating!
    const currentState = hamburgerButton.getAttribute('data-state');
    
    if (!currentState || currentState === 'closed') {
      navElement.inert = false;
      hamburgerButton.setAttribute('data-state', 'opened');
      hamburgerButton.setAttribute('aria-expanded', 'true');
    } else {
      navElement.inert = true;
      hamburgerButton.setAttribute('data-state', 'closed');
      hamburgerButton.setAttribute('aria-expanded', 'false');
    }
    
    navBar.classList.toggle('openNav', hamburgerButton.getAttribute('aria-expanded') === 'true');
  });
};


//Calling all of our setup functions once the DOM has been loaded.
document.addEventListener('DOMContentLoaded', () => {
  hideUntilLoaded();
  applyNavAnimations()
  setUpObserver();
  initEmbla();
})

//Side note, when implementing actual form email service, limit the number of characters for all inputs!!