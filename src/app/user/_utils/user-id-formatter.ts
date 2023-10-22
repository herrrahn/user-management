export class UserIdFormatter {
  public static formatUserId(id: string): string {
    if (id === null || id === undefined) {
      throw new Error('Invalid input: id must be a non-null string');
    }
    const trimmedId = id.trim();
    if (trimmedId.length < 4) {
      return trimmedId.padStart(4, '0');
    }
    return trimmedId;
  }
}
