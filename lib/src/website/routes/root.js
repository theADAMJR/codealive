"use strict";
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
var express_1 = __importDefault(require("express"));
var email_1 = require("../../data/models/email");
var deps_1 = __importDefault(require("../../utils/deps"));
var email_service_1 = __importDefault(require("../../modules/email-service"));
exports.router = express_1.default.Router();
var emailService = deps_1.default.get(email_service_1.default);
exports.router.get('/', function (req, res) { return res.render('index'); });
exports.router.post('/subscribe', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var savedEmail, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, email_1.SavedEmail.create(req.body)];
            case 1:
                savedEmail = _a.sent();
                return [4 /*yield*/, emailService.sendWelcomeEmail(savedEmail)];
            case 2:
                _a.sent();
                res.render('subscribed');
                return [3 /*break*/, 4];
            case 3:
                err_1 = _a.sent();
                res.status(400).json({ code: 400, message: err_1 });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
exports.router.get('/confirm-unsubscribe', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        try {
            res.render('unsubscribe', { email: req.query.email });
        }
        catch (err) {
            res.status(400).json({ code: 400, message: err === null || err === void 0 ? void 0 : err.message });
        }
        return [2 /*return*/];
    });
}); });
exports.router.get('/unsubscribe', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, email_1.SavedEmail.findByIdAndDelete(req.query.email)];
            case 1:
                _a.sent();
                res.redirect('unsubscribed');
                return [3 /*break*/, 3];
            case 2:
                err_2 = _a.sent();
                res.status(400).json({ code: 400, message: err_2 === null || err_2 === void 0 ? void 0 : err_2.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
exports.router.get('/subscribed', function (req, res) { return res.render('subscribed'); });
exports.router.get('/unsubscribed', function (req, res) { return res.render('unsubscribed'); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy93ZWJzaXRlL3JvdXRlcy9yb290LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0RBQThCO0FBQzlCLGlEQUFxRDtBQUNyRCwwREFBb0M7QUFDcEMsOEVBQXVEO0FBRTFDLFFBQUEsTUFBTSxHQUFHLGlCQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFdkMsSUFBTSxZQUFZLEdBQUcsY0FBSSxDQUFDLEdBQUcsQ0FBZSx1QkFBWSxDQUFDLENBQUM7QUFFMUQsY0FBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsVUFBQyxHQUFHLEVBQUUsR0FBRyxJQUFLLE9BQUEsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBbkIsQ0FBbUIsQ0FBQyxDQUFDO0FBQ25ELGNBQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLFVBQU8sR0FBRyxFQUFFLEdBQUc7Ozs7OztnQkFFbEIscUJBQU0sa0JBQVUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFBOztnQkFBOUMsVUFBVSxHQUFHLFNBQWlDO2dCQUVwRCxxQkFBTSxZQUFZLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLEVBQUE7O2dCQUEvQyxTQUErQyxDQUFDO2dCQUVoRCxHQUFHLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDOzs7O2dCQUV6QixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLEtBQUcsRUFBRSxDQUFDLENBQUM7Ozs7O0tBRXJELENBQUMsQ0FBQztBQUNILGNBQU0sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEVBQUUsVUFBTyxHQUFHLEVBQUUsR0FBRzs7UUFDaEQsSUFBSTtZQUNGLEdBQUcsQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztTQUN2RDtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1osR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxHQUFHLGFBQUgsR0FBRyx1QkFBSCxHQUFHLENBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztTQUM1RDs7O0tBQ0YsQ0FBQyxDQUFDO0FBQ0gsY0FBTSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsVUFBTyxHQUFHLEVBQUUsR0FBRzs7Ozs7O2dCQUV0QyxxQkFBTSxrQkFBVSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUE7O2dCQUFuRCxTQUFtRCxDQUFDO2dCQUVwRCxHQUFHLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDOzs7O2dCQUU3QixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLEtBQUcsYUFBSCxLQUFHLHVCQUFILEtBQUcsQ0FBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDOzs7OztLQUU5RCxDQUFDLENBQUM7QUFFSCxjQUFNLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxVQUFDLEdBQUcsRUFBRSxHQUFHLElBQUssT0FBQSxHQUFHLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUF4QixDQUF3QixDQUFDLENBQUM7QUFDbEUsY0FBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsVUFBQyxHQUFHLEVBQUUsR0FBRyxJQUFLLE9BQUEsR0FBRyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsRUFBMUIsQ0FBMEIsQ0FBQyxDQUFDIn0=