import { useState } from "react";
import { Fragment } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../../assets/shared/logo.svg";
import "./navigation.styles.scss";
// import { PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const Navigation = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Fragment>
      <header className="nav-container">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-13 w-auto" src={logo} alt=""/>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-12 backdrop-blur px-20 mainnav" style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)', 
          }}>
            <NavLink
              exact
              to="/"
              className={`text-md leading-6 text-gray-900 py-4 navlink  ${
                location.pathname === "/" ? "active-link" : ""
              }`}
            >
              <span className="font-bold">00</span> Home
            </NavLink>
            <NavLink
              to="/destination"
              className={`text-md leading-6 text-gray-900 py-4 navlink  ${
                location.pathname === "/destination" ? "active-link" : ""
              }`}
            >
              <span className="font-bold">01</span> DESTINATION
            </NavLink>
            <NavLink
              to="/crew"
              className={`text-md leading-6 text-gray-900 py-4 navlink ${
                location.pathname === "/crew" ? "active-link" : ""
              }`}
            >
              <span className="font-bold">02</span> CREW
            </NavLink>
            <NavLink
              to="/technology"
              className={`text-md leading-6 text-gray-900 py-4 navlink ${
                location.pathname === "/technology" ? "active-link" : ""
              }`}
            >
              <span className="font-bold">03</span> TECHNOLOGY
            </NavLink>
          </Popover.Group>
          {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div> */}
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="h-13 w-auto" src={logo} alt="" />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <NavLink
                    exact
                    to="/"
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 navlink ${
                      location.pathname === "/" ? "active-link" : ""
                    }`}
                  >
                    00 Home
                  </NavLink>
                  <NavLink
                    to="/destination"
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 navlink ${
                      location.pathname === "/destination" ? "active-link" : ""
                    }`}
                  >
                    01 DESTINATION
                  </NavLink>
                  <NavLink
                    to="/crew"
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 navlink ${
                      location.pathname === "/crew" ? "active-link" : ""
                    }`}
                  >
                    02 CREW
                  </NavLink>
                  <NavLink
                    to="/technology"
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 navlink ${
                      location.pathname === "/technology" ? "active-link" : ""
                    }`}
                  >
                    03 TECHNOLOGY
                  </NavLink>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
