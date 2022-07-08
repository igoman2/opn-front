import { CSSProperties, ChangeEvent, ReactNode } from "react";
import Select, {
    DropdownIndicatorProps,
    ValueContainerProps,
    components,
} from "react-select";

import { CSSObject } from "styled-components";
import Chevron from "../asset/Chevron.svg";
import Image from "next/image";
import { SearchInput } from "./InputForm";

interface IDropdownProps {
    children?: ReactNode;
    title: string;
    options: readonly unknown[];
    placeholder: string;
    onSelect: (event: SearchInput) => void;
}

const Dropdown: React.FC<IDropdownProps> = (props) => {
    const colourStyles: any = {
        control: (styles: CSSProperties) => ({
            ...styles,
            borderRadius: "30px",
            border: "1px solid #bdbdbd",
            boxShadow: "none",
            "&:hover": {
                border: "1px solid #bdbdbd",
            },

            width: "320px",
            padding: "0px 17px 0px 20px",
            height: "42px",
        }),
        menu: (styles: CSSProperties) => ({
            ...styles,
            width: "320px",
        }),
        option: (styles: CSSObject, { isDisabled }: CSSObject) => {
            return {
                ...styles,
                width: "320px",
                color: "black",
                backgroundColor: "white",
                ":active": {
                    ...styles[":active"],
                    backgroundColor: "white",
                },
                cursor: isDisabled ? "not-allowed" : "default",
            };
        },
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
                placeholder={
                    <div style={{ fontSize: "14px" }}>{props.placeholder}</div>
                }
            />
        </div>
    );
};

export default Dropdown;
