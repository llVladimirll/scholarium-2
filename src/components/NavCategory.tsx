import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

const links: { title: string; Link: string }[] = [
  {
    title: "Scholarships",
    Link: "/scholarships",
  },
  {
    title: "Fellowships",
    Link: "/fellowships",
  },
  {
    title: "Volunteers",
    Link: "/volunteers",
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

export function NavCategory() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Category</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="p-5 bg-night">
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
