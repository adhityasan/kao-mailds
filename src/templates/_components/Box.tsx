import React from "react";

type IBoxProps = React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>;

const Box = ({ children, ...tableProps }: IBoxProps) => {
  return (
    <table {...tableProps}>
      <tbody>{children}</tbody>
    </table>
  );
};

export default Box;
