import Circle from "../assets/circle.png";
import HireOne from "../assets/hire-01.png";
import HireTwo from "../assets/hire-02.png";
import HireThree from "../assets/hire-03.png";
import HireFour from "../assets/hire-04.png";

const HireData = [
  { id: 1, img: HireOne  , },
  { id: 2, img: HireTwo  ,  },
  { id: 3, img: HireThree  , },
  { id: 4, img: HireFour  },
];

const HireProcess = () => {
  return (
    <section className="w-full ">
      <div className="w-full max-w-6xl mx-auto py-16">
        <div className="text-center mb-4">
          <h1 className="text-5xl font-bold mb-4 ">Our Hiring Process</h1>
          <p className=" text-[1em] max-w-3xl mx-auto ">
            Take A Look At Our Simple And Straightforward Process To Hire
            Software Developers From ValueCoders.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 ">
          {HireData.map(({ id, img }) => (
            <div className="flex items-center" key={id}>
              {/* Flex main  */}
              <div className="relative flex flex-col items-center justify-start pt-6 px-4 text-center w-60 h-90">
                {/* Img */}
                <div className=" relative w-60 h-60">
                  <img src={Circle} alt="circle" className="w-60 h-60 " />
                  <img
                    src={img}
                    alt="hire-one"
                    className="absolute top-1/2 left-1/2 -translate-1/2"
                  />
                  <span className="px-4 py-2 text-md font-bold flex justify-cente items-center shadow-md absolute top-5 right-5  text-white rounded-full bg-red-400 ">
                    {id}
                  </span>
                </div>
                <h3 className="text-lg font-bold mt-2 mb-2 uppercase tracking-wide ">
                  INQUIRY
                </h3>
                <p className="text-sm">
                  Lorem Ipsum Is Simply Dummy Text Of The Printing And
                  Typesetting Industry.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HireProcess;
