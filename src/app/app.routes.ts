import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListaComponent } from './components/lista/lista.component';
import { UserdetailComponent } from './components/userdetail/userdetail.component';
import { PostdetailComponent } from './components/postdetail/postdetail.component';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'lista', component: ListaComponent },
    { path: 'user/:userid', component: UserdetailComponent },
    { path: 'post/:postid', component: PostdetailComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
