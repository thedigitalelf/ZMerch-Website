import { Guides } from '../pages/guides'

export function meta({}) {
  return [
    { title: "INSTALL GUIDE" },
    { name: "description", content: "can you believe we actually wrote install guides???" },
  ];
}

export default function Page({ params }) {
  return <Guides guide={params.guideName} />;
}
