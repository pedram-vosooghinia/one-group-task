import Image from "next/image";

const FooterImage = () => {
  return (
    <>
      <Image
        src="/DotOne-Logo-Black1.svg"
        alt="DotOne-Logo-Black"
        width={196}
        height={147}
        className="mt-[76px]"
      />
    </>
  );
};

export default FooterImage;
