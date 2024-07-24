import { CommonModule } from '@angular/common';
import { Component,Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HouseComponent } from './house/house.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,HouseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
   
}






