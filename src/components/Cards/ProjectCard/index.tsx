import { Container, SubContainer, Text, Title } from "./styles";

interface ProjectCrdProps {
  title: string;
  description: string;
  videoId: string;
}

export function ProjectCrd({ description, title, videoId }: ProjectCrdProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <Text>{description}</Text>
      <SubContainer>
        <iframe
          src={`https://player.vimeo.com/video/${videoId}`} // Replace with the actual Vimeo ID
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
          title={title}
          width="100%"
        ></iframe>
      </SubContainer>
    </Container>
  );
}
