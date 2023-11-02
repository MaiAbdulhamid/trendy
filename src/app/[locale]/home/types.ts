import { FC } from "react";

export type ModuleProp = {
  record: { [key: string]: any };
  title?: string;
  widgetId?: string
  name?:string;
  discount?: string
};

export type ModulesType = {
  [key: string]: FC<ModuleProp>;
};
