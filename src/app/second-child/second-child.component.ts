import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-second-child',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './second-child.component.html',
    styleUrl: './second-child.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecondChildComponent {
    simpleCounter = 0;
    // Updated value from this will be displayed using async pipe
    secondsCounterObservable$!: Observable<number>;

    constructor() {
        this.secondsCounterObservable$ = new Observable((subscriber) => {
            let value = 0;
            setInterval(() => {
                subscriber.next(value++);
            }, 1000);
        });
    }

    updateChildData() {
        this.simpleCounter++;
    }
}
