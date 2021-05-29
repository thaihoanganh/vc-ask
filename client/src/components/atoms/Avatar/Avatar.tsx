import React from "react";
import classname from "classnames";

export interface AvatarProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  size?: "small" | "medium" | "large";
  avatarUrl?: string;
}

const Avatar: React.FC<AvatarProps> = ({ className, size = "medium", avatarUrl, ...otherProps }) => {
  return (
    <span
      className={classname(
        size === "small" && "w-6 h-6",
        size === "medium" && "w-8 h-8",
        size === "large" && "w-10 h-10",
        "overflow-hidden",
        "rounded-t-full",
        "rounded-b-full",
        className
      )}
      {...otherProps}
    >
      <img className="w-full h-full object-cover" src={avatarUrl} />
    </span>
  );
};

export default Avatar;
