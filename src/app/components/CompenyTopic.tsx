import Image from "next/image"

const CompenyTopic = () => {
  return (
    
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
  )
}

export default CompenyTopic