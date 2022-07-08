import {
    VerticalTimelineElement,
    VerticalTimelineElementProps,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { CSSProperties, useTheme } from 'styled-components';

interface TimelineProps extends VerticalTimelineElementProps {
    title: string;
    content: string;
    date: string;
    iconBgColor?: string;
    balloonStyle?: CSSProperties
}

export function TimelineElement({
    date,
    title,
    content,
    iconBgColor,
    icon,
    balloonStyle
}: TimelineProps) {

    const theme = useTheme()

    return (
        <>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={balloonStyle}
                date={date}
                iconStyle={{
                    background: iconBgColor || theme.colors.primary
                }}
                icon={icon}
            >
                <h3

                    className="vertical-timeline-element-title"
                >
                    {title}
                </h3>
                <p>
                    {content}
                </p>
            </VerticalTimelineElement>

        </>
    )
}