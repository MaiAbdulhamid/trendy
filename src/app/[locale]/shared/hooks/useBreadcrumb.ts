import Is from "@mongez/supportive-is";
import React from "react";
import breadcrumbAtom from "../atoms/breadcrumb-atom";

export default function useBreadcrumb(
  items: any
) {
  items = !Is.array(items) ? [items] : items;

  React.useEffect(() => {
    breadcrumbAtom.change("items", items);
  }, [items]);
}
