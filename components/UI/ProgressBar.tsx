// import "./ProgressBar.css";

interface IProgressBar {
    compIndex: number;
}

const ProgressBar: React.FC<IProgressBar> = (props) => {
    return (
        <div>
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
        </div>
    );
};

export default ProgressBar;
