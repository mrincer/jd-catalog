import { Gateway, Gamepad, Monitor, Hpi } from "grommet-icons";
import { SiLenovo,  SiDell } from "react-icons/si";
const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="" className="flex items-center">
          <img
            src="https://portatiles.com.ni/wp-content/uploads/2023/06/cropped-Diseno-sin-titulo-88__2_-LtOiN_Y5C-transformed-removebg-preview-transformed-1536x287.png"
            className="h-8 mr-3"
            alt="Flowbite Logo"
          />
        </a>

        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto "
          id="navbar-sticky"
        >
          <ul className="pt-4 flex flex-row items-center justify-between">
            <li>
              <a
                href="#"
                className={`
            flex
            flex-col
            items-center
            justify-center
            gap-2
            p-3
            
            hover:text-neutral-800
            transition
            cursor-pointer
        `}
              >
                <Gateway color='#96B6C5' size='medium'/>
                <span className="font-semibold">Gateway</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`
            flex
            flex-col
            items-center
            justify-center
            gap-2
            p-3
            
            hover:text-neutral-800
            transition
            cursor-pointer
        `}
              >
                <SiLenovo color='#96B6C5' size={24}/>
                <span className="font-semibold">Lenovo</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`
            flex
            flex-col
            items-center
            justify-center
            gap-2
            p-3
            
            hover:text-neutral-800
            transition
            cursor-pointer
        `}
              >
                <Hpi color='#96B6C5' size='medium' />
                <span className="font-semibold">HP</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`
            flex
            flex-col
            items-center
            justify-center
            gap-2
            p-3
            
            hover:text-neutral-800
            transition
            cursor-pointer
        `}
              >
                <SiDell color='#96B6C5' size={24}/>
                <span className="font-semibold">Dell</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`
            flex
            flex-col
            items-center
            justify-center
            gap-2
            p-3
            
            hover:text-neutral-800
            transition
            cursor-pointer
        `}
              >
                <Gamepad color='#96B6C5' size='medium'/>
                <span className="font-semibold">Gaming</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`
            flex
            flex-col
            items-center
            justify-center
            gap-2
            p-3
            
            hover:text-neutral-800
            transition
            cursor-pointer
        `}
              >
                <Monitor color='#96B6C5' size='medium'  />
                <span className="font-semibold">Monitores</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
