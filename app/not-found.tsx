import { PageIntro, Button } from "@/components/ui";
export default function NotFound() {
  return (
    <PageIntro eyebrow="PAGE NOT FOUND" title="Let’s find your inspiration.">
      <p>
        This page is not available. Explore the gallery to find your next
        favourite look.
      </p>
      <Button href="/gallery">Explore the gallery</Button>
    </PageIntro>
  );
}
