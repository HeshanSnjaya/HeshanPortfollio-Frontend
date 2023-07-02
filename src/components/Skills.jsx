import React from "react";
import JavaScript from "../assets/javascript.png";
import Reacting from "../assets/react.png";
import Github from "../assets/github.png";
import Mongo from "../assets/mongo.png";
import Tailwind from "../assets/tailwind.png";
import HTML from "../assets/html.png";
import MySql from "../assets/mysql.png";
import Python from "../assets/python.png";
import Java from "../assets/Java.png";
import SpringBoot from "../assets/SpringBoot.png";
import CSS from "../assets/css.png";
import Django from "../assets/Django.png";

export const Skills = () => {
  return (
    <div name="Skills" className="bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Interested Technologies
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-md">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-md">
            <img
              className="w-20 mx-auto"
              src={JavaScript}
              alt="JavaScript icon"
            />
            <p className="my-4">JavaScript</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-md">
            <img className="w-20 mx-auto" src={Reacting} alt="React icon" />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-md">
            <img className="w-20 mx-auto" src={Mongo} alt="Mongo icon" />
            <p className="my-4">Mongo</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-md">
            <img
              className="w-[150px] my-auto mx-auto"
              src={MySql}
              alt="MySql icon"
            />
            <p className="my-4">MySql</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-md">
            <img className="w-20 mx-auto" src={Java} alt="Java icon" />
            <p className="my-4">Java</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-md">
            <img
              className="w-[100px] mx-auto"
              src={Tailwind}
              alt="Tailwind icon"
            />
            <p className="my-4">Tailwind</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-md">
            <img className="w-20 mx-auto" src={Python} alt="Python icon" />
            <p className="my-4">Python</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-md">
            <img className="w-20 mx-auto" src={Github} alt="Github icon" />
            <p className="my-4">Github</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-md">
            <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-md">
            <img
              className="w-20 mx-auto"
              src={SpringBoot}
              alt="SpringBoot icon"
            />
            <p className="my-4">SpringBoot</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-md">
            <img className="w-40 mx-auto" src={Django} alt="Django icon" />
            <p className="my-6">Django</p>
          </div>
        </div>
      </div>
    </div>
  );
};
