import React, { ReactNode } from "react";

import ColoredHeader from "./ColoredHeader";

interface ILayoutProps {
    children: ReactNode;
}
const Layout: React.FC<ILayoutProps> = ({ children }) => {
    return (
        <>
            <ColoredHeader />
            {children}
        </>
    );
};

export default Layout;
