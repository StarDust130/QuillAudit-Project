import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-transparent absolute top-0 left-0 right-0 z-10 text-white hover:gray-300 font-light border-b mx-auto  border-opacity-50 w-full h-auto  rounded-tl-8.03 rounded-tr-8.03 text-sm">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link class="block text-white" href="#">
              <span className="flex justify-center items-center">
                <span class="sr-only">Home</span>
                <Image
                  src="/logo.png"
                  alt="QuillAudits"
                  width={40}
                  height={40}
                />
                <span className="md:text-xl text-sm font-light hover:gray-200  pl-2">
                  QuillAudits
                </span>
              </span>
            </Link>
          </div>

          <div class="hidden md:block">
            <nav aria-label="Global">
              <ul class="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    class=" transition hover:text-gray-300/75 cursor-pointer"
                    href="#"
                  >
                    <span className="flex justify-center items-center  ">
                      <Menubar>
                        <MenubarMenu>
                          <MenubarTrigger>
                            Services{" "}
                            <span className="pl-1">
                              <FaAngleDown size={17} />
                            </span>
                          </MenubarTrigger>
                          <MenubarContent>
                            <MenubarItem>
                              New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                            </MenubarItem>
                            <MenubarItem>New Window</MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem>Share</MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem>Print</MenubarItem>
                          </MenubarContent>
                        </MenubarMenu>
                      </Menubar>
                    </span>
                  </Link>
                </li>

                <li>
                  <Link
                    className=" transition  hover:text-gray-300/75"
                    href="#"
                  >
                    {" "}
                    Pricing{" "}
                  </Link>
                </li>

                <li>
                  <Link className=" transition hover:text-gray-300/75" href="#">
                    Our Audits{" "}
                  </Link>
                </li>

                <li>
                  <Link className=" transition hover:text-gray-300/75" href="#">
                    {" "}
                    <Link
                      className=" transition hover:text-gray-300/75"
                      href="#"
                    >
                      <span className="flex justify-center items-center  ">
                        Tools{" "}
                        <span className="px-1">
                          <FaAngleDown size={17} />
                        </span>
                      </span>
                    </Link>
                  </Link>
                </li>

                <li>
                  <Link className=" transition hover:text-gray-300/75" href="#">
                    <span className="flex justify-center items-center  ">
                      Resources{" "}
                      <span className="px-1">
                        <FaAngleDown size={17} />
                      </span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link className=" transition hover:text-gray-300/75" href="#">
                    {" "}
                    Refer-Earn-Secure{" "}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <Link
                class="rounded-sm bg-gradient-to-b from-[#7184FD] via-[#3F7AF0] to-[#4F37EE] md:px-5 px-3  py-2 text-sm font-medium text-white shadow"
                href="#"
              >
                Request an Audit
              </Link>
            </div>

            <div className="block md:hidden">
              <Menubar>
                <MenubarMenu>
                  <MenubarTrigger>
                    <button className="rounded bg-gray-100 p-1 text-gray-600 transition hover:text-gray-600/75">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    </button>
                  </MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>Services</MenubarItem>
                    <MenubarItem>Pricing</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem> Our Audits</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Resources</MenubarItem>
                    <MenubarItem> Refer-Earn-Secure</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
