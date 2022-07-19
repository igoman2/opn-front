import Select, {
    DropdownIndicatorProps,
    ValueContainerProps,
    components,
} from "react-select";

import { CSSObject } from "styled-components";
import Chevron from "../public/assets/Chevron.svg";
import Image from "next/image";
import { ReactNode } from "react";
import { SearchInput } from "./InputForm";
import { theme } from "../styles/theme";

interface IDropdownProps {
    children?: ReactNode;
    title: string;
    options: readonly unknown[];
    placeholder: string;
    onSelect: (event: SearchInput) => void;
}

const Dropdown: React.FC<IDropdownProps> = (props) => {
    const colourStyles: any = {
        control: (styles: CSSObject) => ({
            ...styles,
            borderRadius: "30px",
            border: `1px solid ${theme.colors.gray_1}`,
            boxShadow: "none",
            "&:hover": {
                border: `1px solid ${theme.colors.gray_1}`,
            },
            cursor: "pointer",
            width: "320px",
            padding: "0px 17px 0px 20px",
            height: "42px",
        }),
        menu: (styles: CSSObject) => ({
            ...styles,
            width: "320px",
        }),
        option: (styles: CSSObject, { isDisabled }: CSSObject) => ({
            ...styles,
            width: "320px",
            color: `${theme.colors["black"]}`,
            backgroundColor: `${theme.colors.white}`,
            ":active": {
                ...styles[":active"],
                backgroundColor: `${theme.colors.white}`,
            },
            ":hover": {
                backgroundColor: `${theme.colors.blue_1}`,
                color: `${theme.colors.white}`,
            },
            cursor: isDisabled ? "not-allowed" : "pointer",
        }),
        placeholder: (styles: CSSObject) => ({
            ...styles,
            fontSize: "14px",
        }),
    };

    const CustomIcon = () => {
        return <Image src={Chevron} alt="화살표" />;
    };
    const DropdownIndicator = (props: DropdownIndicatorProps) => {
        return (
            <components.DropdownIndicator className="test" {...props}>
                <CustomIcon />
            </components.DropdownIndicator>
        );
    };
    const ValueContainer = (props: ValueContainerProps) => {
        return (
            <components.ValueContainer className="title" {...props}>
                {props.children}
            </components.ValueContainer>
        );
    };

    const selectHandler = (event: any) => {
        props.onSelect(event);
    };
    return (
        <div className="question-wrapper-for-one">
            <div className="question">{props.title}</div>

            <Select
                onChange={selectHandler}
                components={{ ValueContainer, DropdownIndicator }}
                options={props.options}
                styles={colourStyles}
                placeholder={props.placeholder}
                instanceId={props.placeholder}
            />
        </div>
    );
};

export default Dropdown;
