import { FAuthService } from "./_services/fauth.service";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
// firebase
import { AngularFireModule } from "@angular/fire";
import {
  AngularFirestore,
  AngularFirestoreModule
} from "@angular/fire/firestore";
// used to create fake backend
import { fakeBackendProvider } from "./_helpers";
import { AppComponent } from "./app.component";
import { appRoutingModule } from "./app.routing";
import { JwtInterceptor, ErrorInterceptor } from "./_helpers";
import { HomeComponent } from "./home";
import { LoginComponent } from "./login";
import { SignupComponent } from "./signup/signup.component";
import { UserListComponent } from "./user-list/user-list.component";
import { environment } from "../environments/environment";
import { AngularFireAuth } from "@angular/fire/auth";

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    appRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    UserListComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    FAuthService,
    AngularFireAuth,
    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
