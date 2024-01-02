import { FC } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../../components/ui/navigation-menu";
import { NavLink } from "@remix-run/react";
import classnames from "classnames";
import { NavClassesProps, MenuItem } from "~/types/nav";

const navClasses = ({ isActive, isPending }: NavClassesProps) => {
  return classnames(
    isActive ? "text-primary" : isPending ? "pending" : "",
    isActive ? "bg-muted" : "",
    navigationMenuTriggerStyle()
  );
};

const menuItems: MenuItem[] = [
  {
    title: "Dashboard",
    to: "/dashboard",
  },
  {
    title: "Music",
    to: "/music",
  },
  {
    title: "Mail",
    to: "/mail",
  },
  {
    title: "Tasks",
    to: "/tasks",
  },
  {
    title: "Forms",
    to: "/forms",
  },
];

const MainNavigation: FC = () => {
  return (
    <div className="my-3">
      <NavigationMenu>
        <NavigationMenuList>
          {menuItems.map((item, itemIndex) => (
            <NavigationMenuItem key={itemIndex}>
              <NavLink to={item.to} className={navClasses}>
                {item.title}
              </NavLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default MainNavigation;
