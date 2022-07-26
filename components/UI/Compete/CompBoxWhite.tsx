import React from "react";
import styled from "styled-components";

interface ICompBoxWhiteProps {
    name: string;
    num: number;
}

const CompBoxWhite: React.FC<ICompBoxWhiteProps> = (props) => {
    return (
        <BoxWrapper>
            <div className="comp-box-white-wrapper">
                <div className="comp-box-white">
                    <div className="comp-box-header-white">{props.name}</div>
                    <div className="comp-box-body-white">{props.num}</div>
                </div>
            </div>
        </BoxWrapper>
    );
};

export default CompBoxWhite;

const BoxWrapper = styled.div`
    .comp-box-wrapper {
        display: inline-flex;
        width: 40%;
    }

    .comp-box-white-wrapper {
        display: inline-flex;
        width: 20%;
    }

    .comp-box {
        background: #3955b4;
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

        color: #ffffff;

        opacity: 0.5;
        margin-bottom: 8px;
    }

    .comp-box-body {
        font-family: "Noto Sans";
        font-style: normal;
        font-weight: 700;
        font-size: 16px;

        color: #ffffff;
        /* width: 90px; */
        text-align: center;
    }

    .comp-box-white {
        box-sizing: border-box;
        /* OD_회색 */

        border: 0.462557px solid #ededec;

        border-radius: 8.78859px;

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

        color: #3955b4;

        opacity: 0.5;
        margin-bottom: 8px;
    }

    .comp-box-body-white {
        font-family: "Noto Sans";
        font-style: normal;
        font-weight: 700;
        font-size: 16px;

        color: #3955b4;
        text-align: center;
    }
    .comp-box-combinded {
        display: flex;
        width: 100%;
    }
`;
