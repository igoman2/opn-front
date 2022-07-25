import Card from "../UI/Card";
import Cover from "./Cover";
import React from "react";
import TextBox from "../UI/TextBox";
import { Trend } from "../../pages/report";
import dynamic from "next/dynamic";
import styled from "styled-components";

interface IMarketProps {
  input: {
    market_size: string;
    market_trend: string;
    hospital_count_past: string;
    hospital_count_now: string;
    hospital_count_trend: string;
    profit_per_area_size: string;
    profit_per_area_trend: string;
    address_dong: string;
    department: string;
    market_max_size: string;
    market_max_year: string;
    market_max_month: string;
    market_min_size: string;
    market_min_year: string;
    market_min_month: string;
    "3y_trend_start_year": string;
    "3y_trend_start_market_size": string;
    "3y_trend_end_year": string;
    "3y_trend_end_market_size": string;
    "3y_trend_percent": string;
    "3y_trend_hospital_count_difference": string;
    profit_per_50p: string;
    "3y_trend_profit_per_area_start_year": string;
    "3y_trend_profit_per_area_start_market_size": string;
    "3y_trend_profit_per_area_end_year": string;
    "3y_trend_profit_per_area_end_market_size": string;
    "3y_trend_profit_per_area_percent": string;
    market_size_short_trend: Trend[];
    market_size_long_trend: Trend[];
    hospital_count_short_trend: Trend[];
    hospital_count_long_trend: Trend[];
    profit_per_area_short_trend: Trend[];
    profit_per_area_long_trend: Trend[];
  };
}

const LineChart = dynamic(() => import("../Chart/LineChart"), { ssr: false });
const BarChart = dynamic(() => import("../Chart/BarChart"), { ssr: false });

const Market: React.FC<IMarketProps> = ({ input }) => {
  const sectionHeader = {
    sectionTitle: "시장 분석",
    sectionList: [
      "시장규모 단기 추세 (12개월)",
      "시장규모 장기 추세 (3년)",
      "의원 1평당 매출액 단기 추세 (12개월)",
      "의원 1평당 매출액 장기 추세 (3년)",
    ],
  };

  const data = input;
  const keyNumberData = [];
  keyNumberData.push(data.market_size);
  keyNumberData.push(data.market_trend);
  keyNumberData.push(data.hospital_count_now);
  keyNumberData.push(data.hospital_count_trend);
  keyNumberData.push(data.profit_per_area_size);
  keyNumberData.push(data.profit_per_area_trend);
  const titleSet = [
    "시장규모",
    "시장규모 장기 추세",
    "의원 개수",
    "의원 개수 장기 추세",
    "의원 1평당 매출액",
    "1평당 매출액 장기 추세",
  ];

  return (
    <>
      <Cover sectionHeader={sectionHeader} pathname="Cover2" />
      <TextBoxWrapper>
        {keyNumberData.map((item, index) => (
          <TextBox key={index} body={item} header={titleSet[index]} />
        ))}
      </TextBoxWrapper>
      <Body>
        <Card>
          {input.address_dong}의 {input.department} 시장규모는 월{" "}
          {input.market_size}입니다. 지난 12개월 중 최대값은 월{" "}
          {input.market_max_size} ({input.market_max_year}{" "}
          {input.market_max_month}) 이며, 최소값은 월 {input.market_min_size} (
          {input.market_min_year} {input.market_min_month}) 입니다. 최근 3년간
          시장규모 추세는 월 {input["3y_trend_start_year"]}{" "}
          {input["3y_trend_start_market_size"]}에서 월{" "}
          {input["3y_trend_end_year"]} {input["3y_trend_end_market_size"]} 으로{" "}
          {input["3y_trend_percent"]} {input.market_trend}하였습니다.{" "}
          {input.address_dong}의 현재 {input.department} 의원 개수는{" "}
          {input.hospital_count_now}입니다. 최근 3년간 의원 개수 추세는{" "}
          {input["3y_trend_start_year"]} {input.hospital_count_past}에서{" "}
          {input["3y_trend_end_year"]} {input.hospital_count_now}로{" "}
          {input["3y_trend_hospital_count_difference"]}{" "}
          {input.hospital_count_trend}하였습니다.<br></br>
          평수가 큰 의원일수록 매출이 높은 경향이 있기 때문에, 평수의 효과를
          제거한 1평당 매출액을 확인하는 것이 중요합니다. 의원 1평당 매출액은 월{" "}
          {input.profit_per_area_size}으로, 50평 의원 기준으로 환산하면 월{" "}
          {input.profit_per_50p} 입니다. 최근 3년 추세는{" "}
          {input["3y_trend_profit_per_area_start_year"]} 월{" "}
          {input["3y_trend_profit_per_area_start_market_size"]}에서{" "}
          {input["3y_trend_profit_per_area_end_year"]} 월{" "}
          {input["3y_trend_profit_per_area_end_market_size"]}으로{" "}
          {input["3y_trend_profit_per_area_percent"]}{" "}
          {input.profit_per_area_trend}하였습니다.{" "}
        </Card>
      </Body>
      <LineChart
        chartName="시장규모 단기 추세 (12개월)"
        chartUnit="만원"
        input={input.market_size_short_trend}
      />
      <BarChart
        chartName="시장규모 장기 추세 (3년)"
        chartUnit="만원"
        input={input.market_size_long_trend}
      />
      <LineChart
        chartName="의원 개수 단기 추세 (12개월)"
        chartUnit="개"
        input={input.hospital_count_short_trend}
      />
      <BarChart
        chartName="의원 개수 장기 추세 (3년)"
        chartUnit="개"
        input={input.hospital_count_long_trend}
      />
      <LineChart
        chartName="의원 1평당 매출액 단기 추세 (12개월)"
        chartUnit="만원"
        input={input.profit_per_area_short_trend}
      />
      <BarChart
        chartName="의원 1평당 매출액 장기 추세 (3년)"
        chartUnit="만원"
        input={input.profit_per_area_long_trend}
      />
    </>
  );
};

export default Market;

const Body = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
`;

const TextBoxWrapper = styled.div`
  margin: 17px 14px 16px 14px;
`;
