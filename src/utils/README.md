# Utilities
This is a list of available functions specific to this project.

### getRandomFood
- Imports Food model from the model: ./models/Food.ts
- Assigns a default Food value for the fetched data to fill
- await fetched data from the server's api route.
- Catch any error produced from the request
- Return only selected Food data


### Using the logging system
This code features its own logging system, accessible by using:
```typescript
import {Logger} from './utils/Logging.ts'

let logger: Logger = new Logger();

logger.log("info", "Example info message.");
```

To use any other key message, like [ERROR] or [WARN], visit the Logging.ts file mentioned above.
