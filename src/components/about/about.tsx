import Cruz from "../../../public/images/cruz.webp";
import Image from "next/image";

const about = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center font-sans">
      <div className="flex flex-col justify-center items-center w-full mb-12 bg-linear-to-b lg:bg-linear-to-r from-[#4DB1B1] via-[#90dfdf] to-[#90dfdf] lg:to-white h-140 border-b">
        <div className=" text-5xl md:text-6xl lg:text-7xl mb-8 font-bold text-white">
          About Me
        </div>
        <Image
          src={Cruz}
          alt="Cruz Pic"
          width={250}
          height={250}
          className="mt-6 mb-6 lg:m-6 rounded-full aspect-square object-cover"
        />
        <div className="text-4xl md:text-5xl lg:text-6xl mb-2 font-bold text-white">
          Cruz Lopez
        </div>
        <div className="text-1xl md:text-2xl lg:text-3xl mb-8 font-bold text-white">
          UCR Graduate, Software Engineer
        </div>
      </div>

      <div className="flex flex-col w-4/5 lg:w-6/8 text-xl lg:text-3xl text-[#635656] font-bold mb-10">
        <p className="mb-10 lg:mb-15 text-center">
          Growing up my curiosity was always fueled by technology. As I explored
          explored my passions as I grew, I always felt that I would be doing
          something with it.{" "}
        </p>
        <p className="mb-10 lg:mb-15 text-center">
          It wasn’t until I went to the Univeristy of California, Riverside and
          joined the ACM (Association of Computing Machinery) Club where I truly
          found an interest that I can confidently be passionate about. Thanks
          to ACM I became very interested in Web Development thanks to the
          projects it let me be involved in.{" "}
        </p>
        <p className="mb-10 lg:mb-15 text-center">
          As I pursue my own projects, I hope to continue to grow my skills and
          further my experience to help others build seamless and nicely built
          websites that fufills their visions.
        </p>
      </div>
      <div className="text-4xl md:text-5xl lg:text-6xl mb-8 p-2 font-bold bg-linear-to-r from-[#635656] via-[#8f8e8e] to-[#8E8E8E] text-transparent bg-clip-text">
        My Core Values:
      </div>
      <div className="flex flex-col w-6/8 lg:w-6/8 lg:flex-row justify-center items-center text-2xl mb-6">
        <div className="flex justify-center items-center bg-[#f5f5f5] w-full lg:w-1/3 h-40 md:h-50 border-2 text-3xl xl:text-4xl font-bold text-[#635656] text-center rounded-md mb-10 lg:mr-10">
          Communication
        </div>
        <div className="flex justify-center items-center bg-[#f5f5f5] w-full lg:w-1/3 h-40 md:h-50 border-2 text-3xl xl:text-4xl font-bold text-[#635656] text-center rounded-md mb-10 lg:mr-10">
          Adaptability
        </div>
        <div className="flex justify-center items-center bg-[#f5f5f5] w-full lg:w-1/3 h-40 md:h-50 border-2 text-3xl xl:text-4xl font-bold text-[#635656] text-center rounded-md mb-10">
          Willingness to Learn
        </div>
      </div>
    </div>
  );
};

export default about;
