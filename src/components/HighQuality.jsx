
import HighQualityOne from "../assets/hero-icon-01.png";
import HightQualityTwo from "../assets/hero-icon-02.png";
import IMG03 from "../assets/img03.png";
import IMG04 from "../assets/img04.png";
import { CircleCheck } from "lucide-react";

const HighQuality = () => {
  return (
    <section
      className="relative py-16 overflow-hidden bg-no-repeat bg-white  "
      style={{
        backgroundImage: `url(${HighQualityOne}) , url(${HightQualityTwo})`,
        backgroundPositionX: "left , right",
        backgroundPositionY: "top , top",
        backgroundSize: "auto , auto",
        backgroundRepeat: "no-repeat , no-repeat ",
      }}
    >
      <div className=" relative max-w-7xl  mx-auto px-6  ">
        {/* Center Text  */}
         <div className="text-center">
          <h1 className="text-3xl md:text-5xl leading-tight tracking-wide font-bold mb-2 ">
            Why Hire Developers From Our Name
          </h1>
          <p className=" text-base md:text-lg leading-relaxed tracking-wide  max-w-3xl mx-auto text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since
          </p>
        </div>

        {/* First */}
        <div className="grid md:grid-cols-2 gap-8 items-center justify-between py-20">
          <div className="flex justify-center max-w-6xl order-2 md:order-1">
            <img src={IMG03} alt="" className="w-full max-w-md" />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-semibold ">High Quality/Cost Ratio</h2>
            <div className="py-4 flex gap-2">
              <CircleCheck fill="green" className="w-10 h-10 text-white" />
              <div className="flex flex-col gap-2">
                <h4 className="text-xl font-bold">
                  Hire Silicon Valley Caliber At Half The Cost
                </h4>
                <p className=" max-w-140 leading-6">
                  Hire The Top 1% Of 15 Million+ Developers From 150+ Countries
                  Who Have Applied To Turing.
                </p>
              </div>
            </div>
            <div className="py-4 flex  gap-2">
              <CircleCheck fill="green" className=" w-10 h-10 text-white " />
              <div className="flex flex-col gap-2">
                <h4 className="text-xl font-bold">
                  Hire Silicon Valley Caliber At Half The Cost
                </h4>
                <p className=" max-w-140 leading-6">
                  Hire The Top 1% Of 15 Million+ Developers From 150+ Countries
                  Who Have Applied To Turing.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Second */}
        <div className="grid md:grid-cols-2 gap-8 items-center justify-between py-20">
          
          <div >
            <h2 className="text-3xl font-semibold ">Rigorous Vetting</h2>
            <div className="py-4 flex gap-2">
              <CircleCheck fill="green" className="w-10 h-10 text-white" />
              <div className="flex flex-col gap-2">
                <h4 className="text-xl font-bold">
                  5+ hours of tests and interview
                </h4>
                <p className=" max-w-140 leading-6">
                  Hire The Top 1% Of 15 Million+ Developers From 150+ Countries
                  Who Have Applied To Turing.
                </p>
              </div>
            </div>
            <div className="py-4 flex  gap-2">
              <CircleCheck fill="green" className=" w-10 h-10 text-white " />
              <div className="flex flex-col gap-2">
                <h4 className="text-xl font-bold">Seniority tests</h4>
                <p className=" max-w-140 leading-6">
                  Hire The Top 1% Of 15 Million+ Developers From 150+ Countries
                  Who Have Applied To Turing.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center ">
            <img src={IMG04} alt="" className="w-full max-w-md " />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighQuality;
