export class Logging {
    constructor() {
        this.log("info", "Logging initialised.");
    }

    private readonly logLevel: { [key: string]: number } = {
        'DEBUG': 0,
        'INFO': 1,
        'WARN': 2,
        'ERROR': 3,
        'UNKNOWN LOG LEVEL': -1
    }

    private levelToInt(level: string) {
        if (level.toUpperCase() in this.logLevel) {
            return this.logLevel[level.toUpperCase()];
        }
        return -1;
    }

    public log(level: string, msg: string) {
        let levelToInt = this.levelToInt(level);
        let levelAsUpper = level.toUpperCase();
        return console.log(`[${levelAsUpper} ${levelToInt}] | ${msg}`);
        // possibly connect this with a cloud logging service.
    }

}
