import { Yoga } from "../pages/yoga";

export function meta({}) {
  return [
    { title: "~yoga~" },
    { name: "description", content: "find inner peace!" },
  ];
}

export default function Page() {
  return <Yoga />;
}
