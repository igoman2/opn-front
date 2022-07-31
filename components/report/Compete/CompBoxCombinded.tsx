import React from "react";
import { TableValue } from "../../../pages/report";
import TextBoxBlue2 from "../../UI/TextBoxBlue2";
import TextBoxWhite from "../../UI/TextBoxWhite";
import styled from "styled-components";
interface ICompBoxCombinded {
    input: TableValue[];
}

const CompBoxCombinded: React.FC<ICompBoxCombinded> = (props) => {
    const rawData = props.input;

    return (
        <div>
            {rawData.map((item: TableValue, i) => {
                return (
                    <BoxWrapper key={i}>
                        <TextBoxBlue2 name="매출액" num={item.profit} />
                        <TextBoxBlue2
                            name="점유율"
                            num={item.acquisition_rate}
                        />
                        <TextBoxWhite
                            name="점유율 제곱"
                            num={item.rate_squared}
                        />
                    </BoxWrapper>
                );
            })}
        </div>
    );
};

export default CompBoxCombinded;

const BoxWrapper = styled.div`
    display: flex;
    width: 100%;
`;
