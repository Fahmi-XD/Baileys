"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WAMessageStatus = exports.WAMessageStubType = exports.WAProto = void 0;
const WAProto_1 = __importDefault(require("../../WAProto"));
exports.WAProto = WAProto_1.default;
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
exports.WAMessageStubType = WAProto_1.default.WAWeb.WebMessageInfo.StubType;
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
exports.WAMessageStatus = WAProto_1.default.WAWeb.WebMessageInfo.Status;
