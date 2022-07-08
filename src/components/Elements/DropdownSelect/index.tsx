import Dropdown, { ReactDropdownProps } from 'react-dropdown';
import 'react-dropdown/style.css';

export function DropdownSelect({ ...rest }: ReactDropdownProps) {
    return (
        <Dropdown
            {...rest}
            
        />
    )
}