
import validate from '../src/control_sum';

describe('validate', function() {
    it('should validate the account 000000000', () => {
        var account = '000000000';

        expect(validate(account)).toBe(true);
    });

    it('should not validate the account 100000000', () => {
        var account = '100000000';

        expect(validate(account)).toBe(false);
    });

    it('should validate the account 130000000', () => {
        var account = '130000000';

        expect(validate(account)).toBe(true);
    });
    it('should validate the account 123456789', () => {
        var account = '123456789';

        expect(validate(account)).toBe(true);
    });
    it('should validate the account 999999990', () => {
        var account = '999999990';

        expect(validate(account)).toBe(true);
    });
    it('should validate the account 490867715', () => {
        var account = '490867715';

        expect(validate(account)).toBe(true);
    });
    it('should not validate an account containing letters', () => {
        var account = '490867A15';

        expect(validate(account)).toBe(false);
    });

    it('should not validate an account with less than 9 digits', () => {
        var account = '49086715';

        expect(validate(account)).toBe(false);
    });

});
