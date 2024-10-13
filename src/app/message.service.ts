export class MessageService {
    constructor() {}

    logMessage(message: string): void {
        console.log('Root Level Dependency: ', message);
    }
}
