import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import Moment from "react-moment";

// here going to define type
let name: string;
let age: number | string; // here define both number and string it will take both values
age = "23";

let isStudent: string;
let hobbies: string;
let role: [number, string];

type Person = {
  name: string;
  role?: string; // this is optional it can use or not
};
let person: Person = {
  name: "akash",
  // role: "developer",
};

// here we are extending the values in y
type X = {
  a: string;
  b: number;
};
type Y = X & {
  c: string;
  d: boolean;
};

// type y: Y = {
//   c:'akash'
//   d = 12131
// }

// interface  --> this is used for the extending object //
interface live {
  name: string;
  age: number;
  role: string;
}
interface dead extends live {
  place: string;
}

const misc = () => {
  const dateToFormat = "1976-04-19T12:59-0500";
  return (
    <div>
      <Moment>{dateToFormat}</Moment>
      app
    </div>
  );
};
export default misc;

// note //
// if we want to create optional any input then we will use (?)
