import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './routers/contactus.component';
import { ServicesComponent } from './routers/services.component';
import { AccountsComponent } from './routers/accounts.component';
import { SavingsAccountsComponent } from './routers/savings.component';
import { LoanAccountsComponent } from './routers/loan.component';
import { TransactionsDetailsComponent } from './routers/app.transactiondetails.component';
import { TransactionsComponent } from './routers/transactions.component';
import { AdminComponent } from './admin/admin.component';
import { AdminRoutingModule } from './admin/admin.routing.module';
import { AdminChildComponent } from './admin/app.adminchild.comonent';




@NgModule({
  declarations: [
    AppComponent, ContactUsComponent,
    TransactionsDetailsComponent,
    TransactionsComponent, ServicesComponent,
    AccountsComponent, SavingsAccountsComponent,
    LoanAccountsComponent,
    AdminComponent,AdminChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
