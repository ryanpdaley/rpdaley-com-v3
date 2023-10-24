import type { MetaFunction } from "@remix-run/node";
import Navigation from "~/components/Navigation";

export const meta: MetaFunction = () => {
  return [
    { title: "RP DALEY | rpdaley.com/about" },
    { name: "description", content: "About" },
  ];
};

export default function Index() {
  return (
    <>
      <Navigation></Navigation>
      <div>About</div>
    </>
  );
}
