import Card from "./Card";
import styled from "styled-components";

interface IDictionary {
    input: {
        department: string;
        address_dong: string;
        address_sido_sigungu: string;
        address_realated_dongs: string;
        big_hospital_count: string;
        department_group: string;
        hospital_count: string;
        big_hospital_departments: string;
        sales_reflection: string;
    };
}

const Dictionary: React.FC<IDictionary> = (props) => {
    const dictData = props.input;

    return (
        <Card backgroundColor="#ededec">
            <DictionaryWrapper>
                <div className="dictionary-box">
                    <div className="dictionary-header">용어 설명</div>
                    <div className="dictionary-body-wrapper">
                        <div className="dictionary-body">
                            <div className="dictionary-body-word">매출액</div>
                            <div className="dictionary-body-meaning">
                                <div>월간 카드 매출 합계를 의미합니다.</div>
                                <div className="dictionary-body-explanation">
                                    (심사평가원 제공 데이터 분석 기반 오픈닥터
                                    추정에 따르면 {dictData.department}의 카드
                                    매출은 보험급여가 포함된 실제 매출의{" "}
                                    {dictData.sales_reflection}를 반영합니다)
                                </div>
                            </div>
                        </div>

                        <div className="dictionary-line" />
                        <div className="dictionary-body">
                            <div className="dictionary-body-word">시장규모</div>
                            <div className="dictionary-body-meaning">
                                <div>
                                    분석 대상 의원들의 월 매출액 합계이며, 지난
                                    12개월의 평균값을 사용합니다.
                                </div>
                            </div>
                        </div>
                        <div className="dictionary-line" />
                        <div className="dictionary-body">
                            <div className="dictionary-body-word">객단가</div>
                            <div className="dictionary-body-meaning">
                                <div>
                                    고객의 결제 건당 금액을 의미하며, 지난
                                    12개월의 평균값을 사용합니다.{" "}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </DictionaryWrapper>
        </Card>
    );
};

export default Dictionary;

const DictionaryWrapper = styled.div`
    .dictionary-header {
        font-family: "Noto Sans";
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        color: #000000;

        opacity: 0.3;
    }

    .dictionary-body-wrapper {
        padding: 5px;
        margin-top: 23px;
    }

    .dictionary-body {
        display: flex;
    }

    .dictionary-body-word {
        font-family: "Noto Sans";
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        width: 10em;
        color: #3955b4;
        margin-right: 10px;
    }

    .dictionary-body-meaning {
        font-family: "Noto Sans";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;

        color: #000000;
    }

    .dictionary-body-explanation {
        font-family: "Noto Sans";
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        color: #000000;
        margin-top: 6px;
    }

    .dictionary-line {
        height: 0px;
        border: 1.0424px solid #dcdcdc;
        margin: 12px 0px 12px 0px;
    }
`;
