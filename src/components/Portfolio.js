import React from "react";

const Portfolio = () => {
  const posts = [
    {
      title: "우리집 Beer",
      date: "2024-06-01",
      imgSrc: "./assets/images/blog-1.jpg",
      imgAlt: "우리집 Beer",
      description: `언어 : Java (JDK 17),  Javascript
프런트 프레임워크 : React 18.3.1 ,Node.js 18.18.2
백 프레임워크 : Spring Boot 3.1.11 Gradle 8.7
DB : MySQL 8.0.27
라이브러리 : Axios 1.6.8
IDE : Intellij idea ultimate, Visual Studio Code
협업 도구 : Github, Notion, Google Drive
빌드 자동화 도구 : Gradle 8.7
배포 : dockerhub Git Action Ec2 nginx`,
    },
    {
      title: "CampCok",
      date: "2024-05-01",
      imgSrc: "./assets/images/blog-1.jpg",
      imgAlt: "CampCok",
      description: `언어 : Java (JDK 17),  Javascript
프런트 프레임워크 : React 18.3.1 ,Node.js 18.18.2
백 프레임워크 : Spring Boot 3.1.11
DB : MySQL 8.0.27
라이브러리 : Axios 1.6.8
빌드 자동화 도구 : Gradle 8.7
IDE : Intellij idea ultimate, Visual Studio Code
협업 도구 : Github, Notion, Google Drive`,
    },
    {
      title: "기쁘띠",
      date: "2024-02-28",
      imgSrc: "./assets/images/blog-1.jpg",
      imgAlt: "기쁘띠",
      description: `언어 : Java (JDK 17), HTML5, CSS3, Javascript
서버 : Apache Tomcat 9.0
DB : MySQL 8.0.27
IDE : Eclipse 2023-03, MySQL workbench, VSCode
협업 도구 : Github, Notion, Google Drive`,
    },
  ];

  return (
    <article className="blog active bg-eerie-black-2 border border-jet rounded-2xl p-4 shadow-shadow-1">
      <header>
        <h2 className="text-5xl text-white-2 font-semibold mb-4">Blog</h2>
      </header>
      <section className="blog-posts mb-10">
        <ul className="blog-posts-list grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <li key={post.title} className="blog-post-item">
              <a
                href="#"
                className="block bg-border-gradient-onyx shadow-shadow-4 rounded-xl overflow-hidden"
              >
                <figure className="blog-banner-box w-full h-52 overflow-hidden">
                  <img
                    src={post.imgSrc}
                    alt={post.imgAlt}
                    className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
                  />
                </figure>
                <div className="blog-content p-4">
                  <div className="blog-meta flex items-center space-x-2 text-light-gray-70 text-fs-6 mb-2">
                    <time dateTime={post.date}>
                      {new Date(post.date).toDateString().slice(4)}
                    </time>
                  </div>
                  <h3 className="blog-item-title text-3xl text-white-2 font-medium mb-2 transition-colors duration-300 hover:text-orange-yellow-crayola">
                    {post.title}
                  </h3>
                  <p className="blog-text text-light-gray text-xl font-light leading-6">
                    {post.description}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Portfolio;
