import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from './routers/contactus.component';
import { ServicesComponent } from './routers/services.component';
import { AccountsComponent } from './routers/accounts.component';
import { SavingsAccountsComponent } from './routers/savings.component';
import { LoanAccountsComponent } from './routers/loan.component';
import { TransactionsDetailsComponent } from './routers/app.transactiondetails.component';
import { TransactionsComponent } from './routers/transactions.component';

//Configuration
const routes: Routes = [
  //root path
  { path: '', component: ServicesComponent },

  //bind with child Modules
  {
    path: 'secrete',
    // folder/fileName#className
    // loadChildren: './admin/admin.routing.module#AdminRoutingModule'
    loadChildren: () => import('./admin/admin.routing.module')
      .then(m => m.AdminRoutingModule)    
    
  },

  { path: 'customercare', redirectTo: '/services', pathMatch: 'full' },
  {
    path: 'contactus', component: ContactUsComponent,
    data: {
      title: 'Customer Care  : Covid-19 '
    }
  },
  {
    path: 'accounts', component: AccountsComponent,
    children: [
      //root sub path :/accounts/savings
      { path: '', redirectTo: 'savingsAccount', pathMatch: 'full' },
      { path: 'savingsAccount', component: SavingsAccountsComponent },
      { path: 'loanAccount', component: LoanAccountsComponent }

    ]
  },
  {
    path: 'transactions', component: TransactionsComponent
  },
  {
    path: 'transactions/:id', component: TransactionsDetailsComponent
  },

  { path: 'services', component: ServicesComponent },
  { path: '**', redirectTo: '/contactus', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] //make this as public
})
export class AppRoutingModule {

}
