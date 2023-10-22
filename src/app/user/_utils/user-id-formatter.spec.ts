import {UserIdFormatter} from './user-id-formatter';

describe('formatUserId', () => {

    // Returns the same string as input if it has length >= 4
    it('should return the same string when the input has length >= 4', () => {
      const result = UserIdFormatter.formatUserId('1234');
      expect(result).toBe('1234');
    });

    // Pads the input string with leading zeros if it has length < 4
    it('should pad the input string with leading zeros when it has length < 4', () => {
      const result = UserIdFormatter.formatUserId('12');
      expect(result).toBe('0012');
    });

    // Throws an error if the input is null
    it('should throw an error when the input is null', () => {
      expect(() => {
        // @ts-ignore
        UserIdFormatter.formatUserId(null);
      }).toThrowError('Invalid input: id must be a non-null string');
    });

    // Throws an error if the input is undefined
    it('should throw an error when the input is undefined', () => {
      expect(() => {
        // @ts-ignore
        UserIdFormatter.formatUserId(undefined);
      }).toThrowError('Invalid input: id must be a non-null string');
    });

    // Trims the input string before processing
    it('should trim the input string before processing', () => {
      const result = UserIdFormatter.formatUserId('  1234  ');
      expect(result).toBe('1234');
    });

    // Returns the same string as input if it has length == 4
    it('should return the same string when the input has length == 4', () => {
      const result = UserIdFormatter.formatUserId('1234');
      expect(result).toBe('1234');
    });

});
