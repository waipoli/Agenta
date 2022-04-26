import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./pages/login/login.component";
import { AboutComponent } from './pages/main-page/components/about/about.component';
import { AccountComponent } from './pages/main-page/components/account/account.component';
import { GamesComponent } from './pages/main-page/components/games/games.component';
import { HelpComponent } from './pages/main-page/components/help/help.component';
import { NewsComponent } from './pages/main-page/components/news/news.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { RegisterComponent } from "./pages/register/register.component";

const routes: Routes = [
  {
    path: '', component: MainPageComponent, children: [
      { path: 'news', component: NewsComponent },
      { path: 'games', component: GamesComponent },
      { path: 'help', component: HelpComponent }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
