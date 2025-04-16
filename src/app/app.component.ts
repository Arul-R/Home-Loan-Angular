import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeloanCalcComponent } from './homeloan-calc/homeloan-calc.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeloanCalcComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'home-loan-calc';
}
