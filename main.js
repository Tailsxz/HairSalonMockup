// const sayHello = (name) => console.log(`Hello, ${name}! How are you today?`);

// sayHello('Tai');

//Function to set up intersection observer to be apply to apply currently intersecting section styles to the appropriate link in the navBar.
function setUpObserver() {
  //Adding a style element to be apply to apply the pseudo-element style as well.
  const styleElement = document.head.appendChild(document.createElement('style'));
  styleElement.innerHTML = '.navBar a.active::after {transform: scaleX(1);transform-origin: left;}'

  //Setting up the thresholds, we will be observing the viewport so we don't have to specify a root.
  let options = {
    threshold: 0.55,
  };

  const changeActiveSec = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {

        const prevIntersect = document.querySelector('.active');
        if (prevIntersect) {
          prevIntersect.classList.remove('active');
        };

        const id = entry.target.getAttribute('id');
        const newActive = document.querySelector(`[href="#${id}"]`).classList.add("active");
      }
    })
  }

  const observer = new IntersectionObserver(changeActiveSec, options)

  //Targetting only sections with an id attribute value
  const sectionsWithId = [...(document.querySelectorAll('section'))].filter(section => section.id);
  console.log(sectionsWithId);

  //Observing all the sections with an ID, which are sections that are linked in the navBar :D
  sectionsWithId.forEach(section => observer.observe(section));
}

document.addEventListener('DOMContentLoaded', () => {
  setUpObserver();
})