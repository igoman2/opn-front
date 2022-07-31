import Cover1 from "../../public/assets/Cover1.png";
import Image from "next/image";
import styled from "styled-components";

interface ICoverProps {
    pathname: string;
    sectionHeader: {
        sectionTitle: string;
        sectionList: string[];
    };
}

const Cover: React.FC<ICoverProps> = (props) => {
    return (
        <CoverWrapper pathname={props.pathname}>
            <div className="section-header">
                <div className="section-title">
                    {props.sectionHeader.sectionTitle}
                </div>
                <div className="section-list">
                    {props.sectionHeader.sectionList.map((item, i) => {
                        return (
                            <div key={i} className="section-list-item">
                                {item}
                            </div>
                        );
                    })}
                </div>
            </div>
        </CoverWrapper>
    );
};

interface StyledProps {
    pathname: string;
}

const CoverWrapper = styled.div`
    background: ${(props: StyledProps) =>
        `url("/assets/${props.pathname}.png")`};
    background-size: cover;
    height: 100vh;
    .section-header {
        position: relative;
        top: 145px;
        width: 100%;
        z-index: 1;
    }

    .section-title {
        font-weight: 700;
        font-size: 32px;
        margin-left: 16px;
        padding: 16px;
        margin-bottom: 20px;
        color: white;
    }

    .section-list {
        font-weight: 400;
        font-size: 18px;
        margin-left: 36px;

        color: white;
    }

    .section-list-item {
        margin-bottom: 12px;
    }
`;

export default Cover;
