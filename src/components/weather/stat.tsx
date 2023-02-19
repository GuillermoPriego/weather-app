import * as React from "react";

export const Stat: React.FunctionComponent<
  {
    icon: React.ReactNode;
    text: string;
  } & React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >
> = ({ icon, text, ...props }) => {
  return (
    <span className="flex items-center gap-2" {...props}>
      <span>{text}</span>
      {icon}
    </span>
  );
};
