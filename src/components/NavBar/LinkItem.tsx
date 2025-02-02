'use client'

import React from 'react';
import { Link, usePathname } from '@/i18n/routing';

interface LinkItemProps {
  text: string;
  href: string;
}

const LinkItem: React.FC<LinkItemProps> = ({ text, href }) => {
  const pathName = usePathname();
  const isActive = pathName === href; 

  return (
    <Link
      href={href}
      className={`hover:text-red-900 h-full py-4 font-thin text-lg ${
        isActive ? 'text-red-900' :'text-blue-900'
      }`}
    >
      {text}
    </Link>
  );
};

export default LinkItem;