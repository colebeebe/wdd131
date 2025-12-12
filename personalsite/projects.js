// Data for all of the projects; may be replaced with json
const projects = [
    {
        title: "Voxel-Style Rendering Engine",
        description: "Written in C# utilizing the OpenGL mappings provided by OpenTK, this is an engine that has been in development for nearly half a year. As of yet, it is capable of rendering millions of blocks at a sustainable 1500+fps. The purpose of this project is to explore 3D rendering pipelines.",
        images: [
            {
                path: "images/voxel_engine.png",
                alt: "in-engine example photo"
            }
        ],
    },
    {
        title: "Wii Portable",
        description: "A complete trim and relocation of many components of a Nintendo Wii console. This project included lots of micro-soldering and extreme precision. The console can run for about three hours on battery.",
        images: [
            {
                path: "images/portable_wii.jpeg",
                alt: "portable wii on startup menu"
            },
            {
                path: "images/portable_wii_inside.jpeg",
                alt: "portable wii internals"
            }
        ],
    },
    {
        title: "Atari Asteroids/Moonlander Arcade",
        description: "This project was created using the Godot game engine. It recreates the arcae versions of Asteroids and Moonlander. The purpose of this project was to learn more about game development.",
    }
];

function buildProject(project, leftAlign, index) {
    let html = `
        <div class="project ${leftAlign ? "left" : "right"}">
            <div class="project-content">
                <h2>${project.title}</h2>
                <p>${project.description}</p>
            </div>
    `;

    // If the project has images, add them to the html. If there are multiple, create buttons for a carousel
    if (project.images && project.images.length > 0) {
        const first = project.images[0];
        const multiple = project.images.length > 1;

        html += `
            <div class="carousel" data-index="0" data-project="${index}">
                ${multiple ? `<button class="prev">&lt;</button>` : ""}
                <img src="${first.path}" alt="${first.alt}">
                ${multiple ? `<button class="next">&gt;</button>` : ""}
            </div>
        `;
    }

    html += `</div>`;
    return html;
}

// Add the projects title to the page
const main = document.querySelector("main");
main.innerHTML = `<h1>Projects</h1>`;

// Create an element for every project in our array
projects.forEach((project, index) => {
    main.innerHTML += buildProject(project, index % 2 === 0, index);
});

// Get an array of all of our carousels and loop through them
const carousels = document.querySelectorAll(".carousel");

carousels.forEach(carousel => {
    const projectIndex = Number(carousel.dataset.project);
    const imgs = projects[projectIndex].images;

    // If there aren't enough images, we can exit here since we don't need to add functionality to buttons
    if (!imgs || imgs.length <= 1) return;

    const imgElement = carousel.querySelector("img");
    const prevBtn = carousel.querySelector(".prev");
    const nextBtn = carousel.querySelector(".next");

    // Create the functionality for the previous and next buttons, respectively
    prevBtn.addEventListener("click", () => {
        let idx = Number(carousel.dataset.index);
        idx = (idx - 1 + imgs.length) % imgs.length;
        carousel.dataset.index = idx;
        imgElement.src = imgs[idx].path;
        imgElement.alt = imgs[idx].alt;
    });

    nextBtn.addEventListener("click", () => {
        let idx = Number(carousel.dataset.index);
        idx = (idx + 1) % imgs.length;
        carousel.dataset.index = idx;
        imgElement.src = imgs[idx].path;
        imgElement.alt = imgs[idx].alt;
    });
});

