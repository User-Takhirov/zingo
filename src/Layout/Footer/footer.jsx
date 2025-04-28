import React from "react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="bg-primary">
      <div className=" w-[1840px] mx-auto   py-5 px-10 mt-10">
        <div className="flex justify-between">
          <div className="w-[900px] flex justify-center">
            <div className="flex flex-col justify-between <md:justify-start text-white w-[500px] gap-y-10 <md:items-center <md:w-full">
              <div className="flex flex-col gap-y-5 <md:items-center">
                <div onClick={scrollToTop}>
                  <img src="https://zingo.uz/images/logo-filled.svg" alt="#" />
                </div>
                <p className="<md:text-center m-0">
                  A platform that connects users based on their language level,
                  enabling language learning through real conversations.
                </p>
              </div>
              <div className="flex flex-col gap-y-5 items-start w-full">
                <p className="flex flex-col gap-y-5 items-start w-full">
                  Our Social Media
                </p>
                <ul className="flex flex-row items-end gap-x-3">
                  <li>
                    <a href="#">
                      <img src="https://zingo.uz/images/facebook.svg" alt="#" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="https://zingo.uz/images/instagram.svg"
                        alt="#"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="https://zingo.uz/images/linkedin.svg" alt="#" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="https://zingo.uz/images/telegram.svg" alt="#" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="https://zingo.uz/images/twitter.svg" alt="#" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-[900px]">
            <div className="flex flex-row gap-x-20 justify-center flex-wrap <md:justify-start gap-y-5">
              <div>
                <nav className="text-white">
                  <h3 className="uppercase text-white text-[20px] font-semibold mb-5">
                    Contacts
                  </h3>
                  <ul>
                    <li>
                      <a href="#" className="text-[16px] font-light m-0">
                        Phone Number
                      </a>
                    </li>
                    <li className="mb-3">
                      <a
                        href="tel:+998 77 712 99 19"
                        className="text-[16px] font-light m-0"
                      >
                        +998 77 712 99 19
                      </a>
                    </li>
                    <li>
                      <p className="text-[16px] font-light m-0">E-mail</p>
                    </li>
                    <li>
                      <a
                        href="mailto:zingooogroup@gmail.com"
                        className="text-[16px] font-light m-0"
                      >
                        info@zingo.uz
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div>
                <nav className="text-white">
                  <h3 className="uppercase text-white text-[20px] font-semibold mb-5">
                    Menu
                  </h3>
                  <ul>
                    <li className="mb-3">
                      <a
                        href="#"
                        className="router-link-active router-link-exact-active text-[16px] font-normal m-0"
                      >
                        Information
                      </a>
                    </li>
                    <li className="mb-3">
                      <a
                        aria-current="page"
                        href="/#features"
                        className="router-link-active router-link-exact-active text-[16px] font-normal m-0"
                        bis_skin_checked="1"
                      >
                        Features
                      </a>
                    </li>
                    <li className="mb-3">
                      <a
                        href="#"
                        className="router-link-active router-link-exact-active text-[16px] font-normal m-0"
                      >
                        Screenshots
                      </a>
                    </li>
                    <li className="mb-3">
                      <a
                        href="#"
                        className="router-link-active router-link-exact-active text-[16px] font-normal m-0"
                      >
                        Terms of Use
                      </a>
                    </li>
                    <li className="mb-3">
                      <a
                        href="#"
                        className="router-link-active router-link-exact-active text-[16px] font-normal m-0"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li className="mb-3">
                      <a
                        href="#"
                        className="router-link-active router-link-exact-active text-[16px] font-normal m-0"
                      >
                        Delete Account
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="flex flex-row gap-x-5 justify-center mt-5">
              <div>
                <a
                  href="#"
                  className="inline-flex flex-row gap-x-2 items-center justify-center bg-[#FDF6F7] border-solid border-[0.5px] border-gray-400 rounded-[44px] p-[10px] cursor-pointer"
                >
                  <img
                    src="https://zingo.uz/images/playmarket-colored.svg"
                    alt="#"
                  />
                  <div className="text-start">
                    Get It On <br />
                    <span className="font-semibold">Google Play</span>
                  </div>
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="inline-flex flex-row gap-x-2 items-center justify-center cursor-pointer bg-[#FDF6F7] border-solid border-[0.5px] border-gray-400 rounded-[44px] p-[10px]"
                >
                  <img
                    src="https://zingo.uz/images/appstore-colored.svg"
                    alt="#"
                  />
                  <div className="text-start">
                    Get It On <br />
                    <span className="font-semibold">App Store</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-light-50 opacity-60 my-5 bg-white"></div>
        <div className="flex justify-around items-center flex-wrap text-white">
          <div>
            <span className="text-light-50">2025</span>
          </div>
          <div>
            <span className="text-light-50">All Rights Reserved</span>
          </div>
        </div>
      </div>
    </div>
  );
};
