# Demonstrating Change Detection And Dependency Injection in Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.8.

This application consists of 4 components: App (Root Component), Parent Component (using default strategy for change detection), and 2 Child Components (using onPush strategy for change detection).

## Change Detection

-> Parent Component has 3 variables:

1. Seconds Counter (Which is local to the component and gets incremented every second because of setInterval function specified inside Constructor)

2. Primitive Data (A Number, which is sent to First Child Component, and gets incremented whenever user clicks on the button to update this data)

3. Non-Primitive Data (An object containing value as a number, which is sent to First Child Component, and gets incremented whenever user clicks on the button to update this data)

-> First Child Component has 3 variables:

1. Primitive Data (Received from the Parent Component, this gets updated when parent component updates it. It also gets updated from child component if the button for incrementing the value is clicked, but the value is overridden if Parent Component sends updates)

2. Non-Primitive Data (Received from the Parent Component, An object containing value as a number, this gets updated when parent component updates it, only thing is that it updates only when there's any onPush event detected. Updates made by child are also reflected in Parent Component as the variable is passed by reference)

3. Seconds Counter (This gets updated only because of manual change detection imposed inside the setInterval function inside the constructor) (Try removing the change detector function call to see the difference)

-> Second Child Component has 2 variables:
1. Simple Counter (Value gets incremented on button click)
2. secondsCounterObservable which is of type Observable<number> (Updated value from this will be displayed using async pipe, because of the setInterval function passed as subscriber function to the observable)

## Hierarchical Dependency Injection

There are 3 services created with the same function:

1. Message Service (Injected inside the App Component - Root Level)
2. Parent Message Service (Injected inside the Parent Component - Parent Level)
3. Child Message Service (Injected inside the Child Component - Child Level)

If the provider is absent inside the Child Component, the service dependency will be checked at the immediate parent level (which is inside the Parent Component)
If the provider is absent inside the Parent Component, the service dependency will be checked at the root level (which is inside the App Component)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
