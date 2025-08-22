import Image from "next/image";
const MoreNews = () => {
  return (
    <div className=" flex flex-col rounded-[24px] bg-customGray2  w-[392px] h-[260px] ">
      <div className="flex  justify-between items-center pr-[47px] pt-[52px] pl-[24px]">
        <div className="font-semibold ">مشاهده اخبار و مقالات بیشتر</div>
        <Image
          src="/Group-174.svg"
          alt="Group-174.svg"
          width={64}
          height={64}
          className=""
        />
      </div>
      <Image
        src="/Frame-135.png"
        alt="Frame-135.png"
        width={352}
        height={80}
        className="mt-[28px] mr-[16px] ml-[24px] mb-[40px]"
      />
    </div>
  );
};

export default MoreNews;
