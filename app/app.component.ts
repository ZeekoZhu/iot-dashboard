import { Component, AfterViewInit, ViewChild, ElementRef, Renderer } from '@angular/core';


const tabs = [
    { path: '/dashboard/workday', title: '首页', full: false },
    { path: '/alarm', title: '报警管理', full: true }
];

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html'
})
export class AppComponent implements AfterViewInit {
    navTabs: NavTab[] = tabs;
    private _currentTab: NavTab;

    public get currentTab(): NavTab {
        return this._currentTab;
    }
    @ViewChild('content') contentWrapper: ElementRef;

    /**
     * 当前标签被改变的时候，需要做一些页面布局上的修改
     * 
     * @memberOf AppComponent
     */
    public set currentTab(value: NavTab) {
        if (value.full) {
            this.renderer
                .setElementStyle(this.contentWrapper.nativeElement, 'margin-left', '0px');
        } else {
            this.renderer
                .setElementStyle(this.contentWrapper.nativeElement, 'margin-left', '230px');
        }
        this._currentTab = value;
    }

    constructor(private renderer: Renderer) { }

    ngAfterViewInit(): void {
        $.AdminLTE.layout.fix();
    }

    onTabSelect(tab: NavTab): void {
        this.currentTab = tab;
    }
}


/**
 * NavTab
 */
class NavTab {
    constructor(
        public path: string,
        public title: string,
        public full: boolean
    ) { }
}