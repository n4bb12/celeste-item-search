import { HttpClientModule } from "@angular/common/http"
import { async, TestBed } from "@angular/core/testing"
import { ReactiveFormsModule } from "@angular/forms"
import { BrowserModule } from "@angular/platform-browser"
import { RouterModule } from "@angular/router"

import { ClickOutsideModule } from "ng-click-outside"
import { NgScrollbarModule } from "ngx-scrollbar"

import { AppComponent } from "./app.component"
import { AwaitFontDirective } from "./await-font.directive"
import { BackToTopComponent } from "./back-to-top/back-to-top.component"
import { LegalComponent } from "./legal/legal.component"
import { EffectValuePipe, KeysPipe } from "./pipes"
import { AdvisorComponent } from "./results/advisor/advisor.component"
import { BlueprintComponent } from "./results/blueprint/blueprint.component"
import { ItemComponent } from "./results/item/item.component"
import { ResultsComponent } from "./results/results.component"
import { SearchComponent } from "./search/search.component"
import { TabsComponent } from "./tabs/tabs.component"

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        HttpClientModule,
        NgScrollbarModule,
        ReactiveFormsModule,
        RouterModule.forRoot([]),
        ClickOutsideModule,
      ],
      declarations: [
        AdvisorComponent,
        AppComponent,
        AwaitFontDirective,
        BackToTopComponent,
        BlueprintComponent,
        EffectValuePipe,
        ItemComponent,
        KeysPipe,
        LegalComponent,
        ResultsComponent,
        SearchComponent,
        TabsComponent,
      ],
    }).compileComponents()
  }))

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  })
})
