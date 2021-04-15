"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductPageComponent = void 0;
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const product_service_1 = require("src/app/shared/services/product.service");
let CreateProductPageComponent = class CreateProductPageComponent {
    constructor(productService) {
        this.productService = productService;
        this.imagesPreview = [];
        this.nameProduct = '';
        this.isHit = false;
        this.isDiscount = false;
        this.isNew = false;
    }
    ngAfterViewChecked() {
    }
    ngOnInit() {
        this.productForm = new forms_1.FormGroup({
            name: new forms_1.FormControl("", [forms_1.Validators.required, forms_1.Validators.minLength(4), forms_1.Validators.maxLength(55)]),
            price: new forms_1.FormControl("", [forms_1.Validators.required, forms_1.Validators.min(1), forms_1.Validators.pattern('^([1-9][0-9]*)+(.[0-9]{1,2})?$')]),
            weight: new forms_1.FormControl("", [forms_1.Validators.required, forms_1.Validators.min(1), forms_1.Validators.pattern('[0-9]+')]),
            bonuses: new forms_1.FormControl([]),
            currency: new forms_1.FormControl("", [forms_1.Validators.required]),
            category: new forms_1.FormControl("", [forms_1.Validators.required]),
            chartDays: new forms_1.FormControl("", [forms_1.Validators.required]),
            description: new forms_1.FormControl("", [forms_1.Validators.maxLength(100)]),
            customFields: new forms_1.FormArray([
                new forms_1.FormGroup({
                    nameCustomField: new forms_1.FormControl(""),
                    valueCustomField: new forms_1.FormControl("")
                }),
            ])
        });
    }
    get formData() {
        return this.productForm.get('customFields');
    }
    onSubmit() {
        this.productForm.disable();
        this.productService.create(this.productForm.value, this.images).subscribe(() => {
            this.productForm.enable();
            showModalMessage('Успешно создано');
        }, err => {
            this.productForm.enable();
            showModalMessage(err.message);
        });
    }
    showMessage(message) {
        showModalMessage(message);
    }
    showBonus(bonus) {
        if (bonus == 'hit')
            this.isHit = !this.isHit;
        if (bonus == 'discount')
            this.isDiscount = !this.isDiscount;
        if (bonus == 'new')
            this.isNew = !this.isNew;
    }
    triggerClick() {
        this.inputRef.nativeElement.click();
    }
    onFileUpload(event) {
        const files = event.target.files;
        this.images = files;
        this.imagesPreview = [];
        for (let file of files) {
            const reader = new FileReader();
            reader.onload = () => {
                this.imagesPreview.push(reader.result);
            };
            reader.readAsDataURL(file);
        }
    }
    addCustomField() {
        if (this.formData.controls.length < 5) {
            this.productForm.controls['customFields'].push(new forms_1.FormGroup({
                nameCustomField: new forms_1.FormControl(""),
                valueCustomField: new forms_1.FormControl("")
            }));
        }
    }
    removeCustomField() {
        this.formData.controls.pop();
    }
};
__decorate([
    core_1.ViewChild('inputFile'),
    __metadata("design:type", core_1.ElementRef)
], CreateProductPageComponent.prototype, "inputRef", void 0);
CreateProductPageComponent = __decorate([
    core_1.Component({
        selector: 'app-create-product-page',
        templateUrl: './create-product-page.component.html',
        styleUrls: ['./create-product-page.component.scss']
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof product_service_1.ProductService !== "undefined" && product_service_1.ProductService) === "function" ? _a : Object])
], CreateProductPageComponent);
exports.CreateProductPageComponent = CreateProductPageComponent;
//# sourceMappingURL=create-product-page.component.js.map