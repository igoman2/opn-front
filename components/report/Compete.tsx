import { ChartValue, TableValue } from "../../pages/report";

import Card from "../UI/Card";
import CompIndex from "../UI/Compete/CompIndex";
import Cover from "./Cover";
import KeyNumber3x1Comp from "../UI/KeyNumber3x1Comp";
import List from "../List/List";
import React from "react";
import dynamic from "next/dynamic";

export interface ICompeteProps {
    input: {
        all_hospital_average_profit: string;
        new_hospital_average_profit: string;
        competition_type: string;
        competition_rate: string;
        address_dong: string;
        department: string;
        new_hospital_count: string;
        all_to_new_compare: string;
        hospital_profit_distribution_chart: ChartValue[];
        competition_table: TableValue[];
        competition_top10_table: TableValue[];
        competition_rest_info: [
            {
                rest_hospital_count: number;
                rate_sum_top10: number;
                rate_squared_sum_top10: number;
                rate_sum_rest: number;
                rate_squared_sum_rest: number;
            }
        ];
        new_hospital_headers: [
            {
                open_date: string;
                hospital_name: string;
                area: string;
                prof: string;
            }
        ];
        new_hospital_table: [];
        closed_hospital_headers: [
            {
                open_date: string;
                closed_date: string;
                hospital_name: string;
                area: string;
            }
        ];
        closed_hospital_table: [];
    };
}
const BarChart = dynamic(() => import("../Chart/BarChart"), { ssr: false });

const Compete: React.FC<ICompeteProps> = ({ input }) => {
    const sectionHeader = {
        sectionTitle: "경쟁 분석",
        sectionList: [
            "의원 매출액 분포 (최근 12개월 평균)",
            "의원별 점유율과 경쟁 지표",
            "신규 의원 목록 (최근 24개월 간)",
            "폐업 의원 목록 (최근 24개월 간)",
        ],
    };
    return (
        <div>
            <Cover sectionHeader={sectionHeader} pathname="Cover3" />
            <KeyNumber3x1Comp input={input} />
            <div className="section-body">
                <Card>
                    {input.address_dong}의 {input.department} 평균 매출액은 월{" "}
                    {input.all_hospital_average_profit}입니다.
                    {input.new_hospital_count === "0개" ? (
                        <span>최근 24개월 내 개원한 신규 의원은 없습니다.</span>
                    ) : (
                        <span>
                            최근 24개월 내 개원한 신규 의원은{" "}
                            {input.new_hospital_count} 이며, 이들의 평균
                            매출액은 월 {input.new_hospital_average_profit}으로{" "}
                            {input.address_dong} 전체 평균보다{" "}
                            {input.all_to_new_compare}.
                        </span>
                    )}{" "}
                    의원별 점유율을 토대로한 경쟁 지표는{" "}
                    {input.competition_rate} 산출됩니다. 통상 이 지표가 0.25보다
                    크면 독과점, 0.15와 0.25 사이면 균형적인 경쟁, 0.15보다
                    작으면 경쟁이 치열하다고 판단합니다. 이에 따라{" "}
                    {input.address_dong}의 {input.department} 시장은{" "}
                    {input.competition_type} 유형으로 볼 수 있습니다.
                </Card>
            </div>
            <BarChart
                chartName="의원 매출액 분포 (최근 1년간 월평균)"
                chartUnit="만원"
                chartNote="상위 10개 의원만 표시 중"
                input={input.hospital_profit_distribution_chart}
            />
            <CompIndex input={input} />
            <List
                listTitle="신규 의원 목록 (최근24개월 간)"
                list={input.new_hospital_table}
            />
            <List
                listTitle="폐업 의원 목록 (최근24개월 간)"
                list={input.closed_hospital_table}
            />
        </div>
    );
};

export default Compete;
