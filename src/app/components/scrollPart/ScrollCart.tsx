import Image from "next/image";
const ScrollCart = () => {
  return (
    <>
      <div>
        <div className="w-[280px] h-[306] bg-customeWhite rounded-[24px]">
          <div className="flex flex-col items-center">
            <Image
              src="/Rectangle-72.svg"
              alt="Rectangle-72.svg"
              width={130}
              height={130}
              className="mx-[75px] my-[24px]"
            />
            <div>
              دات‌وان ریل، هواپیمایی ریلی ایران، سفری را فراتر از تصور رقم
              می‌زند؛ سفری که سرعت، دقت و آسایش پروازهای هوایی را به دنیای ریلی
              می‌آورد.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScrollCart;
