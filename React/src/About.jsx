import React from "react";
import TechKidsCourses from "./Components/TechKidsCourses";
import logo from "./images/olotuLogo.png";
import profileImage from "./images/right-grid-boy-photo.png";
import rectangleImage from "./images/Rectangle.png";
import brainImage from "./images/brain.png";
import settingsIcon from "./images/settings.png";
import bulbImage from "./images/light-bulb.png";
import Form from "./Form.jsx";
import frame1 from "./images/frame1.png";
import frame2 from "./images/frame 2.png";
import frame3 from "./images/frame3.png";
import frame4 from "./images/frame4.png";

function App() {
  const coursesCard = [
    {
      logo: (
        <img
          src={brainImage}
          alt="photo of brain"
          className="mx-auto py-6 sm:py-8 md:py-10 w-16 sm:w-20 md:w-24"
        />
      ),
      title: "Artificial Intelligence",
      description:
        "Explore and learn how to build solutions and application using AI tools.",
    },
    {
      logo: (
        <img
          src={settingsIcon}
          alt="settings icon"
          className="mx-auto py-6 sm:py-8 md:py-10 w-16 sm:w-20 md:w-24"
        />
      ),
      title: "Robotics",
      description:
        "Design, build, and program automated systems using code, sensors and motors.",
    },
    {
      logo: (
        <img
          src={bulbImage}
          alt="photo of a light bulb"
          className="mx-auto py-6 sm:py-8 md:py-10 w-16 sm:w-20 md:w-24"
        />
      ),
      title: "Electronics",
      description:
        "Create circuits, solder components, and bring tech projects to life.",
    },
  ];

  return (
  
    <div>
      <header className="bg-[#F59E0B] flex justify-between items-center fixed top-0 right-0 left-0 z-50 px-3 sm:px-6 lg:px-10 py-2">
        <img src={logo} alt="olotu square logo" className="w-24 sm:w-32 md:w-40 lg:w-50" />
        <a href="#register-form"  className="bg-white text-[#F59E0B] font-inter px-3 sm:px-5 lg:px-8 text-xs sm:text-sm md:text-base lg:text-[20px] cursor-pointer rounded-xl flex items-center justify-center h-8 sm:h-9 lg:h-10">Register Now</a> 
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 pt-20 sm:pt-24 md:pt-28 px-4 sm:px-6 md:px-10">
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left mx-auto md:mx-0 max-w-xl">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0">
            <p className="font-inter text-sm sm:text-base md:text-lg lg:text-[20px]">
              Tech Explorer's Bootcamp 2
            </p>
            <span className="bg-[#ECFDF5] text-[#10B981] font-fredoka-one text-xs sm:text-sm md:text-[14px] sm:ml-2 px-4 sm:px-7 py-2 border border-[#10B981] rounded-3xl w-fit mx-auto sm:mx-0">
              for kids aged 5-15
            </span>
          </div>

          <p className="text-[#F59E0B] font-fredoka-one text-3xl sm:text-4xl md:text-5xl lg:text-[48px] mt-4 leading-tight">
            Build solutions,
            <span className="block text-[#222222]">not just think them!</span>
          </p>

          <p className="text-[#F59E0B] text-lg sm:text-xl md:text-2xl lg:text-[32px] font-fredoka py-6 md:py-10">
            Registration - ₦70,000,{" "}
            <span className="text-[#10B981] text-sm sm:text-base md:text-lg lg:text-[24px] font-fredoka font-medium block sm:inline">
              early bird ₦50,000
            </span>
          </p>

          
          <a  href="#register-form"
            className="bg-[#F59E0B] text-white font-inter px-8 text-base sm:text-lg lg:text-[20px] cursor-pointer rounded-xl hover:opacity-80 flex items-center justify-center h-10 w-full sm:w-50"
          >
            Register Now
          </a>
        </div>

        <div className="flex justify-center md:justify-end items-center">
          <img src={profileImage} alt="boy with toys" className="w-56 sm:w-72 md:w-80 lg:w-150 max-w-full h-auto" />
        </div>
      </div>

      <div className="pb-10 px-4 sm:px-0">
        <img src={rectangleImage} alt="" className="w-full h-auto" />
      </div>

      <div className="flex flex-col justify-center items-center px-4 text-center">
        <h2 className="font-fredoka text-2xl sm:text-3xl md:text-[32px] font-medium text-[#222222]">
          What they'll learn
        </h2>
        <p className="font-inter text-sm sm:text-base text-[#747070]">
          Three hands-on courses to ignite their interest
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 lg:gap-20 px-4 sm:px-8 md:px-16 my-10 md:my-16">
        {coursesCard.map((course, index) => (
          <TechKidsCourses
            key={index}
            logo={course.logo}
            header={course.title}
            text={course.description}
          />
        ))}
      </div>

      <div className="flex flex-col justify-center items-center bg-linear-to-t from-orange-100 to-white px-4 py-10 md:py-16">
        <h3 className="font-fredoka font-medium text-2xl sm:text-3xl md:text-[32px] text-[#222222] text-center">
          See the Magic in Action
        </h3>
        <p className="text-sm sm:text-base font-inter text-[#F59E0B]">
          Highlights from our past cohorts
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 font-fredoka text-base sm:text-lg md:text-[24px] font-medium gap-y-3 sm:gap-y-5 gap-x-6 md:gap-x-20 lg:gap-x-[12.5rem] text-[#747070] mt-8 md:mt-15 text-center">
          <p>Projects</p>
          <p>Problem Solving</p>
          <p>Lots of Games &amp; Fun</p>
          <p>Team Building</p>
          <p>Collaboration</p>
          <p>Networking</p>
        </div>

        <div className="flex flex-wrap sm:flex-nowrap justify-center gap-3 sm:gap-0 mt-10 md:mt-16">
          <div className="relative z-10">
            <img src={frame1} alt="first children group photo"
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full object-cover border-4 border-orange-500"
            />
          </div>
          <div className="relative z-20 sm:-ml-4 md:-ml-8 lg:-ml-10">
            <img
              src={frame2}
              alt="second children group photo"
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full object-cover border-4 border-emerald-300"
            />
          </div>
          <div className="relative z-30 sm:-ml-4 md:-ml-8 lg:-ml-10">
            <img
              src={frame3}
              alt="third children group photo"
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full object-cover border-4 border-orange-500"
            />
          </div>
          <div className="relative z-40 sm:-ml-4 md:-ml-8 lg:-ml-10">
            <img
              src={frame4}
              alt="fourth children group photo"
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full object-cover border-4 border-emerald-300"
            />
          </div>
        </div>
      </div>

      <Form />
    </div>
   
  );
}

export default App;