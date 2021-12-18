import React from "react";

export default function RenderExams(filter) {
  console.log(filter.filter);
  return <div>{filter.filter.name}</div>;
}
