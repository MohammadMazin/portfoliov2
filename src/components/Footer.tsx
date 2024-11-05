import { Link } from "./ui/Link";

export default function Footer() {
  return (
    <>
      <div className="mx-auto w-full max-w-[1200px] px-8 py-4 text-sm lg:px-4">
        <p>
          Designed in Figma, Developed using React, Typescript,{" "}
          <Link href="https://ui.shadcn.com/" text="shadcn/ui" />
        </p>
      </div>
      <img
        className="w-full"
        src="https://capsule-render.vercel.app/api?type=waving&color=0:ff7a00,100:ff5757&height=135&section=footer"
      />
    </>
  );
}
