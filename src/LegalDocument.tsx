import { useEffect } from "react";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import "./privacy-policy.css";

type Block =
  | { type: "paragraph" | "heading"; text: string }
  | { type: "list"; items: string[] };

type PolicySection = { id: string; title: string; blocks: Block[] };

// Keep each supplied document in its original text file; only format its structure.
function parseDocument(text: string) {
  const lines = text.trim().split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  const introduction: string[] = [];
  const sections: PolicySection[] = [];

  for (const line of lines.slice(3)) {
    const sectionNumber = line.match(/^(\d+)\. /);
    if (sectionNumber || line === "Important Legal Note") {
      sections.push({
        id: sectionNumber ? `policy-section-${sectionNumber[1]}` : "policy-legal-note",
        title: line,
        blocks: [],
      });
      continue;
    }

    const section = sections[sections.length - 1];
    if (!section) {
      introduction.push(line);
    } else if (line.startsWith("- ")) {
      const previous = section.blocks[section.blocks.length - 1];
      if (previous?.type === "list") {
        previous.items.push(line.slice(2));
      } else {
        section.blocks.push({ type: "list", items: [line.slice(2)] });
      }
    } else {
      section.blocks.push({ type: /^\d+\.\d+ /.test(line) ? "heading" : "paragraph", text: line });
    }
  }

  return { lines, introduction, sections };
}

function ContactText({ text }: { text: string }) {
  if (text.startsWith("Email: ")) {
    const email = text.slice(7);
    return <>Email: <a href={`mailto:${email}`}>{email}</a></>;
  }
  if (text.startsWith("Phone: ")) {
    const phone = text.slice(7);
    return <>Phone: <a href={`tel:${phone.replace(/\s/g, "")}`}>{phone}</a></>;
  }
  if (text.startsWith("Website: ")) {
    const website = text.slice(9);
    return <>Website: <a href={website}>{website}</a></>;
  }
  if (/^https?:\/\/\S+$/.test(text)) {
    const href = text === "https://www.claimhorizon.co.in/privacy-policy" ? "/privacy-policy/" : text;
    return <a href={href}>{text}</a>;
  }
  const privacyLabel = "ClaimHorizon Privacy Policy";
  const privacyIndex = text.indexOf(privacyLabel);
  if (privacyIndex !== -1) {
    return <>{text.slice(0, privacyIndex)}<a href="/privacy-policy/">{privacyLabel}</a>{text.slice(privacyIndex + privacyLabel.length)}</>;
  }
  return <>{text}</>;
}

export default function LegalDocument({ text, title, description }: {
  text: string;
  title: string;
  description: string;
}) {
  const { lines, introduction, sections } = parseDocument(text);

  useEffect(() => {
    document.title = `${title} | ClaimHorizon`;
    document.querySelector('meta[name="description"]')?.setAttribute(
      "content",
      description,
    );
  }, [title, description]);

  return (
    <div className="privacy-page">
      <div className="container privacy-container">
        <a className="privacy-back" href="/">
          <ArrowLeft size={18} aria-hidden="true" /> Back to Home
        </a>

        <header className="privacy-heading">
          <span className="eyebrow"><ShieldCheck size={18} aria-hidden="true" /> ClaimHorizon</span>
          <h1>{lines[0]}</h1>
        </header>

        <article className="privacy-document" aria-label={title}>
          <div className="privacy-introduction">
            {introduction.map((text) => <p key={text}>{text}</p>)}
          </div>

          <details className="privacy-contents">
            <summary>On this page</summary>
            <nav aria-label={`${title} sections`}>
              {sections.map((section) => (
                <a key={section.id} href={`#${section.id}`}>{section.title}</a>
              ))}
            </nav>
          </details>

          {sections.map((section) => (
            <section className="privacy-section" key={section.id} aria-labelledby={section.id}>
              <h2 id={section.id}>{section.title}</h2>
              {section.blocks.map((block, index) => {
                if (block.type === "list") {
                  return <ul key={index}>{block.items.map((item) => <li key={item}>{item}</li>)}</ul>;
                }
                if (block.type === "heading") {
                  return <h3 key={index}>{block.text}</h3>;
                }
                return <p key={index}><ContactText text={block.text} /></p>;
              })}
            </section>
          ))}
        </article>
      </div>
    </div>
  );
}
