import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParentComponent } from './parent/parent.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, ParentComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'Change Detection & Hierarchical Dependency Injection Demo';
}
