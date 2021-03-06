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
var core_1 = require("@angular/core");
var primeng_1 = require("primeng/primeng");
var NavBarComponent = (function () {
    function NavBarComponent() {
    }
    NavBarComponent.prototype.search = function (event) {
        var query = event.query;
        this.suggestions = this.filterOptions(query, this.options);
    };
    NavBarComponent.prototype.filterOptions = function (query, options) {
        var filtered = [];
        for (var i = 0; i < options.length; i++) {
            var country = options[i];
            if (country.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(country);
            }
        }
        return filtered;
    };
    NavBarComponent.prototype.download = function () {
        alert("Downloading project!");
    };
    NavBarComponent.prototype.handleDropdownClick = function ($event) {
        this.suggestions = this.options;
    };
    NavBarComponent.prototype.runCode = function () {
        alert("running: " + this.selected);
    };
    NavBarComponent.prototype.testCode = function () {
        alert("testing: " + this.selected);
    };
    NavBarComponent = __decorate([
        core_1.Component({
            selector: 'nav-bar',
            templateUrl: './app/nav-bar/nav-bar.html',
            styleUrls: ['./app/nav-bar/nav-bar.css'],
            directives: [primeng_1.AutoComplete, primeng_1.Toolbar, primeng_1.Button, primeng_1.SplitButton, primeng_1.SplitButtonItem]
        }), 
        __metadata('design:paramtypes', [])
    ], NavBarComponent);
    return NavBarComponent;
}());
exports.NavBarComponent = NavBarComponent;
//# sourceMappingURL=navbar.component.js.map