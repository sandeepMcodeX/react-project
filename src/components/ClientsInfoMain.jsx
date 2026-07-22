
import PlayIcon from "../assets/play-icon.png";
import { Star } from "lucide-react";
import ClientOne from "../assets/client-one.png";
import ClientTwo from "../assets/client-two.png";
import ClientThree from "../assets/client-three.png";
import ClientFour from "../assets/client-four.png";

const ClientData = [
  { id: 1, image: ClientOne  },
  { id: 2, image: ClientTwo },
  { id: 3, image: ClientThree  },
  { id: 4, image: ClientFour  },
];

const ClientsInfoMain = () => {
  return (
    <section className=" py-16 px-5">
      <div className="w-full max-w-7xl mx-auto text-center ">
        <div className="text-center  ">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 ">
            What Our Clients Have To Say About Us
          </h2>
          <p className=" text-[0.9em] md:text-[1em] max-w-3xl mx-auto ">
            Take A Look At What Our Happy Clients Say About Our Software
            Development Services
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 mt-6">
          {ClientData.map(({ id, image }) => (
            <div className="flex flex-col items-start" key={id}>
              <div className=" relative w-full h-75 rounded-xl overflow-hidden shadow-md">
                <img
                  src={image}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-end justify-center pb-6">
                  <div className="w-14 h-14 bg-[#2fc980] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                    <img src={PlayIcon} alt="play-icon" className="w-5 h-5" />
                  </div>
                </div>
              </div>
              <div className="mt-4 text-left w-full">
                <p className="text-lg font-bold text-gray-900">
                  Krish Bruynson
                </p>
                <p className="text-sm text-gray-500 mb-1">Director, Storloft</p>
                <div className="flex space-x-1">
                  <Star fill="green" stroke="green" />
                  <Star fill="green" stroke="green" />
                  <Star fill="green" stroke="green" />
                  <Star fill="green" stroke="green" />
                  <Star fill="green" stroke="green" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsInfoMain;
