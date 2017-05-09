// Modules 3rd party
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Modules

// Services
import { HttpCommonService } from './shared/services/http-common.service';

// Main
import { AppComponent } from 'app.component.ts';

// Components
import { CategoryFormComponent } from './components/category-form.component.ts';

@NgModule({
  declarations: [
    AppComponent,
    CategoryFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
  ],
  providers: [
    HttpCommonService
    ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
