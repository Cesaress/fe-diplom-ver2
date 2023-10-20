import React from "react";
import ContentBlockItem from "./contentBlockItem";
import GroupText from "./groupText";
import GroupPrice from "./groupPrice";
import nanoid from "nanoid";

const contentBlock = ({className,template}) => {

  return (
    <React.Fragment>
      <div className={className + "_block"}>
        {template.seats.length > 0 &&
          template.seats.map((item) => {
            return (
              <ContentBlockItem key={nanoid()} className={className}>
                <GroupText
                  key={nanoid()}
                  className={className}
                  name={item.name}
                  amount={template.amount}
                />
                <GroupPrice
                  key={nanoid()}
                  className={className}
                  price={item.price}
                />{" "}
              </ContentBlockItem>
            );
          })}
      </div>
    </React.Fragment>
  );
};

export default contentBlock;