import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { OurDataService } from '../our-data.service';
import { HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink , RouterOutlet , HttpClientModule],
  providers:[OurDataService],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  xAbout !: string

  constructor(private _OurDataService:OurDataService)
  {
    this._OurDataService.getData().subscribe((res)=>console.log(res))
  }

}
