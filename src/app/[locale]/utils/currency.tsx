import { getCookie } from "cookies-next";
import { getCountry } from "./getCurrentCounrty";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";

export const Format = (value: number | string = "") => {
  const locale = useLocale();
  const [userCountry, setUserCountry] = useState<any>({});
  
  useEffect(() => {
    const getUserCountry = () => {
      const response : any = getCookie('country_object');
      setUserCountry(response !== undefined && JSON.parse(response))
    }
    getUserCountry()
  }, [setUserCountry]);

  return (
    <span className="formatted--value">
      {value || 0}
      {" " + userCountry[`currency_${locale}`]}
    </span>
  );
};
