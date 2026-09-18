import { Light } from "../pages/light";

export function meta({}) {
  return [
    { title: "flashlight~" },
    { name: "description", content: "a flashlight of zrock!" },
  ];
}

export default function Page() {
  return <Light />;
}
