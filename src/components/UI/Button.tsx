import React, { MouseEvent } from "react";
import styled, { DefaultTheme, ThemeProps } from "styled-components";

interface IButtonProsp {
    text: string;
    backgroundColor?: string;
    onSubmit: (event: MouseEvent<HTMLElement>) => void;
}
const Button: React.FC<IButtonProsp> = ({
    text,
    backgroundColor,
    onSubmit,
}) => {
    return (
        <ButtonWrapper backgroundColor={backgroundColor}>
            <button onClick={onSubmit}>{text}</button>
        </ButtonWrapper>
    );
};

export default Button;

interface StyleProps {
    backgroundColor?: string;
}
const ButtonWrapper = styled.div`
    button {
        color: white;
        font-weight: 700;
        font-size: 14px;
        align-items: center;
        border-radius: 30px;
        min-height: 38px;
        border: ${(props) => `0.4px solid ${props.theme.colors.gray_1}`};
        width: 320px;
        padding: 0px 17px 0px 20px;
        height: 42px;
        background-color: ${(props: StyleProps & ThemeProps<DefaultTheme>) =>
            props.backgroundColor
                ? props.backgroundColor
                : props.theme.colors.gray_1};
    }
`;
