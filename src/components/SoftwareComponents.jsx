import { useState } from "react";
import PeopleImg from "../assets/software-img.png";
import { ArrowUpRight, Star } from "lucide-react";

const Facilities = [
  { id: 1, heading: "English Speaking Programmers" },
  { id: 2, heading: "Flexible Work Hours" },
  { id: 3, heading: "Rapid Onboarding Process" },
  { id: 4, heading: "Expertise In Top Technologies" },
  { id: 5, heading: "Reliable Partner Credentials" },
];

const SoftwareComponents = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <section className=" py-20 bg-[#0a0c3d] text-white ">
      <div className="max-w-7xl  mx-auto py-16 px-4  text-white relative grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side  */}
        <div className=" relative h-full max-w-3xl text-white overflow-hidden">
          <img
            src={PeopleImg}
            className="w-full h-full object-cover min-h-125 "
            alt=""
          />
          <div className="absolute bg-linear-to-r from-[#0a0c3d] via-[#0a0c3dcc] to-transparent inset-0"></div>

          <div className="absolute top-0 left-0 p-2 z-10">
            <h3 className=" text-3xl md:text-4xl font-extrabold  max-w-xl  ">
              Why Hire Software Developers In India?
            </h3>
          </div>

          {/* div used */}
          <div className="relative h-full rounded-xl overflow-hidden shadow-2xl"></div>
        </div>
        {/* Right Side  */}
        <div
          className={`relative right-0 w-full flex flex-col justify-between gap-5 ${activeIndex ? "max-w-3xl" : "max-w-2xl"}`}
        >
          {Facilities.map(({ id, heading }) => (
            <div className="p-4 flex flex-col " key={id}>
              <div className="  flex justify-between items-center">
                <h3 className="  text-xl md:text-2xl font-medium flex gap-4 cursor-pointer">
                  <Star fill="#FDD835" className="w-7 h-7" />
                  <span> {heading}</span>
                </h3>
                <ArrowUpRight
                  onClick={() => setActiveIndex(id === activeIndex ? -1 : id)}
                  className={` ${activeIndex ? "rotate-80" : "rotate-0"}`}
                />
              </div>
              {id === activeIndex && (
                <p className="px-10 py-3 text-[0.98em]">
                  India has a large pool of developers fluent in English,
                  enabling clear communication and smooth project execution.
                </p>
              )}
              <hr className="w-full h-[0.01em]  mt-4 " />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftwareComponents;
