import Avatar from "@components/atoms/Avatar";
import SvgIcon from "@components/atoms/SvgIcon";
import React from "react";

export interface HeaderNavProps {
  themeMode?: "light" | "dark";
  onRedirectHome?: () => void;
  onRedirectProfile?: () => void;
  onToggleTheme?: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  themeMode,
  onRedirectHome,
  onRedirectProfile,
  onToggleTheme,
}) => {
  const onHandleRedirectHome = () => {
    onRedirectHome && onRedirectHome();
  };

  const onHandleRedirectProfile = () => {
    onRedirectProfile && onRedirectProfile();
  };

  const onHandleToggleTheme = () => {
    onToggleTheme && onToggleTheme();
  };

  return (
    <ul className="flex h-full">
      <li className="flex items-center mr-8">
        <div className="cursor-pointer" onClick={onHandleRedirectHome}>
          <SvgIcon size="small">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z" />
          </SvgIcon>
        </div>
      </li>
      <li className="flex items-center mr-8">
        <div className="cursor-pointer" onClick={onHandleToggleTheme}>
          <SvgIcon size="small">
            {themeMode === "dark" ? (
              <path d="M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0 c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2 c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1 C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06 c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41 l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41 c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36 c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z" />
            ) : (
              <path d="M9.5,2c-1.82,0-3.53,0.5-5,1.35c2.99,1.73,5,4.95,5,8.65s-2.01,6.92-5,8.65C5.97,21.5,7.68,22,9.5,22c5.52,0,10-4.48,10-10 S15.02,2,9.5,2z" />
            )}
          </SvgIcon>
        </div>
      </li>
      <li className="flex items-center">
        <div className="flex cursor-pointer" onClick={onHandleRedirectProfile}>
          <Avatar size="small" avatarUrl="https://picsum.photos/200/300" />
        </div>
      </li>
    </ul>
  );
};

export default HeaderNav;
