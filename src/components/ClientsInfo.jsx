import React from "react";

const ClientsInfo = () => {
  return (
    <div className="flex flex-col items-start">
      {/* Img */}
      <div className=" relative w-full h-75 rounded-xl overflow-hidden shadow-md">
        <img src={Client01} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-end justify-center pb-6">
          <div className="w-14 h-14 bg-[#2fc980] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
            <img src={PlayIcon} alt="play-icon" className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Contents */}
      <div className="mt-4 text-left w-full">
        <p className="text-lg font-bold text-gray-900">Krish Bruynson</p>
        <p className="text-sm text-gray-500 mb-1">Director, Storloft</p>
        <div className="flex space-x-1">
          <Star fill="green" stroke="green"/>
          <Star fill="green" stroke="green"/>
          <Star fill="green" stroke="green"/>
          <Star fill="green" stroke="green"/>
          <Star fill="green" stroke="green"/>
        </div>
      </div>
    </div>
  );
};

export default ClientsInfo;
