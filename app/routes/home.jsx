import { Home } from "../pages/home";

export function meta({}) {
  return [
    { title: "zmerch! owo" },
    { name: "description", content: ":3 for them silly folkz~" },
  ];
}

export default function Page() {
  return <Home />;
}
