import Link from 'next/link';

interface NavLinksProps {
  href: string;
  label: string;
}

function NavLinkList({ href, label }: NavLinksProps) {
  return (
    <li>
      <Link href={href}>{label}</Link>
    </li>
  );
}

export default NavLinkList;
