import React from "react";
import Button from "../../Button/Button";
import { Flex } from "../../Grids";

import { Form } from "@mongez/react-form";
import theme from "@/app/[locale]/utils/theme";
import AutoComplete from "../../Form/AutoComplete";
import { useTranslations } from "next-intl";

const Search = () => {
  const trans = useTranslations("Layout");

  return (
    <>
      <Form>
        <Flex align="center" gap="8px">
          <AutoComplete name="q" placeholder={trans("searchQ")} />
          {/* <Button variant="primary" color={theme.colors.white} height="45px">
            {trans("search")}
          </Button> */}
        </Flex>
      </Form>
    </>
  );
};

export default Search;
