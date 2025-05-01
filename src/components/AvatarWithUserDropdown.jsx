import React from "react";
import {
  Avatar,
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import { FaPowerOff } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
import { CiLogin } from "react-icons/ci";
import { Link } from "react-router-dom";

// profile menu component
const profileMenuItems = [
  {
    label: "Login",
    icon: CiLogin,
    link: "/login",
  },
  {
    label: "Sign Up",
    icon: VscAccount,
    link: "/signup",
  },
  {
    label: "Sign Out",
    icon: FaPowerOff,
  },
];

export function AvatarWithUserDropdown() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center rounded-full p-0"
        >
          <Avatar
            variant="circular"
            size="lg"
            alt="tania andrew"
            color="blue-gray"
            className=" p-0.5"
            src="https://docs.material-tailwind.com/img/face-2.jpg"
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon, link }) => {
          return (
            <Link key={label} to={link || "#"}>
              <MenuItem
                onClick={closeMenu}
                className={`flex items-center gap-2 rounded`}
              >
                {React.createElement(icon, {
                  className: `h-4 w-4`,
                  strokeWidth: 2,
                })}
                <Typography as="span" variant="small" className="font-normal">
                  {label}
                </Typography>
              </MenuItem>
            </Link>
          );
        })}
      </MenuList>
    </Menu>
  );
}
