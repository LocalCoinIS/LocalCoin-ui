import React from "react";
import ReactHighchart from "react-highcharts";
import counterpart from "counterpart";

class TransactionChart extends React.Component {
    shouldComponentUpdate(nextProps) {
        if (nextProps.blocks.size < 20) {
            return false;
        }
        let chart = this.refs.trx_chart ? this.refs.trx_chart.chart : null;
        if (chart && nextProps.blocks !== this.props.blocks) {
            let {trxData, colors} = this._getData(nextProps);
            let series = chart.series[0];
            let finalValue = series.xData[series.xData.length - 1];

            // console.log("chart:", chart, "series:", series.data, "finalValue:", finalValue);
            if (series.xData.length) {
                trxData.forEach(point => {
                    if (point[0] > finalValue) {
                        series.addPoint(
                            point,
                            false,
                            series.xData.length >= 30
                        );
                    }
                });

                chart.options.plotOptions.column.colors = colors;

                chart.redraw();
                return false;
            }
        }
        return (
            nextProps.blocks !== this.props.blocks ||
            nextProps.head_block !== this.props.head_block
        );
    }

    _getData(props) {
        let {blocks, head_block} = props;

        let trxData = [];
        let max = 0;
        trxData = blocks
            .filter(a => {
                return a.id >= head_block - 30;
            })
            .sort((a, b) => {
                return a.id - b.id;
            })
            .takeLast(30)
            .map(block => {
                max = Math.max(block.transactions.length, max);
                return [block.id, block.transactions.length];
            })
            .toArray();

        let colors = trxData.map(entry => {
            // console.log("entry:", entry);
            if (entry[1] <= 5) {
                return "#50D2C2";
            } else if (entry[1] <= 10) {
                return "#A0D3E8";
            } else if (entry[1] <= 20) {
                return "#FCAB53";
            } else {
                return "#deb869";
            }
        });

        return {
            colors,
            trxData,
            max
        };
    }

    render() {
        let {trxData, colors, max} = this._getData(this.props);

        let tooltipLabel = counterpart.translate(
            "explorer.blocks.transactions"
        );

        let config = {
            chart: {
                colorAxis:{
                    className: "undefined",
                    dataClassColor: "tween",
                    dataClasses:[{
                        color: "undefined",
                        from: "undefined",
                        name: "undefined",
                        to: "undefined",
                    }],
                    description: "undefined",
                    endOnTick: true,
                    gridLineColor: "#e6e6e6",
                    gridLineDashStyle: "Solid",
                    gridLineWidth: 1,
                    id: null,
                    lineColor: "#ccd6eb",
                    max: "undefined",
                    maxColor: "#003399",
                    maxPadding: 0,
                    min: "undefined",
                    minColor: "#e6ebf5",
                    minorGridLineColor: "#f2f2f2",
                    minorGridLineDashStyle: "Solid",
                    minorGridLineWidth: 1,
                    minorTickColor: "#999999",
                    minorTickInterval: "undefined",
                    minorTickLength: 2,
                    minorTickPosition: "outside",
                    minorTicks: false,
                    minorTickWidth: 0,
                    minPadding: 0,
                    reversed: false,
                    showFirstLabel: true,
                    showInLegend: true,
                    softMin: "undefined",
                    startOnTick: true,
                    stops: "undefined",
                    tickColor: "#ccd6eb",
                    tickInterval: null,
                    tickLength: 5,
                    tickPixelInterval: 72,
                    tickPosition: "outside",
                    tickPositioner: "undefined",
                    tickPositions: "undefined",
                    tickWidth: "undefined",
                    type: "linear"
                },
                type: "column",
                backgroundColor: "rgba(255, 0, 0, 0)",
                spacing: [0, 0, 5, 0],
                height: 100
            },
            title: {
                text: null
            },
            credits: {
                enabled: false
            },
            legend: {
                enabled: false
            },
            rangeSelector: {
                enabled: false
            },
            navigator: {
                enabled: false
            },
            scrollbar: {
                enabled: false
            },
            tooltip: {
                shared: false,
                formatter: function() {
                    return tooltipLabel + ": " + this.y;
                }
            },
            series: [
                {
                    name: "Transactions",
                    data: trxData,
                    color: "#50D2C2"
                }
            ],
            xAxis: {
                labels: {
                    enabled: false
                },
                title: {
                    text: null
                }
            },
            yAxis: {
                min: 0,
                max: Math.max(1.5, max + 0.5),
                title: {
                    text: null
                },
                labels: {
                    enabled: false
                },
                gridLineWidth: 0,
                currentPriceIndicator: {
                    enabled: false
                }
            },
            plotOptions: {
                column: {
                    animation: true,
                    minPointLength: 5,
                    colorByPoint: true,
                    colors: colors,
                    borderWidth: 0
                }
            },
            colorAxis:{
                className: "undefined",
                dataClassColor: "tween",
                dataClasses:[{
                    color: "undefined",
                    from: "undefined",
                    name: "undefined",
                    to: "undefined",
                }],
                description: "undefined",
                endOnTick: true,
                gridLineColor: "#e6e6e6",
                gridLineDashStyle: "Solid",
                gridLineWidth: 1,
                id: null,
                lineColor: "#ccd6eb",
                max: "undefined",
                maxColor: "#003399",
                maxPadding: 0,
        min: "undefined",
        minColor: "#e6ebf5",
        minorGridLineColor: "#f2f2f2",
        minorGridLineDashStyle: "Solid",
        minorGridLineWidth: 1,
        minorTickColor: "#999999",
        minorTickInterval: "undefined",
        minorTickLength: 2,
        minorTickPosition: "outside",
        minorTicks: false,
        minorTickWidth: 0,
        minPadding: 0,
        reversed: false,
        showFirstLabel: true,
        showInLegend: true,
        softMin: "undefined",
        startOnTick: true,
        stops: "undefined",
        tickColor: "#ccd6eb",
        tickInterval: null,
        tickLength: 5,
        tickPixelInterval: 72,
        tickPosition: "outside",
        tickPositioner: "undefined",
        tickPositions: "undefined",
        tickWidth: "undefined",
        type: "linear"
    }
        };

        return trxData.length ? (
            <ReactHighchart ref="trx_chart" config={config} />
        ) : null;
    }
}

export default TransactionChart;
