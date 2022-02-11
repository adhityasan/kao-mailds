import React from "react";

type IItemProps = React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement>;

const Item = ({ children, ...cellProps }: IItemProps) => (
  <tr>
    <td {...cellProps}>{children}</td>
  </tr>
);

export default Item;
