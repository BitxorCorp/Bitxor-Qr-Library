"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Class `QRCodeDataSchema` describes a QR Code's data
 * schema. The schema defines obligatory fields and their
 * format.
 *
 * @since 0.3.0
 */
var QRCodeDataSchema = /** @class */ (function () {
    function QRCodeDataSchema() {
        /**
         * The AccountQR QR Code version
         *
         * @var {number}
         */
        this.VERSION = 3;
    }
    /// end-region Abstract Methods
    /**
     * The `toObject()` method returns a JSON object
     * with required fields.
     *
     * @return {any}
     */
    QRCodeDataSchema.prototype.toObject = function (qr) {
        // read data from child-classes
        var data = this.getData(qr);
        return {
            "v": this.VERSION,
            "type": qr.type,
            "network_id": qr.networkType,
            "chain_id": qr.generationHash,
            "data": data,
        };
    };
    return QRCodeDataSchema;
}());
exports.QRCodeDataSchema = QRCodeDataSchema;
//# sourceMappingURL=QRCodeDataSchema.js.map