import { Box } from "@/components/ui/box";
import { Image } from "@/components/ui/image";
import { Text } from "@/components/ui/text";
import React from "react";

interface Props {
  user: User;
}

const Header = ({ user }: Props) => {
  return (
    <Box className="flex-row items-center justify-between">
      <Box>
        <Image
          source={require("../../assets/images/Logo.png")}
          resizeMode="contain"
          height={28}
          alt="Taski Logo"
        />
      </Box>
      <Box className="flex-row items-center gap-2">
        <Text className="text-slate-800 text-lg font-semibold">
          {user.name}
        </Text>
        <Image
          source={
            user.avatarUrl ||
            "https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-1/465748031_1555241568695426_5381589293885808765_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=107&ccb=1-7&_nc_sid=e99d92&_nc_ohc=MucfJByxwyEQ7kNvwFhun1B&_nc_oc=Adlu7zwAL9cXfdT4kcZhxJbmtVi9T3IYN_BIItPARsLwWBCULs-Y2d4Vw7KqQDtwAVA&_nc_zt=24&_nc_ht=scontent.fhan3-2.fna&_nc_gid=7AqgAzPx8xBflm-mnv0eXg&oh=00_AfOD627ZOVJhm-aISBmqVHZ98U21t_2yKpndsHQE5Ch-3Q&oe=6869B758"
          }
          className="w-12 h-12 rounded-full"
          alt={user.name}
          resizeMode="cover"
        />
      </Box>
    </Box>
  );
};

export default Header;
