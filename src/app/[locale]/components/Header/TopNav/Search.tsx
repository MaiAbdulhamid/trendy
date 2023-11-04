import React, { useState } from "react";
import { Flex } from "../../Grids";
import { Form } from "@mongez/react-form";
import AutoComplete from "../../Form/AutoComplete";
import { useTranslations } from "next-intl";
import Search from "../../Search";
import { createSpotlight, spotlight, Spotlight } from "@mantine/spotlight";
import { SearchIcon } from "../../../assets/svgs";
import Loader from "../../Loader";
import "@mantine/spotlight/styles.css";
import Button from "../../Button/Button";

const SearchInput = () => {
  const trans = useTranslations("Layout");
  const [loaded, setLoaded] = useState<Boolean>(true);

  return (
    <>
      <Form>
        <Flex align="center" gap="8px">
          <div onClick={spotlight.open}>
            <AutoComplete name="q" placeholder={trans("searchQ")} />
          </div>
          <Spotlight
            actions={[]}
            limit={5}
            shortcut="shift + s"
            highlightQuery
            scrollable
            maxHeight={350}
            nothingFound={!loaded ? <Loader /> : trans("noResult")}
            searchProps={{
              leftSection: <SearchIcon size={18} />,
              placeholder: trans("search"),
            }}
          />
        </Flex>
      </Form>
    </>
  );
};

export default SearchInput;
