"use strict"; // Use ECMAScript 5 strict mode in browsers that support it

window.addEventListener("load", initApp); // When the page is loaded, run initApp function

// Function to initialize the Web App
async function initApp() {
  console.log("initApp: app.js is running 🎉"); // Log to the console that the app is running
  const projects = await getProjects();
  displayProjectsGrid(projects);
  // displayprojects(projects);
  // console.log(projects);
}

async function getProjects() {
  const response = await fetch("https://wp-test.basiaszafraniec.dk/wp-json/wp/v2/projects?acf_format=standard");
  const data = await response.json();
  return data;
}

async function displayProjectsGrid(projects) {
  const projectsGrid = document.querySelector("#projects-grid");
  for (const project of projects) {
    projectsGrid.insertAdjacentHTML(
      "afterbegin",
      /*html*/ `
      <article class="grid-item">
        <img src="${project.acf.image}" alt="${project.title.rendered}" />
        <h2>${project.acf.name}</h2>
       <p>${project.acf.description}</p>
       <a href="${project.acf.link}" target="blank"> Click to see</a>       
        <p>${project.acf.date}</p>
 
      </article>
    `
    );
  }
}

function displayprojects(projects) {
  const projectsList = document.querySelector("#projects-list");
  for (const project of projects) {
    projectsList.insertAdjacentHTML(
      "beforeend", `
      <li>${project.title.rendered}</li>
      `
    )
    // console.log(project);
  }

}
