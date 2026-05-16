import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const adminGuard: CanActivateFn = () => {
  const router = inject(Router);

  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  if (!token) {
    router.navigate(['/login']);
    return false;
  }

  // ✅ เช็ค role_id === 1
  if (user.role_id !== 1) {
    router.navigate(['/login']);
    return false;
  }

  return true;
};