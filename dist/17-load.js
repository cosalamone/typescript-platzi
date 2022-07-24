"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
const data = [
    {
        userName: "connie",
        role: "admin"
    },
    {
        userName: "valentina",
        role: "seller"
    },
    {
        userName: "mauro",
        role: "seller"
    },
    {
        userName: "santiago",
        role: "customer"
    },
];
const rta = lodash_1.default.groupBy(data, (item) => item.role);
console.log(rta);
