import Image from "next/image";
import Link from "next/link";
import LogoColored from "../asset/Logo-colored.png";
import Menu from "./Menu";
import chevronLeft from "../asset/Chevron-left-blue.svg";
import styled from "styled-components";
import { useRouter } from "next/router";

const ColoredHeader = () => {
    const router = useRouter();
    return (
        <>
            <ColorHeader>
                {router.pathname === "/" ? (
                    <div className="child" style={{ visibility: "hidden" }}>
                        .
                    </div>
                ) : (
                    <div className="previous-page-button child child-left">
                        <div className="chevron-left">
                            <Image src={chevronLeft} alt="더보기" />
                        </div>

                        <Link href="/">
                            <a className="color-previous-page-text">돌아가기</a>
                        </Link>
                    </div>
                )}
                <div className="child child-center ">
                    <div className="logo-colored">
                        <Image src={LogoColored} alt="더보기" />
                    </div>
                </div>
                <div className="child child-right">
                    <span className="colored-header-description">
                        분석 리포트
                    </span>
                </div>
            </ColorHeader>
            <Menu isInCover={false} />
        </>
    );
};

export default ColoredHeader;

const ColorHeader = styled.header`
    height: 50px;
    padding: 20px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 900px;
    box-sizing: border-box;

    .logo-colored {
        width: 70px;
        height: 21px;
    }

    .color-previous-page-text {
        font-family: "Noto Sans";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        color: #3955b4;
        display: flex;
        align-items: center;
    }
    .colored-header-description {
        color: #3955b4;
        font-family: "Noto Sans";
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
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
