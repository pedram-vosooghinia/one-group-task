import Image from "next/image";
import ScrollCartsPlace from "./ScrollCartsPlace";
const ScrollPart = () => {
  return (
    <div className="flex rtl gap-[43px]  ">
      <Image
        src="/tower-142.svg"
        alt="tower-142.svg"
        width={305}
        height={1585}
        className=""
      />
      <div className=" bg-customGray2 w-[952px] mt-[20px]  ">
        <div className="flex flex-col items-center overflow-y-auto h-[1400px] scrollbar-thin">
          <ScrollCartsPlace />
          <ScrollCartsPlace />
          <ScrollCartsPlace />
          <ScrollCartsPlace />
        </div>
      </div>
    </div>
  );
};

export default ScrollPart;
