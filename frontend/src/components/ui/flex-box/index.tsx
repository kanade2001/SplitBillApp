import React from "react";

interface flexBoxProps {
  children: React.ReactNode;
}

const FlexBox: React.FC<flexBoxProps> = ({ children }) => {
  const modifiedChildren = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      const className = [
        child.props.className,
        index === 0 && "rounded-s-md",
        index === React.Children.count(children) - 1 && "rounded-e-md",
      ]
        .filter(Boolean)
        .join(" ");
      return React.cloneElement(child as React.ReactElement, { className });
    }
    return child;
  });

  return <div className="flex">{modifiedChildren}</div>;
};

export default FlexBox;
