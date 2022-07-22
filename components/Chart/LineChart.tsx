import { Component, useMemo, useState } from "react";

import { ApexOptions } from "apexcharts";
import Card from "../UI/Card";
import Chart from "react-apexcharts";
import { Trend } from "../../pages/report";
import styled from "styled-components";

interface ILineChartProps {
    chartName: string;
    chartUnit: string;
    input: Trend[];
}
const LineChart: React.FC<ILineChartProps> = (props) => {
    const rawData = props.input;
    const xLabel: any[] = [];
    const chartValue: any[] = [];
    rawData.map((item) => {
        xLabel.push(item.class);
        chartValue.push(item.value);
    });

    let fontSize = "10px";
    let offsetX = 0;
    let offsetY = 2;

    // if (window.matchMedia("(min-width: 768px)").matches) {
    //     fontSize = "14px";
    //     offsetX = -10;
    //     offsetY = 10;
    // }
    const options: ApexOptions = {
        chart: {
            id: "basic-bar",
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: true,
                type: "x",
                autoScaleYaxis: false,
            },
        },
        stroke: {
            width: 2,
            colors: ["#3955B4"],
        },
        grid: {
            show: false,
        },
        xaxis: {
            axisTicks: {
                show: false,
            },
            labels: {
                offsetX: 0,
                offsetY: offsetY,
                show: true,
                rotate: -45,
                rotateAlways: true,
                hideOverlappingLabels: false,
                showDuplicates: false,
                trim: false,
                minHeight: undefined,
                maxHeight: 220,
                style: {
                    colors: [],
                    fontSize: fontSize,
                    fontFamily: "Helvetica, Arial, sans-serif",
                    fontWeight: 400,
                    cssClass: "apexcharts-xaxis-label",
                },
            },
            categories: xLabel,
        },
        yaxis: {
            labels: {
                offsetX: offsetX,
                style: {
                    fontSize: fontSize,
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
                    <div className="chart-header">
                        <div className="chart-name">{props.chartName}</div>
                        <div className="chart-unit">
                            단위: {props.chartUnit}
                        </div>
                    </div>
                    <div className="app">
                        <div className="row">
                            <div className="mixed-chart">
                                <Chart
                                    options={options}
                                    series={series}
                                    type="line"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </ChartWrapper>
        </Card>
    );
};
export default LineChart;

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
