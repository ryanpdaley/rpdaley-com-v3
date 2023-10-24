import type { MetaFunction } from "@remix-run/node";
import Navigation from "~/components/Navigation";

export const meta: MetaFunction = () => {
  return [
    { title: "RP DALEY | rpdaley.com" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <Navigation></Navigation>
      <div>Home</div>
    </>
  );
}
