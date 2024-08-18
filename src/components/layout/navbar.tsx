import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { useLocation, useNavigate } from "@tanstack/react-router";
import { type FC, useState } from "react";

import StarWarsIcon from "~/assets/starwars.svg?react";

import GithubIcon from "~icons/simple-icons/github";

type NavbarMenuItem = {
  name: string;
  href: string;
};

/**
 * The menu items for the navbar.
 */
const menuItems: NavbarMenuItem[] = [
  { name: "Planets", href: "/planets" },
  { name: "Starships", href: "/starships" },
  { name: "Vehicles", href: "/vehicles" },
  { name: "People", href: "/people" },
  { name: "Films", href: "/films" },
  { name: "Species", href: "/species" },
];

export const LayoutNavbar: FC = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand
          className="cursor-pointer"
          onClick={() => navigate({ to: "/" })}
        >
          <StarWarsIcon className="h-12 text-primary" />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        {menuItems.map((item, index) => {
          const isActive = useIsActive(item.href);

          return (
            <NavbarItem key={`menu-item-${index}`}>
              <Link
                color={isActive ? "primary" : "foreground"}
                href={item.href}
                underline={isActive ? "always" : "hover"}
              >
                {item.name}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>
      <NavbarContent className="hidden sm:flex" justify="end">
        <NavbarItem>
          <GithubLink />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => {
          const isActive = useIsActive(item.href);

          return (
            <NavbarMenuItem key={`mobile-menu-item-${index}`}>
              <Link
                href={item.href}
                color={isActive ? "primary" : "foreground"}
                underline={isActive ? "always" : "hover"}
              >
                {item.name}
              </Link>
            </NavbarMenuItem>
          );
        })}
        <NavbarMenuItem>
          <GithubLink />
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

/**
 * The link to the github repository.
 */
const GithubLink: FC = () => (
  <Link
    color="foreground"
    href="https://github.com/lkwr/swapi-app"
    isExternal
    showAnchorIcon
  >
    <GithubIcon className="mr-2 inline" /> GitHub
  </Link>
);

/**
 * Hook to determine if the current location is active.
 *
 * It checks if the current location starts with the given path.
 *
 * @param path The path to check against.
 * @returns True if the current location starts with the given path, false otherwise.
 */
const useIsActive = (path: string): boolean => {
  const location = useLocation();
  return location.pathname.startsWith(path);
};
