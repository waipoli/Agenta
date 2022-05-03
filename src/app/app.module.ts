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
import { HelpComponent } from './pages/main-page/components/help/help.component';
import { TopPanelComponent } from './pages/main-page/components/top-panel/top-panel.component';
import {NewComponent} from "./pages/main-page/components/news/new/new.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MainPageComponent,
    GamesComponent,
    GameComponent,
    NewsComponent,
    HelpComponent,
    TopPanelComponent,
    NewComponent,
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
