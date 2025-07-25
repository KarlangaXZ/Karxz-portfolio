import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "KarXZ Old Twitter Clone",
    description: "A Twitter clone with real-time and user authentication.",
    image: "/projects/project1.png",
    tags: ["HTML", "CSS", "JS", "MongoDB"],
    demoUrl: "https://karlangaxz.github.io/Project-twitter-clone/",
    githubUrl: "https://github.com/KarlangaXZ/Project-twitter-clone.git",
  },
  {
    id: 2,
    title: "Magalos Pokemon",
    description:
      "Pokémon Mangalos is a free, offline fan-made game that combines classic and modern Pokémon gameplay. Available for Windows and Android.",
    image: "/projects/project2.png",
    tags: ["PHP", "JS", "CSS", "HTML"],
    demoUrl: "https://mangalos.com/en-us/home.php",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "KZ Portfolio",
    description:
      "Personal portfolio website showcasing my skills, projects, and experience. Built with modern web technologies.",
    image: "/projects/project3.png",
    tags: ["React", "Vite", "TailwindCSS", "JS", "Lucide", "Radix UI"],
    demoUrl: "https://karxz-portfolio.vercel.app/",
    githubUrl: "https://github.com/KarlangaXZ/Karxz-portfolio",
  },
  {
    id: 4,
    title: "Pesquisas",
    description:
      "Pesquisas Digital is a Spanish-language in-depth journalism outlet focused on analysis, investigations, and data-driven storytelling. With a modern, minimalist design, it focuses on clarity, rigor, and exploration beyond the obvious, offering current affairs, international news, opinion, and multimedia content.",
    image: "/projects/project4.png",
    tags: ["HTML", "CSS", "BootStrap", "WordPress", "Elementor"],
    demoUrl: "https://pesquisasdigital.com/?nocache=1753211495",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "UN PAINT",
    description: "Clone of windows paint, a simple drawing application.",
    image: "/projects/project5.png",
    tags: ["C#", "Windows Forms", "HTML", "Visual Studio 2022"],
    demoUrl: "https://github.com/KarlangaXZ/UnPaint",
    githubUrl: "https://github.com/KarlangaXZ/UnPaint",
  },
  {
    id: 6,
    title: "app-movieSearch",
    description:
      "This is a movie search project using React, TypeScript and The Movie Database API (TMDb).",
    image: "/projects/project6.png",
    tags: ["HTML", "CSS", "TypeScript", "React"],
    demoUrl: "https://karlangaxz-moviesearch.netlify.app/",
    githubUrl: "https://github.com/KarlangaXZ/app-movieSearch",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/KarlangaXZ"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
