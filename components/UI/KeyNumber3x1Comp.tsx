import KeyNumberBoxLean from "./KeyNumberBoxLean";
import React from "react";
import styled from "styled-components";

interface IKeyNumber3x1CompProps {
    input: any;
}

const KeyNumber3x1Comp: React.FC<IKeyNumber3x1CompProps> = (props) => {
    const data = props.input;

    const visualData = [];
    visualData.push(data.all_hospital_average_profit);
    visualData.push(data.new_hospital_average_profit);
    visualData.push(data.competition_type);

    const titleSet = [
        "전체 의원 평균 매출액",
        "신규 의원 평균 매출액",
        "경쟁 유형",
    ];

    return (
        <Wrapper>
            <div className="key-number-box-lean-container">
                {visualData.map((item, index) => (
                    <KeyNumberBoxLean
                        key={index}
                        body={item}
                        header={titleSet[index]}
                    />
                ))}
            </div>
        </Wrapper>
    );
};
export default KeyNumber3x1Comp;

const Wrapper = styled.div`
    .key-number-box-fat-container {
        margin: 17px 14px 16px 14px;
    }

    .key-number-box-fat-wrapper {
        width: 50%;
        display: inline-flex;
    }

    .key-number-box-lean-container {
        margin: 20px 15px 16px 15px;
        display: flex;
    }

    .key-number-box-lean-wrapper {
        width: 33%;
        display: inline-flex;
    }

    .key-number-box-fat {
        box-sizing: border-box;
        width: 100%;
        margin: 3px 6px 3px 6px;
        background: #3955b4;
        /* OD_회색 */
        border: 0.645524px solid #ededec;
        border-radius: 12.265px;

        display: flex;
        flex-direction: column;
        padding: 8px;
    }

    .key-number-box-lean {
        box-sizing: border-box;
        width: 100%;
        margin: 0px 5px 0px 5px;
        background: #3955b4;
        /* OD_회색 */

        border: 0.645524px solid #ededec;
        border-radius: 12.265px;

        display: flex;
        flex-direction: column;
        padding: 16px;
    }

    .key-number-box-header {
        font-family: "Noto Sans";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        width: 100%;
        /* identical to box height, or 14px */

        text-align: center;

        color: #ffffff;
    }

    .key-number-box-line {
        width: 9.36px;
        height: 0px;
        align-self: center;

        /* OD_회색 */

        border: 0.645524px solid #ededec;
        margin: 8px 0px 8px 0px;
    }

    .key-number-box-body {
        font-family: "Noto Sans";
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        width: 100%;
        /* identical to box height, or 20px */

        text-align: center;

        color: #ffffff;
    }
`;
