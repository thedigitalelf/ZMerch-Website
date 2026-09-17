import { Guides } from '../pages/guides'

export function meta({}) {
  return [
    { title: "zmerch! owo" },
    { name: "description", content: ":3 for them silly folkz~" },
  ];
}

export default function Page({ params }) {
  return <Guides guide={params.guideName} />;
}
