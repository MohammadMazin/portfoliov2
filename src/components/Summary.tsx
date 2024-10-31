import { Link } from "./ui/Link";

export function Summary() {
  return (
    <span className="flex flex-col gap-2">
      <p>
        Since 2014 I found myself in a constant limbo. Trying out graphic
        design, video editing, <i>a youtube channel</i>, a super short stint as
        auditioning for a couple of voice acting roles. While I never found a
        home in those niches, one thing I learnt about myself is that I really
        enjoy creating things.
      </p>
      <p>
        So when I found web development, it felt like I found the perfect domain
        where I could be creative and work on interesting things. Since then
        I've tried exploring the different sides of what this field has to offer
      </p>
      <p>
        The things I learnt from those 2010s era has helped me target my niche
        here. That is to be able to create tools that matter, and make them look
        good while I'm at it.
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
