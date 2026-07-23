import { ArrowUpRight } from "lucide-react";

import HeroBackground from "../assets/hero.png";

const formFields = [
  {
    id: "1",
    label: "Full Name",
    type: "text",
    inputName: "fullname",
    placeholder: "Enter Your Name",
  },
  {
    id: "2",
    label: "Email",
    type: "email",
    inputName: "email",
    placeholder: "Enter Your Email",
  },
  {
    id: "3",
    label: "Phone Number",
    type: "number",
    inputName: "number",
    placeholder: "Enter Your Number",
  },
  {
    id: "4",
    label: "Country Name",
    type: "text",
    inputName: "country",
    placeholder: "Enter Your Country",
  },
];

const HireCreateTeam = () => {
  return (
    <section
      className="w-full py-12 px-4 sm:px-6 md:px-10 lg:px-20   bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${HeroBackground})` }}
    >
      <div className="max-w-7xl mx-auto w-full ">
        <div className="flex flex-col lg:flex-row  items-center justify-between gap-10  ">
          {/* Context  */}
          <div className=" flex flex-col  gap-4 w-full lg:w-2/3 space-x-4 text-center lg:text-left ">

            <h1 className="  text-3xl sm:text-4xl lg:text-5xl  font-medium flex flex-col sm:flex-row lg:flex-col gap-0 sm:gap-2  items-center lg:items-start uppercase  text-green-400 tracking-tight">
              Hire Dedicated
              <span className="w-55 h-1 bg-green-400"></span>
            </h1>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-black uppercase">
              Developers
            </h1>
            <p className="text-lg sm:text-xl">
              Top 1% Pre-Vetted, In-house & Dedicated Software Programmers
            </p>
            <p className="text-md sm:text-lg w-full max-w-2xl leading-normal">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled
            </p>
            <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4 mt-5  text-white font-semibold text-sm">
              <button className="flex justify-center  items-center gap-1 border border-black-400 py-4 px-6 text-[1em]  bg-[#FB7185]  hover:bg-red-400 duration-300 ease-in-out rounded-md cursor-pointer">
                <span>View More</span>
                <ArrowUpRight size={16} />
              </button>
              <button className="flex justify-center items-center gap-1 px-6 py-4   text-[1em] rounded-md border-2 border-green-200    hover:bg-[#FB7185]  hover:text-white duration-100 ease-in-out  text-black">
                <span className="">Get in Touch</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
          {/* Form  */}
          <div className="bg-white  w-full max-w-lg lg:max-w-md flex flex-col gap-5  p-6 sm:p-8  rounded-3xl shadow-xl ">
            <div className="text-center  ">
              <h2 className="font-semibold text-lg sm:text-xl  ">
                Create Your Team
              </h2>
              <p className="text-sm sm:text-base ">
                Lorem Ipsum is simply dummy text of the printing
              </p>
            </div>

            <form action="" >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 ">
                {formFields.map(
                  ({ id, label, type, inputName, placeholder }) => (
                    <div className="flex flex-col gap-1 " key={id}>
                      <label
                        htmlFor={inputName}
                        className="text-sm font-medium "
                      >
                        {label}
                      </label>
                      <input
                        className="w-full border-2 border-gray-300 rounded-lg p-2 placeholder:text-sm"
                        name={inputName}
                        type={type}
                        id={inputName}
                        placeholder={placeholder}
                        required
                      />
                    </div>
                  ),
                )}
              </div>

              <div className="w-full max-w-xl">
                <label htmlFor="project" className="text-sm font-medium ">
                  Project Brief
                </label>
                <textarea
                  className="w-full resize-none h-20 border-2 border-gray-300 rounded-lg p-2 placeholder:text-sm"
                  id="project"
                  name="projectName"
                  placeholder="Enter Your Project"
                  required
                />
              </div>

              <button
                className=" w-full flex justify-center items-center text-white font-medium  gap-1 border border-black-400 py-3 text-md  bg-[#FB7185]  hover:bg-red-400 duration-300 ease-in-out rounded-md cursor-pointer mt-2"
                
              >
                <span>Hire Software Developer</span>
                <ArrowUpRight size={16} />
              </button>
            </form>
            {/* Input Fileds */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default HireCreateTeam;
