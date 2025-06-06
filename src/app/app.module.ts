import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './Components/card/card.component';
import { CardInterpolationComponent } from './Components/interpolation/card-interpolation/card-interpolation.component';
import { TourCardComponent } from './Components/interpolation/prop-binding/tour-card/tour-card.component';
import { MagCardComponent } from './Components/even-binding/mag-card/mag-card.component';
import { CounterComponent } from './Components/even-binding/counter/counter.component';
import { InfoCardComponent } from './Components/even-binding/info-card/info-card.component';
import { ProductItemComponent } from './Components/even-binding/Product/product-item/product-item.component';
import { StopWatchComponent } from './Components/even-binding/Stopwatch/stop-watch/stop-watch.component';
import { TextCardComponent } from './Components/forms-binding/text-card/text-card.component';
import { UserCardComponent } from './Components/forms-binding/user-card/user-card.component';
import { FormsModule } from '@angular/forms';
import { SmsAppComponent } from './Components/forms-binding/sms-app/sms-app.component';
import { ShowPasswordComponent } from './Components/forms-binding/show-password/show-password.component';
import { AmountRangeComponent } from './Components/forms-binding/amount-range/amount-range.component';
import { ThemeComponent } from './Components/forms-binding/theme/theme.component';
import { RegisterComponent } from './Components/forms-binding/register/register.component';
import { AuthCardComponent } from './Components/Directives/auth-card/auth-card.component';
import { HobbySelectComponent } from './Components/Directives/hobby-select/hobby-select.component';
import { HobbySwitchComponent } from './Components/Directives/hobby-switch/hobby-switch.component';
import { EmployeeComponent } from './Components/Directives/employee/employee.component';
import { PersonListComponent } from './Components/Directives/person-list/person-list.component';
import { ParentComponent } from './Components/Directives/simple-ParentChild/parent/parent.component';
import { ChildComponent } from './Components/Directives/simple-ParentChild/child/child.component';
import { ParentCardComponent } from './Components/Directives/complex-ParantChild/parent-card/parent-card.component';
import { ChildCardComponent } from './Components/Directives/complex-ParantChild/child-card/child-card.component';
import { ClientCardComponent } from './Components/Component-Interaction/UnReleted-Component-Interaction/client-card/client-card.component';
import { ServerCardComponent } from './Components/Component-Interaction/UnReleted-Component-Interaction/server-card/server-card.component';
import { EmployeeListComponent } from './Components/ServiceComponent/employee-list/employee-list.component';
import { EmployeeCardComponent } from './Components/ServiceComponent/employee-card/employee-card.component';
@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardInterpolationComponent,
    TourCardComponent,
    MagCardComponent,
    CounterComponent,
    InfoCardComponent,
    ProductItemComponent,
    StopWatchComponent,
    TextCardComponent,
    UserCardComponent,
    SmsAppComponent,
    ShowPasswordComponent,
    AmountRangeComponent,
    ThemeComponent,
    RegisterComponent,
    AuthCardComponent,
    HobbySelectComponent,
    HobbySwitchComponent,
    EmployeeComponent,
    PersonListComponent,
    ParentComponent,
    ChildComponent,
    ParentCardComponent,
    ChildCardComponent,
    ClientCardComponent,
    ServerCardComponent,
    EmployeeListComponent,
    EmployeeCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
