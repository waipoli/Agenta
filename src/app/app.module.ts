import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { RegisterComponent } from './pages/register/register.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { GamesComponent } from './pages/main-page/components/games/games.component';
import { GameComponent } from './pages/main-page/components/games/game/game.component';
import { NewsComponent } from './pages/main-page/components/news/news.component';
import { AccountsComponent } from './pages/main-page/components/accounts/accounts.component';
import { AboutComponent } from './pages/main-page/components/about/about.component';
import { HelpComponent } from './pages/main-page/components/help/help.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MainPageComponent,
    GamesComponent,
    GameComponent,
    NewsComponent,
    AccountsComponent,
    AboutComponent,
    HelpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
