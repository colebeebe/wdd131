const projects = [
    {
        title: "Voxel-Style Rendering Engine",
        description: "Written in C# utilizing the OpenGL mappings provided by OpenTK, this is an engine that has been in development for nearly half a year. As of yet, it is capable of rendering millions of blocks at a sustainable 1500+fps. The purpose of this project is to explore 3D rendering pipelines.",
        images: [
            {
                path: "images/voxel_engine.png",
                alt: "in-engine example photo"
            },
        ],
    },
    {
        title: "Wii Portable",
        description: "A complete trim and relocation of many components of a Nintendo Wii console. This project included lots of micro-soldering and extreme precision. The console can run for about three hours on battery.",
        images: [
            {
                path: "images/portable_wii.jpeg",
                alt: "image of portable wii on startup menu"
            },
            {
                path: "images/portable_wii_inside.jpeg",
                alt: "image of portable wii internals"
            }
        ],
    },
    {
        title: "Atari Asteroids/Moonlander Arcade",
        description: "This project was created using the Godot game engine. It recreates the arcae versions of Asteroids and Moonlander. The purpose of this project was to learn more about game development.",
    }
];


function buildProject(project, leftAlign) {
    let html = ``;
    if (leftAlign) {
        html += `<div class="project left">`
    }
    else {
        html += `<div class="project right">`
    }
    html += `
        <div>
            <h2>${project.title}</h2>
            <p>${project.description}</p>
        </div>
    `;
    if ("images" in project) {
        html += `<img src="${project.images[0].path}" alt="${project.images[0].alt}" >`
    }
    html += `</div>`;
    return html;
}


const main = document.querySelector("main");
main.innerHTML = `<h1>Projects</h1>`;
projects.forEach((project, index) => {
    main.innerHTML += buildProject(project, index % 2 == 0);
});
