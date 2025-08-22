import Image from "next/image";
const NewsShort = () => {
  const items = [
    { id: 1, title: "سینما" },
    { id: 2, title: "لحظه تی وی" },
  ];
  return (
    <div className=" flex flex-col rounded-[24px] bg-customGray2 p-[14px] w-[392px] h-[260px] ">
      <div className="flex flex-col   ">
        <div className="flex justify-between items-center w-full">
          <div className="flex    items-center    gap-[10px]   ">
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
          <div className="flex  justify-center items-center  gap-[4px] ">
            <Image
              src="/calendar-edit.svg"
              alt="calendar-edit.svg"
              width={14}
              height={14}
            />
            <div className="font-light  text-[10px]">24 فروردین 1404</div>
          </div>
        </div>
      </div>
      <div className="text-[18px] font-semibold">لورم ایپسوم متن ساختگی!</div>

      <div className="relative w-[364px] h-[171px] ml-[10px]">
        <Image
          src="/Rectangle-65.png"
          alt="Rectangle-65.png"
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

export default NewsShort;
