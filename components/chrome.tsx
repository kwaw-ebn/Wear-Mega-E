"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaLinkedinIn,
  FaPinterestP,
  FaWhatsapp,
} from "react-icons/fa";
import { site, socialLinks, whatsapp } from "@/lib/site";
const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/fashion-design-services"],
  ["Gallery", "/gallery"],
  ["Blog", "/fashion-design-blog"],
  ["Contact", "/contact"],
];
export function Socials() {
  const icons = {
    facebook: FaFacebookF,
    instagram: FaInstagram,
    tiktok: FaTiktok,
    youtube: FaYoutube,
    linkedin: FaLinkedinIn,
    pinterest: FaPinterestP,
  };
  return (
    <div className="socials">
      {Object.entries(icons).map(([name, Icon]) => {
        const url = socialLinks[name as keyof typeof socialLinks];
        return url ? (
          <a
            key={name}
            href={url}
            aria-label={name}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon />
          </a>
        ) : (
          <span
            key={name}
            aria-label={`${name}: profile link coming soon`}
            title={`${name}: profile link coming soon`}
          >
            <Icon />
          </span>
        );
      })}
      <a href={whatsapp()} aria-label="Chat on WhatsApp">
        <FaWhatsapp />
      </a>
    </div>
  );
}
export function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  return (
    <header className="header">
      <div className="header-inner wrap">
        <Link href="/" className="brand" aria-label="Wear Mega-E home">
          <Image
            src="/images/wear-mega-e-logo.webp"
            alt="Wear Mega-E — You Decide, We Design"
            width={76}
            height={76}
            priority
          />
          <span>
            WEAR MEGA-E<small>YOU DECIDE, WE DESIGN</small>
          </span>
        </Link>
        <button
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav
          id="main-nav"
          className={open ? "open" : ""}
          aria-label="Main navigation"
        >
          {links.map(([name, url]) => (
            <Link
              key={url}
              href={url}
              aria-current={path === url ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {name}
            </Link>
          ))}
          <Link
            className="nav-cta"
            href="/contact"
            onClick={() => setOpen(false)}
          >
            Let’s talk <ArrowUpRight size={16} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
export function Footer() {
  return (
    <footer>
      <div className="wrap footer-grid">
        <div>
          <Image
            src="/images/wear-mega-e-logo.webp"
            alt="Wear Mega-E logo"
            width={120}
            height={120}
          />
          <p>
            Thoughtful design. Personal expression.
            <br />
            Styles created around you.
          </p>
          <Socials />
        </div>
        <div>
          <h3>Explore</h3>
          {links.map(([name, url]) => (
            <Link key={url} href={url}>
              {name}
            </Link>
          ))}
        </div>
        <div>
          <h3>Let’s make it yours</h3>
          <p>
            Have an idea, a question or an occasion?
            <br />
            Start a conversation.
          </p>
          <p>Agona Swedru, Ghana</p>
          <a href={`tel:${site.international}`}>{site.phone}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={whatsapp()}>Chat on WhatsApp ↗</a>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>
          © {new Date().getFullYear()} Wear Mega-E. All rights reserved.
        </span>
        <Link href="/privacy-policy">Privacy policy</Link>
      </div>
    </footer>
  );
}
export function FloatingWhatsApp() {
  return (
    <a
      className="floating-whatsapp"
      href={whatsapp()}
      aria-label="Enquire with Wear Mega-E on WhatsApp"
    >
      <FaWhatsapp size={25} />
      <span>Let’s talk</span>
    </a>
  );
}
