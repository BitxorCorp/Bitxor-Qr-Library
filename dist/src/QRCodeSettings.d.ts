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
declare type CorrectionLevel = 'high' | 'quartile' | 'medium' | 'low' | 'H' | 'Q' | 'M' | 'L' | undefined;
/**
 * Class `QRCodeSettings` describes rules for the generation
 * of NIP-7 compliant QR Codes.
 *
 * @since 0.2.0
 */
declare class QRCodeSettings {
    readonly correctionLevel: CorrectionLevel;
    readonly widthPixel: number;
    readonly cellPixelSize: number;
    readonly marginPixel: number;
    /**
     * The Error correction level.
     *
     * @var {ErrorCorrectLevel}
     */
    static CORRECTION_LEVEL: CorrectionLevel;
    /**
     * The QR Code cell size in pixels.
     *
     * @var {number}
     */
    static CELL_PIXEL_SIZE: number;
    /**
     * The QR Code Margin in pixels.
     *
     * @var {number}
     */
    static MARGIN_PIXEL: number;
    /**
     * The QR Code Width in pixels.
     *
     * @var {number}
     */
    static WIDTH: number;
    /**
     * Constructor for QR code settings
     */
    constructor(correctionLevel?: CorrectionLevel, widthPixel?: number, cellPixelSize?: number, marginPixel?: number);
}
export { CorrectionLevel, QRCodeSettings };
