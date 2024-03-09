"use client";

import React, { createContext, useContext, useState } from "react";
import { reactAtom } from "src/atom/react-atom";
import { atomsList, atomsObject } from "./atom";
import { Atom } from "./types";

export const AtomContext = createContext({});

/**
 * Get clone of the given atom key
 */
export function useAtom<T = any>(key: string): Atom<T> {
  const context = useContext(AtomContext) as any;

  return context[key];
}

export function AtomProvider({
  register: _register = atomsList(),
  children,
}: {
  register?: Atom<any>[];
  children: React.ReactNode;
}) {
  const [currentAtoms] = useState(() => {
    const atoms = atomsObject();

    for (const key in atoms) {
      const atom = atoms[key];

      const newAtom = atom.clone();

      atoms[key] = reactAtom(newAtom);
    }

    return atoms;
  });

  return (
    <AtomContext.Provider value={currentAtoms}>{children}</AtomContext.Provider>
  );
}
