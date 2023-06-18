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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = require("mongoose");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send(`bubu from node`);
});
app.get("/user", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userSchema = new mongoose_1.Schema({
        id: {
            type: String,
            require: true,
            unique: true,
        },
        name: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        dateOfBirth: {
            type: String,
        },
        email: {
            type: String,
        },
        gander: {
            type: String,
            enum: ["male", "female"],
        },
    });
    const User = (0, mongoose_1.model)("User", userSchema);
    const createUserDB = () => __awaiter(void 0, void 0, void 0, function* () {
        const user = new User({
            id: "21313131",
            name: "Md. Shipatul hasan shakib",
            password: `1234242412`,
            dateOfBirth: `jan 20`,
            email: `shipatulhasan328@gmail.com`,
            gander: "male",
        });
        yield user.save();
        console.log(user);
    });
    yield createUserDB();
    res.send("hello world");
}));
exports.default = app;
