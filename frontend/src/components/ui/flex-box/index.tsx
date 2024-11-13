import React from "react";

interface flexBoxProps {
  cols?: string | number;
  children: React.ReactNode;
}

const FlexBox: React.FC<flexBoxProps> = ({ cols, children }) => {
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

  return (
    <div className={`grid grid-cols-${cols || React.Children.count(children)}`}>
      {modifiedChildren}
    </div>
  );
};

export default FlexBox;
