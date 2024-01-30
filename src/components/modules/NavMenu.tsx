import { LinkObject } from "./LinkObject";

interface NavMenuProps {
  id: string;
  label?: string;
  items: {
    href: string;
    copy: string;
    subItems?: {
      href: string;
      copy: string;
    }[];
  }[];
}

const NavMenu = ({ id, label, items }: NavMenuProps) => {
  return (
    <nav id={id} aria-label={label || id}>
      <ul>
        {items.map((item) => (
          <li key={item.copy}>
            <LinkObject href={item.href}>{item.copy}</LinkObject>

            {item.subItems && (
              <ul>
                {item.subItems.map((subItem) => (
                  <li key={subItem.copy}>
                    <LinkObject href={subItem.href}>{subItem.copy}</LinkObject>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { NavMenu };
