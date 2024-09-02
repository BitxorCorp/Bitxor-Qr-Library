"use strict";
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
var QRCodeType;
(function (QRCodeType) {
    QRCodeType[QRCodeType["AddContact"] = 1] = "AddContact";
    QRCodeType[QRCodeType["ExportAccount"] = 2] = "ExportAccount";
    QRCodeType[QRCodeType["RequestTransaction"] = 3] = "RequestTransaction";
    QRCodeType[QRCodeType["RequestCosignature"] = 4] = "RequestCosignature";
    QRCodeType[QRCodeType["ExportMnemonic"] = 5] = "ExportMnemonic";
    QRCodeType[QRCodeType["ExportObject"] = 6] = "ExportObject";
    QRCodeType[QRCodeType["ExportAddress"] = 7] = "ExportAddress";
    QRCodeType[QRCodeType["SignedTransaction"] = 8] = "SignedTransaction";
    QRCodeType[QRCodeType["CosignatureSignedTransaction"] = 9] = "CosignatureSignedTransaction";
})(QRCodeType || (QRCodeType = {}));
exports.QRCodeType = QRCodeType;
//# sourceMappingURL=QRCodeType.js.map