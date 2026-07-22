import { CircleCheckBig } from "lucide-react";

import GuideImg from "../assets/Guide-img.png";
const HireGuide = () => {
  const HireGuideApproaches = [
    {
      id: 1,
      content: "Benefits of Hiring Developer",
    },
    {
      id: 2,
      content: "Key Factors To Consider While Hiring",
    },
    {
      id: 3,
      content: "Defining Your Project Requirements",
    },
    {
      id: 4,
      content: "Choosing The Right Development Model",
    },
    {
      id: 5,
      content: "Typical Challenges For Hiring Developers",
    },
    {
      id: 6,
      content: "Hiring Freelancers Vs. Dedicated Developers",
    },
    {
      id: 7,
      content: "Communication With Remote Developers",
    },
  ];

  const HireGuideCheck = [
    {
      id: 1,
      content: "Client-Centric Approach",
    },
    {
      id: 2,
      content: "Best-In-Class Project Management",
    },
    {
      id: 3,
      content: "Global Quality Standards",
    },
    {
      id: 4,
      content: "Client-Centric Approach",
    },
    {
      id: 5,
      content: "Time-Zone Compatibility",
    },
    {
      id: 6,
      content: "Agile Adaptability",
    },
  ];
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto  py-10 sm:py-12 px-4 sm:px-6 ">
        <h1 className=" text-2xl sm:text-3xl md:text-4xl text-center font-bold  sm:py-5 sm:px-6 md-8 sm:mb-12 ">
          User Guide To Hire Dedicated Software Developers
        </h1>
        <div className=" flex flex-col lg:flex-row gap-3 md:gap-6 rounded-xl overflow-hidden    ">
          <div className="w-full lg:w-1/3 bg-white  text-gray-800 font-medium  border-r border-b  border-gray-300">
            <ul className="divide-y divide-gray-200">
              {HireGuideApproaches.map(({ id, content }) => (
                <li key={id} className="p-4 md:p-6 text-sm sm:text-[1em]  cursor-pointer hover:bg-[#2fc980] hover:text-white ">
                  {content}
                </li>
              ))}
            </ul>
          </div>
          <div className=" w-full  lg:w-2/3 bg-white p-4 md:p-7 flex flex-col  gap-6 shadow-md">
            <h3 className="text-xl sm:text-2xl font-medium">
              Benefits of Hiring Developer
            </h3>
            <p className="text-[0.7em] sm:text-[0.9em] font-medium leading-4 text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {HireGuideCheck.map(({ id, content }) => (
                <div className="flex gap-2 items-center" key={id}>
                  <CircleCheckBig className="text-green-400 w-5 h-5" />
                  <p className="text-sm font-semibold sm:text-base text-gray-80">
                    {content}
                  </p>
                </div>
              ))}
            </div>
            <img src={GuideImg} alt="" className="w-full  rounded-xl h-60" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireGuide;
