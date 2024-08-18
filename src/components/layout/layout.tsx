import { type FC, type ReactNode } from "react";

import { LayoutNavbar } from "./navbar";

/**
 * The root layout component of the application.
 */
export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="flex h-full flex-col">
      <LayoutNavbar />
      <div className="container mx-auto grow p-4">{children}</div>
    </div>
  );
};
