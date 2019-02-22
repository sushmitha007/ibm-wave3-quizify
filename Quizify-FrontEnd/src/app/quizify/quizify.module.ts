import { CardService } from './services/card.service';
import { GamehistoryComponent } from './components/gamehistory/gamehistory.component';
import { ProfileuserComponent } from './components/profileuser/profileuser.component';
import { MatRadioModule } from '@angular/material/radio';
import { RegisterComponent } from './components/register/register.component';
import { QuizifyMaterialModule } from './quizify.material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/profile/profile.component';
import { CardsComponent } from './components/cards/cards.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatCardModule, MatCardHeader, MatFormField, MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SearchComponent } from './components/search/search.component';
import { GameComponent } from './components/game/game.component';
import { QuestionGeneratorComponent } from './components/question-generator/question-generator.component';
import { HeaderComponent } from './components/header/header.component';
import { GamedetailsService } from './services/gamedetails.service';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { SingleplayerComponent } from './components/singleplayer/singleplayer.component';
=======
import { CookieService } from 'ngx-cookie-service';
import { GamedetailsComponent } from './components/gamedetails/gamedetails.component';

>>>>>>> e3290fc26791841884717db6afee04d81962dc79
@NgModule({
  declarations: [ CardsComponent,
    ProfileComponent,
    RegisterComponent,
    LoginComponent,
    SearchComponent,
    ProfileuserComponent,
    GamehistoryComponent,
    GameComponent,
    QuestionGeneratorComponent,
    HeaderComponent,
<<<<<<< HEAD
    SingleplayerComponent
=======
    GamedetailsComponent
>>>>>>> e3290fc26791841884717db6afee04d81962dc79
     ],
     providers: [ CardService, CookieService, GamedetailsService],

  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatCardModule,
    QuizifyMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    BrowserModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [ CardsComponent,
    ProfileComponent,
    RegisterComponent,
    LoginComponent,
    SearchComponent,
    ProfileuserComponent,
    GamehistoryComponent,
    GameComponent,
    QuestionGeneratorComponent,
    GamedetailsComponent
   ],

})
export class QuizifyModule { }
