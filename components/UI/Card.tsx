import React, { ReactNode } from "react";

import styled from "styled-components";

interface ICardProps {
    children: ReactNode;
    backgroundColor?: string;
}

const Card: React.FC<ICardProps> = (props) => {
    return (
        <CradWrapper backgroundColor={props.backgroundColor}>
            {props.children}
        </CradWrapper>
    );
};

interface StyledProps {
    backgroundColor?: string;
}

const CradWrapper = styled.div`
    box-sizing: border-box;
    margin: 20px;
    padding: 20px;
    border: 1px solid #ededec;
    background-color: ${(props: StyledProps) =>
        props.backgroundColor ? props.backgroundColor : "white"};
    border-radius: 14px;
`;

export default Card;
