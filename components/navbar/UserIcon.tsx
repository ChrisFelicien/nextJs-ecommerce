import { LuUser } from "react-icons/lu";
import Image from "next/image";
import { currentUser } from "@clerk/nextjs/server";
// import { currentUser, auth } from "@clerk/nextjs/server";

const UserIcon = async () => {
  const user = await currentUser();
  const profileImage = user?.imageUrl;

  if (profileImage) {
    return (
      <Image
        src={profileImage}
        alt={"user profile"}
        width={24}
        height={24}
        className='w-6 h-6 rounded-full object-cover'
      />
    );
  }

  return <LuUser className='w-6 h-6 bg-primary text-secondary rounded-full' />;
};

export default UserIcon;
