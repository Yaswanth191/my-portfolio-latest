import {
  Heading,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Schema,
  Meta,
  Row,
} from "@once-ui-system/core";
import { home, about, person, baseURL } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth horizontal="center" gap="m">
        <Column maxWidth="s" horizontal="center" align="center">
          <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-l">
              {person.name}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="32">
            <Text onBackground="neutral-weak" variant="heading-default-xl">
              Software Engineer Associate at Blackcoffer
            </Text>
          </RevealFx>
          <RevealFx translateY="8" delay={0.4} fillWidth horizontal="center" paddingBottom="32">
            <Text onBackground="neutral-weak" variant="body-default-l">
              Specializing in Full Stack Development and Cloud solutions, I design and deploy scalable applications using Python, Next.js, Supabase, and AWS. My recent work on LegalXpress includes role-based authentication, document lifecycle workflows, and admin dashboards.
            </Text>
          </RevealFx>
          <RevealFx translateY="8" delay={0.6} fillWidth horizontal="center" paddingBottom="32">
            <Text onBackground="neutral-weak" variant="body-default-l">
              I’ve also built an AI Chatbot and a Text Summarization System, showcasing my skills in NLP and deployment with Docker and AWS.
            </Text>
          </RevealFx>
          <RevealFx paddingTop="12" delay={0.8} horizontal="center" paddingLeft="12">
            <Button
              id="about"
              data-border="rounded"
              href={about.path}
              variant="secondary"
              size="m"
              weight="default"
              arrowIcon
            >
              <Row gap="8" vertical="center" paddingRight="4">
                {about.avatar.display && (
                  <Avatar
                    marginRight="8"
                    style={{ marginLeft: "-0.75rem" }}
                    src={person.avatar}
                    size="m"
                  />
                )}
                Learn More About Me
              </Row>
            </Button>
          </RevealFx>
        </Column>
      </Column>
    </Column>
  );
}