"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Class `QRCodeSettings` describes rules for the generation
 * of NIP-7 compliant QR Codes.
 *
 * @since 0.2.0
 */
var QRCodeSettings = /** @class */ (function () {
    /**
     * Constructor for QR code settings
     */
    function QRCodeSettings(correctionLevel, widthPixel, cellPixelSize, marginPixel) {
        if (correctionLevel === void 0) { correctionLevel = QRCodeSettings.CORRECTION_LEVEL; }
        if (widthPixel === void 0) { widthPixel = QRCodeSettings.WIDTH; }
        if (cellPixelSize === void 0) { cellPixelSize = QRCodeSettings.CELL_PIXEL_SIZE; }
        if (marginPixel === void 0) { marginPixel = QRCodeSettings.MARGIN_PIXEL; }
        this.correctionLevel = correctionLevel;
        this.widthPixel = widthPixel;
        this.cellPixelSize = cellPixelSize;
        this.marginPixel = marginPixel;
    }
    /**
     * The Error correction level.
     *
     * @var {ErrorCorrectLevel}
     */
    QRCodeSettings.CORRECTION_LEVEL = 'M';
    /**
     * The QR Code cell size in pixels.
     *
     * @var {number}
     */
    QRCodeSettings.CELL_PIXEL_SIZE = 1;
    /**
     * The QR Code Margin in pixels.
     *
     * @var {number}
     */
    QRCodeSettings.MARGIN_PIXEL = 2;
    /**
     * The QR Code Width in pixels.
     *
     * @var {number}
     */
    QRCodeSettings.WIDTH = 250;
    return QRCodeSettings;
}());
exports.QRCodeSettings = QRCodeSettings;
//# sourceMappingURL=QRCodeSettings.js.map