import { BodyPillow } from "../pages/body-pillow";

export function meta({}) {
  return [
    { title: "BAGUETTE!" },
    { name: "description", content: "isnt he so breadable?" },
  ];
}

export default function Page() {
  return <BodyPillow />;
}
