import Image from "next/image";
import Picture from "../../../public/images/cruz.webp";

const Profile = () => {
  return (
    <header className="flex flex-col justify-center w-full bg-linear-to-b lg:bg-linear-to-r from-[#4DB1B1] via-[#90dfdf] to-[#90dfdf] lg:to-white  h-100 lg:h-60 py-6 mb-10 border-b font-sans">
      <div className="h-full flex flex-col lg:flex-row items-center">
        <Image
          src={Picture}
          alt="Generic Avatar"
          width={170}
          height={170}
          className="mt-6 mb-6 lg:m-6 lg:ml-30 rounded-full aspect-square object-cover"
        />
        <div className="flex flex-col text-center lg:text-left lg:ml-6">
          <div className="text-white font-bold text-5xl mb-6">Cruz Lopez</div>
          <div className="text-white font-bold text-2xl mt-2">
            {" "}
            UCR Graduate, Software Engineer
          </div>
        </div>
      </div>
    </header>
  );
};

export default Profile;
