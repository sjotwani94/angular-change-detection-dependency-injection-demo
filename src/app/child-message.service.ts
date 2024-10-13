export class ChildMessageService {
    constructor() {}

    logMessage(message: string): void {
        console.log('Child Level Dependency: ', message);
    }
}
