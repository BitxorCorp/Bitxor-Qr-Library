# CHANGELOG

## [v0.14.0][v0.14.0] - 22-Dev-2020

- Removed bitxor-sdk dependency.

## [v0.13.0][v0.13.0] - 29-Sep-2020

- Upgraded bitxor-sdk to v0.21.0
- Upgraded bitxor-hd-wallets to v0.13.0

## v0.12.1 - 25-Sep-2020

- Upgraded bitxor-sdk to v0.20.8 alpha
- Upgraded bitxor-hd-wallets to use next tag

## [v0.12.0][v0.12.0] - 13-Jul-2020

- Upgraded bitxor-sdk to v0.20.6
- Upgraded bitxor-hd-wallets to v0.12.0
- Fixed CosignatureQR for aggregate serialization changes

## [v0.11.0][v0.11.0] - 25-May-2020

- Upgraded bitxor-sdk to v0.19.1
- Upgraded bitxor-hd-wallets to v0.11.0

## [v0.10.0][v0.10.0] - 27-Apr-2020

### Milestone: [bitxorcore-server@v0.9.4.1](https://github.com/bitxorcorp/bitxorcore-server/releases/tag/v0.9.4.1)

- Upgraded bitxor-sdk to v0.18.0
- Upgraded bitxor-hd-wallets to v0.10.0

## [v0.9.1][v0.9.1] - 16-Apr-2020

### Milestone: [bitxorcore-server@v0.9.3.2](https://github.com/bitxorcorp/bitxorcore-server/releases/tag/v0.9.3.2)

- Added automatic release management (NIP#14)
- Fixed crypto-js inclusion bug with TS types
- Moved browser build files to release/

## [v0.9.0][v0.9.0] - 03-Mar-2020

### Milestone: [bitxorcore-server@v0.9.3.1](https://github.com/bitxorcorp/bitxorcore-server/releases/tag/v0.9.3.1)

- rebranded package to bitxor-qr-library
- replaced deps to bitxor-sdk and bitxor-hd-wallets

## [v0.8.0][v0.8.0] - 20-Feb-2020

### Milestone: [bitxorcore-server@v0.9.2.1](https://github.com/bitxorcorp/bitxorcore-server/releases/tag/v0.9.2.1)

- Updated upstream bitxorcorp-sdk@v0.17.0
- Updated upstream bitxorcorp-hd-wallets@v0.8.0
- Fixed public key generation tests
- Updated vulnerable dependencies

## [v0.7.0][v0.7.0] - 15-Dec-2019

### Milestone: [bitxorcore-server@v0.9.2.1](https://github.com/bitxorcorp/bitxorcore-server/releases/tag/v0.9.2.1)

- Update sdk to v0.16.0

## [v0.6.1][v0.6.1] - 06-Dec-2019

### Milestone: [bitxorcore-server@v0.9.1.1](https://github.com/bitxorcorp/bitxorcore-server/releases/tag/v0.9.1.1)

- Updated sdk to v0.15.0

## [v0.6.0][v0.6.0] - 22-Nov-2019

### Milestone: [bitxorcore-server pre v0.9.x](https://github.com/bitxorcorp/bitxorcore-server/releases)

- Updated dependency tree

## [v0.5.3][v0.5.3] - 15-Nov-2019

### Milestone: [bitxorcore-server pre v0.9.x](https://github.com/bitxorcorp/bitxorcore-server/releases)

- Using standard `qrcode` package
- Added `npm run build.browser`
- Fixed TransactionQR and MnemonicQR

## [v0.4.1][v0.4.1] - 21-Oct-2019

### Milestone: [bitxorcore-server pre v0.9.x](https://github.com/bitxorcorp/bitxorcore-server/releases)

- Added class `EncryptedPayload`
- Added class `EncryptionService`
- Added data schemas structure with `QRCodeDataSchema`
- Added data schema `AddContactDataSchema`
- Added data schema `ExportAccountDataSchema`
- Added data schema `RequestCosignatureDataSchema` child of Transaction data schema
- Added data schema `RequestTransactionDataSchema` child of Transaction data schema
- Unit tests for AccountQR, ContactQR, TransactionQR, CosignatureQR
- Modified QRCode.toJSON() logic to make use of `build()` method
- Fixed `AccountQR` generation of encrypted private keys for accounts
- Fixed `ContactQR` to also hold `name` information (optional)
- Fixed QR Code `TypeNumber`: ContactQR uses type 10, AccountQR type 20, TransactionQR type 40.
- Removed class `QRService`
- Removed encryption from `QRService` in `AccountQR`

## v0.2.0

### Milestone: [bitxorcore-server pre v0.9.x](https://github.com/bitxorcorp/bitxorcore-server/releases)

- added QRcode base class
- added AccountQR Class
- added ContactQR Class
- added TransactionQR Class
- added ObjectQR Class

## v0.1.0

### Milestone: [bitxorcore-server pre v0.9.x](https://github.com/bitxorcorp/bitxorcore-server/releases)

- added qr-library.
- generate QRcode by string.
- generate image base64 string by string.


[v0.13.0]: https://github.com/bitxorcorp/bitxor-qr-library/compare/v0.12.0...v0.13.0
[v0.12.0]: https://github.com/bitxorcorp/bitxor-qr-library/compare/v0.11.0...v0.12.0
[v0.11.0]: https://github.com/bitxorcorp/bitxor-qr-library/compare/v0.10.0...v0.11.0
[v0.10.0]: https://github.com/bitxorcorp/bitxor-qr-library/compare/v0.9.1...v0.10.0
[v0.9.1]: https://github.com/bitxorcorp/bitxor-qr-library/compare/v0.9.0...v0.9.1
[v0.9.0]: https://github.com/bitxorcorp/bitxor-qr-library/compare/v0.8.0...v0.9.0
[v0.8.0]: https://github.com/bitxorcorp/bitxor-qr-library/compare/v0.7.0...v0.8.0
[v0.7.0]: https://github.com/bitxorcorp/bitxor-qr-library/compare/v0.6.0...v0.7.0
[v0.6.1]: https://github.com/bitxorcorp/bitxor-qr-library/compare/v0.6.0...v0.6.1
[v0.6.0]: https://github.com/bitxorcorp/bitxor-qr-library/compare/v0.5.0...v0.6.0
[v0.5.3]: https://github.com/bitxorcorp/bitxor-qr-library/compare/v0.5.2...v0.5.3
[v0.5.2]: https://github.com/bitxorcorp/bitxor-qr-library/compare/v0.5.1...v0.5.2
[v0.5.1]: https://github.com/bitxorcorp/bitxor-qr-library/compare/v0.5.0...v0.5.1
[v0.5.0]: https://github.com/bitxorcorp/bitxor-qr-library/compare/v0.4.1...v0.5.0
[v0.4.1]: https://github.com/bitxorcorp/bitxor-qr-library/releases/tag/v0.4.1
