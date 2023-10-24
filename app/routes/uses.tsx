import type { MetaFunction } from "@remix-run/node";
import Navigation from "~/components/Navigation";

export const meta: MetaFunction = () => {
  return [
    { title: "RP DALEY | rpdaley.com/uses" },
    { name: "description", content: "Uses" },
  ];
};

export default function Index() {
  return (
    <>
      <Navigation></Navigation>
      <div>Uses</div>
    </>
  );
}
