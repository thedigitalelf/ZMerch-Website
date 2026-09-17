import { Zlahaj } from "../pages/zlahaj";

export function meta({}) {
  return [
    { title: "zlahaj~" },
    { name: "description", content: "OMG A SHORK!" },
  ];
}

export default function Page() {
  return <Zlahaj />;
}
