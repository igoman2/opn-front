import React from "react";
import styled from "styled-components";

interface ICompBoxProps {
    name: string;
    num: string;
}

const CompBox: React.FC<ICompBoxProps> = (props) => {
    return (
        <BoxWrapper>
            <div className="comp-box">
                <div className="comp-box-header">{props.name}</div>
                <div className="comp-box-body">{props.num}</div>
            </div>
        </BoxWrapper>
    );
};

export default CompBox;

const BoxWrapper = styled.div`
    display: inline-flex;
    width: 40%;

    .comp-box-white-wrapper {
        display: inline-flex;
        width: 20%;
    }

    .comp-box {
        background: ${(props) => props.theme.colors.blue_1};
        border-radius: 8.78859px;
        display: flex;
        flex-direction: column;
        padding: 10px 12px 12px 10px;
        margin: 3px 2px 3px 2px;
        width: 100%;
    }

    .comp-box-header {
        font-family: "Noto Sans";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        text-align: center;
        color: ${(props) => props.theme.colors.white};
        opacity: 0.5;
        margin-bottom: 8px;
    }

    .comp-box-body {
        font-family: "Noto Sans";
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        color: ${(props) => props.theme.colors.white};
        text-align: center;
    }

    .comp-box-white {
        box-sizing: border-box;
        border-radius: 9;
        display: flex;
        flex-direction: column;
        padding: 10px 12px 12px 10px;
        margin: 3px 2px 3px 2px;
        width: 100%;
    }

    .comp-box-header-white {
        font-family: "Noto Sans";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        text-align: center;
        color: ${(props) => props.theme.colors.blue_1};
        opacity: 0.5;
        margin-bottom: 8px;
    }

    .comp-box-body-white {
        font-family: "Noto Sans";
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        color: ${(props) => props.theme.colors.blue_1};
        text-align: center;
    }
`;
