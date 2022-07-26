// import "./CompBar.css";

import ProgressBar from "../ProgressBar";
import React from "react";

interface ICompBarProps {
    sumVal: number;
}

const CompBar: React.FC<ICompBarProps> = (props) => {
    const fetchedScore = props.sumVal;

    let compIndex = 0;
    if (fetchedScore >= 0 && fetchedScore <= 0.05) {
        compIndex = 11;
    }

    if (fetchedScore > 0.05 && fetchedScore <= 0.1) {
        compIndex = 22;
    }

    if (fetchedScore > 0.1 && fetchedScore <= 0.15) {
        compIndex = 33;
    }

    if (fetchedScore > 0.15 && fetchedScore <= 0.2) {
        compIndex = 50;
    }

    if (fetchedScore > 0.2 && fetchedScore <= 0.25) {
        compIndex = 67;
    }

    if (fetchedScore > 0.25 && fetchedScore <= 0.3) {
        compIndex = 78;
    }

    if (fetchedScore > 0.3 && fetchedScore <= 0.35) {
        compIndex = 89;
    }

    if (fetchedScore > 0.35 && fetchedScore <= 0.4) {
        compIndex = 100;
    }

    return (
        <div className="progress-wrapper">
            <ProgressBar compIndex={compIndex} />
        </div>
    );
};

export default CompBar;
