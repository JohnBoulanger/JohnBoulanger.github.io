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

console.log("Number of projects:", projects.length);
console.log("First project title:", projects[0].title);