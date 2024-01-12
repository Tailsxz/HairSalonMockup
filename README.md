# Project Title
Sleek Nails

[Live Site](https://takingcareofme.netlify.app) Demo Link

Nail Salon website acting as a demo for potential clients.

## Getting Started

To get a copy of this project, you can fork the repo then clone it as your own.

### Prerequisites
- A Github Account
- Your local Git CLI, Git Bash comes with the windows Git installation.

### Installing

[Fork the Repo](https://github.com/octocat/Spoon-Knife)

[Clone the Repo](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)

### Optimizations
Converted to webp and all resized with srcsets! now just need to set explicit width/height attributes on each image so the browser can know the space to reserve to prevent CLS.

### Knowledge gained from this project
Learned how to draw inspiration from other designs. Also learned what the structure of an HTML document should look like for a standard business website. 
Learned the semantics behind using fieldsets and legends, and how to ensure that forms are up to WAI-ARIA standards.
Figured out a way to use the ::before pseudo element when using background images to make text more legible.
Learned A LOT about layout modes(algorithms) specifically regarding the table layout algorithms. Using a table-layout value of fixed will use the fixed algorithm, allowing the author to define the widths of the table, and its rows and columns.
First time hosting fonts locally, also first time converting ttf to woff2.
Got intersectionObserver API to work! First time using it as well, lets go!
Got more experience implementing babel and webpack/configuring webpack to work with babel.
Used embla to create a testimonial carousel, along with media queries for a responsive carousel.
First usage of data-attributes to define a state for the navigation bar and hamburger menu.
First time creating my own SVG for a hamburger icon, played around with strokes and dasharrays/offsets.
Learned that an on keypress event is not needed as when an element is focused and space or enter is press, this will fire the click event for that element.
Learned how to use srcset and sizes to serve responsive images. 
Learned how to preload fonts to avoid FOUT(Flash of Unstyled Text)