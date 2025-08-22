import Image from "next/image";
const NewsLong = () => {
  const items = [
    { id: 1, title: "هواپیما" },
    { id: 2, title: "سفر" },
    { id: 3, title: "فرودگاه" },
    { id: 4, title: "گردشگری" },
  ];
  return (
    <div className=" flex rounded-[24px] bg-customGray2 p-[14px] w-[600px] h-[260px] ">
      <div className="flex flex-col mx-[24px] mt-[14px] w-[320px]">
        <div className="flex flex-wrap justify-start  items-center  gap-[10px]   w-full ">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-customeWhite  h-[26px] flex justify-center items-center rounded-[10px] "
            >
              <div className="text-customeBlack2 text-[10px] py-[3px] px-[16px]">
                {item.title}
              </div>
            </div>
          ))}
        </div>
        <div className="text-[18px] font-semibold">لورم ایپسوم متن ساختگی!</div>
        <div className="text-[14px] font-light">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است...
        </div>
        <div className="flex justify-start items-center mt-[22px] gap-[4px] ">
          <Image
            src="/calendar-edit.svg"
            alt="calendar-edit.svg"
            width={14}
            height={14}
          />
          <div className="font-light">24 فروردین 1404</div>
        </div>
      </div>

      <div className="relative w-[239px] h-[232px] ml-[10px]">
        <Image
          src="/Rectangle-64.png"
          alt="Rectangle-64.png"
          fill
          className="rounded-[12px]"
        />

        <div className="absolute left-[14px] bottom-[14px] z-10">
          <Image
            src="/Group-174.svg"
            alt="Group-174.svg"
            width={40}
            height={40}
          />
        </div>
      </div>
    </div>
  );
};

export default NewsLong;
