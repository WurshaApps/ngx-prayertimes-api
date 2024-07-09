import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxPrayertimesApiService, methods } from 'ngx-prayertimes-api';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, AsyncPipe, JsonPipe],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
    constructor(public service: NgxPrayertimesApiService) {}
    response?: methods;
    ngOnInit(): void {
        this.service.getMethods().subscribe({
            next: (x) => (this.response = x.data),
        });
    }
    title = 'demo';
}
