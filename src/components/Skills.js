import React from "react";

const Skills = () => {
  return (
    <article className="resume active bg-eerie-black-2 border border-jet rounded-2xl p-4 shadow-shadow-1">
      <header>
        <h2 className="text-fs-1 text-white-2 font-semibold mb-4">Resume</h2>
      </header>

      <section className="timeline mb-10">
        <div className="title-wrapper flex items-center gap-4 mb-6">
          <div className="icon-box bg-border-gradient-onyx w-8 h-8 flex justify-center items-center rounded-md text-orange-yellow-crayola shadow-shadow-1">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="text-fs-2 text-white-2 font-semibold">Education</h3>
        </div>

        <ol className="timeline-list ml-11 space-y-5 text-fs-6 text-light-gray font-light leading-6">
          <li className="timeline-item relative">
            <h4 className="text-fs-6 text-white-2 font-medium leading-5 mb-2">
              University school of the arts
            </h4>
            <span className="text-vegas-gold font-normal leading-6">
              2007 — 2008
            </span>
            <p className="timeline-text mt-2">
              Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
              delenit atque corrupti, quos dolores et quas molestias exceptur.
            </p>
            <div className="timeline-marker absolute top-1 left-[-2.5rem] w-1 h-[calc(100%+2.5rem)] bg-jet"></div>
            <div className="timeline-dot absolute top-1 left-[-3rem] w-2 h-2 bg-text-gradient-yellow rounded-full shadow-dot-shadow"></div>
          </li>

          <li className="timeline-item relative">
            <h4 className="text-fs-6 text-white-2 font-medium leading-5 mb-2">
              New york academy of art
            </h4>
            <span className="text-vegas-gold font-normal leading-6">
              2006 — 2007
            </span>
            <p className="timeline-text mt-2">
              Ratione voluptatem sequi nesciunt, facere quisquams facere menda
              ossimus, omnis voluptas assumenda est omnis.
            </p>
            <div className="timeline-marker absolute top-1 left-[-2.5rem] w-1 h-[calc(100%+2.5rem)] bg-jet"></div>
            <div className="timeline-dot absolute top-1 left-[-3rem] w-2 h-2 bg-text-gradient-yellow rounded-full shadow-dot-shadow"></div>
          </li>

          <li className="timeline-item relative">
            <h4 className="text-fs-6 text-white-2 font-medium leading-5 mb-2">
              High school of art and design
            </h4>
            <span className="text-vegas-gold font-normal leading-6">
              2002 — 2004
            </span>
            <p className="timeline-text mt-2">
              Duis aute irure dolor in reprehenderit in voluptate, quila
              voluptas mag odit aut fugit, sed consequuntur magni dolores eos.
            </p>
            <div className="timeline-marker absolute top-1 left-[-2.5rem] w-1 h-[calc(100%+2.5rem)] bg-jet"></div>
            <div className="timeline-dot absolute top-1 left-[-3rem] w-2 h-2 bg-text-gradient-yellow rounded-full shadow-dot-shadow"></div>
          </li>
        </ol>
      </section>

      <section className="timeline mb-10">
        <div className="title-wrapper flex items-center gap-4 mb-6">
          <div className="icon-box bg-border-gradient-onyx w-8 h-8 flex justify-center items-center rounded-md text-orange-yellow-crayola shadow-shadow-1">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="text-fs-2 text-white-2 font-semibold">Experience</h3>
        </div>

        <ol className="timeline-list ml-11 space-y-5 text-fs-6 text-light-gray font-light leading-6">
          <li className="timeline-item relative">
            <h4 className="text-fs-6 text-white-2 font-medium leading-5 mb-2">
              Creative director
            </h4>
            <span className="text-vegas-gold font-normal leading-6">
              2015 — Present
            </span>
            <p className="timeline-text mt-2">
              Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit
              atque corrupti, quos dolores et quas molestias exceptur.
            </p>
            <div className="timeline-marker absolute top-1 left-[-2.5rem] w-1 h-[calc(100%+2.5rem)] bg-jet"></div>
            <div className="timeline-dot absolute top-1 left-[-3rem] w-2 h-2 bg-text-gradient-yellow rounded-full shadow-dot-shadow"></div>
          </li>

          <li className="timeline-item relative">
            <h4 className="text-fs-6 text-white-2 font-medium leading-5 mb-2">
              Art director
            </h4>
            <span className="text-vegas-gold font-normal leading-6">
              2013 — 2015
            </span>
            <p className="timeline-text mt-2">
              Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
              delenit atque corrupti, quos dolores et quas molestias exceptur.
            </p>
            <div className="timeline-marker absolute top-1 left-[-2.5rem] w-1 h-[calc(100%+2.5rem)] bg-jet"></div>
            <div className="timeline-dot absolute top-1 left-[-3rem] w-2 h-2 bg-text-gradient-yellow rounded-full shadow-dot-shadow"></div>
          </li>

          <li className="timeline-item relative">
            <h4 className="text-fs-6 text-white-2 font-medium leading-5 mb-2">
              Web designer
            </h4>
            <span className="text-vegas-gold font-normal leading-6">
              2010 — 2013
            </span>
            <p className="timeline-text mt-2">
              Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
              delenit atque corrupti, quos dolores et quas molestias exceptur.
            </p>
            <div className="timeline-marker absolute top-1 left-[-2.5rem] w-1 h-[calc(100%+2.5rem)] bg-jet"></div>
            <div className="timeline-dot absolute top-1 left-[-3rem] w-2 h-2 bg-text-gradient-yellow rounded-full shadow-dot-shadow"></div>
          </li>
        </ol>
      </section>

      <section className="skill">
        <h3 className="text-fs-2 text-white-2 font-semibold mb-6">My skills</h3>
        <ul className="skills-list bg-border-gradient-onyx p-6 rounded-lg shadow-shadow-2">
          <li className="skills-item mb-4">
            <div className="title-wrapper flex items-center justify-between mb-2">
              <h5 className="text-fs-5 text-white-2">Web design</h5>
              <data value="80" className="text-light-gray">
                80%
              </data>
            </div>
            <div className="skill-progress-bg bg-jet h-2 rounded-lg">
              <div className="skill-progress-fill bg-text-gradient-yellow h-full w-[80%] rounded-lg"></div>
            </div>
          </li>

          <li className="skills-item mb-4">
            <div className="title-wrapper flex items-center justify-between mb-2">
              <h5 className="text-fs-5 text-white-2">Graphic design</h5>
              <data value="70" className="text-light-gray">
                70%
              </data>
            </div>
            <div className="skill-progress-bg bg-jet h-2 rounded-lg">
              <div className="skill-progress-fill bg-text-gradient-yellow h-full w-[70%] rounded-lg"></div>
            </div>
          </li>

          <li className="skills-item mb-4">
            <div className="title-wrapper flex items-center justify-between mb-2">
              <h5 className="text-fs-5 text-white-2">Branding</h5>
              <data value="90" className="text-light-gray">
                90%
              </data>
            </div>
            <div className="skill-progress-bg bg-jet h-2 rounded-lg">
              <div className="skill-progress-fill bg-text-gradient-yellow h-full w-[90%] rounded-lg"></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper flex items-center justify-between mb-2">
              <h5 className="text-fs-5 text-white-2">WordPress</h5>
              <data value="50" className="text-light-gray">
                50%
              </data>
            </div>
            <div className="skill-progress-bg bg-jet h-2 rounded-lg">
              <div className="skill-progress-fill bg-text-gradient-yellow h-full w-[50%] rounded-lg"></div>
            </div>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default Skills;
