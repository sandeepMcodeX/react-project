import React from "react";
import CodeTyping from "../assets/code-typing.png";
import { CircleCheck } from "lucide-react";

const CompanyApproach = [
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
    content: "Time-Zone Compatibility",
  },
  {
    id: 5,
    content: "Cutting-Edge Infrastructure",
  },
  {
    id: 6,
    content: "Agile Adaptability",
  },
];

const Companies = () => {
  return (
    <section className="w-full bg-gray-50 ">
      <div className="w-full max-w-7xl mx-auto  py-16 px-6 ">
        <div className="flex flex-col-reverse lg:flex-row  justify-center items-center gap-16">

          <div className="flex flex-col  gap-6 order-1">
            <h3 className="text-3xl md:text-4xl font-extrabold">
              Top Companies Trust <br/> ValueCoders <br/> For Hiring Software Developers
            </h3>
            <p className="text-[1em] md:text-[1.1em] w-full max-w-xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. It has been the industry's standard dummy text ever
              since the 1500s.
            </p>
            <div className="grid rid-cols-1 sm:grid-cols-2  gap-5">
              {CompanyApproach.map(({id , content}) => (
                <div key={id} className="flex gap-5">
                  <CircleCheck className="text-blue-400" />
                  <p>{content}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
             <img src={CodeTyping} alt="laptop"  />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Companies;
