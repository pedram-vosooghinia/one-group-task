import CompenyTopic from "../CompenyTopic";

import ScrollCart from "./ScrollCart";
const ScrollCartsPlace = () => {
  return (
    <div className="bg-customGray2 w-full ">
      <CompenyTopic />
      <div>ترابری</div>
      <div className="flex justify-center items-center gap-[16px] mx-[20px]">
        <ScrollCart />
        <ScrollCart />
        <ScrollCart />
      </div>
    </div>
  );
};

export default ScrollCartsPlace;
