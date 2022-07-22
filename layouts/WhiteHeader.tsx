import Image from "next/image";
import Link from "next/link";
import chevronLeft from "../public/assets/Chevron-left.svg";
import logoWhite from "../public/assets/Logo-white.png";
import styled from "styled-components";

const WhiteHeader = () => {
    return (
        <>
            <Header>
                <div className="previous-page-button child child-left">
                    <div className="chevron-left">
                        <Image src={chevronLeft} alt="더보기" />
                    </div>
                    <Link href="/">
                        <a className="previous-page-text">돌아가기</a>
                    </Link>
                </div>
                <div className="child child-center">
                    <div className="logo-white">
                        <Image src={logoWhite} alt="logo-white" />
                    </div>
                </div>
                <div className="child child-right">
                    <span className="header-description">분석 리포트</span>
                </div>
            </Header>
        </>
    );
};

const Header = styled.header`
    height: 50px;
    padding: 20px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 900px;
    box-sizing: border-box;

    .chevron-left {
        width: 8px;
        height: 14px;
        margin-right: 7px;
    }

    .previous-page-text {
        font-weight: 400;
        font-size: 14px;

        color: #ffffff;
    }

    .previous-page-button {
        display: flex;
        align-items: center;
    }

    .logo-white {
        width: 70px;
        height: 21px;
    }

    .header-description {
        font-weight: 700;
        font-size: 16px;

        color: #ffffff;
    }

    .child {
        width: 33%;
    }

    .child-left {
        display: flex;
        justify-content: start;
    }

    .child-center {
        display: flex;
        justify-content: center;
    }

    .child-right {
        display: flex;
        justify-content: end;
    }
`;

export default WhiteHeader;
