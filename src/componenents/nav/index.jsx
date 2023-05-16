import { useState } from 'react';
import { Dialog,  Popover } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-black">
      <nav className="container mx-auto flex justify-between items-center" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/teste" className="-m-0.5 p-1.0">
            <span className="sr-only">Your Company</span>
            <div>
              <img src={`${process.env.PUBLIC_URL}/assets/logopng.png`} alt="Logo" className="w-[80px] h-[80px]" />
            </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(true)}>
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link to="/teste/Website" className="text-sm font-semibold leading-6 text-white">
            Websites
          </Link>
          <Link to="/teste/Marketing" className="text-sm font-semibold leading-6 text-white">
            Marketing digital
          </Link>
          <Link to="/teste/Trafego" className="text-sm font-semibold leading-6 text-white">
            Tráfego pago
          </Link>
          <Link to="/teste/Whatsapp" className="text-sm font-semibold leading-6 text-white">
            Whatsapp business
          </Link>

        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link to="/teste/Form" className=" font-semibold leading-8  text-white rounded-full  bg-fuchsia-500">
             Fale conosco
          </Link>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-fuchsia-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img src={`${process.env.PUBLIC_URL}/../../../assets/logopng.png`} alt="Logo" className="w-[80px] h-[80px]" />
            </Link>
            <button
              type="button"
              className="-m-2.5  rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link to="/teste/Website"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                >
                  Website
                </Link>
                <Link to="/teste/Marketing"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                >
                  Marketing Digital
                </Link>
                <Link to="/teste/Trafego"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                >
                  Tráfego pago
                </Link>
                <Link to="/teste/Whatsapp"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                >
                  Whatsapp business
                </Link>

              </div>
              <div className="py-6">
                <Link to="/teste/Form"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                >
                  Fale conosco
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
