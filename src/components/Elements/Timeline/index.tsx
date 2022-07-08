import { ReactNode } from 'react';
import {
    VerticalTimeline,
    VerticalTimelineElementProps,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useTheme } from 'styled-components';

interface TimelineProps extends VerticalTimelineElementProps {
    lineColor?: string;
    animated?: boolean;
    children: ReactNode;
}

export function Timeline({
    lineColor,
    animated = false,
    children
}: TimelineProps) {


    const theme = useTheme()

    return (
        <VerticalTimeline
            animate={animated}
            lineColor={lineColor || theme.colors.primary}
        >
            {children}
        </VerticalTimeline>
    )
}