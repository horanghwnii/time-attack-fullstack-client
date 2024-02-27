import Link from 'next/link';
import HeaderMenu from './components/HeaderMenu';
import NavLinkList from './components/NavLists/NavLinkLIst';

function Header() {
  return (
    <header className='bg-white sticky top-0 h-16 px-60 border border-b flex z-20 items-center'>
      <Link href='/' className='text-lg font-bold '>
        중고마켓
      </Link>

      <nav className='ml-20'>
        <ul className='flex gap-5'>
          <NavLinkList href='' label='구입하기' />
          <NavLinkList href='' label='판매하기' />
          <NavLinkList href='' label='내 판매글' />
        </ul>
      </nav>

      <HeaderMenu />
    </header>
  );
}

export default Header;
