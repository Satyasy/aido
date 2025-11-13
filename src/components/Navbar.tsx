'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface User {
  id: number;
  name: string;
  email?: string;
  role: string;
}

export const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');

    if (token && userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (error) {
        console.error('Error parsing user data:', error);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      }
    }
    setIsLoading(false);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    router.push('/');
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  const getNavLinkClass = (path: string) => {
    const isActive = pathname === path;
    const baseClass = "text-2xl font-medium transition-all duration-300";

    if (isActive) {
      return `${baseClass} font-semibold bg-gradient-to-r from-[#DDB4F6] to-[#8DD0FC] bg-clip-text text-transparent`;
    }

    return `${baseClass} text-black hover:bg-gradient-to-r hover:from-[#DDB4F6] hover:to-[#8DD0FC] hover:bg-clip-text hover:text-transparent hover:font-semibold`;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md h-20">
      <div className="container mx-auto px-6 md:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          <Link href="/" className="text-2xl md:text-3xl font-bold text-black">
            AIDOC
          </Link>

          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            <Link
              href="/"
              className={getNavLinkClass('/')}
            >
              Home
            </Link>
            <Link
              href="/features"
              className={getNavLinkClass('/features')}
            >
              Features
            </Link>
            <Link
              href="/consultation"
              className={getNavLinkClass('/consultation')}
            >
              Consultation
            </Link>
          </div>

          <div>
            {isLoading ? (
              <div className="w-56 h-[70px] bg-gray-200 animate-pulse rounded-[20px]"></div>
            ) : user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-gradient-to-r from-[#F4AFE9] to-[#8DD0FC] text-white">
                        {getInitials(user.name)}
                      </AvatarFallback>
                    </Avatar>
                    <span className="hidden md:inline text-xl">{user.name}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium">{user.name}</p>
                      {user.email && (
                        <p className="text-xs text-gray-500">{user.email}</p>
                      )}
                      <p className="text-xs text-gray-400 capitalize">{user.role}</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => router.push('/dashboard')}>
                    Dashboard
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout} className="text-red-600">
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <button
                onClick={() => router.push('/login')}
                className="w-56 h-[70px] rounded-[20px] bg-gradient-to-r from-[#F4AFE9] to-[#8DD0FC] shadow-[0_4px_10px_0_#FFD3F8] flex items-center justify-center text-2xl font-normal text-black hover:opacity-90 transition"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 w-full h-[1px] bg-gradient-to-r from-[#DDB4F6] to-[#8DD0FC]"></div>
      </div>
    </nav>
  );
};
