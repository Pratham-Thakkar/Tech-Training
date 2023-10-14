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
exports.handler = void 0;
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const s3 = new aws_sdk_1.default.S3();
const handler = (event) => __awaiter(void 0, void 0, void 0, function* () {
    const src_bucket = event.Records[0].s3.bucket.name;
    console.log(src_bucket);
});
exports.handler = handler;
// Records: [
//     {
//       eventVersion: '2.1',
//       eventSource: 'aws:s3',
//       awsRegion: 'eu-north-1',
//       eventTime: '2023-10-05T16:28:03.931Z',
//       eventName: 'ObjectCreated:Put',
//       userIdentity: [Object],
//       requestParameters: [Object],
//       responseElements: [Object],
//       s3: [Object]
//     }
//   ]
// }
