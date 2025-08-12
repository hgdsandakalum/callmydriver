import React from "react";
import { Button } from "@/components/atoms/button";
import { Dropdown } from "@/components/atoms/dropdown";
import {
  User,
  UserOutline,
  HelpOutline,
  SettingsOutline,
  LogoutOutline,
} from "../../../../public/icons";

interface UserMenuProps {
  isUserLoggedIn: boolean;
  onLoginClick: () => void;
  onLogoutClick: () => void;
}

export const UserMenu: React.FC<UserMenuProps> = ({
  isUserLoggedIn,
  onLoginClick,
  onLogoutClick,
}) => {
  if (isUserLoggedIn) {
    return (
      <Dropdown
        trigger={["click"]}
        placement="bottomRight"
        className="!h-10 flex items-center"
        overlayClassName="w-[150px]"
        menu={{
          items: [
            {
              key: "profile",
              label: (
                <div className="flex items-center gap-2">
                  <UserOutline className="text-lg" /> Profile
                </div>
              ),
            },
            {
              key: "settings",
              label: (
                <div className="flex items-center gap-2">
                  <SettingsOutline className="text-lg" /> Settings
                </div>
              ),
            },
            {
              key: "help",
              label: (
                <div className="flex items-center gap-2">
                  <HelpOutline className="text-lg" /> Help
                </div>
              ),
            },
            {
              key: "logout",
              label: (
                <div className="flex items-center gap-2">
                  <LogoutOutline className="text-lg" /> Logout
                </div>
              ),
            },
          ],
        }}
        onMenuClick={(info) => {
          if (info.key === "logout") {
            onLogoutClick();
          }
          // Handle other menu items here
        }}
      >
        <Button
          variant="white"
          type="text"
          shape="circle"
          icon={<User className="text-lg" />}
        />
      </Dropdown>
    );
  }

  return (
    <Button
      variant="white"
      type="text"
      shape="default"
      onClick={onLoginClick}
      icon={<UserOutline className="text-lg" />}
      iconPosition="start"
      label="Login"
    />
  );
};
