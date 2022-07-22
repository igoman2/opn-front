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

export type Trend = {
    class: string;
    value: number;
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
            market_size_short_trend: Trend[];
            market_size_long_trend: Trend[];
            hospital_count_short_trend: Trend[];
            hospital_count_long_trend: Trend[];
            profit_per_area_short_trend: Trend[];
            profit_per_area_long_trend: Trend[];
        };
    };
}

const resp = {
    intro: {
        department: "일반의원",
        department_group: "일반의원, 가정의학과, 내과",
        address_dong: "청운효자동",
        address_sido_sigungu: "서울특별시 종로구",
        address_realated_dongs:
            "청운동, 신교동, 궁정동, 효자동, 창성동, 통인동, 누상동, 누하동, 옥인동, 세종로",
        hospital_count: "2개",
        big_hospital_count: "0개",
        big_hospital_departments: "",
        sales_reflection: "31%",
        hospital_table: [
            {
                name: "곽내과의원",
                department: "내과",
                open_year: "2012년",
                area: "36평",
                prof: "내과 1명",
            },
            {
                name: "강남의원",
                department: "일반의원",
                open_year: "2012년",
                area: "31평",
                prof: "영상의학과 1명",
            },
        ],
        hospital_top10_table: [],
        big_hospital_table: [],
        hospital_headers: [
            {
                name: "사업장명",
                department: "진료과",
                open_year: "개원년도",
                area: "면적",
                prof: "전문의",
            },
        ],
    },
    market_analysis: {
        market_size: "2006만원",
        market_trend: "증가",
        hospital_count_past: "2개",
        hospital_count_now: "2개",
        hospital_count_trend: "유지",
        profit_per_area_size: "28만원",
        profit_per_area_trend: "증가",
        address_dong: "청운효자동",
        department: "일반의원",
        market_max_size: "2631만원",
        market_max_year: "2022년",
        market_max_month: "4월",
        market_min_size: "1445만원",
        market_min_year: "2022년",
        market_min_month: "1월",
        "3y_trend_start_year": "2020년",
        "3y_trend_start_market_size": "1632만원",
        "3y_trend_end_year": "2022년",
        "3y_trend_end_market_size": "2027만원",
        "3y_trend_percent": "24%",
        "3y_trend_hospital_count_difference": "0개",
        profit_per_50p: "1400만원",
        "3y_trend_profit_per_area_start_year": "2020년",
        "3y_trend_profit_per_area_start_market_size": "23만원",
        "3y_trend_profit_per_area_end_year": "2022년",
        "3y_trend_profit_per_area_end_market_size": "29만원",
        "3y_trend_profit_per_area_percent": "26%",
        market_size_short_trend: [
            { class: "2021년 6월", value: 2266 },
            { class: "2021년 7월", value: 1782 },
            { class: "2021년 8월", value: 1870 },
            { class: "2021년 9월", value: 1604 },
            { class: "2021년 10월", value: 2524 },
            { class: "2021년 11월", value: 2164 },
            { class: "2021년 12월", value: 1726 },
            { class: "2022년 1월", value: 1445 },
            { class: "2022년 2월", value: 2066 },
            { class: "2022년 3월", value: 2141 },
            { class: "2022년 4월", value: 2631 },
            { class: "2022년 5월", value: 1851 },
        ],
        market_size_long_trend: [
            { class: "2020년", value: 1632 },
            { class: "2021년", value: 1786 },
            { class: "2022년", value: 2027 },
        ],
        hospital_count_short_trend: [
            { class: "2021년 2분기", value: 2 },
            { class: "2021년 3분기", value: 2 },
            { class: "2021년 4분기", value: 2 },
            { class: "2022년 1분기", value: 2 },
        ],
        hospital_count_long_trend: [
            { class: "2020년", value: 2 },
            { class: "2021년", value: 2 },
            { class: "2022년", value: 2 },
        ],
        profit_per_area_short_trend: [
            { class: "2021년 6월", value: 32 },
            { class: "2021년 7월", value: 25 },
            { class: "2021년 8월", value: 27 },
            { class: "2021년 9월", value: 23 },
            { class: "2021년 10월", value: 36 },
            { class: "2021년 11월", value: 31 },
            { class: "2021년 12월", value: 24 },
            { class: "2022년 1월", value: 21 },
            { class: "2022년 2월", value: 29 },
            { class: "2022년 3월", value: 30 },
            { class: "2022년 4월", value: 37 },
            { class: "2022년 5월", value: 26 },
        ],
        profit_per_area_long_trend: [
            { class: "2020년", value: 23 },
            { class: "2021년", value: 25 },
            { class: "2022년", value: 29 },
        ],
    },
    competitive_analysis: {
        all_hospital_average_profit: "913만원",
        new_hospital_average_profit: "정보 없음",
        competition_type: "독과점",
        competition_rate: "0.72로",
        address_dong: "청운효자동",
        department: "일반의원",
        new_hospital_count: "0개",
        all_to_new_compare: "낮습니다",
        hospital_profit_distribution_chart: [
            { class: "의원1", value: 1516 },
            { class: "의원2", value: 310 },
        ],
        competition_table: [
            { profit: "1516만원", acquisition_rate: "83%", rate_squared: 0.69 },
            { profit: "310만원", acquisition_rate: "17%", rate_squared: 0.03 },
        ],
        competition_top10_table: [
            { profit: "1516만원", acquisition_rate: "83%", rate_squared: 0.69 },
            { profit: "310만원", acquisition_rate: "17%", rate_squared: 0.03 },
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
                open_date: "개업일자",
                hospital_name: "상호명",
                area: "면적(평)",
                prof: "전문의",
            },
        ],
        new_hospital_table: [],
        closed_hospital_headers: [
            {
                open_date: "개업일자",
                closed_date: "폐업일자",
                hospital_name: "상호명",
                area: "면적(평)",
            },
        ],
        closed_hospital_table: [],
    },
    user_analysis: {
        major_customer_age_sex: "60대 이상 여성",
        major_customer_profit: "4천~6천만원",
        major_customer_profit_ratio: "31%",
        average_profit_per_customer: "1만 4350원",
        address_dong: "청운효자동",
        department: "일반의원",
        customer_male_ratio: "41%",
        customer_female_ratio: "59%",
        sex_compare: "여성",
        male_max_count_age: "60대 이상으로",
        male_max_count_ratio: "31%",
        female_max_count_age: "60대 이상으로",
        female_max_count_ratio: "38%",
        max_average_profit_per_customer: "1만 8562원",
        max_average_profit_per_customer_year: "2021년",
        max_average_profit_per_customer_month: "10월",
        min_average_profit_per_customer: "1만 513원",
        min_average_profit_per_customer_year: "2022년",
        min_average_profit_per_customer_month: "1월",
        "3year_trend_early_size": "1만 4913원",
        "3year_trend_late_size": "1만 9728원",
        "3year_trend_percent": "7%",
        "3year_trend_compare": "감소",
        sex_distribution_chart: [
            { class: "남성", value: 41 },
            { class: "여성", value: 59 },
        ],
        male_age_distribution_chart: [
            { class: "20대", value: 11 },
            { class: "30대", value: 13 },
            { class: "40대", value: 19 },
            { class: "50대", value: 26 },
            { class: "60대 이상", value: 31 },
        ],
        female_age_distribution_chart: [
            { class: "20대", value: 13 },
            { class: "30대", value: 12 },
            { class: "40대", value: 18 },
            { class: "50대", value: 19 },
            { class: "60대 이상", value: 38 },
        ],
        customer_profit_distribution_chart: [
            { class: "정보 없음", value: 5 },
            { class: "2천만원 미만", value: 3 },
            { class: "2000만원~3000만원", value: 0 },
            { class: "3000만원~4000만원", value: 15 },
            { class: "4000만원~6000만원", value: 31 },
            { class: "6000만원~8000만원", value: 15 },
            { class: "8000만원~1억원", value: 13 },
            { class: "1억원 이상", value: 19 },
        ],
        average_profit_per_customer_short_chart: [
            { class: "2021년 6월", value: 15882 },
            { class: "2021년 7월", value: 14187 },
            { class: "2021년 8월", value: 14202 },
            { class: "2021년 9월", value: 13322 },
            { class: "2021년 10월", value: 18562 },
            { class: "2021년 11월", value: 14239 },
            { class: "2021년 12월", value: 12296 },
            { class: "2022년 1월", value: 10513 },
            { class: "2022년 2월", value: 16206 },
            { class: "2022년 3월", value: 14312 },
            { class: "2022년 4월", value: 14618 },
            { class: "2022년 5월", value: 13857 },
        ],
        average_profit_per_customer_long_chart: [
            { class: "2020년", value: 14913 },
            { class: "2021년", value: 13812 },
            { class: "2022년", value: 13901 },
        ],
    },
};

const Report: React.FC<IReportProps> = ({ data }) => {
    return (
        <>
            <Intro input={data.intro} />
            <Market input={data.market_analysis} />
            <Compete />
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
