import { FacebookIcon, InstagramIcon } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

import Logo from '@/components/atoms/Logo';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import LinkAtom from '../atoms/LinkAtom';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

const NavBar = () => {
  return (
    <nav className="fixed w-full z-10">
      <div className="flex items-center mx-5 lg:mx-16 justify-between p-4">
        <div className=" space-x-8 hidden md:block">
          <LinkAtom title={'Home'} url={'/'} />
          <LinkAtom title={'Menu'} url={'/'} />
          <LinkAtom title={'About us'} url={'/'} />
          <LinkAtom title={'Contact us'} url={'/'} />
        </div>
        <div className="lg:-ml-28">
          <Logo />
        </div>

        <div className="flex items-center space-x-8">
          <InstagramIcon className=" hover:text-main cursor-pointer hidden lg:block" />
          <FacebookIcon className=" hover:text-main cursor-pointer hidden lg:block" />
          <FaWhatsapp className="text-2xl hover:text-main cursor-pointer hidden lg:block" />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="w-10 h-10 hover:cursor-pointer">
                <AvatarImage src="https://randomuser.me/api/portraits/men/1.jpg" />
                <AvatarFallback>M</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white border border-gray-200 p-2">
              <DropdownMenuItem className="text-gray-800 md:hidden">
                Home
              </DropdownMenuItem>
              <DropdownMenuItem className="text-gray-800 md:hidden">
                Menu
              </DropdownMenuItem>
              <DropdownMenuItem className="text-gray-800 md:hidden">
                About us
              </DropdownMenuItem>
              <DropdownMenuItem className="text-gray-800 md:hidden">
                Contact us
              </DropdownMenuItem>
              <DropdownMenuItem className="text-gray-800 ">
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem className="text-red-500">
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
