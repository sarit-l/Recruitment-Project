import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { FormHandlerService } from './form-handler.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 0]
    })
  ],
  providers: [FormHandlerService],
  bootstrap: [AppComponent]
})
export class AppModule { } 
app.module.ts

// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { ReactiveFormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';
// import { HttpClientModule } from '@angular/common/http';

// import { AppComponent } from './app.component';
// import { routes } from './app.routes';
// import { FormHandlerService } from './form-handler.service';
// // שורת ה-import החדשה והמתוקנת
// import { RequestDetailsComponent } from './request-details/request-details.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     // הוספת הקומפוננטה החדשה למערך
//     RequestDetailsComponent
//   ],
//   imports: [
//     BrowserModule,
//     ReactiveFormsModule,
//     HttpClientModule,
//     RouterModule.forRoot(routes, {
//       scrollPositionRestoration: 'enabled',
//       anchorScrolling: 'enabled',
//       scrollOffset: [0, 0]
//     })
//   ],
//   providers: [FormHandlerService],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }