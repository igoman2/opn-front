import { DEPARTMENTS, LOCATIONS } from "../../util/hospitalOptions";

import Dropdown from "./Dropdown";
import Image from "next/image";
import reportIcon from "../../public/assets/carbon_report.svg";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useState } from "react";

export interface SearchInput {
    label: string;
    value: string;
}
const InputForm = () => {
    const router = useRouter();
    const [department, setDepartment] = useState("");
    const [location, setLocation] = useState("");

    let isValid = department !== "" && location !== "";
    const departmentSelectHandler = (selectedValue: SearchInput) => {
        setDepartment(selectedValue.value);
    };

    const locationSelectHandler = (selectedValue: SearchInput) => {
        setLocation(selectedValue.value);
    };

    const submitHandler = async () => {
        if (department === "" || location === "") {
            return;
        }
        router.push({
            pathname: "/report",
            query: {
                department: department,
                location: location,
            },
        });
    };

    return (
        <InputFormWrapper>
            <InputFormSection>
                <Dropdown
                    title="진료과목을 알려주세요"
                    options={DEPARTMENTS}
                    onSelect={departmentSelectHandler}
                    placeholder="진료과목 검색"
                />
                <Dropdown
                    title="관심있는 지역을 알려주세요"
                    options={LOCATIONS}
                    onSelect={locationSelectHandler}
                    placeholder="행정동 검색"
                />
            </InputFormSection>
            <BottomButton
                disabled={!isValid}
                className="bottom-wrapper"
                onClick={submitHandler}
            >
                <div className="report-icon">
                    <Image src={reportIcon} alt="report" />
                </div>

                <span className="bottom-button-text">분석 리포트 보기</span>
            </BottomButton>
        </InputFormWrapper>
    );
};

export default InputForm;

const InputFormWrapper = styled.div`
    margin-top: 90px;
`;

const InputFormSection = styled.div`
    margin: 15px 20px 15px 20px;

    .question {
        font-weight: 700;
        font-size: 18px;
        margin-bottom: 10px;
    }

    .question-wrapper-for-one {
        margin-bottom: 20px;
    }

    .dropdown-wrapper {
        width: 320px;
        margin-top: 10px;
    }

    .department {
        border: 1px solid ${(props) => props.theme.colors.gray_1};
        border-radius: 30px;
        height: 42px;
        font-weight: 400;
        font-size: 14px;
        color: ${(props) => props.theme.colors.gray_2};
        display: flex;
        align-items: center;
        padding: 0px 17px 0px 20px;
        justify-content: space-between;
        position: relative;
    }

    .department-list-wrapper {
        width: 320px;
        position: absolute;
    }

    .department-list {
        border: 1px solid ${(props) => props.theme.colors.black};
    }

    .css-1okebmr-indicatorSeparator {
        display: none;
    }
`;

const BottomButton = styled.button`
    position: absolute;
    width: 100%;
    height: 52px;
    left: 0px;
    bottom: 0px;
    display: flex;
    background: ${(props) => props.theme.colors.blue_1};
    justify-content: center;
    align-items: center;
    border: none;

    &:disabled {
        background: ${(props) => props.theme.colors.blue_1};
        opacity: 0.5;
    }

    .report-icon {
        width: 24px;
        height: 24px;
        margin: 9px;
    }

    .bottom-button-text {
        font-weight: 700;
        font-size: 16px;
        text-align: center;
        color: ${(props) => props.theme.colors.white};
    }
`;
