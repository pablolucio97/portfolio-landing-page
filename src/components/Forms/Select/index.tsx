import { CSSProperties, SelectHTMLAttributes } from 'react';
import { SelectInput, Option } from './styles'

interface Props { }

interface OptionProps {
    value: string | number;
    label: string | number;
}

interface SelectProps extends SelectHTMLAttributes<Props> {
    options: OptionProps[];
    selectPlaceholder: string;
    optionStyle?: CSSProperties;
    optionClassName?: string;
    inputStyle?: CSSProperties;
    inputClassName?: string;
}

export function Select({
    options,
    selectPlaceholder,
    optionStyle,
    inputStyle,
    inputClassName,
    optionClassName,
    ...rest
}: SelectProps) {
    return (
        (
            <SelectInput
                required
                style={inputStyle}
                className={inputClassName}
                {...rest}
            >
                {
                    selectPlaceholder &&
                    <Option
                        selected
                        disabled
                        style={optionStyle}
                        className={optionClassName}
                    >
                        {selectPlaceholder}
                    </Option>
                }
                {
                    options.map(opt => (
                        <Option key={opt.value} value={opt.label}
                            style={optionStyle}
                            className={optionClassName}
                        >
                            {opt.label}
                        </Option>
                    ))
                }
            </SelectInput>
        )
    )
}