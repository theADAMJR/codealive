"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var config_json_1 = __importDefault(require("../config.json"));
mongoose_1.default.connect(config_json_1.default.mongooseURI, { useNewUrlParser: true, useUnifiedTopology: true }, function (err) { return console.log(err ? 'Failed to connect to database' : 'Connected to database.'); });
require("./website/server");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUFnQztBQUNoQywrREFBb0M7QUFFcEMsa0JBQVEsQ0FBQyxPQUFPLENBQUMscUJBQU0sQ0FBQyxXQUFXLEVBQ2pDLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRSxJQUFJLEVBQUUsRUFDbkQsVUFBQyxHQUFHLElBQUssT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsK0JBQStCLENBQUMsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLEVBQTdFLENBQTZFLENBQUMsQ0FBQztBQUUxRiw0QkFBMEIifQ==