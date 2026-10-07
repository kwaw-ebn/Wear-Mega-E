import Link from 'next/link';
export function ArticleText({text}:{text:string}){return <>{text.split(/(\[[^\]]+\]\(\/[^\s)]*\))/g).map((part,i)=>{const match=part.match(/^\[([^\]]+)\]\((\/[^\s)]*)\)$/);return match?<Link key={i} href={match[2]} style={{textDecoration:'underline'}}>{match[1]}</Link>:part;})}</>}
