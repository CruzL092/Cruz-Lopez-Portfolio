import Image from "next/image";
import Email from "../../public/images/footer/email.webp";
import LinkedIn from "../../public/images/footer/linkedin.webp";
import Github from "../../public/images/footer/github_icon.webp";

const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-linear-to-b lg:bg-linear-to-r from-[#4DB1B1] via-[#4DB1B4] to-[#83F5F5] h-full lg:h-40 w-full text-white ">
      <div className="flex w-full items-center mt-8 lg:mt-0 lg:ml-50">
        <Image
          src={Email}
          alt="Email Icon"
          width={100}
          className=" ml-[10%] mr-[10%] md:ml-[15%] md:mr-[20%] lg:mr-24"
        />
        <Image
          src={LinkedIn}
          alt="LinkedIn Icon"
          width={70}
          className="mr-[12%] md:mr-[24%] lg:mr-24"
        />
        <Image
          src={Github}
          alt="Github Icon"
          width={75}
          className="mr-[10%] md:mr-[15%]"
        />
      </div>
      <div className="flex w-full flex-col  justify-center items-center mt-6 md:mt-10 lg:justify-end lg:items-end lg:mr-1 mb-1 font-bold text-shadow-lg/30">
        <p className="flex lg:w-2/6 items-start mb-1">
          &#169; 2026 Cruz Lopez{" "}
        </p>
        <p className="flex lg:w-2/6 items-start">Last Updated: January 2026</p>
      </div>
    </div>
  );
};

export default Footer;
