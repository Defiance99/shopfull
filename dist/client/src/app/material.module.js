"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialModel = void 0;
const core_1 = require("@angular/core");
const button_1 = require("@angular/material/button");
const icon_1 = require("@angular/material/icon");
const input_1 = require("@angular/material/input");
const menu_1 = require("@angular/material/menu");
const select_1 = require("@angular/material/select");
const checkbox_1 = require("@angular/material/checkbox");
const stepper_1 = require("@angular/material/stepper");
const expansion_1 = require("@angular/material/expansion");
const table_1 = require("@angular/material/table");
const slider_1 = require("@angular/material/slider");
const sidenav_1 = require("@angular/material/sidenav");
const dialog_1 = require("@angular/material/dialog");
let MaterialModel = class MaterialModel {
};
MaterialModel = __decorate([
    core_1.NgModule({
        imports: [
            button_1.MatButtonModule,
            icon_1.MatIconModule,
            input_1.MatInputModule,
            menu_1.MatMenuModule,
            select_1.MatSelectModule,
            checkbox_1.MatCheckboxModule,
            stepper_1.MatStepperModule,
            expansion_1.MatExpansionModule,
            table_1.MatTableModule,
            slider_1.MatSliderModule,
            sidenav_1.MatSidenavModule,
            dialog_1.MatDialogModule,
        ],
        exports: [
            button_1.MatButtonModule,
            icon_1.MatIconModule,
            input_1.MatInputModule,
            menu_1.MatMenuModule,
            select_1.MatSelectModule,
            checkbox_1.MatCheckboxModule,
            stepper_1.MatStepperModule,
            expansion_1.MatExpansionModule,
            table_1.MatTableModule,
            slider_1.MatSliderModule,
            sidenav_1.MatSidenavModule,
            dialog_1.MatDialogModule,
        ],
    })
], MaterialModel);
exports.MaterialModel = MaterialModel;
//# sourceMappingURL=material.module.js.map