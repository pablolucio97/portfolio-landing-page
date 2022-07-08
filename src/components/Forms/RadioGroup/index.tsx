import { ChangeEvent, CSSProperties } from "react";
import {
    ItemContainer,
    RadioButton,
    RadioButtonLabel,
    Container,
    Option
} from "./styles";

interface OptionProps {
    value: string | number;
    label: string | number;
}

interface RadioGroupProps {
    options: OptionProps[];
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    labelStyle?: CSSProperties;
    labelClassName?: string;
    style?: CSSProperties;
    className?: string;
}

export function RadioGroup({
    options,
    onChange,
    style,
    className,
    labelStyle,
    labelClassName
}: RadioGroupProps) {

    return (
        <Container
            style={style}
            className={className}
        >
            {options.map(opt => (
                <ItemContainer
                    key={opt.value}
                >
                    <RadioButton
                        type="radio"
                        name="default"
                        onChange={onChange}
                        value={opt.value}
                        defaultChecked={true}
                    />
                    <RadioButtonLabel />
                    <Option
                        style={labelStyle}
                        className={labelClassName}
                    >
                        {opt.label}
                    </Option>
                </ItemContainer>
            ))}

        </Container>
    );
};