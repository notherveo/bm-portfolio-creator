import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="/" className="logo">
        <span className="logo-mark">✦</span>
        MAYA OKAFOR
      </Link>
      <nav className="nav">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/works">Works</Link>
        <Link href="/journal">Journal</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
