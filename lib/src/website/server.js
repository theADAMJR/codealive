"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var root_1 = require("./routes/root");
var config_json_1 = __importDefault(require("../../config.json"));
var app = express_1.default();
app.set('views', __dirname + "/views");
app.set('view engine', 'pug');
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static(__dirname + "/assets"));
app.locals.basedir = __dirname + "/assets";
app.use('/', root_1.router);
app.get('*', function (req, res) { return res.redirect('/'); });
var port = config_json_1.default.port || 3000;
app.listen(port, function () { return console.log("Server live on port " + port); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3dlYnNpdGUvc2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsb0RBQThCO0FBQzlCLDREQUFxQztBQUNyQyxzQ0FBcUQ7QUFDckQsa0VBQXVDO0FBRXZDLElBQU0sR0FBRyxHQUFHLGlCQUFPLEVBQUUsQ0FBQztBQUV0QixHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBSyxTQUFTLFdBQVEsQ0FBQyxDQUFDO0FBQ3ZDLEdBQUcsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBRTlCLEdBQUcsQ0FBQyxHQUFHLENBQUMscUJBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBRW5ELEdBQUcsQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxNQUFNLENBQUksU0FBUyxZQUFTLENBQUMsQ0FBQyxDQUFDO0FBQy9DLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFNLFNBQVMsWUFBUyxDQUFDO0FBRTNDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLGFBQVUsQ0FBQyxDQUFDO0FBQ3pCLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFVBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSyxPQUFBLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQWpCLENBQWlCLENBQUMsQ0FBQztBQUU5QyxJQUFNLElBQUksR0FBRyxxQkFBTSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUM7QUFDakMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXVCLElBQU0sQ0FBQyxFQUExQyxDQUEwQyxDQUFDLENBQUEifQ==