import { Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './components/user/user-dashboard/user-dashboard.component';

export const routes: Routes = [
    {path: '' , component: UserDashboardComponent},
    {path: 'admin' , component: AdminDashboardComponent}
];

