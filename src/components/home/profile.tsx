import Image from "next/image";
import Avatar from "../../../public/images/gen_avatar.webp";

const Profile = () => {
  return (
    <header className="flex flex-col justify-center w-full bg-gradient-to-b lg:bg-gradient-to-r from-[#4DB1B1] via-[#4DB1B4] to-[#83F5F5]  h-100 lg:h-60 py-6 mb-10">
      <div className="h-full flex flex-col lg:flex-row items-center">
        <Image
          src={Avatar}
          alt="Generic Avatar"
          width={150}
          className="mt-6 mb-6 lg:m-6 lg:ml-30"
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
