import { CSSProperties } from 'react';
import Link from 'next/link'
import { Container } from './styles';

interface HeaderLinkProps {
  content: string;
  url: string;
  style?: CSSProperties;
  className?: string;
}

export function NavLink({ content, url, style, className }: HeaderLinkProps) {
  return (
    <Link href={url} passHref>
      <Container
        style={style}
        className={className}
      >
        {content}
      </Container>
    </Link>
  )
}