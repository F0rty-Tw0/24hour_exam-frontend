import { useRouter } from 'next/router';
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
        <a className='nav__logo'>Voting</a>
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

          <li className={'nav__item'}>
            <Link passHref href={`/admin`}>
              <a className={`nav__link ${getActiveLink('/admin')}`}>
                <BiBookAlt className='nav__icon' />
                <span className='nav__name'>Admin</span>
              </a>
            </Link>
          </li>
          <li className={'nav__item'}>
            <Link passHref href={`/candidates`}>
              <a className={`nav__link ${getActiveLink('/candidates')}`}>
                <BiUser className='nav__icon' />
                <span className='nav__name'>Candidates</span>
              </a>
            </Link>
          </li>
          <li className={'nav__item'}>
            <Link passHref href={`/parties`}>
              <a className={`nav__link ${getActiveLink('/parties')}`}>
                <BiBriefcaseAlt className='nav__icon' />
                <span className='nav__name'>Parties</span>
              </a>
            </Link>
          </li>
          <li className={'nav__item'}>
            <Link passHref href={`/elections`}>
              <a className={`nav__link ${getActiveLink('/elections')}`}>
                <BiMessageSquareDetail className='nav__icon' />
                <span className='nav__name'>Elections</span>
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
