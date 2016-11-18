import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'workday',
    templateUrl: 'workday.component.html',
    styleUrls: ['workday.component.css']
})
export class WorkdayComponent implements OnInit {

    public stabelCnt: number = 0;
    public problemCnt: number = 0;

    // 每日得分图表
    public dailyScoreLabels: string[] = ['稳定运行', '发现问题'];
    public dailyScoreData: number[] = [this.stabelCnt, this.problemCnt];
    public dailyScoreType: string = 'doughnut';
    public dailyScoreColors: NgChartColor = [
        {
            backgroundColor: [
                'rgba(0, 166, 90, 0.8)',
                'rgba(221, 75, 57, 0.8)'
            ],
            borderColor: 'rgba(242, 242, 242, 1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }
    ];
    public dailyScoreOptions: DoughnutChartOptions = {
        cutoutPercentage: 80,
        legend: {
            display: false,
        },
        tooltips: {
            enabled: true
        }
    };


    ngOnInit() {
        this.problemCnt = 5;
        this.stabelCnt = 95;
        this.dailyScoreData = [this.stabelCnt, this.problemCnt];
    }
}