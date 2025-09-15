const projects = [
  {
    id: "cpp-map-software",
    title: "C++ Mapping Software",
    date: "2024-01-15",
    image: "/assets/img/mapsoftware.png",
    blurb: "An OpenStreetMap geographical mapping software.",
    tools: ["C++", "GTK", "EZGL", "OpenStreetMap API"],
    repo: "https://github.com/JohnBoulanger/Mapping-Software-ECE297"
  },
  {
    id: "donkey-kong",
    title: "Donkey Kong Game in C",
    date: "2023-11-20",
    image: "/assets/img/donkeykong.png",
    blurb: "A classic Donkey Kong game implemented in C.",
    tools: ["C", "CPUlator", "DE1-SoC", "VGA display", "PS/2 keyboard"],
    repo: "https://github.com/JohnBoulanger/DonkeyKongGame"
  }
];

let visibleProjectsCount = 1;

function renderProjects(visibleProjectsCount) {
  // sort projects by date
  const sorted = [...projects].sort((a, b) => new Date(b.date) - new Date(a.date));

  // slice the first `count` items
  const visible = sorted.slice(0, visibleProjectsCount);

  // get the container
  const container = document.getElementById("recent-projects-list");

  // clear it
  container.innerHTML = "";

  // 5. loop over visible projects and make the HTML for it
  visible.forEach(proj => {
    const col = document.createElement("div");
    col.className = "col s12 m6 l4";
    col.innerHTML = `
      <div class="card medium">
        <div class="card-image waves-effect waves-block waves-light">
          <img alt="${proj.title}" src="${proj.image}" style="height: 100%; width: 100%" class="activator" />
        </div>
        <div class="card-content">
          <span class="card-title activator teal-text hoverline">${proj.title}<i class="mdi-navigation-more-vert right"></i></span>
          <p>${proj.blurb}</p>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text"><small>Accomplishments</small><i class="mdi-navigation-close right"></i></span>
          <ul>
            ${proj.tools.map(tool => `<li>${tool}</li>`).join("")}
          </ul>
          <div class="card-action">
            <a href="${proj.repo}" target="_blank" class="btn-floating btn-large waves-effect waves-light blue-grey tooltipped">
              <i class="fa fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    `;
    container.appendChild(col);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // get load more button
  const loadMoreButton = document.getElementById("load-more-button");

  // make sure load more button is visible when page loads
  loadMoreButton.style.display = "block"; 

  // show the most recent project
  renderProjects(1);

  // add click handler
  loadMoreButton.addEventListener("click", () => {
    if (visibleProjectsCount + 3 < projects.length) {
      visibleProjectsCount += 3;
    }
    if (visibleProjectsCount + 3 >= projects.length) {
      visibleProjectsCount = projects.length;
      loadMoreButton.style.display = "none";  // hide button
    }
    renderProjects(visibleProjectsCount);
  });
});