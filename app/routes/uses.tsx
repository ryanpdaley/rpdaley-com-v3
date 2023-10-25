import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "RP DALEY | rpdaley.com/uses" },
    { name: "description", content: "Uses" },
  ];
};

export default function Index() {
  return <div>Uses</div>;
}
