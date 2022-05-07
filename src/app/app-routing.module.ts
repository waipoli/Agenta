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
import {MySubmissionComponent} from "./pages/game-page/components/my-submission/my-submission.component";
import {StandingsComponent} from "./pages/game-page/components/standings/standings.component";

const routes: Routes = [
  {
    path: '', component: MainPageComponent, children: [
      {path: 'news', component: NewsComponent},
      {path: 'games', component: GamesComponent},
      {path: 'help', component: HelpComponent}
    ]
  },

  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'game/:id', component: GamePageComponent,children:[
      {path: 'problem', component: ProblemComponent},
      {path: 'submit', component: SubmitComponent},
      {path: 'my-submission', component: MySubmissionComponent},
      {path: 'standings', component: StandingsComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
