import React from "react";

import classNames from "classnames";

interface flexBoxProps {
  cols?: string | number;
  children: React.ReactNode;
}

const FlexBox: React.FC<flexBoxProps> = ({ cols, children }) => {
  const modifiedChildren = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      const className = classNames(child.props.className, {
        "rounded-s-md": index === 0,
        "rounded-e-md": index === React.Children.count(children) - 1,
      });
      return React.cloneElement(child as React.ReactElement, { className });
    }
    return child;
  });

  return (
    <div className={`grid grid-cols-${cols || React.Children.count(children)}`}>
      {modifiedChildren}
    </div>
  );
};

export default FlexBox;
