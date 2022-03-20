import React from "react";

const createComponent = (component: any, props: any) => {
  return React.createElement(component, props);
};

export default createComponent;
