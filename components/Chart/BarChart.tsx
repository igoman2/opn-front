import { ApexOptions } from "apexcharts";
import Card from "../UI/Card";
import Chart from "react-apexcharts";
import { ChartValue } from "../../pages/report";
import React from "react";
import styled from "styled-components";

interface IBarChart {
    input: ChartValue[];
    chartName: string;
    chartUnit: string;
    chartNote?: string;
}

const BarChart: React.FC<IBarChart> = (props) => {
    const rawData = props.input;
    const xLabel: string[] = [];
    const chartValue: number[] = [];
    rawData.map((item: ChartValue) => {
        xLabel.push(item.class);
        chartValue.push(item.value);
    });

    const options: ApexOptions = {
        chart: {
            id: "basic-bar",
            toolbar: {
                show: false,
            },
        },
        colors: ["#3955B4"],

        xaxis: {
            axisTicks: {
                show: false,
            },
            categories: xLabel,
        },
        yaxis: {
            labels: {
                show: false,
            },
        },
        dataLabels: {
            offsetY: -20,
            style: {
                fontSize: "12px",
                colors: ["#000"],
            },
        },
        grid: {
            show: false,
        },
        plotOptions: {
            bar: {
                horizontal: false,
                dataLabels: {
                    position: "top",
                },
            },
        },
    };

    const series = [
        {
            name: "series-1",
            data: chartValue,
        },
    ];

    return (
        <Card>
            <ChartWrapper>
                <div className="chart-wrapper">
                    <div className="chart-title-area">
                        <div className="chart-header">
                            <div className="chart-name">{props.chartName}</div>
                            <div className="chart-unit">
                                단위: {props.chartUnit}
                            </div>
                        </div>
                        <div className="chart-note">{props.chartNote}</div>
                    </div>
                    <div className="app">
                        <div className="row">
                            <div className="mixed-chart">
                                <Chart
                                    options={options}
                                    series={series}
                                    type="bar"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </ChartWrapper>
        </Card>
    );
};

export default BarChart;

const ChartWrapper = styled.div`
    .chart-name {
        font-weight: 700;
        font-size: 18px;
        color: #3955b4;
    }

    .chart-unit {
        font-weight: 400;
        font-size: 14px;
        color: #000000;
        opacity: 0.5;
    }

    .chart-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .chart-wrapper {
        width: 100%;
    }

    .chart-note {
        font-weight: 400;
        font-size: 14px;
        color: #000000;
        opacity: 0.5;
    }

    .chart-title-area {
        margin-bottom: 15px;
    }

    .donut-title {
        font-weight: 700;
        font-size: 18px;
        color: #3955b4;
        margin-bottom: 10px;
    }
    .donut-header {
        font-weight: 700;
        font-size: 16px;
        color: #8f8f8f;
    }
`;
