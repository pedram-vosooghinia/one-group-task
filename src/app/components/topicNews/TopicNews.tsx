import Image from "next/image";
import NewsShort from "./NewsShort";
import NewsLong from "./NewsLong";
import MoreNews from "./MoreNews";
const TopicNews = () => {
  return (
    <div className="rtl p-[20px]  ">
      <div className="flex flex-col  ">
        <div className="flex items-center">
          <div className="flex flex-col ">
            <Image
              src="/Group.svg"
              alt="Group"
              width={42}
              height={5.64}
              className="ml-[10px]"
            />
            <Image
              src="/Vector-105.svg"
              alt="Vector-105"
              width={140}
              height={0}
              className="ml-[10px]"
            />
          </div>
          <div className="text-customGray text-size-[16px] ">
            دسته‌بندی شرکت ها
          </div>
        </div>
        <div className="text-size-[28px] mt-[10px]">جمله کوتاه یا یک تایتل</div>
      </div>
      <div className="flex justify-center items-center gap-[24px] flex-wrap">
        <NewsLong/>
        <NewsLong/>
      </div>
      <div className="flex justify-center items-center gap-[24px] flex-wrap pt-[24px]">
        <NewsShort/>
        <NewsShort/>
        <MoreNews/>
      </div>
    </div>
  );
};

export default TopicNews;
