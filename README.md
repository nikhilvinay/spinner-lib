```html
<vb-loader></vb-loader>
```
<hr></hr>
<h1>Features</h1>
<ul>
  <li>Plugable Loader</li>
  <li>No blacking out whole screen</li>
  <li>You can select your own color</li>
  <li>Set your loader wherever you want</li>
  <li>Select loader from lot of varieties</li>
  <li>Easy to use</li>
</ul>
<hr></hr>
<h1>installation</h1>
<ul>
  <li> npm i vbloader </li>
</ul>
<h1>Examples</h1>
<p>Soon I will fill this section :) </p>
<hr></hr>
<h1>How to vb-loader</h1>
<ul>
  <li>Install vb-loader using npm i vbloader</li>
  <li>
    Include vb-loader module in your main app.module.ts (Or add it in your shared module)
    After adding <vb-loader> your code should look like below
      
      import { BrowserModule } from '@angular/platform-browser';
      import { NgModule } from '@angular/core';
      import { AppRoutingModule } from './app-routing.module';
      import { AppComponent } from './app.component';
      import { VbLoaderModule } from 'vb-loader';
      @NgModule({
        declarations: [
          AppComponent
        ],
        imports: [
          BrowserModule,
          AppRoutingModule,
          VbLoaderModule
        ],
        providers: [],
        bootstrap: [AppComponent]
      })
      export class AppModule { }

  </li>
  <li>
    Now go to your component.ts file where you are actually gonna add this loader on say API call
    <ul>
      <li>
        <p>Import our serice by using below line</p>
        <p>import { VbLoaderService } from 'vb-loader';</p>
      </li>
    </ul>
  </li>
  <li>
  Now it's time to add your loader in html file
  
    <vb-loader *ngIf="vbLoaderService?.isEnabled?.value"></vb-loader>
    
  </li>
  <li>
    Now hide show loader on API call in component.ts file
  
    getUserDetails() {
      this.vbLoaderService.show();
      this.someUserApi.getSomeUserDetails.subscribe((someResponse: someTypeOfInterface) => {
        if (someResponse.status) {
        }
        this.vbLoaderService.hide();
      },
      (someError) => {
        this.vbLoaderService.hide();
      });
    }
    
  </li>
</ul>
<hr></hr>
<h1>Changelog</h1>
<ul>
  <li>
    <b>0.0.1</b>
    <p>Basic Loader with Service to handle loader</p>
  </li>
  <li>
    <b>0.0.2 (In Progress)</b>
    <p>Choose from variety of loader</p>
  </li>
</ul>
