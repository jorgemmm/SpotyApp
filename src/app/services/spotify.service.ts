import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { promise } from 'protractor';
import { map } from 'rxjs/operators'




@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

cargando= true;
searching=true;
ArtistFilter:any[]=[];

  constructor(
    private http: HttpClient,
  ) { 
    console.log('Spotify service listo');
    //this.getToken();
  }

  //upte mediante postman o mediante una petición post
  token:string='BQAAKojkawnlxvLJq0HE1RkpggQv0f60Cj5JZ2h-XZtIqlVN1yP7EMfePtVl1Goer5xSrkdOMVaqCgXzUS4';

  spotifyurl:string='https://api.spotify.com';


  getQuery(query:string)
  {

    const url:string= `https://api.spotify.com/v1/${ query }`;

    const headers= new HttpHeaders({      
        'Authorization':`Bearer ${ this.token }`                      
      });

     return this.http.get(url, { headers });

  }

 



   bodyfortoken:bodyType = {
     grant_type:'client_credentials',
     client_id: '02baaae616e84d1b9f57ef17238063d8',
     client_secret: '1b5a87de5e3747d6a958e406d1c17ba4'
   }


  getToken(){
       
        // return new Promise ( (resolve, reject)=>{
        //     this.http.post('https://accounts.spotify.com/api/token', this.bodyfortoken)
        //     .subscribe(  (data:any)=> {         
                
        //         console.log(data); 

        //         resolve();
        //     });
        // });
        
  }




  getNewReleases(){
  
    //  const headers= new HttpHeaders({    
    //   'Authorization':`Bearer ${ this.token }`                      
    // });   
   //return this.http.get('https://api.spotify.com/v1/browse/new-releases' ,{headers});                    
    //return this.http.get(`${ this.spotifyurl }/v1/browse/new-releases` ,{headers})

    
    return this.getQuery('browse/new-releases')    
                .pipe( map ( data =>  data['albums'].items));           
                                   //return data.albums.items;
         
    }


 getArtists(termino:string){

    //  const headers= new HttpHeaders({    
    //   'Authorization':`Bearer ${ this.token }`                      
    // });   
    
    //return this.http.get(`${ this.spotifyurl }/v1/search?q=${ termino }&type=artist&limit=15` ,{headers});
    //return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15` ,{headers})

    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
               .pipe( map ( data => data['artists'].items ));   
      
 
  }





  getArtist(id:string){
 //GET https://api.spotify.com/v1/artists/{id}
 
   return this.getQuery(`artists/${ id }`);
  //return this.http.get(`https://api.spotify.com/v1/artists/${ {id} }`, { headers } );
                  //.pipe( map ( data => data['artists'].items ));  
  }


}

export interface bodyType{
  grant_type:string;
  client_id:string;
  client_secret;


}
