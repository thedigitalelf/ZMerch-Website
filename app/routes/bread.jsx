import { Bread } from "../pages/bread";

export function meta({}) {
  return [
    { title: "BAGUETTE!" },
    { name: "description", content: "isnt he so breadable?" },
  ];
}

export default function Page() {
  return <Bread />;
}
