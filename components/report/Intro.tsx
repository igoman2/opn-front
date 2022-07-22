import { HospitalHeader, HospitalTable } from "../../pages/report";

import Card from "../UI/Card";
import Cover from "./Cover";
import Dictionary from "../UI/Dictionary";
import Image from "next/image";
import List from "../List/List";
import pin from "../../public/assets/pin_icon.svg";
import styled from "styled-components";

interface IIntroProps {
    input: {
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
}

const Intro: React.FC<IIntroProps> = (props) => {
    const introData = props.input;
    let dep = introData.department;

    let depIcon = "기타";
    switch (dep) {
        case "정형외과":
            depIcon = "정형외과";
            break;
        case "마취통증의학과":
            depIcon = "정형외과";
            break;
        case "재활의학과":
            depIcon = "정형외과";
            break;
        case "신경외과":
            depIcon = "정형외과";
            break;
        case "일반의원":
            depIcon = "내과";
            break;
        case "가정의학과":
            depIcon = "내과";
            break;
        case "내과":
            depIcon = "내과";
            break;
        case "소아과":
            depIcon = "이비인후과";
            break;
        case "피부과":
            depIcon = "피부과";
            break;
        case "성형외과":
            depIcon = "성형외과";
            break;
        case "정신건강의학과":
            depIcon = "정신건강의학과";
            break;
        case "안과":
            depIcon = "안과";
            break;
        case "치과":
            depIcon = "치과";
            break;
    }
    // const iconUrl = "icon/" + "icon-" + depIcon + ".svg";
    const iconURL = require(`../../public/assets/icon-${depIcon}.svg`);

    const sectionHeader = {
        sectionTitle: "개요",
        sectionList: ["의료기관 목록", "개원여기 분석 결과"],
    };

    return (
        <IntroWrapper>
            <Cover sectionHeader={sectionHeader} pathname="Cover1" />
            <Card>
                <div className="intro-head">
                    <Image src={pin} alt="pin" />
                    <span className="intro-dong-name">
                        {introData.address_sido_sigungu}{" "}
                        {introData.address_dong}
                    </span>
                </div>
                <div className="intro-body-1">
                    <div className="intro-body-1-left">
                        <Image src={iconURL} alt="body" />
                        <div className="intro-dep-name-top">
                            {introData.department}
                        </div>
                    </div>
                </div>
                <div className="intro-paragraph">
                    {introData.address_dong}은 {introData.address_sido_sigungu}
                    의 행정동으로, 지리 상 {introData.address_realated_dongs}을
                    포함하고 있습니다. 오픈닥터의 개원 입지 분석 시스템에서{" "}
                    {introData.address_dong} 내 분석 대상 의원은 총{" "}
                    {introData.hospital_count} 입니다. 또한 병원급 의료기관은
                    {introData.big_hospital_count === "0개" ? (
                        <span> 없습니다.</span>
                    ) : (
                        <span>
                            {" "}
                            {introData.big_hospital_count} 존재하며,{" "}
                            {introData.big_hospital_departments}가 있습니다.
                        </span>
                    )}
                    <div className="intro-long-line"></div>
                </div>
                <div className="intro-guide-text-bot">
                    분석에 활용되는 진료과
                </div>
                <div className="intro-dep-name-bot">
                    {introData.department_group}
                </div>
            </Card>
            <Dictionary input={props.input} />
            <List
                listTitle="의료기관 목록"
                list={props.input.hospital_table}
                header="의원급"
            />
            <List list={props.input.big_hospital_table} header="병원급" />
        </IntroWrapper>
    );
};

export default Intro;

const IntroWrapper = styled.div`
    .intro-head {
        display: flex;
        align-items: center;
    }

    .intro-body-1 {
        display: flex;
        justify-content: space-around;
        margin-top: 32px;
    }

    .intro-body-1-left {
        margin: 0px 48px 0px 48px;
    }

    .intro-body-1-right {
        margin-top: 10px;
    }

    .intro-paragraph {
        font-weight: 400;
        font-size: 16px;
        margin-top: 32px;
    }

    .intro-dong-name {
        font-weight: 700;
        font-size: 14px;
        margin-left: 9px;
    }

    .intro-dep-name-top {
        font-weight: 700;
        font-size: 18px;
        text-align: center;
        margin-top: 15px;
        color: #3955b4;
    }

    .txt-attractiveness-head {
        font-weight: 700;
        font-size: 14px;
        color: #121212;
    }

    .txt-attractiveness-body {
        font-weight: 700;
        font-size: 24px;
        color: #3955b4;
    }

    .intro-short-line {
        width: 15.11px;
        height: 0px;
        border: 1.0424px solid #dcdcdc;
        margin: 12px 0px 12px 0px;
    }

    .intro-long-line {
        width: 100%;
        height: 0px;
        border: 1.0424px solid #dcdcdc;
        margin: 20px 0px 20px 0px;
    }

    .intro-guide-text-bot {
        font-weight: 400;
        font-size: 14px;
        color: #000000;
        opacity: 0.5;
        margin-bottom: 12px;
    }

    .intro-dep-name-bot {
        font-weight: 400;
        font-size: 14px;
    }
`;
