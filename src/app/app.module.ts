import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HttpClientModule} from "@angular/common/http";
import { RegisterComponent } from './pages/register/register.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { GamesComponent } from './pages/main-page/components/games/games.component';
import { GameComponent } from './pages/main-page/components/games/game/game.component';
import { NewsComponent } from './pages/main-page/components/news/news.component';
import { HelpComponent } from './pages/main-page/components/help/help.component';
import { TopPanelComponent } from './pages/main-page/components/top-panel/top-panel.component';
import {NewComponent} from "./pages/main-page/components/news/new/new.component";
import { GamePageComponent } from './pages/game-page/game-page.component';
import {ProblemComponent, SafeHtmlPipe} from './pages/game-page/components/problem/problem.component';
import { SubmitComponent } from './pages/game-page/components/submit/submit.component';
import { MyBotsComponent } from './pages/game-page/components/my-bots/my-bots.component';
import { StandingsComponent } from './pages/game-page/components/standings/standings.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BotComponent } from './pages/game-page/components/my-bots/bot/bot.component';
import { StandingsBlockComponent } from './pages/game-page/components/standings/standings-block/standings-block.component';
import { AccountComponent } from './pages/main-page/components/account/account.component';
import { DataComponent } from './pages/main-page/components/account/components/data/data.component';
import { CreateGameComponent } from './pages/creates/create-game/create-game.component';
import {EditorModule} from "@tinymce/tinymce-angular";

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
        GamePageComponent,
        ProblemComponent,
        SubmitComponent,
        MyBotsComponent,
        StandingsComponent,
        BotComponent,
        StandingsBlockComponent,
        AccountComponent,
        DataComponent,
        SafeHtmlPipe,
        CreateGameComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    EditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
