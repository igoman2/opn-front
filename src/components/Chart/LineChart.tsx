import { Component, useContext, useMemo, useState } from "react";
import styled, { ThemeContext } from "styled-components";

import { ApexOptions } from "apexcharts";
import Card from "../UI/Card";
import Chart from "react-apexcharts";
import { ChartValue } from "../../pages/report";

interface ILineChartProps {
    chartName: string;
    chartUnit: string;
    input: ChartValue[];
}
const LineChart: React.FC<ILineChartProps> = (props) => {
    const themeContext = useContext(ThemeContext);

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
            colors: [themeContext.colors.blue_1],
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
        color: ${(props) => props.theme.colors.blue_1};
    }

    .chart-unit {
        font-weight: 400;
        font-size: 14px;
        color: ${(props) => props.theme.colors.black};
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
        color: ${(props) => props.theme.colors.black};
        opacity: 0.5;
    }

    .chart-title-area {
        margin-bottom: 15px;
    }

    .donut-title {
        font-weight: 700;
        font-size: 18px;
        color: ${(props) => props.theme.colors.blue_1};
        margin-bottom: 10px;
    }
    .donut-header {
        font-weight: 700;
        font-size: 16px;
        color: #8f8f8f;
    }
`;
