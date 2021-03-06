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
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var DemoFormSkuBuilder = (function () {
    function DemoFormSkuBuilder(fb) {
        this.myForm = fb.group({
            'sku': ['ABC123']
        });
    }
    DemoFormSkuBuilder.prototype.onSubmit = function (value) {
        console.log('you submitted value: ', value);
    };
    DemoFormSkuBuilder = __decorate([
        core_1.Component({
            selector: 'demo-form-sku-builder',
            directives: [forms_1.FORM_DIRECTIVES, forms_1.REACTIVE_FORM_DIRECTIVES],
            template: "\n  <div class=\"ui raised segment\">\n    <h2 class=\"ui header\">Demo Form: Sku with Builder</h2>\n    <form [formGroup]=\"myForm\" \n          (ngSubmit)=\"onSubmit(myForm.value)\"\n          class=\"ui form\">\n\n      <div class=\"field\">\n        <label for=\"skuInput\">SKU</label>\n        <input type=\"text\" \n               id=\"skuInput\" \n               placeholder=\"SKU\"\n               [formControl]=\"myForm.controls['sku']\">\n      </div>\n\n    <button type=\"submit\" class=\"ui button\">Submit</button>\n    </form>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof forms_1.FormBuilder !== 'undefined' && forms_1.FormBuilder) === 'function' && _a) || Object])
    ], DemoFormSkuBuilder);
    return DemoFormSkuBuilder;
    var _a;
}());
exports.DemoFormSkuBuilder = DemoFormSkuBuilder;
