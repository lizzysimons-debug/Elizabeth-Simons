const LINKTREE_URL = "https://linktr.ee/ElizabethSimons";
const CONTACT_EMAIL = "lizzysimons@hopeworks.org";

const currentPage = window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".site-nav a").forEach((link) => {
  if (link.dataset.page === currentPage) {
    link.setAttribute("aria-current", "page");
  }
});

document.querySelectorAll(".footer-link").forEach((link) => {
  link.setAttribute("href", LINKTREE_URL);
});

const bioOpenButton = document.querySelector("[data-bio-open]");
const biographyPanel = document.querySelector("#biography-panel");

if (bioOpenButton && biographyPanel) {
  bioOpenButton.addEventListener("click", () => {
    document.body.classList.add("is-bio-open");
    biographyPanel.hidden = false;
    bioOpenButton.setAttribute("aria-expanded", "true");
    biographyPanel.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

const projectData = {
  painting1: {
    title: "GIS",
    description: "An interactive GIS web map built in ArcGIS, visualizing community data in Camden. This project highlights skills in geospatial analysis, data organization, and user-friendly map design, turning complex data into clear, actionable insights.",
    platform: "ArcGIS",
    timeline: "1 day",
    image: "assets/painting1.png",
    link: "https://hopeworkscamden.maps.arcgis.com/apps/mapviewer/index.html?webmap=08d7dfc42d3242308e4618ee139763ae",
  },
  painting2: {
    title: "Wordpress",
    description: "A creative storytelling website built on WordPress, featuring original Sims-inspired narratives and world-building. This project showcases skills in digital storytelling, content organization, and blog design, creating an engaging, immersive experience for readers.",
    platform: "Wordpress",
    timeline: "2-3 days",
    image: "assets/painting2.png",
    link: "https://theplumbobportals.wordpress.com/",
  },
  painting3: {
    title: "Production Test Figma",
    description: "This project is a healthcare app design created in Figma that focuses on making medical services feel simple and easy to use. It includes screens for things like booking appointments, browsing doctors, and viewing health info, all laid out in a clean, modern style. The design uses clear navigation, soft colors, and organized sections to make the experience feel user-friendly and stress-free, showing how I design with both usability and aesthetics in mind.",
    platform: "Figma",
    timeline: "1-2 days",
    image: "assets/painting3.png",
    link: "https://www.figma.com/design/05FSfyh4KYk0ZqHQcZJTzE/CityCare-Health?node-id=0-1&t=CQs1No9KuXYRXNTa-1",
  },
  painting4: {
    title: "Production Test",
    description: "This project is a healthcare-themed web page focused on sharing local health info and resources. It includes a navigation bar, info cards highlighting key stats like uninsured rates and diabetes impact, and an interactive Daily Health Tip feature that updates when you click the button. The layout is clean and easy to follow, with images and sections that make the content feel more engaging. It shows how I combine design and front-end code to create something informative and interactive.",
    platform: "Codepen",
    timeline: "1 week",
    image: "assets/painting4.png",
    link: "https://codepen.io/Lizzy-Simons/pen/OPbLmBZ",
  },
  painting5: {
    title: "Personal Website Figma",
    description: "This project is a personal portfolio website design created in Figma. It focuses on a clean, modern layout with clear navigation and well-organized sections to showcase my work and information. The design uses consistent colors, typography, and spacing to keep everything looking polished and easy to use, while still feeling visually engaging. It reflects how I plan out both the look and structure of a website before building it in code.",
    platform: "Figma",
    timeline: "2-3 days",
    image: "assets/painting5.png",
    link: "https://www.figma.com/design/8MeU6sM9zKEr0ES3uEbjLw/Personal-Website?node-id=0-1&t=PclDdFYHR98zY4k9-1",
  },
  painting6: {
    title: "Personal Website",
    description: "This project is a themed e-commerce website concept inspired by Greek mythology, designed around a candle brand. Each candle is tied to a different god or myth, with the visuals, names, and descriptions reflecting their stories and personalities. The site combines a moody, myth-inspired aesthetic with a clean layout, making it easy to browse products while still feeling immersive. It shows how I use storytelling, branding, and web design together to create a unique and cohesive user experience.",
    platform: "Codepen",
    timeline: "2-3 weeks",
    image: "assets/painting6.png",
    link: "https://codepen.io/Lizzy-Simons/pen/pvNvLmo",
  },
  painting7: {
    title: "Glow District Beauty",
    description: "This project is a beauty brand website design created in Figma, focused on skincare and self-care products. It features a clean, modern layout with sections for showcasing products, promotions, and brand messaging. The design uses soft colors, strong visuals, and clear navigation to make everything feel polished and easy to browse. It reflects how I design for both aesthetics and usability, creating a site that feels both stylish and functional.",
    platform: "Figma",
    timeline: "1 Day",
    image: "assets/painting7.png",
    link: "https://www.figma.com/design/h0gR4pe2bPKqVRL7jW29ju/Glow-District-Beauty?node-id=0-1&t=54MLflVCsWsmzSdm-1",
  },
  painting8: {
    title: "BSD Projects",
    description: "This section showcases the projects I completed through my BSD Education lessons. Each project helped me build skills in HTML, CSS, and JavaScript while exploring different types of web design and interactivity. It highlights my growth over time and shows how I've applied what I've learned to create functional and creative digital projects.",
    platform: "BSD Academy",
    timeline: "2-3 weeks",
    image: "assets/painting8.png",
    link: "https://app.bsd.education/portfolio/qk8tksqk",
  },
  painting9: {
    title: "Portfolio Figma",
    description: "This project is a personal portfolio website design created in Figma, focused on showcasing my work, skills, and projects in a clean and organized way. It includes sections for my projects, about me, and contact info, all laid out with a consistent style and easy navigation. The design keeps things simple but visually appealing, showing how I plan out both the structure and look of a professional portfolio before building it.",
    platform: "Figma",
    timeline: "3 Days",
    image: "assets/painting9.png",
    link: "https://www.figma.com/design/WRcysjV6knW1mtHACHYCAK/Portfolio?node-id=0-1&t=IZCIOUbXxoE1veXH-1",
  },
  painting10: {
    title: "N/A",
    description: "No Project Yet",
    platform: "N/A",
    timeline: "N/A",
    image: "assets/painting10.png",
    link: "#",
  },
  painting11: {
    title: "N/A",
    description: "No Project Yet",
    platform: "N/A",
    timeline: "N/A",
    image: "assets/painting11.png",
    link: "#",
  },
  painting12: {
    title: "N/A",
    description: "No Project Yet",
    platform: "N/A",
    timeline: "N/A",
    image: "assets/painting12.png",
    link: "#",
  },
  painting13: {
    title: "N/A",
    description: "No Project Yet",
    platform: "N/A",
    timeline: "N/A",
    image: "assets/painting13.png",
    link: "#",
  },
  painting14: {
    title: "N/A",
    description: "No Project Yet",
    platform: "N/A",
    timeline: "N/A",
    image: "assets/painting14.png",
    link: "#",
  },
};

const projectFeature = document.querySelector(".project-feature");
const featurePainting = document.querySelector(".project-feature__painting");
const featureArt = document.querySelector(".project-feature__selected-art");
const featureTitle = document.querySelector(".project-feature__details h1");
const featureBody = document.querySelector(".project-feature__details");
const closeProject = document.querySelector(".project-feature__close");
let activeProject = null;

document.querySelectorAll("[data-project]").forEach((painting) => {
  painting.addEventListener("click", () => {
    const project = projectData[painting.dataset.project];
    if (!project || !projectFeature) return;

    activeProject = project;
    featureArt.src = project.image;
    featureArt.alt = `${project.title} artwork`;
    featureTitle.textContent = project.title;
    featureBody.querySelectorAll("p")[0].innerHTML = `<strong>Description:</strong> ${project.description}`;
    featureBody.querySelectorAll("p")[1].innerHTML = `<strong>Platform:</strong> ${project.platform}`;
    featureBody.querySelectorAll("p")[2].innerHTML = `<strong>Timeline:</strong> ${project.timeline}`;
    featureBody.querySelectorAll("p")[3].innerHTML = project.link && project.link !== "#"
      ? `<strong>Link:</strong> Click the selected painting to open this project.`
      : `<strong>Link:</strong> No project link yet.`;
    projectFeature.hidden = false;
  });
});

if (featurePainting) {
  featurePainting.addEventListener("click", () => {
    if (activeProject?.link && activeProject.link !== "#") {
      window.location.href = activeProject.link;
    }
  });
}

if (closeProject && projectFeature) {
  closeProject.addEventListener("click", () => {
    projectFeature.hidden = true;
    activeProject = null;
  });
}

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const name = formData.get("name")?.toString().trim() || "Portfolio visitor";
    const email = formData.get("email")?.toString().trim() || "No email provided";
    const message = formData.get("message")?.toString().trim() || "";
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`${message}\n\nName: ${name}\nEmail: ${email}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  });
}
