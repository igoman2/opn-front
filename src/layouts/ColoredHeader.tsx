import { useRouter } from "next/router";

import Image from "next/image";
import Link from "next/link";
import LogoColored from "../public/assets/Logo-colored.png";
import Menu from "./Menu";
import chevronLeft from "../public/assets/Chevron-left-blue.svg";
import styled from "styled-components";
import { useAuthStore } from "../store";
import { useEffect, useState } from "react";

interface IColoredHeader {
  hasManu: boolean;
}

const ColoredHeader: React.FC<IColoredHeader> = ({ hasManu }) => {
  const router = useRouter();
  const isInMain = router.pathname === "/search";
  const isInReport = router.pathname === "/report";
  const { logout, isLoggedIn } = useAuthStore();

  const [isLoggedIn2, setIsLoggedIn2] = useState(false);

  useEffect(() => {
    setIsLoggedIn2(isLoggedIn());
  }, [isLoggedIn()]);

  const logoutHandler = () => {
    logout();
  };

  const logoClickHandler = () => {
    router.push("/search");
  };

  return (
    <HeaderWrapper>
      <Header>
        {isInReport ? (
          <div className="previous-page-button child child-left">
            <div className="chevron-left">
              <Image src={chevronLeft} alt="더보기" />
            </div>

            <Link href="/">
              <a className="color-previous-page-text">돌아가기</a>
            </Link>
          </div>
        ) : (
          <div className="child" style={{ visibility: "hidden" }}>
            .
          </div>
        )}
        <div className="child child-center ">
          <div className="logo-colored" onClick={logoClickHandler}>
            <Image src={LogoColored} alt="logo-color" />
          </div>
        </div>
        <div className="child child-right">
          <span className="colored-header-description">분석 리포트</span>
        </div>
        {isLoggedIn2 ? (
          <button onClick={logoutHandler}>로그아웃</button>
        ) : (
          <Link href="/login">로그인</Link>
        )}
      </Header>
      {!isInMain && hasManu ? <Menu isInCover={false} /> : null}
    </HeaderWrapper>
  );
};

export default ColoredHeader;

const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Header = styled.header`
  height: 50px;
  padding: 20px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 900px;
  width: 100%;
  box-sizing: border-box;
  position: sticky;
  top: 0;
  z-index: 100;

  .chevron-left {
    width: 8px;
    height: 14px;
    margin-right: 7px;
  }

  .logo-colored {
    width: 70px;
    height: 21px;
    cursor: pointer;
  }

  .color-previous-page-text {
    font-weight: 400;
    font-size: 14px;
    color: ${(props) => props.theme.colors.blue_1};
    display: flex;
    align-items: center;
  }
  .colored-header-description {
    color: ${(props) => props.theme.colors.blue_1};
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
