import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {GamesComponent} from './pages/main-page/components/games/games.component';
import {HelpComponent} from './pages/main-page/components/help/help.component';
import {NewsComponent} from './pages/main-page/components/news/news.component';
import {MainPageComponent} from './pages/main-page/main-page.component';
import {RegisterComponent} from "./pages/register/register.component";
import {GamePageComponent} from "./pages/game-page/game-page.component";
import {ProblemComponent} from "./pages/game-page/components/problem/problem.component";
import {SubmitComponent} from "./pages/game-page/components/submit/submit.component";
import {MyBotsComponent} from "./pages/game-page/components/my-bots/my-bots.component";
import {StandingsComponent} from "./pages/game-page/components/standings/standings.component";
import {AccountComponent} from "./pages/main-page/components/account/account.component";
import {CreateGameComponent} from "./pages/creates/create-game/create-game.component";

const routes: Routes = [
  {path: '', redirectTo: '/news/0', pathMatch: "full"},
  {
    path: '', component: MainPageComponent, children: [
      {path: 'news/:id', component: NewsComponent},
      {path: 'games', component: GamesComponent},
      {path: 'help', component: HelpComponent},
      {path: 'account', component: AccountComponent}
    ]
  },

  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'creates/create-game', component: CreateGameComponent},
  {
    path: 'game/:id', component: GamePageComponent, children: [
      {path: 'problem', component: ProblemComponent},
      {path: 'submit', component: SubmitComponent},
      {path: 'my-submission', component: MyBotsComponent},
      {path: 'standings', component: StandingsComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
