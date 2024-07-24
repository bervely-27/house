import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-house',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './house.component.html',
  styleUrl: './house.component.css'
})
export class HouseComponent {
  houses=[
    {
      id:1,
      image:'/photo1.jpg',
      title:'Acme Fresh Start Housing',
      city:"Chicago,IL",
      isAvailable: true
    },
    { id:2,
      image:'/photo2.jpg',
      title:'A113 Treansitional Housing',
      city:"Santa Monica,CA",
      isAvailable: true
    },
    { id:3,
      image:'/photo3.jpg',
      title:'Warm Beds Housing Support',
      city:"Juneau,AK",
      isAvailable: true
    },
    { id:4,
      image:'/photo4.jpg',
      title:'Homesteady Housing',
      city:"Chicago,IL",
      isAvailable:false
    },
    { id:5,
      image:'/photo5.jpg',
      title:'Happy Homes Group',
      city:"Gary,IN",
      isAvailable:true

    },
    { id:6,
      image:'/photo6.jpg',
      title:'Hopeful Apartment Group',
      city:"Chicago,IL",
      isAvailable:false

    },
    { id:7,
      image:'/photo7.jpg',
      title:'Seriously Safe Towns',
      city:"Oakland,CA",
      isAvailable:false,
    

    },
    { id:8,
      image:'/photo8.jpg',
      title:'Hopeful Housing Solutions',
      city:"Oakland,CA",
      isAvailable:true

    },
    { id:9,
      image:'/photo9.jpg',
      title:'Seriously Safe Towns',
      city:"Oakland,CA",
      isAvailable:false

    },
    { id:10,
      image:'/photo10.jpg',
      title:'Capital Safe Towns',
      city:"Portland,OR",
      isAvailable:true

    }
  ]
}
