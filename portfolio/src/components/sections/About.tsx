import { about } from "@/lib/data";
import { Container, SectionHeading, Card } from "@/components/ui";
import { Reveal } from "@/components/ui/Reveal";

export default function About() {
  return (
    <section id="about" aria-label="About" className="py-20 sm:py-24 border-t border-border/60">
      <Container>
        <SectionHeading title="About" />
        <Reveal>
          <Card>
            <div className="space-y-4 text-text-secondary">
              <p className="whitespace-pre-line">{about.summary}</p>
              <p className="whitespace-pre-line">{about.approach}</p>
            </div>
          </Card>
        </Reveal>
      </Container>
    </section>
  );
}
