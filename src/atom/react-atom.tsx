"use client";
/* eslint-disable react-hooks/rules-of-hooks */
import { EventSubscription } from "@mongez/events";
import React, { useEffect, useState } from "react";
import { createAtom, getAtom } from "./atom";
import {
  Atom,
  AtomOptions,
  AtomPartialChangeCallback,
  AtomValue,
} from "./types";

// console.log(globalThis.__atoms__);

/**
 * Create a new atom
 */
export function createReactAtom<Value = any>(
  data: AtomOptions<AtomValue<Value>>
) {
  const atom = createAtom(data);

  return reactAtom(atom);
}

export type ReactAtom<Value = any> = Atom<Value> & {
  /**
   * Return the value of atom or just key of it
   */
  use<T extends keyof Value>(key: T): Value[T];

  /**
   * React atom provider
   */
  Provider: React.ComponentType<{
    value: Partial<Value>;
    children: React.ReactNode;
  }>;

  /**
   * Watch for atom's value change and return it
   * When the atom's value is changed, the component will be rerendered again.
   */
  useValue: () => Value;

  /**
   * Use state for atom value
   *
   * This will return an array with the first item is the atom's value
   * and the second item is a function to update the atom's value
   * As it will cause a re-render once the atoms'value is updated
   */
  useState: () => [Value, (value: Value) => void];

  /**
   * An alias for useAtomWatch but specific for this atom
   */
  useWatch: <T extends keyof Value>(
    key: T,
    callback: AtomPartialChangeCallback
  ) => void;
};

export function reactAtom<Value>(atom: Atom<Value>) {
  let outputAtom = atom as ReactAtom<Value>;

  outputAtom.useWatch = function <T extends keyof Value>(
    key: T,
    callback: AtomPartialChangeCallback
  ) {
    useEffect(() => {
      const event = this.watch(key, callback);

      return () => event.unsubscribe();
    }, [key, callback]);
  };

  outputAtom.Provider = (props) => {
    atom.update(props.value as Value);

    return <>{props.children}</>;
  };

  outputAtom.Provider.displayName = `${outputAtom.key}.Provider`;

  outputAtom.useState = () => {
    const [value, setValue] = useState(outputAtom.currentValue);

    useEffect(() => {
      const event: EventSubscription = outputAtom.onChange(setValue);

      return () => event.unsubscribe();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return [value, outputAtom.update.bind(outputAtom)];
  };

  outputAtom.useValue = () => {
    return outputAtom.useState()[0];
  };

  outputAtom.use = function <T extends keyof Value>(key: T): Value[T] {
    const value = outputAtom.get(key);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [, setValue] = useState(value);

    outputAtom.useWatch(key, setValue);

    return value;
  };

  return outputAtom;
}

export function extendAtom(name: string) {
  const atom = getAtom(name);

  if (!atom) {
    throw new Error(`Atom ${name} does not exist`);
  }

  return reactAtom(atom);
}
