import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const links: { title: string; Link: string }[] = [
  {
    title: "Profile",
    Link: "/profile",
  },
  {
    title: "Settings",
    Link: "/Settings",
  },
  {
    title: "Logout",
    Link: "#",
  },
];

function ListItem({ title, link }: { title: string; link: string }) {
  return (
    <li>
      <Link href={link} className="text-light">
        {title}
      </Link>
    </li>
  );
}

export function AvatarNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <Avatar>
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="@shadcn"
                className="w-10 h-full "
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="p-5 pt-2 bg-night">
              {links.map((link) => (
                <ListItem
                  key={link.title}
                  title={link.title}
                  link={link.Link}
                />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
