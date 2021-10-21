import React from "react";

export const MenuButton = (props: any) => {
  return (
    <div className="text-white inline-block" onClick={props.onClick}>
      <span className="pl-12">
        {props.children.length ? props.children.slice(0, 1) : ""}
      </span>
      <span className="text-function whitespace-pre cursor-pointer hover:text-declaration">
        &#9;{props.children.match(/\w+/g)}&nbsp;
      </span>
      <span>
        {props.children.slice(-2) == "/>" ? props.children.slice(-2) : ""}{" "}
      </span>
    </div>
  );
}
