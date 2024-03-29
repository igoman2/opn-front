import styled, { DefaultTheme, ThemeProps } from "styled-components";

import { Link } from "react-scroll";
import { useState } from "react";

const menuItems = ["개요", "시장분석", "경쟁분석", "고객분석"];

interface IMenuProps {
    isInCover: boolean;
}

const Menu: React.FC<IMenuProps> = (props) => {
    const [currentTarget, setCurrentTarget] = useState<number>();

    const linkHandler = (target: number) => {
        setCurrentTarget(target);
    };

    return (
        <Menus isInCover={props.isInCover}>
            {menuItems.map((item, i) => {
                return (
                    <Link
                        key={`menu-${i}`}
                        smooth={true}
                        to={`section-${i + 1}`}
                        spy={true}
                        onClick={linkHandler.bind(null, i)}
                    >
                        <span className={currentTarget === i ? "current" : ""}>
                            {item}
                        </span>
                    </Link>
                );
            })}
        </Menus>
    );
};

const Menus = styled.div`
    display: flex;
    justify-content: space-evenly;
    font-weight: 400;
    font-size: 14px;
    max-width: 900px;
    box-sizing: border-box;
    color: ${(props: IMenuProps & ThemeProps<DefaultTheme>) =>
        props.isInCover ? props.theme.colors.white : props.theme.colors.blue_1};
    height: 40px;

    a {
        padding: 10px;
        cursor: pointer;
    }

    .current {
        font-size: 16px;
        text-decoration: underline;
    }
`;

export default Menu;
