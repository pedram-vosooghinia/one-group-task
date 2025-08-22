import Image from "next/image";

const FooterConection = () => {
  return (
    <>
      <div className="flex  w-full justify-between px-[185px] mt-[45px] ">
        <div className="flex flex-col items-center">
          <Image src="/call-calling.svg" alt="Cell" width={40} height={40} />
          <div>021-42101000</div>
        </div>
        <div className="flex flex-col  items-center">
          <Image src="/location.svg" alt="location" width={40} height={40} />
          <div>تهران، جهان کودک، برج دات وان</div>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/sms.svg" alt="sms" width={40} height={40} />
          <div>info1@one-holding.ir</div>
        </div>
      </div>
    </>
  );
};

export default FooterConection;
