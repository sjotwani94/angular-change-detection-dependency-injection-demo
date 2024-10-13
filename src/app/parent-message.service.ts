export class ParentMessageService {
    constructor() {}

    logMessage(message: string): void {
        console.log('Parent Level Dependency: ', message);
    }
}
