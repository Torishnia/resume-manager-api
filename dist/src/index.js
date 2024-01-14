"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routers_1 = __importDefault(require("./routers"));
const db_1 = require("./utils/db");
const application = db_1.myDataSource
    .initialize()
    .then(() => {
    console.log('DataBase connected');
    return start();
})
    .catch((err) => console.log('Something went wrong with db, error: ', err.message));
function start() {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use((0, cors_1.default)());
    app.use('/', routers_1.default);
    app.listen(8080, () => console.log(`Server started on port: 8080`));
    return app;
}
exports.default = application;
//# sourceMappingURL=index.js.map