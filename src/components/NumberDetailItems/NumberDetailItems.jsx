import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";

const NumberDetailItems = ({ count, title, icon }) => {
  const [OnScroll, setOnscroll] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setOnscroll(true)}
      onExit={() => setOnscroll(false)}
    >
      <div className="flex  gap-2 item-center lg:justify-center lg:w-full w-[80%] mx-auto h-20  md:w-auto">
        <div className="">
          <img className="w-16" src={icon} alt="icon" />
        </div>
        <div className="flex-1 w-[70%]">
          <span className="text-lg md:text-2xl text-second-color dark:text-txt-color">
            +{OnScroll && <CountUp start={0} end={count} delay={0} />}
          </span>

          <h6 className="text-base md:text-lg text-main-color dark:text-txt-color">
            {title}
          </h6>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default NumberDetailItems;
