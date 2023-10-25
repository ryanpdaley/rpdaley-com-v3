import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "RP DALEY | rpdaley.com/about" },
    { name: "description", content: "About" },
  ];
};

export default function Index() {
  return <div>About</div>;
}
