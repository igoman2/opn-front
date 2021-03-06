import ColoredHeader from "../../layouts/ColoredHeader";
import Compete from "../../components/report/Compete";
import Intro from "../../components/report/Intro";
import Market from "../../components/report/Market";
import User from "../../components/report/User";
import WhiteHeader from "../../layouts/WhiteHeader";

interface ContextType {
  query: {
    department: string;
    location: string;
  };
}

export type HospitalTable = {
  name: string;
  department: string;
  open_year: string;
  area: string;
  prof: string;
};

export type HospitalHeader = {
  name: string;
  department: string;
  open_year: string;
  area: string;
  prof: string;
};

export type ChartValue = {
  class: string;
  value: number;
};

export type TableValue = {
  profit: string;
  acquisition_rate: string;
  rate_squared: number;
};

interface IReportProps {
  data: {
    intro: {
      department: string;
      department_group: string;
      address_dong: string;
      address_sido_sigungu: string;
      address_realated_dongs: string;
      hospital_count: string;
      big_hospital_count: string;
      big_hospital_departments: string;
      sales_reflection: string;
      hospital_table: HospitalTable[];
      hospital_top10_table: HospitalTable[];
      big_hospital_table: HospitalTable[];
      hospital_headers: HospitalHeader[];
    };
    market_analysis: {
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
      market_size_short_trend: ChartValue[];
      market_size_long_trend: ChartValue[];
      hospital_count_short_trend: ChartValue[];
      hospital_count_long_trend: ChartValue[];
      profit_per_area_short_trend: ChartValue[];
      profit_per_area_long_trend: ChartValue[];
    };
    competitive_analysis: {
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
  };
}

const resp = {
  intro: {
    department: "????????????",
    department_group: "????????????, ???????????????, ??????",
    address_dong: "???????????????",
    address_sido_sigungu: "??????????????? ?????????",
    address_realated_dongs:
      "?????????, ?????????, ?????????, ?????????, ?????????, ?????????, ?????????, ?????????, ?????????, ?????????",
    hospital_count: "2???",
    big_hospital_count: "0???",
    big_hospital_departments: "",
    sales_reflection: "31%",
    hospital_table: [
      {
        name: "???????????????",
        department: "??????",
        open_year: "2012???",
        area: "36???",
        prof: "?????? 1???",
      },
      {
        name: "????????????",
        department: "????????????",
        open_year: "2012???",
        area: "31???",
        prof: "??????????????? 1???",
      },
    ],
    hospital_top10_table: [],
    big_hospital_table: [],
    hospital_headers: [
      {
        name: "????????????",
        department: "?????????",
        open_year: "????????????",
        area: "??????",
        prof: "?????????",
      },
    ],
  },
  market_analysis: {
    market_size: "2006??????",
    market_trend: "??????",
    hospital_count_past: "2???",
    hospital_count_now: "2???",
    hospital_count_trend: "??????",
    profit_per_area_size: "28??????",
    profit_per_area_trend: "??????",
    address_dong: "???????????????",
    department: "????????????",
    market_max_size: "2631??????",
    market_max_year: "2022???",
    market_max_month: "4???",
    market_min_size: "1445??????",
    market_min_year: "2022???",
    market_min_month: "1???",
    "3y_trend_start_year": "2020???",
    "3y_trend_start_market_size": "1632??????",
    "3y_trend_end_year": "2022???",
    "3y_trend_end_market_size": "2027??????",
    "3y_trend_percent": "24%",
    "3y_trend_hospital_count_difference": "0???",
    profit_per_50p: "1400??????",
    "3y_trend_profit_per_area_start_year": "2020???",
    "3y_trend_profit_per_area_start_market_size": "23??????",
    "3y_trend_profit_per_area_end_year": "2022???",
    "3y_trend_profit_per_area_end_market_size": "29??????",
    "3y_trend_profit_per_area_percent": "26%",
    market_size_short_trend: [
      { class: "2021??? 6???", value: 2266 },
      { class: "2021??? 7???", value: 1782 },
      { class: "2021??? 8???", value: 1870 },
      { class: "2021??? 9???", value: 1604 },
      { class: "2021??? 10???", value: 2524 },
      { class: "2021??? 11???", value: 2164 },
      { class: "2021??? 12???", value: 1726 },
      { class: "2022??? 1???", value: 1445 },
      { class: "2022??? 2???", value: 2066 },
      { class: "2022??? 3???", value: 2141 },
      { class: "2022??? 4???", value: 2631 },
      { class: "2022??? 5???", value: 1851 },
    ],
    market_size_long_trend: [
      { class: "2020???", value: 1632 },
      { class: "2021???", value: 1786 },
      { class: "2022???", value: 2027 },
    ],
    hospital_count_short_trend: [
      { class: "2021??? 2??????", value: 2 },
      { class: "2021??? 3??????", value: 2 },
      { class: "2021??? 4??????", value: 2 },
      { class: "2022??? 1??????", value: 2 },
    ],
    hospital_count_long_trend: [
      { class: "2020???", value: 2 },
      { class: "2021???", value: 2 },
      { class: "2022???", value: 2 },
    ],
    profit_per_area_short_trend: [
      { class: "2021??? 6???", value: 32 },
      { class: "2021??? 7???", value: 25 },
      { class: "2021??? 8???", value: 27 },
      { class: "2021??? 9???", value: 23 },
      { class: "2021??? 10???", value: 36 },
      { class: "2021??? 11???", value: 31 },
      { class: "2021??? 12???", value: 24 },
      { class: "2022??? 1???", value: 21 },
      { class: "2022??? 2???", value: 29 },
      { class: "2022??? 3???", value: 30 },
      { class: "2022??? 4???", value: 37 },
      { class: "2022??? 5???", value: 26 },
    ],
    profit_per_area_long_trend: [
      { class: "2020???", value: 23 },
      { class: "2021???", value: 25 },
      { class: "2022???", value: 29 },
    ],
  },
  competitive_analysis: {
    all_hospital_average_profit: "913??????",
    new_hospital_average_profit: "?????? ??????",
    competition_type: "?????????",
    competition_rate: "0.72???",
    address_dong: "???????????????",
    department: "????????????",
    new_hospital_count: "0???",
    all_to_new_compare: "????????????",
    hospital_profit_distribution_chart: [
      { class: "??????1", value: 1516 },
      { class: "??????2", value: 310 },
    ],
    competition_table: [
      { profit: "1516??????", acquisition_rate: "83%", rate_squared: 0.69 },
      { profit: "310??????", acquisition_rate: "17%", rate_squared: 0.03 },
    ],
    competition_top10_table: [
      { profit: "1516??????", acquisition_rate: "83%", rate_squared: 0.69 },
      { profit: "310??????", acquisition_rate: "17%", rate_squared: 0.03 },
    ],
    competition_rest_info: [
      {
        rest_hospital_count: 0,
        rate_sum_top10: 100,
        rate_squared_sum_top10: 0.72,
        rate_sum_rest: 0,
        rate_squared_sum_rest: 0,
      },
    ],
    new_hospital_headers: [
      {
        open_date: "????????????",
        hospital_name: "?????????",
        area: "??????(???)",
        prof: "?????????",
      },
    ],
    new_hospital_table: [],
    closed_hospital_headers: [
      {
        open_date: "????????????",
        closed_date: "????????????",
        hospital_name: "?????????",
        area: "??????(???)",
      },
    ],
    closed_hospital_table: [],
  },
  user_analysis: {
    major_customer_age_sex: "60??? ?????? ??????",
    major_customer_profit: "4???~6?????????",
    major_customer_profit_ratio: "31%",
    average_profit_per_customer: "1??? 4350???",
    address_dong: "???????????????",
    department: "????????????",
    customer_male_ratio: "41%",
    customer_female_ratio: "59%",
    sex_compare: "??????",
    male_max_count_age: "60??? ????????????",
    male_max_count_ratio: "31%",
    female_max_count_age: "60??? ????????????",
    female_max_count_ratio: "38%",
    max_average_profit_per_customer: "1??? 8562???",
    max_average_profit_per_customer_year: "2021???",
    max_average_profit_per_customer_month: "10???",
    min_average_profit_per_customer: "1??? 513???",
    min_average_profit_per_customer_year: "2022???",
    min_average_profit_per_customer_month: "1???",
    "3year_trend_early_size": "1??? 4913???",
    "3year_trend_late_size": "1??? 9728???",
    "3year_trend_percent": "7%",
    "3year_trend_compare": "??????",
    sex_distribution_chart: [
      { class: "??????", value: 41 },
      { class: "??????", value: 59 },
    ],
    male_age_distribution_chart: [
      { class: "20???", value: 11 },
      { class: "30???", value: 13 },
      { class: "40???", value: 19 },
      { class: "50???", value: 26 },
      { class: "60??? ??????", value: 31 },
    ],
    female_age_distribution_chart: [
      { class: "20???", value: 13 },
      { class: "30???", value: 12 },
      { class: "40???", value: 18 },
      { class: "50???", value: 19 },
      { class: "60??? ??????", value: 38 },
    ],
    customer_profit_distribution_chart: [
      { class: "?????? ??????", value: 5 },
      { class: "2????????? ??????", value: 3 },
      { class: "2000??????~3000??????", value: 0 },
      { class: "3000??????~4000??????", value: 15 },
      { class: "4000??????~6000??????", value: 31 },
      { class: "6000??????~8000??????", value: 15 },
      { class: "8000??????~1??????", value: 13 },
      { class: "1?????? ??????", value: 19 },
    ],
    average_profit_per_customer_short_chart: [
      { class: "2021??? 6???", value: 15882 },
      { class: "2021??? 7???", value: 14187 },
      { class: "2021??? 8???", value: 14202 },
      { class: "2021??? 9???", value: 13322 },
      { class: "2021??? 10???", value: 18562 },
      { class: "2021??? 11???", value: 14239 },
      { class: "2021??? 12???", value: 12296 },
      { class: "2022??? 1???", value: 10513 },
      { class: "2022??? 2???", value: 16206 },
      { class: "2022??? 3???", value: 14312 },
      { class: "2022??? 4???", value: 14618 },
      { class: "2022??? 5???", value: 13857 },
    ],
    average_profit_per_customer_long_chart: [
      { class: "2020???", value: 14913 },
      { class: "2021???", value: 13812 },
      { class: "2022???", value: 13901 },
    ],
  },
};

const Report: React.FC<IReportProps> = ({ data }) => {
  return (
    <>
      <Intro input={data.intro} />
      <Market input={data.market_analysis} />
      <Compete input={data.competitive_analysis} />
      <User />
    </>
  );
};

export async function getServerSideProps(context: ContextType) {
  try {
    const resp = await fetch(
      `https://opn-server.herokuapp.com/report/?department=${context.query.department}&location=${context.query.location}`
    );
    const respJSON = await resp.json();

    return {
      props: {
        data: respJSON,
      },
    };
  } catch {
    return {
      notFound: true,
      // redirect: {
      //     destination: '/'
      // }
    };
  }
}

export default Report;
