import Image from "next/image";
const CompanyCategory = () => {
  const items = [
    { id: 1, title: "ترابری" },
    { id: 2, title: "مالی اعتباری" },
    { id: 3, title: "رسانه" },
    { id: 4, title: "ترابری" },
    { id: 5, title: "ترابری" },
    { id: 6, title: "ترابری" },
    { id: 7, title: "مالی اعتباری" },
    { id: 8, title: "رسانه" },
    { id: 9, title: "ترابری" },
    { id: 10, title: "ترابری" },
  ];

  return (
    <div className=" flex flex-wrap">
      <div className="relative rtl ">
        <Image
          src="/pattern_one_group_3-2.svg"
          alt="Group"
          width={497}
          height={350}
          className="absolute top-0 left-0 -z-10 pl-[20px] pt-[26px]"
        />

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
            <div className="text-size-[28px] mt-[10px]">
              جمله کوتاه یا یک تایتل
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center  gap-[24px]  mt-[40px] w-full ">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-customeBlack1  w-[226px] h-[60px] flex justify-center items-center rounded-[16px] "
              >
                <div className="text-customeWhite text-[24px]">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyCategory;
