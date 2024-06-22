import { getCookie } from "cookies-next";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";

export const Format = (value: number) => {
  const locale = useLocale();
  const [userCountry, setUserCountry] = useState<any>({});

  useEffect(() => {
    const getUserCountry = () => {
      const response: any = getCookie("country_object");
      if (response == undefined) {
        return;
      } else {
        setUserCountry(JSON.parse(response));
      }
    };
    getUserCountry();
  }, [setUserCountry]);

  // if (Is.empty(value) || value === 0) return null;

  return (
    <span className="formatted--value">
      {value}
      {" " + userCountry[`currency_${locale}`]}
    </span>
  );
};
