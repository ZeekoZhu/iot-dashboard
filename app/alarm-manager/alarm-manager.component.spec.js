"use strict";
var testing_1 = require('@angular/core/testing');
var alarm_manager_component_1 = require('./alarm-manager.component');
describe('a alarm-manager component', function () {
    var component;
    // register all needed dependencies
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [
                alarm_manager_component_1.AlarmManagerComponent
            ]
        });
    });
    // instantiation through framework injection
    beforeEach(testing_1.inject([alarm_manager_component_1.AlarmManagerComponent], function (AlarmManagerComponent) {
        component = AlarmManagerComponent;
    }));
    it('should have an instance', function () {
        expect(component).toBeDefined();
    });
});
//# sourceMappingURL=alarm-manager.component.spec.js.map