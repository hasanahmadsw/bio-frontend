import { IconButton, Link } from "@mui/material";
import React from "react";

export interface IconButtonProps {
  children: any;
  href: string;
}
export const IcoButton: React.FC<IconButtonProps> = ({ children, href }) => {
  return (
    <Link href={href} target="_blank">
      <IconButton
        sx={{
          borderRadius: "6px",
          background: "transparent",
          padding: "6px",
        }}
      >
        {children}
      </IconButton>
    </Link>
  );
};
