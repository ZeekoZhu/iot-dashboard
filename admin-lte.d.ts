interface JQueryStatic {
    AdminLTE: AdminLTE;
}

declare class AdminLTE {
    pushMenu: PushMenu;
    layout: Layout;
    tree(menu: string): void;
}

/**
 * Fixes the layout height in case min-height fails.
 * 
 * @interface Layout
 */
interface Layout {
    fix(): void;
    fixSidebar(): void;
    activate(): void;
}

/**
 * Adds the push menu functionality to the sidebar.
 * 
 * @interface PushMenu
 */
interface PushMenu {
    activate(): void;
    expandOnHover(): void;
    expand(): void;
    collapse(): void;
}

interface ControlSidebar{
    activate(): void;
    open(sidebar: JQuery): void;
    
}

