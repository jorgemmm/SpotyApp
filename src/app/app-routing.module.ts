import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';


const APP_ROUTES: Routes = [
  {path:'home' , component: HomeComponent },
  {path:'search', component: SearchComponent },
  {path:'**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES 
        ,{ useHash:true} 
        )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
