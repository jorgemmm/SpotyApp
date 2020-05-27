import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  //styleUrls: ['./cards.component.css']
})
export class CardsComponent  {

@Input() items:any[] = [];

   constructor(private route: Router) { }

  verArtista(item: any){
    
       console.log(item);
       let artistaId:string;
        
       if( item.type === 'artist' ){
        artistaId=item.id;
       }else{
         artistaId=item.artists[0].id;
       }
      console.log(artistaId);

      this.route.navigate(['/artist', artistaId]);

   }
}
