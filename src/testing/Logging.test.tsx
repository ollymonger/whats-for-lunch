import { Logging } from '../utils/logging';

/*Logger testing*/
test('logger prints: [INFO 1] | Logging initialised.', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    let logger: Logging = new Logging();
    expect(consoleSpy).toHaveBeenCalledWith("[INFO 1] | Logging initialised.");
})
