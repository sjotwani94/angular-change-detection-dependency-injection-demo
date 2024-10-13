import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { ChildMessageService } from '../child-message.service';
import { MessageService } from '../message.service';

@Component({
    selector: 'app-child',
    standalone: true,
    imports: [CommonModule],
    //Commenting out this provider means the dependency will be checked at the immediate parent level
    providers: [
        {
            provide: MessageService,
            useClass: ChildMessageService,
        },
    ],
    templateUrl: './child.component.html',
    styleUrl: './child.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent {
    // This gets updated when parent component updates it
    @Input() primitiveData!: number;
    // This gets updated when parent component updates it, only thing is that it updates only when there's any onPush event detected
    @Input() nonPrimitiveData!: { value: number };
    // This gets updated only because of manual change detection imposed
    secondsCounter = 0;

    constructor(private changeDetectorRef: ChangeDetectorRef, private messageService: MessageService) {
        setInterval(() => {
            this.secondsCounter++;
            //Commenting the below line will result in secondsCounter & nonPrimitiveData's value not being updated unless there's an onPush event detected
            this.changeDetectorRef.detectChanges();
        }, 1000);
    }

    updatePrimitiveData() {
        this.primitiveData++;
    }

    updateNonPrimitiveData() {
        this.nonPrimitiveData.value++;
    }

    logMessageToConsole() {
        this.messageService.logMessage('Hierarchical Dependency Achieved!');
    }
}
