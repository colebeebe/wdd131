
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

const main = document.querySelector("main");
main.innerHTML = `<h1>Projects</h1>`;

projects.forEach((project, index) => {
    main.innerHTML += buildProject(project, index % 2 === 0, index);
});

const carousels = document.querySelectorAll(".carousel");

carousels.forEach(carousel => {
    const projectIndex = Number(carousel.dataset.project);
    const imgs = projects[projectIndex].images;

    if (!imgs || imgs.length <= 1) return; // no need for buttons

    const imgElement = carousel.querySelector("img");
    const prevBtn = carousel.querySelector(".prev");
    const nextBtn = carousel.querySelector(".next");

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

