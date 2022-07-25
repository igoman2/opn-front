import React, { ReactNode } from "react";

import ColoredHeader from "./ColoredHeader";
import styled from "styled-components";
import { useRouter } from "next/router";

interface ILayoutProps {
  children: ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  const router = useRouter();
  let hasManu;
  if (router.pathname === "/report") {
    hasManu = true;
    return (
      <>
        <ColoredHeader hasManu={hasManu} />
        <Content hasMenu={hasManu}>{children}</Content>
      </>
    );
  } else {
    hasManu = false;
    return (
      <>
        <ColoredHeader hasManu={hasManu} />
        <Content hasMenu={hasManu}>{children}</Content>
      </>
    );
  }
};

export default Layout;

interface StyleProps {
  hasMenu: boolean;
}

const Content = styled.div`
  margin-top: ${(props: StyleProps) => (props.hasMenu ? "-90px" : "")};
`;
