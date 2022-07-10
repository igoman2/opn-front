import { Link } from "react-scroll";
import styled from "styled-components";
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

const Menus = styled.menu`
    display: flex;
    justify-content: space-evenly;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;
    max-width: 900px;
    box-sizing: border-box;
    color: ${(props: IMenuProps) => (props.isInCover ? "white" : "#3955B4")};
    margin-bottom: 10px;

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
