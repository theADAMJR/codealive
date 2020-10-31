"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var nodemailer_1 = __importDefault(require("nodemailer"));
var email_1 = require("../data/models/email");
var welcome_email_json_1 = __importDefault(require("./emails/welcome-email.json"));
var config_json_1 = __importDefault(require("../../config.json"));
var EmailService = /** @class */ (function () {
    function EmailService() {
        this.styles = "\n  <style>\n    body {\n      padding: 25px;\n      color: black;\n    }\n\n    h1 {\n      color: #246bce;\n    }\n\n    footer {\n      margin-top: 25vh;\n      color: lightgray;\n    }\n\n    img {\n      max-width: 256px;\n    }\n  </style>";
        this.transporter = nodemailer_1.default.createTransport(config_json_1.default.email);
    }
    EmailService.prototype.sendWelcomeEmail = function (savedEmail) {
        return this.transporter.sendMail(__assign(__assign({}, welcome_email_json_1.default), { html: this.template(welcome_email_json_1.default.html), to: savedEmail.id }));
    };
    EmailService.prototype.sendEmails = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            var savedEmails;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, email_1.SavedEmail.find()];
                    case 1:
                        savedEmails = _a.sent();
                        return [4 /*yield*/, this.transporter.sendMail(__assign(__assign({}, email), { html: this.template(email.html), to: savedEmails.map(function (se) { return se._id; }) }))];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, savedEmails.length];
                }
            });
        });
    };
    EmailService.prototype.template = function (str) {
        return "\n    <a href=\"https://codea.live\"><img src=\"https://codea.live/img/logo.png\"></a>\n    " + str + "\n    <footer>Don't want these emails? <a href=\"https://codea.live/confirm-unsubscribe\">Unsubscribe</footer>\n    " + this.styles;
    };
    return EmailService;
}());
exports.default = EmailService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWwtc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL2VtYWlsLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBEQUFvQztBQUNwQyw4Q0FBaUU7QUFHakUsbUZBQXVEO0FBQ3ZELGtFQUF1QztBQUV2QztJQXdCRTtRQXJCUSxXQUFNLEdBQUcsdVBBbUJSLENBQUM7UUFHUixJQUFJLENBQUMsV0FBVyxHQUFHLG9CQUFVLENBQUMsZUFBZSxDQUFDLHFCQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELHVDQUFnQixHQUFoQixVQUFpQixVQUF5QjtRQUN4QyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSx1QkFDM0IsNEJBQVksS0FDZixJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyw0QkFBWSxDQUFDLElBQUksQ0FBQyxFQUN0QyxFQUFFLEVBQUUsVUFBVSxDQUFDLEVBQUUsSUFDakIsQ0FBQztJQUNMLENBQUM7SUFFSyxpQ0FBVSxHQUFoQixVQUFpQixLQUFVOzs7Ozs0QkFDTCxxQkFBTSxrQkFBVSxDQUFDLElBQUksRUFBRSxFQUFBOzt3QkFBckMsV0FBVyxHQUFHLFNBQXVCO3dCQUUzQyxxQkFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsdUJBQzFCLEtBQUssS0FDUixJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQy9CLEVBQUUsRUFBRSxXQUFXLENBQUMsR0FBRyxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxDQUFDLEdBQUcsRUFBTixDQUFNLENBQUMsSUFDakMsRUFBQTs7d0JBSkYsU0FJRSxDQUFDO3dCQUVILHNCQUFPLFdBQVcsQ0FBQyxNQUFNLEVBQUM7Ozs7S0FDM0I7SUFFTywrQkFBUSxHQUFoQixVQUFpQixHQUFXO1FBQzFCLE9BQU8saUdBRUwsR0FBRyw0SEFFSCxJQUFJLENBQUMsTUFBUSxDQUFBO0lBQ2pCLENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUF2REQsSUF1REMifQ==