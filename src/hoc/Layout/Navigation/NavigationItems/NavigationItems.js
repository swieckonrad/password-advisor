/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { NavigationItem } from "./NavigationItem/NavigationItem";

const items = [
  {
    name: "Home",
    icon: "home",
    link: "/",
  },
  {
    name: "Info",
    icon: "info",
    link: "/info",
  },
];

export const NavigationItems = () => {
  return (
    <div>
      {items.map((element) => (
        <NavigationItem
          name={element.name}
          icon={element.icon}
          link={element.link}
        />
      ))}
    </div>
  );
};
