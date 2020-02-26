import React from "react";

export default function ListItemComponentSample({
  className = "button-primary",
  title,
  click
}) {
  return (
    <div>
      <button className={className} onClick={() => click(title)}>
        {title}
      </button>
    </div>
  );
}

