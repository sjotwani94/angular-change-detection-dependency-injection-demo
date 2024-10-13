import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageService } from './message.service';
import { ParentComponent } from './parent/parent.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, ParentComponent],
    providers: [MessageService],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'Change Detection & Hierarchical Dependency Injection Demo';
}
