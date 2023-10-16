import { trans } from "@mongez/localization";
import Is from "@mongez/supportive-is";
import { useState } from "react";
import { Flex } from "../../Grids";
import { ButtonProps } from "../type";
import { LoadMore } from "./style";

type Props = {
  service: (page: number) => Promise<any>;
  open?: boolean;
  setRecords: Function;
  oldRecords: Array<any>;
} & ButtonProps;

export default function LoadMoreButton({
  setRecords,
  oldRecords,
  service,
  open = true,
  ...otherProps
}: Props) {
  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(1);
  
  const [hasRecords, setHasRecords] = useState(true);

  const loadMore = () => {
    setLoading(true);

    setPage(page + 1);

    service(page + 1).then((results) => {
      setRecords([...oldRecords, ...results.data.records]);

      setHasRecords(!Is.empty(results.data.records))

      setLoading(false);
    });
  };

  if (!open) return null;

  return (
    <Flex fullWidth justify="center" align="center">
      <LoadMore
        size="lg"
        fullWidth
        radius={40}
        loading={loading}
        onClick={loadMore}
        disabled={!hasRecords}
        {...otherProps}
      >
        {hasRecords ? trans("loadMore") : trans("noMore")}
      </LoadMore>
    </Flex>
  );
}
