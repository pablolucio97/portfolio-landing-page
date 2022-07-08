import { CSSProperties } from 'react';
import { MdCheck, } from 'react-icons/md'
import { useTheme } from 'styled-components';
import {
    Container,
    StepContainer,
    StepItem,
    StepLine,
    StepTitle
} from './styles';
interface StepProgressProps {
    currentIndex: number;
    steps: string[],
    stepItemStyle?: CSSProperties;
    stepItemClassName?: string;
    containerStyle?: CSSProperties;
    containerClassName?: string;
    lineStyle?: CSSProperties;
    lineClassName?: string;
    textStyle?: CSSProperties;
    textClassName?: string;
}

export function StepProgress({
    steps,
    currentIndex,
    containerClassName,
    containerStyle,
    lineClassName,
    lineStyle,
    stepItemClassName,
    stepItemStyle,
    textClassName,
    textStyle
}: StepProgressProps) {

    const theme = useTheme()

    return (
        <Container
            key={currentIndex}
            style={containerStyle}
            className={containerClassName}
        >
            {steps.map((step, index) => (
                <StepContainer
                    key={step}
                >
                    <StepItem
                        style={{
                            background: currentIndex > index + 1 ?
                                theme.colors.success
                                :
                                theme.colors.primary
                            ,
                            width: currentIndex === index + 1 ?
                                '40px'
                                :
                                '24px',
                            height: currentIndex === index + 1 ?
                                '40px'
                                :
                                '24px'
                        } || stepItemStyle}
                        className={stepItemClassName}
                    >
                        {
                            currentIndex < index + 2 ?
                                index + 1
                                :
                                <MdCheck />
                        }
                    </StepItem>
                    <StepTitle
                        style={textStyle}
                        className={textClassName}
                    >
                        {step}
                    </StepTitle>
                    {index < (steps.length - 1) &&
                        <StepLine
                            style={{
                                background: currentIndex > index + 1 ?
                                    theme.colors.success :
                                    theme.colors.primary,

                            } || lineStyle}
                            className={lineClassName}
                        />
                    }
                </StepContainer>
            ))}

        </Container>
    )
}