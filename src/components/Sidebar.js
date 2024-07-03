import React from "react";
import 반명함 from "../assets/images/반명함.jpg";

const Sidebar = () => {
  return (
    <aside
      className="bg-eerie-black-2 border border-jet rounded-2xl p-4 shadow-shadow-1 z-10 sticky top-16 left-150 h-screen mt-4"
      data-sidebar
    >
      <div className="sidebar-info flex flex-col items-center">
        <figure className="avatar-box mb-4">
          <img src={반명함} alt="반명함" className="w-24 h-24 rounded-full" />
        </figure>
        <div className="info-content mb-4 text-center">
          <h1 className="name text-white-2 text-xl font-semibold">최현철</h1>
          <p className="title text-gray-400"> developer</p>
        </div>
      </div>
      <div className="sidebar-info_more">
        <div className="separator bg-jet h-px my-4"></div>
        <ul className="contacts-list space-y-4">
          <li className="contact-item flex items-center space-x-3">
            <div className="icon-box bg-border-gradient-onyx w-8 h-8 flex justify-center items-center rounded-md text-orange-yellow-crayola shadow-shadow-1">
              <ion-icon name="mail-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title text-light-gray-70 text-xs uppercase mb-1">
                Email
              </p>
              <a
                href="mailto:csr4180@naver.com"
                className="contact-link text-white-2 text-sm"
              >
                csr4180@naver.com
              </a>
            </div>
          </li>
          <li className="contact-item flex items-center space-x-3">
            <div className="icon-box bg-border-gradient-onyx w-8 h-8 flex justify-center items-center rounded-md text-orange-yellow-crayola shadow-shadow-1">
              <ion-icon name="call-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title text-light-gray-70 text-xs uppercase mb-1">
                Phone
              </p>
              <a
                href="tel:+01041802890"
                className="contact-link text-white-2 text-sm"
              >
                +82 01041802890
              </a>
            </div>
          </li>
          <li className="contact-item flex items-center space-x-3">
            <div className="icon-box bg-border-gradient-onyx w-8 h-8 flex justify-center items-center rounded-md text-orange-yellow-crayola shadow-shadow-1">
              <ion-icon name="calendar-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title text-light-gray-70 text-xs uppercase mb-1">
                Birthday
              </p>
              <time dateTime="1992-05-03" className="text-white-2 text-sm">
                05 03, 1992
              </time>
            </div>
          </li>
          <li className="contact-item flex items-center space-x-3">
            <div className="icon-box bg-border-gradient-onyx w-8 h-8 flex justify-center items-center rounded-md text-orange-yellow-crayola shadow-shadow-1">
              <ion-icon name="location-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title text-light-gray-70 text-xs uppercase mb-1">
                Location
              </p>
              <address className="text-white-2 text-sm">
                서울, 강남구, 대한민국
              </address>
            </div>
          </li>
        </ul>
        <div className="separator bg-jet h-px my-4"></div>
        <ul className="social-list flex space-x-4">
          <li className="social-item">
            <a href="#" className="social-link text-orange-yellow-crayola">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>
          <li className="social-item">
            <a href="#" className="social-link text-orange-yellow-crayola">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>
          <li className="social-item">
            <a href="#" className="social-link text-orange-yellow-crayola">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
