import React from "react";
import { useOutletContext } from "react-router-dom";
import { motion } from "framer-motion";
export const Home = () => {
  const { setActive } = useOutletContext();
  return (
    <>
      <div>
        <div className="container  ">
          <div
            id="Information"
            className="w-[931px] mx-auto pb-5 h-[400px] flex flex-col justify-end"
          >
            <h1 className="text-[50px] <xl:text-[50px] <lg:text-[50px] <md:text-[40px] text-center  p-0 m-0 w-full mb-5 font-[700] leading-[100%]">
              Take language learning <br />
              to the next level!
            </h1>
            <p className="text-[24px] <xl:text-[20px] <lg:text-[18px] <md:text-[14px] text-center text-gray-500 m-0 mb-1 w-full">
              Zingo is an innovative language learning platform that connects
              you with other users based on their language proficiency level.
              Our platform opens new opportunities for language learning,
              allowing you to improve through real-world conversations.
            </p>
            <div className="flex flex-row items-center justify-center gap-x-1 mt-10 w-full">
              <div>
                <button className="bg-primary  h-[56px] p-[16px] rounded-[64px] outline-none  border-none cursor-pointer hover:bg-[#FF556E] flex flex-row justify-center items-center text-white gap-x-3 ">
                  <img
                    src="https://zingo.uz/images/playmarket-filled.svg"
                    alt="#"
                  />
                  <span>Download</span>
                </button>
              </div>

              <div>
                <button className="bg-primary  h-[56px] p-[16px] rounded-[64px] outline-none  border-none cursor-pointer hover:bg-[#FF556E] flex flex-row justify-center items-center text-white gap-x-3">
                  <img
                    src="https://zingo.uz/images/appstore-filled.svg"
                    alt="#"
                  />
                  <span>Download</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mx-auto bg-red-200 hero w-screen overflow-hidden shadow-xl rounded-b-[50px] border-solid border-[#fff] border-t-[0] border-[10px] z-0 h-2xl <md:h-lg">
          <img
            className="w-[900px] h-[268px] mx-auto"
            src="https://zingo.uz/images/hero-banner.svg"
            alt="#"
          />
        </div>
        <div className="mb-10 w-[100px] h-[100px] mx-auto flex justify-center mt-12">
          <div className="indicator">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <motion.div
        className="animated-section mb-[50px]"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.2 }}
        exit={{ opacity: 0, y: -100 }}
      >
        <div className="stats h-[278px] flex justify-center items-center">
          <ul className="flex flex-row mx-auto justify-between gap-x-5 w-[80%] flex-wrap gap-y-5 <md:gap-y-15 ">
            <li className="w-[281px] text-center">
              <h2 className="countup-wrap text-[#FF556E] text-[76px] font-semibold">
                231+
              </h2>
              <p className="text-[28px] whitespace-nowrap">Happy Users</p>
            </li>
            <li className="w-[281px] text-center">
              <h2 className="countup-wrap text-[#FF556E] text-[76px] font-semibold">
                159+
              </h2>
              <p className="text-[28px] whitespace-nowrap">Positive Reviews</p>
            </li>
            <li className="flex-1 text-center">
              <h2 className="countup-wrap text-[#FF556E] text-[76px] font-semibold">
                385+
              </h2>
              <p className="text-[28px] whitespace-nowrap">
                Improved Conversations
              </p>
            </li>
            <li className="w-[281px] text-center">
              <h2 className="countup-wrap text-[#FF556E] text-[76px] font-semibold">
                127+
              </h2>
              <p className="text-[28px] whitespace-nowrap">
                Learning Experiences
              </p>
            </li>
            <li className="w-[281px] text-center">
              <h2 className="countup-wrap text-[#FF556E] text-[76px] font-semibold">
                211+
              </h2>
              <p className="text-[28px] whitespace-nowrap">Compatible Pairs</p>
            </li>
          </ul>
        </div>
      </motion.div>
      <div id="Features" className="mb-[20px]">
        <div className="container">
          <div className="flex flex-row flex-wrap justify-center gap-x-16 items-start gap-y-10 py-5">
            <motion.div
              className="animated-section"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              viewport={{ once: false, amount: 0.2 }}
              exit={{ opacity: 0, x: -100 }}
            >
              <div className="w-[474px]">
                <h2 className="whitespace-pre-line  text-[48px] <md:text-center leading-[100%] font-[500]">
                  Manage your time efficiently and achieve results quickly.
                </h2>
                <div className="flex flex-col gap-y-5 mt-5 mx-2">
                  <div className="flex items-center gap-x-2 border-solid border-gray-300 p-3 rounded-full border-[0.5px]">
                    <img src="https://zingo.uz/images/bill.svg" alt="#" />
                    <span className="text-[16px] text-gray-500">
                      See significant progress in a few weeks
                    </span>
                  </div>
                  <div className="flex items-center gap-x-2 border-solid border-gray-300 p-3 rounded-full border-[0.5px]">
                    <img
                      src="https://zingo.uz/images/smile-emoji.svg"
                      alt="#"
                    />
                    <span className="text-[16px] text-gray-500">
                      Determine and evaluate your language proficiency
                    </span>
                  </div>
                  <div className="flex items-center gap-x-2 border-solid border-gray-300 p-3 rounded-full border-[0.5px]">
                    <img src="https://zingo.uz/images/community.svg" alt="#" />
                    <span className="text-[16px] text-gray-500">
                      Start daily conversations with Zingo
                    </span>
                  </div>
                  <div className="flex flex-row gap-x-5 <md:justify-center">
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
            </motion.div>
            <motion.div
              className="animated-section"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <div>
                <img src="https://zingo.uz/images/ready-to-talk.svg" alt="#" />
              </div>
            </motion.div>
          </div>
          <div className="flex flex-row-reverse flex-wrap justify-center gap-x-16 items-start gap-y-10 py-5">
            <motion.div
              className="animated-section"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <div className="w-[474px]">
                <h2 className="whitespace-pre-line  text-[48px] <md:text-center leading-[100%] font-[500] my-5">
                  Plan your tasks and complete them on time!
                </h2>
                <div className="flex flex-col gap-y-5 mt-5 mx-2">
                  <div className="flex items-center gap-x-2 border-solid border-gray-300 p-3 rounded-full border-[0.5px]">
                    <img src="https://zingo.uz/images/stars.svg" alt="#" />
                    <span className="text-[16px] text-gray-500">
                      Be a leader in daily, weekly, and monthly rankings
                    </span>
                  </div>
                  <div className="flex items-center gap-x-2 border-solid border-gray-300 p-3 rounded-full border-[0.5px]">
                    <img
                      src="https://zingo.uz/images/smile-emoji.svg"
                      alt="#"
                    />
                    <span className="text-[16px] text-gray-500">
                      Zingo regularly tracks your achievements
                    </span>
                  </div>
                  <div className="flex items-center gap-x-2 border-solid border-gray-300 p-3 rounded-full border-[0.5px]">
                    <img src="https://zingo.uz/images/ranking.svg" alt="#" />
                    <span className="text-[16px] text-gray-500">
                      Show the best results in achieving your goals
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="animated-section"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              viewport={{ once: false, amount: 0.2 }}
              exit={{ opacity: 0, x: -100 }}
            >
              <div>
                <img src="https://zingo.uz/images/reyting.svg" alt="#" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <motion.div
        className="animated-section mb-[50px]"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.2 }}
        exit={{ opacity: 0, y: -100 }}
      >
        <div className="speacial features">
          <div className="w-[1200px] mx-auto">
            <div className="w-[612px] mx-auto leading-[100%]">
              <h2 className="font-medium text-[48px] text-center mb-0 whitespace-pre-line h-[144px] items-center align-middle flex justify-center">
                Special Features
              </h2>
              <p className="text-[22px] text-gray-500 font-normal text-center whitespace-pre-line leading-[100%]">
                Zingo considers your language proficiency, speaking skills, and
                communication abilities to find the best matching partners.
              </p>
            </div>
            <ul className="flex justify-center flex-wrap gap-7  ">
              <li className="w-[385px] flex justify-center flex-col items-center p-10">
                <div>
                  <img src="https://zingo.uz/images/badge.svg" alt="#" />
                </div>
                <h3 className="text-[32px] font-medium text-center m-0 mb-5 leading-[100%]">
                  Special Features
                </h3>
                <p className="text-center text-gray-500 text-[20px] leading-[100%]">
                  Zingo helps you find the right conversation partner for
                  learning English.
                </p>
              </li>
              <li className="w-[385px]  justify-between  flex-col items-center p-10">
                <div className="flex justify-center">
                  <img src="https://zingo.uz/images/find-ranking.svg" alt="#" />
                </div>
                <h3 className="text-[32px] font-medium text-center m-0 mb-5 leading-[100%]">
                  Set a Goal
                </h3>
                <p className="text-center text-gray-500 text-[20px] leading-[100%]">
                  Set your language learning goal and achieve it.
                </p>
              </li>
              <li className="w-[385px] flex-col justify-between  items-center p-10">
                <div className="flex justify-center">
                  <img src="https://zingo.uz/images/plan-done.svg" alt="#" />
                </div>
                <h3 className="text-[32px] font-medium text-center m-0 mb-5 leading-[100%]">
                  Task Settings
                </h3>
                <p className="text-center text-gray-500 text-[20px] leading-[100%]">
                  Personalize communication sessions and make them more
                  effective to suit your needs.
                </p>
              </li>
              <li className="w-[385px] flex justify-between flex-col items-center p-10">
                <div className="flex justify-center">
                  <img
                    src="https://zingo.uz/images/communication.svg"
                    alt="#"
                  />
                </div>
                <h3 className="text-[32px] font-medium text-center m-0 mb-5 leading-[100%]">
                  Social Communication
                </h3>
                <p className="text-center text-gray-500 text-[20px] leading-[100%]">
                  Chat with like-minded people and share experiences.
                </p>
              </li>
              <li className="w-[385px] flex justify-between flex-col items-center p-10">
                <div className="flex justify-center">
                  <img src="https://zingo.uz/images/rocket.svg" alt="#" />
                </div>
                <h3 className="text-[32px] font-medium text-center m-0 mb-5 leading-[100%]">
                  Complete the Task
                </h3>
                <p className="text-center text-gray-500 text-[20px] leading-[100%]">
                  Make your conversations more effective and maintain a positive
                  attitude.
                </p>
              </li>
              <li className="w-[385px] flex justify-between flex-col items-center p-10">
                <div className="flex justify-center">
                  <img src="https://zingo.uz/images/mind-lamp.svg" alt="#" />
                </div>
                <h3 className="text-[32px] font-medium text-center m-0 mb-5 leading-[100%]">
                  Strong Foundation
                </h3>
                <p className="text-center text-gray-500 text-[20px] leading-[100%]">
                  Strengthen your language skills and expand your knowledge.
                </p>
              </li>
            </ul>
          </div>
          <div className="flex justify-center my-10">
            <a href="#Features" onClick={() => setActive("Features")}>
              <button className="h-[56px] p-[16px] rounded-[64px] outline-none bg-[#FF556E]  cursor-pointer hover:bg-[#FF556E] flex justify-center items-center gap-x-2 border-solid border-light-50 drop-shadow-3xl shadow-pink-300">
                <img src="https://zingo.uz/images/star-outlined.svg" alt="#" />
                <span className="text-[18px] text-light-50 text-white">
                  Zingo App
                </span>
              </button>
            </a>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="animated-section mb-[50px]"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.2 }}
        exit={{ opacity: 0, y: -100 }}
      >
        <div id="Screenshots">
          <div className=" flex flex-row flex-wrap gap-10 justify-center mx-auto xl:w-[80%]">
            <div>
              <img src="https://zingo.uz/images/app-screen-1.svg" alt="#" />
            </div>
            <div>
              <img src="https://zingo.uz/images/app-screen-2.svg" alt="#" />
            </div>
            <div>
              <img src="https://zingo.uz/images/app-screen-3.svg" alt="#" />
            </div>
            <div>
              <img src="https://zingo.uz/images/app-screen-4.svg" alt="#" />
            </div>
            <div>
              <img src="https://zingo.uz/images/app-screen-5.svg" alt="#" />
            </div>
            <div>
              <img src="https://zingo.uz/images/app-screen-6.svg" alt="#" />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};
