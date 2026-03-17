import { useEffect, useState } from "react";
import CarouselItem from "./CarouselItem";

function CarouselBody() {
  const [carouselNum, setCarouselNum] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselNum((prev) => {
        if (prev < 4) {
          return prev + 1;
        } else {
          return 0;
        }
      });
    
    }, 10000);

    return () => clearInterval(interval);
  }, [carouselNum]);

  const next = () => {
    if (carouselNum < 4) {
      setCarouselNum((prev) => prev + 1);
    } else {
      setCarouselNum(0);
    }
  };

  const back = () => {
    if (carouselNum > 0) {
      setCarouselNum((prev) => prev - 1);
    } else {
      setCarouselNum(4);
    }
  };

  let carouselText = "";
  switch (carouselNum) {
    case 0:
      carouselText = "Meals from all around the world";
      break;
    case 1:
      carouselText = "Find a meal by Category";
      break;
    case 2:
      carouselText = "Search your meal by name";
      break;
    case 3:
      carouselText = "Find meals from any country";
      break;
    case 4:
      carouselText = "Find all meals with an ingredient";
      break;
  }

  return (
    <div className="relative w-4/5 md:w-full h-52 md:h-80 lg:h-120 bg-acc2 rounded-lg">
      <button
        onClick={next}
        type="button"
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-[#00000030] text-[#ffffff30] hover:bg-[#00000080] hover:text-[#ffffff80] hover:cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </button>
      <button
        onClick={back}
        type="button"
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-[#00000030] text-[#ffffff30] hover:bg-[#00000080] hover:text-[#ffffff80] hover:cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
      </button>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3">
        <div className={`w-3 h-3 rounded-full ${carouselNum === 0 ? "bg-[#ffffff80]" : "bg-[#00000080]"}`}></div>
        <div className={`w-3 h-3 rounded-full ${carouselNum === 1 ? "bg-[#ffffff80]" : "bg-[#00000080]"}`}></div>
        <div className={`w-3 h-3 rounded-full ${carouselNum === 2 ? "bg-[#ffffff80]" : "bg-[#00000080]"}`}></div>
        <div className={`w-3 h-3 rounded-full ${carouselNum === 3 ? "bg-[#ffffff80]" : "bg-[#00000080]"}`}></div>
        <div className={`w-3 h-3 rounded-full ${carouselNum === 4 ? "bg-[#ffffff80]" : "bg-[#00000080]"}`}></div>
      
      </div>
      <div className="relative flex justify-center w-full h-full rounded-lg">
        <CarouselItem carouselNum={carouselNum} place={0}/>
        <CarouselItem carouselNum={carouselNum} place={1}/>
        <CarouselItem carouselNum={carouselNum} place={2}/>
        <CarouselItem carouselNum={carouselNum} place={3}/>
        <p className="absolute bottom-8 md:bottom-12 lg:bottom-20 text-base md:text-2xl lg:text-4xl p-2 bg-[#fcdc8b80] rounded-lg text-acc5 font-bold">
          {carouselText}
        </p>
      </div>
    </div>
  );
}

export default CarouselBody;
