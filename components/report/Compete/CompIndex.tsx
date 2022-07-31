import CompBar from "./CompBar";
import CompBoxCombinded from "./CompBoxCombinded";
import { ICompeteProps } from "../../report/Compete";
// import CompBoxCombinded from "./../components/CompBoxCombinded";
// import TextBoxWhite from "./../components/TextBoxWhite";
import React from "react";
import TextBoxWhite from "../../UI/TextBoxWhite";
import styled from "styled-components";

const CompIndex: React.FC<ICompeteProps> = (props) => {
    const compTable = props.input.competition_top10_table;
    const residual = props.input.competition_rest_info[0];

    let residualCount = residual.rest_hospital_count;
    let residualVal = residual.rate_squared_sum_rest;
    let topVal = residual.rate_squared_sum_top10;
    let sumVal = residualVal + topVal;

    return (
        <CompeteScoreWrapper>
            <div className="comp-index-title">의원별 점유율과 경쟁 지표</div>
            <CompBoxCombinded input={compTable} />
            <div className="comp-index-sum">
                <span className="comp-index-sum-text">
                    그외 {residualCount}개 의원
                </span>
                <TextBoxWhite name="점유율 제곱" num={residualVal} />
            </div>
            <div className="comp-index-bottom">
                <CompBar sumVal={sumVal} />
                <TextBoxWhite name="경쟁 지표 (점유율 제곱합)" num={sumVal} />
            </div>
        </CompeteScoreWrapper>
    );
};

export default CompIndex;

const CompeteScoreWrapper = styled.div`
    .comp-index-title {
        font-weight: 700;
        font-size: 14px;

        color: #3955b4;
        margin-bottom: 18px;
    }
    .comp-index-sum {
        display: flex;
        justify-content: right;
        align-items: center;
    }
    .comp-index-sum-text {
        font-weight: 400;
        font-size: 16px;
        text-align: center;
        color: #202020;
        margin-right: 18px;
    }
    .comp-index-bottom {
        display: flex;
        align-items: center;
        justify-content: right;
    }
`;
