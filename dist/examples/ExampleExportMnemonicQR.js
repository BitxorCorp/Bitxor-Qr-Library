"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Bitxor Community 2022
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var bitxor_sdk_1 = require("bitxor-sdk");
// internal dependencies
var index_1 = require("../index");
var Example_1 = require("./Example");
var ExampleExportMnemonicQR = /** @class */ (function (_super) {
    __extends(ExampleExportMnemonicQR, _super);
    function ExampleExportMnemonicQR() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * The `execute()` method should run the underlying
     * example business flow.
     *
     * This example uses an encryption password value of `password`
     * and following 24-words mnemonic pass phrase:
     *
     *    stumble shoot spawn bitter forest waste attitude chest
     *    square kite dawn photo twice message bargain trap
     *    spin vote lamp wire also either else pupil
     *
     * @return {number}
     */
    ExampleExportMnemonicQR.prototype.execute = function () {
        return __awaiter(this, void 0, void 0, function () {
            var mnemonicInfo, mnemonicQR, _a, _b, _c, _d, _e, _f;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        mnemonicInfo = {
                            v: 3,
                            type: index_1.QRCodeType.ExportMnemonic,
                            network_id: bitxor_sdk_1.NetworkType.MIJIN_TEST,
                            chain_id: "9F1979BEBA29C47E59B40393ABB516801A353CFC0C18BC241FEDE41939C907E7",
                            data: {
                                ciphertext: "964322228f401a2ec576ac256cbbdce29YfW+CykqESzGSzDYuKJxJUSpQ4woqMdD8Up7mjbow09I/UYV4e8HEgbhjlLjf30YLlQ+JKLBTf9kUGMnp3tZqYSq3lLZRDp8TVE6GzHiX4V59RTP7BOixwpDWDmfOP0B0i+Q1s0+OPfmyck4p7YZkVNi/HYvQF4kDV27sjRTZKs+uETKA0Ae0rl17d9EMV3eLUVcWEGE/ChgEfmnMlN1g==",
                                salt: "b248953e9ebfa269cd7b940f9c03d2d4b192f90db61638375b5e78296bbe675a"
                            }
                        };
                        mnemonicQR = index_1.MnemonicQR.fromJSON(JSON.stringify(mnemonicInfo), 'password');
                        console.log("MnemonicQR JSON: ", mnemonicQR.toJSON());
                        _b = (_a = console).log;
                        _c = ["MnemonicQR BASE64: "];
                        return [4 /*yield*/, mnemonicQR.toBase64().toPromise()];
                    case 1:
                        _b.apply(_a, _c.concat([_g.sent()]));
                        _e = (_d = console).log;
                        _f = ["MnemonicQR OBJECT: "];
                        return [4 /*yield*/, mnemonicQR.toString(new index_1.QRCodeSettings('M', 100)).toPromise()];
                    case 2:
                        _e.apply(_d, _f.concat([_g.sent()]));
                        console.log("");
                        return [2 /*return*/, this.resolve(0)];
                }
            });
        });
    };
    return ExampleExportMnemonicQR;
}(Example_1.Example));
exports.ExampleExportMnemonicQR = ExampleExportMnemonicQR;
//# sourceMappingURL=ExampleExportMnemonicQR.js.map