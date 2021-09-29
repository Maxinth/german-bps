import { ProfileImage, NapContainer } from "./styled";
import userProfileImg from "../../../assets/avatarImg.jpg";
import Notifications from "./Notifications";
import ProfileDropMenu from "./ProfileDropMenu";
import { useState } from "react";

const NotificationsAndProfile = () => {
  const [showDropProfile, setShowDropProfile] = useState(false);
  const toggleView = () => setShowDropProfile(!showDropProfile);

  return (
    <NapContainer>
      <Notifications />
      <ProfileImage
        src={userProfileImg}
        alt="user profile"
        onClick={toggleView}
      />
      <ProfileDropMenu isShown={showDropProfile} toggleView={toggleView} />
    </NapContainer>
  );
};

export default NotificationsAndProfile;
