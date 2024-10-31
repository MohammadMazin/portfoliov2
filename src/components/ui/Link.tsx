type LinkProps = {
  text: string;
  href: string;
};

export function Link({ text, href }: LinkProps) {
  return (
    <a
      className="font-bold text-primary hover:text-secondary transition-colors duration-100"
      href={href}
      target="blank"
    >
      {text}
    </a>
  );
}
