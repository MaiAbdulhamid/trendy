'use client'
import { ScrollElement } from 'react-scroll';

interface BodyTypes {
  children: React.ReactNode;
  className: string
}

export default function Body({ children, className }: BodyTypes) {
  return (
      <body className={className} >{children}</body>
  );
}

export const ScrollableElement = ScrollElement(Body);
