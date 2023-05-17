import { useState } from 'react';
import { Dialog, Popover } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, HomeIcon } from '@heroicons/react/24/outline';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/';

  return (
    <header className="bg-black">
      <nav
        className="container mx-auto flex justify-between items-center"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/assets/logopng.png`}
                alt="Logo"
                className="w-[80px] h-[80px]"
              />
            </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2.5 text-pink-400"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          {!isHomePage && (
            <Link to="/" className="text-sm font-semibold leading-6 text-white">
              <HomeIcon className="h-5 w-5" aria-hidden="true" />
            </Link>
          )}
          <Link
            to="/Website"
            className="text-sm font-semibold leading-6 text-white"
          >
            Websites
          </Link>
          <Link
            to="/Marketing"
            className="text-sm font-semibold leading-6 text-white"
          >
            Marketing digital
          </Link>
          <Link
            to="/Trafego"
            className="text-sm font-semibold leading-6 text-white"
          >
            Tráfego pago
          </Link>
          <Link
            to="/Whatsapp"
            className="text-sm font-semibold leading-6 text-white"
          >
            Whatsapp business
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            to="/Form"
            className="text-sm font-semibold leading-8 bg-[#e51ab0] px-5 rounded-full text-white"
          >
            Fale conosco <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-0.5 p-1.0">
              <span className="sr-only">Your Company</span>
              <img
                src={`${process.env.PUBLIC_URL}/assets/logopng.png`}
                alt="Logo"
                className="w-[60px] h-[60px]"
              />
            </Link>
            <button
              type="button"
              className="inline-flex text-pink-400 hover:bg-gray-100 hover:text-pink-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close main menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6">
            <nav className="grid gap-7">
              {!isHomePage && (
                <Link
                  to="/"
                  className="text-sm font-semibold leading-6 text-white"
                >
                  <HomeIcon className="h-5 w-5" aria-hidden="true" />
                </Link>
              )}
              <Link
                to="/Website"
                className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-900/20"
                onClick={() => {
                  setMobileMenuOpen(false);
                  navigate('/Website');
                }}
              >
                <span className="text-base font-medium text-white">
                  Websites
                </span>
              </Link>
              <Link
                to="/Marketing"
                className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-900/20"
                onClick={() => {
                  setMobileMenuOpen(false);
                  navigate('/Marketing');
                }}
              >
                <span className="text-base font-medium text-white">
                  Marketing digital
                </span>
              </Link>
              <Link
                to="/Trafego"
                className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-900/20"
                onClick={() => {
                  setMobileMenuOpen(false);
                  navigate('/Trafego');
                }}
              >
                <span className="text-base font-medium text-white">
                  Tráfego pago
                </span>
              </Link>
              <Link
                to="/Whatsapp"
                className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-900/20"
                onClick={() => {
                  setMobileMenuOpen(false);
                  navigate('/Whatsapp');
                }}
              >
                <span className="text-base font-medium text-white">
                  Whatsapp business
                </span>
              </Link>
            </nav>
            <div className="mt-6">
              <Link
                to="/Form"
                className="w-full flex items-center justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-pink-500 hover:bg-pink-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Fale conosco <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
