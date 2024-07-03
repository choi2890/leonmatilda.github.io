import React from "react";

const Portfolio = () => {
  const projects = [
    {
      title: "Finance",
      category: "Web development",
      imgSrc: "./assets/images/project-1.jpg",
      imgAlt: "finance",
    },
    {
      title: "Orizon",
      category: "Web development",
      imgSrc: "./assets/images/project-2.png",
      imgAlt: "orizon",
    },
    {
      title: "Fundo",
      category: "Web design",
      imgSrc: "./assets/images/project-3.jpg",
      imgAlt: "fundo",
    },
    {
      title: "Brawlhalla",
      category: "Applications",
      imgSrc: "./assets/images/project-4.png",
      imgAlt: "brawlhalla",
    },
    {
      title: "DSM.",
      category: "Web design",
      imgSrc: "./assets/images/project-5.png",
      imgAlt: "dsm.",
    },
    {
      title: "MetaSpark",
      category: "Web design",
      imgSrc: "./assets/images/project-6.png",
      imgAlt: "metaspark",
    },
    {
      title: "Summary",
      category: "Web development",
      imgSrc: "./assets/images/project-7.png",
      imgAlt: "summary",
    },
    {
      title: "Task Manager",
      category: "Applications",
      imgSrc: "./assets/images/project-8.jpg",
      imgAlt: "task manager",
    },
    {
      title: "Arrival",
      category: "Web development",
      imgSrc: "./assets/images/project-9.png",
      imgAlt: "arrival",
    },
  ];

  return (
    <article className="portfolio active bg-eerie-black-2 border border-jet rounded-2xl p-4 shadow-shadow-1">
      <header>
        <h2 className="text-fs-1 text-white-2 font-semibold mb-4">Portfolio</h2>
      </header>
      <section className="projects mb-10">
        <ul className="filter-list flex justify-start items-center gap-6 mb-6">
          <li className="filter-item">
            <button className="text-light-gray text-fs-5 transition-colors duration-300 hover:text-light-gray-70 active">
              All
            </button>
          </li>
          <li className="filter-item">
            <button className="text-light-gray text-fs-5 transition-colors duration-300 hover:text-light-gray-70">
              Web design
            </button>
          </li>
          <li className="filter-item">
            <button className="text-light-gray text-fs-5 transition-colors duration-300 hover:text-light-gray-70">
              Applications
            </button>
          </li>
          <li className="filter-item">
            <button className="text-light-gray text-fs-5 transition-colors duration-300 hover:text-light-gray-70">
              Web development
            </button>
          </li>
        </ul>
        <ul className="project-list grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <li key={project.title} className="project-item active">
              <a href="#" className="block">
                <figure className="project-img relative w-full h-52 rounded-lg overflow-hidden mb-4">
                  <div className="project-item-icon-box absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-jet text-orange-yellow-crayola p-4 rounded-lg opacity-0 transition-opacity duration-300">
                    <ion-icon
                      name="eye-outline"
                      className="text-2xl"
                    ></ion-icon>
                  </div>
                  <img
                    src={project.imgSrc}
                    alt={project.imgAlt}
                    className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
                  />
                </figure>
                <h3 className="text-fs-5 text-white-2 font-medium mb-1">
                  {project.title}
                </h3>
                <p className="text-fs-6 text-light-gray-70">
                  {project.category}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Portfolio;
