import React, { ReactNode } from "react";

import ColoredHeader from "./ColoredHeader";
import styled from "styled-components";

interface ILayoutProps {
    children: ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
    return (
        <>
            <ColoredHeader />
            <Content>{children}</Content>
        </>
    );
};

export default Layout;

const Content = styled.div`
    margin-top: -90px;
`;
