declare interface NgChartColor {
    backgroundColor?: string[];
    borderColor?: string[];
    pointBackgroundColor?: string[];
    pointBorderColor?: string[];
    pointHoverBackgroundColor?: string[];
    pointHoverBorderColor?: string[];
}

declare interface DoughnutChartOptions extends ChartOptions {
    cutoutPercentage?: number;
    rotation?: number;
    circumference?: number;
    legend?: DoughnutLegendOptions;
    animation?: DoughnutAnimationOptions;
}

declare interface DoughnutLegendOptions extends ChartLegendOptions {
    labels?: DoughnutLegendLabelOptions;
    onClick?: (event?: Event, legendItem?: ChartLegendItem) => void;
}
declare interface DoughnutLegendLabelOptions extends ChartLegendLabelOptions {
    generateLabels: (Chart: Chart) => any;
}

declare interface DoughnutAnimationOptions extends ChartAnimationOptions {
    animateRotate: boolean;
    animateScale: boolean;
}