import Cover1 from "../../public/assets/Cover1.png";
import Image from "next/image";
import styled from "styled-components";

interface ICoverProps {
    sectionHeader: {
        sectionTitle: string;
        sectionList: string[];
    };
}

const Cover: React.FC<ICoverProps> = (props) => {
    return (
        <CoverWrapper>
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
            <Image src={Cover1} objectFit="cover" alt="cover-1" layout="fill" />
        </CoverWrapper>
    );
};

const CoverWrapper = styled.div`
    height: calc(100vh - 90px);
    .section-header {
        position: relative;
        top: 45px;
        width: 100%;
        z-index: 1;
    }

    .section-title {
        font-family: "Noto Sans";
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        margin-left: 16px;
        padding: 16px;
        margin-bottom: 20px;
        color: white;
    }

    .section-list {
        font-family: "Noto Sans";
        font-style: normal;
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
