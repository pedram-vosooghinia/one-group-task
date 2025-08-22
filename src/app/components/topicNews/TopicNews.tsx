import CompenyTopic from "../CompenyTopic";
import NewsShort from "./NewsShort";
import NewsLong from "./NewsLong";
import MoreNews from "./MoreNews";
const TopicNews = () => {
  return (
    <div className="rtl p-[20px]  ">
      <div className="flex flex-col  ">
        <CompenyTopic />
        <div className="text-size-[28px] mt-[10px]">جمله کوتاه یا یک تایتل</div>
      </div>
      <div className="flex justify-center items-center gap-[24px] flex-wrap">
        <NewsLong />
        <NewsLong />
      </div>
      <div className="flex justify-center items-center gap-[24px] flex-wrap pt-[24px]">
        <NewsShort />
        <NewsShort />
        <MoreNews />
      </div>
    </div>
  );
};

export default TopicNews;
