"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { X, ZoomIn, Share2 } from "lucide-react";
export function DesignViewer({
  images,
}: {
  images: { src: string; alt: string; width: number; height: number }[];
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState(0);
  const im = images[index];
  useEffect(() => {
    const el = dialog.current;
    if (!el) return;
    const done = () => {
      document.body.style.overflow = "";
    };
    el.addEventListener("close", done);
    return () => {
      done();
      el.removeEventListener("close", done);
    };
  }, []);
  return (
    <div>
      <button
        className="image-zoom"
        onClick={() => {
          dialog.current?.showModal();
          document.body.style.overflow = "hidden";
        }}
        aria-label={`Enlarge ${im.alt}`}
      >
        <Image
          src={im.src}
          alt={im.alt}
          width={im.width}
          height={im.height}
          priority
          sizes="(max-width:760px) 92vw, 52vw"
        />
        <span>
          <ZoomIn size={18} /> View details
        </span>
      </button>
      {images.length > 1 && (
        <div className="filters">
          {images.map((img, i) => (
            <button
              key={img.src}
              onClick={() => setIndex(i)}
              aria-pressed={i === index}
            >
              Photo {i + 1}
            </button>
          ))}
        </div>
      )}
      <dialog
        ref={dialog}
        className="lightbox"
        onClick={(e) => {
          if (e.target === e.currentTarget) dialog.current?.close();
        }}
      >
        <button
          autoFocus
          onClick={() => dialog.current?.close()}
          aria-label="Close enlarged image"
        >
          <X />
        </button>
        <Image
          src={im.src}
          alt={im.alt}
          width={im.width}
          height={im.height}
          sizes="90vw"
        />
      </dialog>
    </div>
  );
}
export function ShareDesign({ title }: { title: string }) {
  const [message, setMessage] = useState("");
  return (
    <div className="share">
      <button
        onClick={async () => {
          try {
            if (navigator.share)
              await navigator.share({ title, url: location.href });
            else {
              await navigator.clipboard.writeText(location.href);
              setMessage("Link copied.");
            }
          } catch {
            setMessage("Use your browser to copy this page link.");
          }
        }}
      >
        <Share2 size={16} /> Share this design
      </button>
      <span role="status">{message}</span>
    </div>
  );
}
