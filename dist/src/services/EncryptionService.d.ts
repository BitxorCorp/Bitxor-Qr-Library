import { EncryptedPayload } from '../../index';
/**
 * Class `EncryptionService` describes a high level service
 * for encryption/decryption of data.
 *
 * Implemented algorithms for encryption/decryption include:
 * - AES with PBKDF2 (Password-Based Key Derivation Function)
 *
 * @since 0.3.0
 */
declare class EncryptionService {
    /**
     * The `encrypt` method will encrypt given `data` raw string
     * with given `password` password.
     *
     * First we generate a random salt of 32 bytes, then we iterate
     * 2000 times with PBKDF2 and encrypt with AES.
     *
     * @param password {string}
     * @param data {string}
     */
    static encrypt(data: string, password: string): EncryptedPayload;
    /**
     * AES_PBKF2_decryption will decrypt privateKey with provided password
     * @param payload the object containing the encrypted data.
     * @param password the password to decrypt the encrypted data
     */
    static decrypt(payload: EncryptedPayload, password: string): string;
}
export { EncryptionService };
