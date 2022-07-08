import TypeAnimation from 'react-type-animation';
import { Container } from './styles';

interface TextTyperProps {
    wrapper: 'p' | 'h1' |'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    textList: string[];
    textDelay: number;
    repeat?: number;
    showsCursor?: boolean;
    className?: string;
}


export function TextTyper({
    textList,
    textDelay,
    wrapper,
    repeat,
    showsCursor,
    className
}: TextTyperProps) {
    return (
        <Container>
            <TypeAnimation
                sequence={
                    [
                        textList[0],
                        textDelay,
                        textList[1] && textList[1],
                        textDelay,
                        textList[2] && textList[2],
                        textDelay,
                        textList[3] && textList[3],
                        textDelay,
                        textList[4] && textList[4],
                        textDelay,
                        textList[5] && textList[5],
                        textDelay,
                        textList[6] && textList[6],
                        textDelay,
                        textList[7] && textList[7],
                        textDelay,
                    ]
                }
                wrapper={wrapper}
                className={className}
                cursor={showsCursor}
                repeat={repeat}
            />
        </Container>
    );
};