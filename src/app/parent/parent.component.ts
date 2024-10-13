import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { MessageService } from '../message.service';
import { ParentMessageService } from '../parent-message.service';
import { SecondChildComponent } from '../second-child/second-child.component';

interface NonPrimitiveData {
    value: number;
}

@Component({
    selector: 'app-parent',
    standalone: true,
    imports: [ChildComponent, SecondChildComponent],
    //Commenting out this provider means the dependency will be checked at the root level
    providers: [
        {
            provide: MessageService,
            useClass: ParentMessageService,
        },
    ],
    templateUrl: './parent.component.html',
    styleUrl: './parent.component.scss',
})
export class ParentComponent {
    //This Simple Counter will keep getting updated due to default change detection strategy
    secondsCounter = 0;
    primitiveData: number = 0;
    nonPrimitiveData: NonPrimitiveData = { value: 0 };

    constructor(private messageService: MessageService) {
        setInterval(() => {
            this.secondsCounter++;
        }, 1000);
    }

    updatePrimitive() {
        this.primitiveData++;
    }

    updateNonPrimitive() {
        this.nonPrimitiveData.value++;
    }

    logMessageToConsole() {
        this.messageService.logMessage('Hierarchical Dependency Achieved!');
    }
}
