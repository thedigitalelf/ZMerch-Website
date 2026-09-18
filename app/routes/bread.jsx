import { Bread } from "../pages/bread";

export function meta({}) {
  return [
    { title: "BAGUETTE!" },
    { name: "description", content: "tasty bread!" },
  ];
}

export default function Page() {
  return <Bread />;
}
