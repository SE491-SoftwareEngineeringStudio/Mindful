import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { RouterService } from 'src/app/services/router.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  const router = <Router>{};
  const routerService = new RouterService(router);

  beforeEach(async () => {
    component = new LoginComponent(routerService, {} as FirebaseService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
