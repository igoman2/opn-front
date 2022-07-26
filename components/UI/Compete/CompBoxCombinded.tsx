import CompBox from "./CompBox";
import React from "react";
import { TableValue } from "../../../pages/report";
interface ICompBoxCombinded {
    input: TableValue[];
}

const CompBoxCombinded: React.FC<ICompBoxCombinded> = (props) => {
    const rawData = props.input;

    return (
        <div>
            {rawData.map((item: TableValue, i) => {
                return (
                    <div className="comp-box-combinded" key={i}>
                        <CompBox name="매출액" num={item.profit} />
                        <CompBox name="점유율" num={item.acquisition_rate} />
                        {/* <CompBoxWhite
                            name="점유율 제곱"
                            num={item.rate_squared}
                        /> */}
                    </div>
                );
            })}
        </div>
    );
};

export default CompBoxCombinded;

// {menuItems.map((item)=>{
//     return <div>{item}</div>
// })}
