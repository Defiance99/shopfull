"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatesPipe = void 0;
const core_1 = require("@angular/core");
let StatesPipe = class StatesPipe {
    transform(items, states) {
        return items.filter(item => {
            return states.length == 0 ? true : item.bonuses.map(bonus => states.includes(bonus)).includes(true);
        });
    }
};
StatesPipe = __decorate([
    core_1.Pipe({
        name: 'states'
    })
], StatesPipe);
exports.StatesPipe = StatesPipe;
//# sourceMappingURL=states.pipe.js.map