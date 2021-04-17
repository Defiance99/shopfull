"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductValidationPipe = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
let ProductValidationPipe = class ProductValidationPipe {
    async transform(value, { metatype }) {
        if (!metatype || !this.toValidate(metatype)) {
            return value;
        }
        value.weight = +value.weight;
        value.bonuses = JSON.parse(value.bonuses);
        value.category = JSON.parse(value.category);
        value.chartDays = JSON.parse(value.chartDays);
        value.customFields = JSON.parse(value.customFields);
        if (!Number(value.weight)) {
            throw new common_1.BadRequestException('Validation Failed');
        }
        const object = class_transformer_1.plainToClass(metatype, value);
        const errors = await class_validator_1.validate(object);
        if (errors.length > 0) {
            throw new common_1.BadRequestException(errors);
        }
        return value;
    }
    toValidate(metatype) {
        const types = [String, Boolean, Number, Array, Object];
        return !types.includes(metatype);
    }
};
ProductValidationPipe = __decorate([
    common_1.Injectable()
], ProductValidationPipe);
exports.ProductValidationPipe = ProductValidationPipe;
//# sourceMappingURL=product-validation.pipe.js.map