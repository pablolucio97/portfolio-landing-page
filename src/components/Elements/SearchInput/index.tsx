import { ChangeEvent, CSSProperties, InputHTMLAttributes } from "react";
import { Input } from "./styles";

interface SearchInputProps {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
    style?: CSSProperties;
 }

export function SearchInput({
    value,
    onChange,
    disabled,
    placeholder,
    className,
    style
} : SearchInputProps) {
    return (
        <Input
            value={value}
            onChange={onChange}
            type='text'
            disabled={disabled}
            placeholder={placeholder}
            className={className}
            style={style}
        />
    )
}