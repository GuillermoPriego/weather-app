import * as React from "react";

export const CountryFlag: React.FunctionComponent<{ countryCode: string }> = ({
  countryCode,
}) => {
  return (
    <span
      className={`flag-icon flag-icon-${countryCode.toLowerCase()} ml-4 rounded text-2xl`}
    ></span>
  );
};
