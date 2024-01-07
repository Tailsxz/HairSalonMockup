// const sayHello = (name) => console.log(`Hello, ${name}! How are you today?`);

// sayHello('Tai');

//Function to set up intersection observer to be apply to apply currently intersecting section styles to the appropriate link in the navBar.
function setUpObserver() {
  //Adding a style element to be apply to apply the pseudo-element style as well.
  const styleElement = document.head.appendChild(document.createElement('style'));
  styleElement.innerHTML = '.navBar a.active::after {transform: scaleX(1);transform-origin: left;}'

  //Setting up the thresholds, we will be observing the viewport so we don't have to specify a root.
  let options = {
    threshold: 0.65,
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
      const id = entry.target.getAttribute('id');
      const newActive = document.querySelector(`[href="#${id}"]`).classList.toggle("active", entry.isIntersecting);
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

//Setting up the observer after the document has been fully parsed and any deferred scripts have been executed
document.addEventListener('DOMContentLoaded', () => {
  setUpObserver();
})