import { useEffect } from "react";

const SITE_URL = "https://digivyral.com";
const DEFAULT_OG_IMAGE =
  "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/dfb8ced4-ba04-4210-b97a-98da76f6cdd0/id-preview-fef1c163--5116bfed-2a0c-4ff0-9690-36f62cde0492.lovable.app-1772904159237.png";

interface SEOOptions {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string; // path or absolute
  ogImage?: string;
  ogType?: "website" | "article";
  noIndex?: boolean;
  jsonLd?: object | object[];
}

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function useSEO(opts: SEOOptions) {
  useEffect(() => {
    const {
      title,
      description,
      keywords,
      canonical,
      ogImage = DEFAULT_OG_IMAGE,
      ogType = "website",
      noIndex = false,
      jsonLd,
    } = opts;

    document.title = title;
    upsertMeta("name", "description", description);
    if (keywords) upsertMeta("name", "keywords", keywords);
    upsertMeta(
      "name",
      "robots",
      noIndex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1",
    );

    const url = canonical
      ? canonical.startsWith("http")
        ? canonical
        : `${SITE_URL}${canonical}`
      : `${SITE_URL}${window.location.pathname}`;
    upsertLink("canonical", url);

    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:type", ogType);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:image", ogImage);
    upsertMeta("property", "og:site_name", "Digivyral");

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", ogImage);

    // JSON-LD
    const scriptId = "page-jsonld";
    const old = document.getElementById(scriptId);
    if (old) old.remove();
    if (jsonLd) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = scriptId;
      script.text = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
  }, [opts]);
}
