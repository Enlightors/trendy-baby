import React from 'react';

interface Icon {
  id: number;
  img: string;
  desc: string;
}

const iconData: Icon[] = [
  {
    id: 1,
    img: "images/trending-baby-banner-1.png",
    desc: "Purchase and official price guaranteed",
  },
  {
    id: 2,
    img: "images/trending-baby-banner-2.png",
    desc: "Secure payment by card",
  },
  {
    id: 3,
    img: "images/trending-baby-banner-3.png",
    desc: "Free shipping and easy returns",
  },
  {
    id: 4,
    img: "images/trending-baby-banner-4.png",  
    desc: "Direct manufacturer warranty coverage",
  },
  {
    id: 5,
    img: "images/trending-baby-banner-5.png",
    desc: "Customer Service",
  },
  {
    id: 6,
    img: "images/trending-baby-banner-6.png",
    desc: "Official distributor Spain and Portugal",
  },
];

const Banner = () => {
    return (
      <div className="mx-auto flex flex-wrap bg-[#ecf0f2] justify-center items-center h-[400px] px-[20px]">
        {iconData.map((icon) => (
          <div
            key={icon.id}
            className="flex flex-col items-center py-4 px-4 gap-x-2 w-1/4" // Use w-1/4 to make each item take up 25% width
          >
            <img 
              src={icon.img} 
              alt={icon.desc} 
              className="max-w-[70px] max-h-[70px] h-auto object-contain mb-4"
            />
            <div className="flex flex-col max-w-[200px] text-center">
              <p className="text-sm font-semibold text-gray-600">{icon.desc}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  
export default Banner;
