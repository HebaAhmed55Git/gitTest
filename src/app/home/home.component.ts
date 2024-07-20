import { Component, inject } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { OurDataService } from '../our-data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutComponent],
  providers:[OurDataService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  xHome !: string;
  _OurDataService!:OurDataService

  constructor()
  {
    this._OurDataService = inject(OurDataService)
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this._OurDataService.x.pop()
    console.log(this._OurDataService.x)
  }

}
