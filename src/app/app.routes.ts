import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Selectgame } from './pages/selectgame/selectgame';
import { Selectmode } from './pages/selectmode/selectmode';
import { adminGuard } from './guards/admin-guard';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'login', component: Login },
    { path: 'selectgame', component: Selectgame },
    { path: 'selectmode', component: Selectmode },
     {
    path: 'admin',
    loadComponent: () => import('./pages/admin/admin').then(m => m.Admin),
    canActivate: [adminGuard] // 🔥 ใช้ตรงนี้
  }
];
