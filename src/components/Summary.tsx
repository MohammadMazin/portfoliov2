import { Link } from "./ui/Link";

export function Summary() {
  return (
    <span id="aboutMe" className="section flex flex-col gap-2 text-lg">
      <p>
        I've been creating things since 2014, be it graphic design, video
        editing, art and now....programming.
      </p>
      <p>
        Web development felt like the perfect domain where I could be creative
        and work on interesting things. Since then I've tried exploring the
        different sides of what this field has to offer and now I can say that I
        like creating tools that matter, and make them look good while I'm at
        it.
      </p>
      <p>
        In my free time, I create{" "}
        <Link href={"https://www.instagram.com/kayleberries/"} text={"art"} />,
        code silly things on{" "}
        <Link href={"https://www.twitch.com/kayleberries/"} text={"stream"} />,
        and try to find the next cool tech thing to get my dopamine rush from
      </p>
    </span>
  );
}
