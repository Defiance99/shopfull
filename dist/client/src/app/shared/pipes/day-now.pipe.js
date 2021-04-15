"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DayNowPipe = void 0;
const core_1 = require("@angular/core");
let DayNowPipe = class DayNowPipe {
    transform(day) {
        switch (day) {
            case 0:
                return 'Воскресенье';
            case 1:
                return 'Понедельник';
            case 2:
                return 'Вторник';
            case 3:
                return 'Среда';
            case 4:
                return 'Четверг';
            case 5:
                return 'Пятница';
            case 6:
                return 'Суббота';
            default:
                return 'Воскресенье';
        }
    }
};
DayNowPipe = __decorate([
    core_1.Pipe({
        name: 'dayNow'
    })
], DayNowPipe);
exports.DayNowPipe = DayNowPipe;
//# sourceMappingURL=day-now.pipe.js.map