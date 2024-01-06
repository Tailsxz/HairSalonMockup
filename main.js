// const sayHello = (name) => console.log(`Hello, ${name}! How are you today?`);

// sayHello('Tai');


function setUpObserver() {
  //Adding a style element to be apply to apply the pseudo-element style as well.

  //Setting up the thresholds, we will be observing the viewport so we don't have to specify a root.
  let options = {
    threshold: 0.55,
  };

  const changeActiveSec = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let prevIntersect = document.querySelector('.active');
        if (prevIntersect) {
          prevIntersect.classList.remove('active');
        };

        var id = entry.target.getAttribute('id');
        var newActive = document.querySelector(`[href="#${id}"]`).classList.add("active");
        console.log(entry, entry.target, newActive);
      }
    })
  }

  const observer = new IntersectionObserver(changeActiveSec, options)

  //Targetting only sections with an id attribute value
  const sectionsWithId = [...(document.querySelectorAll('section'))].filter(section => section.id);
  console.log(sectionsWithId);

  sectionsWithId.forEach(section => observer.observe(section));
}

document.addEventListener('DOMContentLoaded', () => {
  setUpObserver();
})