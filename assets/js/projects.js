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
  },
  {
    id: "weather-app",
    title: "Weather Forecast App",
    date: "2023-10-05",
    image: "/assets/img/donkeykong.png",
    blurb: "A simple weather app fetching live data from OpenWeather API.",
    tools: ["JavaScript", "HTML", "CSS", "OpenWeather API"],
    repo: "https://github.com/JohnBoulanger/weather-app"
    },
  {
    id: "chatbot-python",
    title: "Customer Support Chatbot",
    date: "2023-09-18",
    image: "/assets/img/donkeykong.png",
    blurb: "A Python chatbot that handles basic customer support queries.",
    tools: ["Python", "Flask", "NLTK"],
    repo: "https://github.com/JohnBoulanger/chatbot-python"
  },
  {
    id: "portfolio-site",
    title: "Personal Portfolio Website",
    date: "2023-08-10",
    image: "/assets/img/donkeykong.png",
    blurb: "A responsive portfolio site to showcase projects and skills.",
    tools: ["React", "CSS", "Netlify"],
    repo: "https://github.com/JohnBoulanger/portfolio-site"
  },
  {
    id: "task-manager",
    title: "Task Manager API",
    date: "2023-07-22",
    image: "/assets/img/donkeykong.png",
    blurb: "REST API for creating and managing tasks.",
    tools: ["Node.js", "Express", "MongoDB"],
    repo: "https://github.com/JohnBoulanger/task-manager"
  },
  {
    id: "stock-visualizer",
    title: "Stock Market Visualizer",
    date: "2023-06-14",
    image: "/assets/img/donkeykong.png",
    blurb: "Tool to visualize stock data with interactive graphs.",
    tools: ["Python", "Pandas", "matplotlib"],
    repo: "https://github.com/JohnBoulanger/stock-visualizer"
  },
  {
    id: "blog-platform",
    title: "Mini Blogging Platform",
    date: "2023-05-09",
    image: "/assets/img/donkeykong.png",
    blurb: "A small blogging platform with user authentication.",
    tools: ["Django", "SQLite", "Bootstrap"],
    repo: "https://github.com/JohnBoulanger/blog-platform"
  },
  {
    id: "game-engine",
    title: "2D Game Engine",
    date: "2023-04-25",
    image: "/assets/img/donkeykong.png",
    blurb: "A basic 2D game engine with physics and collision detection.",
    tools: ["C++", "SDL2"],
    repo: "https://github.com/JohnBoulanger/game-engine"
  },
  {
    id: "expense-tracker",
    title: "Expense Tracker App",
    date: "2023-03-12",
    image: "/assets/img/donkeykong.png",
    blurb: "Tracks personal expenses and generates monthly reports.",
    tools: ["React", "Firebase"],
    repo: "https://github.com/JohnBoulanger/expense-tracker"
  }
];

let visibleProjectsCount = 3;

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
  renderProjects(3);

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