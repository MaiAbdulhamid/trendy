import { getCountry } from "./getCurrentCounrty";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";

export const Format = (value: number | string = "") => {
  const locale = useLocale();
  const [userCountry, setUserCountry] = useState<any>({})
  useEffect(() => {
    const getUserCountry = async () => {
      const response = await getCountry();
      setUserCountry(response)
    }
    getUserCountry()
  }, [])
  return (
    <span className="formatted--value">
      {value || 0}
      {" " + userCountry[`currency_${locale} || null`]}
    </span>
  );
};
