import styled from "styled-components";

interface IProgressBar {
    compIndex: number;
}

const ProgressBar: React.FC<IProgressBar> = (props) => {
    return (
        <ProgressBarWrapper>
            <div className="progress-container">
                <progress value={props.compIndex} max="100"></progress>
                <div className="line-container-left">
                    <span className="baseline-text">0.15</span>
                    <span className="baseline">z</span>
                </div>
                <div className="line-container-right">
                    <span className="baseline-text">0.25</span>
                    <span className="baseline">z</span>
                </div>
            </div>
            <div className="label">
                <div>치열한 경쟁</div>
                <div>균형적인 경쟁</div>
                <div>독과점</div>
            </div>
        </ProgressBarWrapper>
    );
};

export default ProgressBar;

const ProgressBarWrapper = styled.div`
    progress {
        border: 0;
        height: 14px;
        border-radius: 20px;
        width: 100%;
    }
    progress::-webkit-progress-bar {
        border: 0;
        height: 14px;
        border-radius: 20px;
        width: 100%;
        background-color: ${(props) =>
            `1px solid ${props.theme.colors.gray_3}`};
    }
    progress::-webkit-progress-value {
        border: 0;
        height: 14px;
        border-radius: 20px;
        width: 100%;
        background-color: ${(props) => props.theme.colors.blue_1};
    }
    progress::-moz-progress-bar {
        border: 0;
        height: 14px;
        border-radius: 20px;
        width: 100%;
    }

    .progress-container {
        position: relative;
        width: 100%;
        height: 27px;
        border-left: 1px solid gray;
        border-right: 1px solid gray;
        display: flex;
        align-items: center;
    }

    .line-container-left {
        top: -7px;
        left: calc(33% - 15px);
        width: 30px;
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .line-container-right {
        top: -7px;
        right: calc(33% - 15px);
        width: 30px;
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .baseline {
        color: transparent;
        background-color: ${(props) => props.theme.colors.gray_1};
        height: 17px;
        width: 1px;
        transform: scaleX(0.5);
    }

    .baseline-text {
        color: ${(props) => props.theme.colors.blue_1};
        font-size: 8px;
        font-weight: 400;
        opacity: 0.5;
    }

    .label {
        display: flex;
        width: 100%;
        flex-direction: row;
        color: ${(props) => props.theme.colors.blue_1};
        font-size: 8px;
        font-weight: 400;
        opacity: 0.5;
    }

    .label div {
        margin-top: 2px;
        width: 33%;
        text-align: center;
    }
`;
