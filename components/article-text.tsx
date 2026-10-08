import Link from "next/link";

export function ArticleText({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\[[^\]]+\]\((?:\/[^\s)]*|https:\/\/[^\s)]*)\))/g).map((part, i) => {
        const match = part.match(/^\[([^\]]+)\]\((\/[^\s)]*|https:\/\/[^\s)]*)\)$/);
        if (!match) return part;
        const [, label, href] = match;
        return href.startsWith("/")
          ? <Link key={i} href={href} style={{ textDecoration: "underline" }}>{label}</Link>
          : <a key={i} href={href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}>{label}</a>;
      })}
    </>
  );
}
