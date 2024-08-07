import React, { useCallback, useEffect, useState } from "react";
import { Flex } from "../../Grids";
import AutoComplete from "../../Form/AutoComplete";
import { useTranslations } from "next-intl";
import { spotlight, Spotlight, SpotlightActionData } from "@mantine/spotlight";
import { CloseIcon, SearchIcon } from "../../../assets/svgs";
import axiosInstance from "../../../lib/axios";
import { useRouter } from "next/navigation";
import { resolveSearchLink } from "../../../utils/general";
import { P4 } from "../../Typography";
import theme from "../../../utils/theme";
import { Hr, MainSearchWrapper, SearchWrapper, TotalResults } from "../TopNav/style";
import cache from "@mongez/cache";
import Button from "../../Button/Button";
import URLS from "../../../utils/urls";
import Is from "@mongez/supportive-is";
import useBreakpoints from "@/app/[locale]/shared/hooks/useBreakpoints";

const SearchInput = () => {
  const trans = useTranslations("Layout");
  const [latestSearch, setLatestSearch] = useState<any[]>([]);
  const { large } = useBreakpoints();

  const router = useRouter();
  const resolveLatestSearch = useCallback(
    (searches: any[]) => {
      return searches.slice(-5).map((word: any, index) => {
        return {
          label: word,
          id: "word" + index,
          onClick: () => router.push(`${URLS.products}?q=${word}`),
        };
      });
    },
    [router]
  );

  useEffect(() => {
    setLatestSearch(resolveLatestSearch(cache.get("latestSearch", [])));
  }, [resolveLatestSearch]);

  const [actions, setActions] = useState<any>([]);
  const [loaded, setLoaded] = useState<Boolean>(true);
  const [query, setQuery] = useState("");

  function resolveSearchResult(results: Array<any>): SpotlightActionData[] {
    return results.map((result: any) => {
      return {
        label: result.name,
        id: result.id,
        onClick: () => router.push(resolveSearchLink(result)),
      };
    });
  }
  const fetchSearchData = async () => {
    setLoaded(true);
    try {
      const response = await axiosInstance.get(`search?q=${query}`);
      setActions(resolveSearchResult(response.data.data.data));
      setLoaded(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (query.length >= 3) {
      fetchSearchData();
    }
  }, [query]);

  let items = actions.map((item: any) => {
    return (
      <Spotlight.Action key={item.id} onClick={item.onClick}>
        <Flex direction="column" gap="0.5rem" fullWidth>
          <P4 weight="300">{item.label}</P4>
          <Hr />
        </Flex>
      </Spotlight.Action>
    );
  });

  const setLatestSearchHandler = () => {
    if (!Is.empty(query)) {
      cache.set("latestSearch", [...cache.get("latestSearch", []), query]);
      setLatestSearch(resolveLatestSearch(cache.get("latestSearch", [])));
    }
  };

  const clearLatestSearch = () => {
    cache.remove("latestSearch");
    setLatestSearch([]);
  };

  return (
    <Flex align="center" gap="8px">
      <div onClick={spotlight.open}>
        <AutoComplete name="q" placeholder={trans("searchQ")} />
      </div>
      <Spotlight.Root
        fullScreen
        maxHeight="100vh"
        query={query}
        onQueryChange={setQuery}
        shortcut="shift + s"
      >
        <Spotlight.ActionsList style={{ minHeight: "100vh" }}>
          <MainSearchWrapper>
            <Flex justify="space-between" align="center" fullWidth>
              <SearchWrapper>
                <Spotlight.Search
                  placeholder="Search..."
                  leftSection={<SearchIcon />}
                  onBlur={setLatestSearchHandler}
                />
              </SearchWrapper>
              <Button noStyle onClick={spotlight.close}>
                <CloseIcon color={theme.colors.primaryColor} size={large ? 40 : 50} />
              </Button>
            </Flex>
            <Flex justify="space-between" fullWidth>
              {items?.length > 0 ? (
                <div style={{ width: "50%" }}>
                  <TotalResults>
                    <Flex justify="space-between" align="center" fullWidth>
                      <P4>{trans("searchResults")}</P4>
                      <P4 color={theme.colors.primaryColor}>
                        {actions.length} {trans("results")}
                      </P4>
                    </Flex>
                  </TotalResults>
                  {items}
                </div>
              ) : (
                <Spotlight.Empty>{trans("nothingFound")}</Spotlight.Empty>
              )}
              {latestSearch?.length > 0 && (
                <div style={{ width: "50%" }}>
                  <TotalResults>
                    <Flex justify="space-between" align="center" fullWidth>
                      <P4>{trans("searchHistory")}</P4>
                      <Button noStyle onClick={clearLatestSearch}>
                        <P4 color={theme.colors.error[300]}>
                          {trans("clear")}
                        </P4>
                      </Button>
                    </Flex>
                  </TotalResults>
                  {latestSearch.map((search) => (
                    <Spotlight.Action key={search.id} onClick={search.onClick}>
                      <Flex direction="column" gap="0.5rem" fullWidth>
                        <P4 weight="300">{search.label}</P4>
                        <Hr />
                      </Flex>
                    </Spotlight.Action>
                  ))}
                </div>
              )}
            </Flex>
          </MainSearchWrapper>
        </Spotlight.ActionsList>
      </Spotlight.Root>
    </Flex>
  );
};

export default SearchInput;
