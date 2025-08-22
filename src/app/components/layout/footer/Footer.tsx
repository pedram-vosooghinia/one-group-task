import FooterLinks from "./FooterLinks";
import FooterImage from "./FooterImage";
import FooterConection from "./FooterConection";
import FooterNote from "./FooterNote";
const Footer = () => {
  return (
    <footer className="rtl flex flex-col items-center mt-[76px] mx-[84px]">
      <FooterImage />
      <FooterConection />
      <FooterLinks />
      <FooterNote />
    </footer>
  );
};

export default Footer;
