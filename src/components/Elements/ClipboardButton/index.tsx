import { CSSProperties } from 'react';
import { MdContentCopy } from 'react-icons/md';
import { useTheme } from 'styled-components';
import { useCopyToClipboard } from '../../../hooks/useClipboard';
import { Container, Text } from './styles';

interface ClipboardButtonProps {
    content: string;
    copiedFeedbackMessage: string;
    notCopiedFeedbackMessage: string;
    onCopy?: () => void;
    style?: CSSProperties;
    className?: string;
    iconStyle?: CSSProperties;
    iconClassName?: string;
}

export function ClipboardButton({
    content,
    copiedFeedbackMessage,
    notCopiedFeedbackMessage,
    onCopy,
    style,
    iconStyle,
    className,
    iconClassName
}: ClipboardButtonProps) {

    const theme = useTheme()
    const [value, copy] = useCopyToClipboard()

    return (
        <Container
            style={style}
            className={className}
            onClick={() => { copy(content).then(() => onCopy())}}
        >
            <MdContentCopy
                size={32}
                className={iconClassName}
                style={iconStyle || {
                    backgroundColor: theme.colors.white100,
                    padding: 8,
                    borderRadius: 4,
                    margin: 8
                }}
            />
            <Text>{
                value ?
                    copiedFeedbackMessage
                    :
                    notCopiedFeedbackMessage
            }</Text>
        </Container>
    )
}
