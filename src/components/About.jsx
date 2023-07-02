import React from "react";

export const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I'm Heshan,
              <br />
              nice to meet you.Please take a look around.
            </p>
          </div>
          <div>
            <p>
              I'm Enthusiastic IT undergraduate driven to apply programming,
              database, and web development skills in solving real-world
              problems through innovative IT solutions. Passionate about
              creating new applications that enhance people's lives and
              committed to making a meaningful impact. Eager to collaborate with
              dynamic teams, embrace new technologies, and contribute with
              adaptability, enthusiasm,and a strong work ethic.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
