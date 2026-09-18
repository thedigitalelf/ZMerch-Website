import { Light } from "../pages/light";

export function meta({}) {
  return [
    { title: "flashlight~" },
    { name: "description", content: "a flashlight of zrock! (not a fleshlight, get it right...)" },
  ];
}

export default function Page() {
  return <Light />;
}
