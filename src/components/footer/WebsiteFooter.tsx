import Image from "next/image";
import Link from "next/link";
interface WebFooterProps {
  logo: string;

  bookNow: {
    text: string;
    href: string;
  };

  links: {
    title: string;
    items: {
      label: string;
      href: string;
    }[];
  };

  quickLinks: {
    title: string;
    items: {
      label: string;
      href: string;
    }[];
  };

  social: {
    title: string;
    items: {
      label: string;
      href: string;
    }[];
  };

  copyright: string;

  poweredBy: {
    text: string;
    href: string;
  };
}
const Footer = ({
  logo,
  bookNow,
  links,
  quickLinks,
  social,
  copyright,
  poweredBy,
}: WebFooterProps) => {
  return (
    <footer>
      <div className="max_width">
        <div>
          <Image src={logo} alt="Aroha Palms" fill />
        </div>

        <div>
          <h3>{links.title}</h3>

          {links.items.map((item) => (
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>

        <div>
          <h3>{quickLinks.title}</h3>

          {quickLinks.items.map((item) => (
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>

        <div>
          <h3>{social.title}</h3>

          {social.items.map((item) => (
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          ))}

          <Link href={bookNow.href}>{bookNow.text}</Link>
        </div>

        <div>
          <span>{copyright}</span>

          <Link href={poweredBy.href}>{poweredBy.text}</Link>
        </div>
      </div>
    </footer>
  );
};


export default Footer;