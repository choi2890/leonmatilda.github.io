import React from "react";

const About = () => {
  return (
    <article className="about active bg-eerie-black-2 border border-jet rounded-2xl p-4 shadow-shadow-1">
      <header>
        <h2 className="text-fs-1 text-white-2 font-semibold mb-4">About me</h2>
      </header>
      <section className="about-text mb-10">
        <p className="text-light-gray text-fs-6 font-light leading-6 mb-4">
          I'm Creative Director and UI/UX Designer from Sydney, Australia,
          working in web development and print media. I enjoy turning complex
          problems into simple, beautiful and intuitive designs.
        </p>
        <p className="text-light-gray text-fs-6 font-light leading-6">
          My job is to build your website so that it is functional and
          user-friendly but at the same time attractive. Moreover, I add
          personal touch to your product and make sure that is eye-catching and
          easy to use. My aim is to bring across your message and identity in
          the most creative way. I created web design for many famous brand
          companies.
        </p>
      </section>
      <section className="service mb-10">
        <h3 className="text-fs-2 text-white-2 font-semibold mb-6">
          What I'm doing
        </h3>
        <ul className="service-list grid gap-8">
          <li className="service-item bg-border-gradient-onyx p-6 rounded-lg shadow-shadow-2 relative">
            <div className="service-icon-box mb-2 mx-auto">
              <img
                src="./assets/images/icon-design.svg"
                alt="design icon"
                width="40"
                className="m-auto"
              />
            </div>
            <div className="service-content-box text-center">
              <h4 className="text-fs-4 text-white-2 font-medium mb-2">
                Web design
              </h4>
              <p className="text-light-gray text-fs-6 font-light leading-6">
                The most modern and high-quality design made at a professional
                level.
              </p>
            </div>
          </li>
          <li className="service-item bg-border-gradient-onyx p-6 rounded-lg shadow-shadow-2 relative">
            <div className="service-icon-box mb-2 mx-auto">
              <img
                src="./assets/images/icon-dev.svg"
                alt="Web development icon"
                width="40"
                className="m-auto"
              />
            </div>
            <div className="service-content-box text-center">
              <h4 className="text-fs-4 text-white-2 font-medium mb-2">
                Web development
              </h4>
              <p className="text-light-gray text-fs-6 font-light leading-6">
                High-quality development of sites at the professional level.
              </p>
            </div>
          </li>
          <li className="service-item bg-border-gradient-onyx p-6 rounded-lg shadow-shadow-2 relative">
            <div className="service-icon-box mb-2 mx-auto">
              <img
                src="./assets/images/icon-app.svg"
                alt="mobile app icon"
                width="40"
                className="m-auto"
              />
            </div>
            <div className="service-content-box text-center">
              <h4 className="text-fs-4 text-white-2 font-medium mb-2">
                Mobile apps
              </h4>
              <p className="text-light-gray text-fs-6 font-light leading-6">
                Professional development of applications for iOS and Android.
              </p>
            </div>
          </li>
          <li className="service-item bg-border-gradient-onyx p-6 rounded-lg shadow-shadow-2 relative">
            <div className="service-icon-box mb-2 mx-auto">
              <img
                src="./assets/images/icon-photo.svg"
                alt="camera icon"
                width="40"
                className="m-auto"
              />
            </div>
            <div className="service-content-box text-center">
              <h4 className="text-fs-4 text-white-2 font-medium mb-2">
                Photography
              </h4>
              <p className="text-light-gray text-fs-6 font-light leading-6">
                I make high-quality photos of any category at a professional
                level.
              </p>
            </div>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default About;
