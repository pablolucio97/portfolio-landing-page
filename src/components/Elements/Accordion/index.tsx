import { CSSProperties, ReactElement, ReactNode } from 'react';
import { CollapsibleTrigger, Container } from './styles';

interface AccordionProps {
    title: string;
    children: ReactElement[] | ReactNode;
    transitionTime?: number;
    titleStyle?: CSSProperties;
    contentContainerStyle?: CSSProperties
    titleClassName?: string;
    contentContainerClassName?: string;
    openedTitleClassName?: string;
}

export function Accordion({
    title,
    children,
    transitionTime = 200,
    titleStyle,
    contentContainerStyle,
    titleClassName,
    contentContainerClassName,
    openedTitleClassName
}: AccordionProps) {
    return (
        <CollapsibleTrigger
            trigger={title}
            openedClassName={openedTitleClassName}
            transitionTime={transitionTime}
            triggerStyle={titleStyle || {
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column'
            }}
            triggerClassName={titleClassName}

        >
            <Container
                style={contentContainerStyle}
                className={contentContainerClassName}
            >
                {children}
            </Container>
        </CollapsibleTrigger>
    )
}