import React from "react";

export const Header = ({ active, setActive }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className=" w-full">
        <div className="h-[100px] relative  transition-all duration-700 z-10 w-full   ">
          <div className="fixed flex items-center justify-between  py-3  w-full  bg-white/70   backdrop-filter backdrop-blur-[50px] backdrop-opacity-80  transition-all duration-700">
            <div className="flex w-[541px] justify-center cursor-pointer" onClick={scrollToTop}>
              <img src="https://zingo.uz/images/logo.svg" alt="#  " />
            </div>
            <div className="flex justify-center w-[720px]">
              <ul className="p-[5px] border-solid border-primary gap-x-[15px] flex items-center px-2 border-[1px] rounded-[64px] select-none ">
                {["Information", "Features", "Screenshots"].map((item) => (
                  <li key={item} className="p-[7px]">
                    <a
                      onClick={() => setActive(item)}
                      className={`cursor-pointer p-2 rounded-full ${
                        active === item
                          ? "router-link-active router-link-exact-active whitespace-nowrap cursor-pointer no-underline  transition-all duration-300 border-[0.5px] border-solid border-[#FF556E]  bg-opacity-5 rounded-full !text-[#FF556E] p-[10px] h-[58px]"
                          : "text-black"
                      }`}
                      href={`#${item}`}
                    >
                      {item}
                    </a>
                  </li>
                ))}
                <li className="flex items-center gap-2">
                  <img
                    className="w-7 h-7"
                    src="https://zingo.uz/images/flags/en.png"
                    alt="flag"
                  />
                  <p>English</p>
                </li>
              </ul>
            </div>
            <div className="w-[581px]  text-right pr-10">
              <a
                href="#Features"
                onClick={() => setActive("Features")}
                className="text-white text-[20px] font-medium whitespace-nowrap bg-primary p-[16px] rounded-[64px] outline-none cursor-pointer border-none hover:bg-[#FF556E]"
              >
                Try Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
