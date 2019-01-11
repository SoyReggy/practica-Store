import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routes7
import { APP_ROUTING } from '../app/app.routes';


// Services
import { UserService } from './services/user.service';
import { PostService } from './services/post.service';

// Components, Material & Flex-Layout

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatListModule, MatButtonModule, MatCardModule} from '@angular/material';
import { ListaComponent } from './components/lista/lista.component';
import { HomeComponent } from './components/home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UserdetailComponent } from './components/userdetail/userdetail.component';
import { PostdetailComponent } from './components/postdetail/postdetail.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from '../app/components/shared/store/reducers';
import { effects } from '../app/components/shared/store/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListaComponent,
    HomeComponent,
    UserdetailComponent,
    PostdetailComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    FlexLayoutModule,
    MatCardModule,
    APP_ROUTING,
    HttpClientModule,
    StoreModule,
    EffectsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // numero de estados que retiene
      logOnly: environment.production,
    }),
  ],
  providers: [UserService,
              PostService],

  bootstrap: [AppComponent]
})
export class AppModule { }
