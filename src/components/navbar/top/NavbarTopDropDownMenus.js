import React, { useContext } from 'react';
import NavbarDropdown from './NavbarDropdown';
import { Nav } from 'react-bootstrap';
import classNames from 'classnames';
import {
  dashboardRoutes,
  appRoutes,
  pagesRoutes,
  modulesRoutes,
  documentationRoutes
} from 'routes/siteMaps';
import { Dropdown } from 'react-bootstrap';
import { Link,NavLink } from 'react-router-dom';
import { flatRoutes } from 'helpers/utils';
import NavbarDropdownApp from './NavbarDropdownApp';
import NavbarDropdownPages from './NavbarDropdownPages';
import NavbarDropdownModules from './NavbarDropdownModules';
import AppContext from 'context/Context';

const NavbarTopDropDownMenus = () => {
  const {
    config: { navbarCollapsed, showBurgerMenu },
    setConfig
  } = useContext(AppContext);

  const handleDropdownItemClick = () => {
    if (navbarCollapsed) {
      setConfig('navbarCollapsed', !navbarCollapsed);
    }
    if (showBurgerMenu) {
      setConfig('showBurgerMenu', !showBurgerMenu);
    }
  };
  return (
    <>
      <NavLink  to="/landing" className='nav-link' >Home
      </NavLink>

      <NavLink  to="/e-learning/course/course-list"  className={'nav-link'}>Institutions
      </NavLink>

      <NavLink  to="/institutions/course/course-list" className={'nav-link'}>Courses
      </NavLink>
      <NavLink  to="#" className={'nav-link'}>Coaching Centers
      </NavLink>

      <NavLink  to="#" className={'nav-link'}>Career
      </NavLink>
    </>
  );
};

export default NavbarTopDropDownMenus;
