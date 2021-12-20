import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  BiHomeAlt,
  BiBookAlt,
  BiBriefcaseAlt,
  BiMessageSquareDetail,
  BiUser,
} from 'react-icons/bi';

const NavBar = () => {
  const router = useRouter();

  const getActiveLink = (path) => {
    return router.asPath == path ? 'active' : '';
  };

  return (
    <nav className='nav container'>
      <Link passHref href={`/`}>
        <a className='nav__logo'>EasyVote</a>
      </Link>

      <div className='nav__menu' id='nav-menu'>
        <ul className='nav__list'>
          <li className='nav__item'>
            <Link passHref href={`/`}>
              <a className={`nav__link ${getActiveLink('/')}`}>
                <BiHomeAlt className='nav__icon' />
                <span className='nav__name'>Home</span>
              </a>
            </Link>
          </li>

          <li className={`nav__item `}>
            <Link passHref href={`/profile`}>
              <a className={`nav__link ${getActiveLink('/profile')}`}>
                <BiUser className='nav__icon' />
                <span className='nav__name'>Profile</span>
              </a>
            </Link>
          </li>
          <li className={`nav__item `}>
            <Link passHref href={`/group`}>
              <a className={`nav__link ${getActiveLink('/group')}`}>
                <BiBookAlt className='nav__icon' />
                <span className='nav__name'>Group</span>
              </a>
            </Link>
          </li>
          <li className={`nav__item `}>
            <Link passHref href={`/parties`}>
              <a className={`nav__link ${getActiveLink('/parties')}`}>
                <BiBriefcaseAlt className='nav__icon' />
                <span className='nav__name'>Parties</span>
              </a>
            </Link>
          </li>
          <li className={`nav__item `}>
            <Link passHref href={`/posts`}>
              <a className={`nav__link ${getActiveLink('/posts')}`}>
                <BiMessageSquareDetail className='nav__icon' />
                <span className='nav__name'>My Posts</span>
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <span className='nav__img'>
        <Image width='23' height='23' src='/favicon.ico' alt='Easy Vote logo' />
      </span>
    </nav>
  );
};

export default NavBar;
