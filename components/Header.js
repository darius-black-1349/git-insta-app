import Image from 'next/image'

import { signIn, signOut, useSession } from 'next-auth/react'

import insta_txt from '../public/images/insta_txt.png'
import insta_icon from '../public/images/insta_icon.png'

import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
  PaperClipIcon,
} from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'

function Header() {
  const { data: session } = useSession()

  const router = useRouter();

  const [open, setOpen] = useRecoilState(modalState)

 

  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex items-center justify-between max-w-6xl mx-5 lg:mx-auto">
        {/* left */}
        <div className="relative hidden w-24 cursor-pointer lg:inline-grid h-24">
          <Image
            src={insta_txt}
            layout="fill"
            objectFit="contain"
            alt="instagram-logo"
            onClick={() => router.replace('/')}
          />
        </div>

        <div className="relative flex-shrink-0 w-10 h-10 cursor-pointer lg:hidden">
          <Image
            src={insta_icon}
            layout="fill"
            objectFit="contain"
            alt="instagram-logo"
            onClick={() => router.replace('/')}
          />
        </div>

        {/* middle - search input */}

        <div className="max-w-xs">
          <div className="mt-1 relative p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="w-5 h-5 text-gray-500" />
            </div>
            <input
              type="text"
              className="bg-gray-100 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black"
              placeholder="Search..."
            />
          </div>
        </div>

        {/* right */}

        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" onClick={() => router.replace('/')}/>
          <MenuIcon className="h-10 w-10 md:hidden cursor-pointer" />

          {session ? (
            <>
              <div className="relative navBtn">
                <PaperAirplaneIcon className="navBtn rotate-45" />
                <div className="absolute -top-2 -right-2 text-xs h-5 w-5 bg-red-500 rounded-full flex justify-center items-center text-white animate-pulse">
                  3
                </div>
              </div>
              <PlusCircleIcon onClick={() => setOpen(true)} className="navBtn" />
              <UserGroupIcon className="navBtn" />
              <HeartIcon className="navBtn" />

              <img
                src={session?.user?.image}
                className="h-10 w-10 rounded-full object-contain cursor-pointer"
                alt="avatar"
                onClick={signOut}
              />
            </>
          ) : (
            <button onClick={signIn}>SignIn</button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
