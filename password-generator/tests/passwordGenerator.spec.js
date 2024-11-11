

import { generatePassword } from "../src/passwordGenerator";


describe('Password Generator Tests', () => {
    it('should generate a password with lowercase letters only', () => {
        const password = generatePassword(20, false, false, false);
        expect(password).toMatch(/^[a-z]+$/);
    });

    it('should generate a password with uppercase letters', () => {
        const password = generatePassword(20, true, false, false);
        expect(password).toMatch(/[A-Z]/);
    });

    it('should generate a password with symbols', () => {
        const password = generatePassword(20, false, true, false);
        expect(password).toMatch(/[\!\"\#\$\%\^\&\*\(\)\_\+\-\=\[\]\{\}\|;:,.<>?]/);
    });

    it('should generate a password with numbers', () => {
        const password = generatePassword(20, false, false, true);
        expect(password).toMatch(/[0-9]/);
    });

    it('should generate a password with all character types', () => {
        const password = generatePassword(20, true, true, true);
        expect(password).toMatch(/[A-Z]/);
        expect(password).toMatch(/[\!\"\#\$\%\^\&\*\(\)\_\+\-\=\[\]\{\}\|;:,.<>?]/);
        expect(password).toMatch(/[0-9]/);
    });
});
