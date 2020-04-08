import { Component, DebugElement } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

export class AuthService {
  isAuthenticated(): boolean {
    console.log('inside service', localStorage.getItem('token'), !!localStorage.getItem('token'));
    return !!localStorage.getItem('token');
  }
}
@Component({
  selector: 'app-login',
  template: `<a>
  <span *ngIf="needsLogin()">Login</span>
  <span *ngIf="!needsLogin()">Logout</span>
  </a>`
})
export class LoginComponent {

  constructor(private auth: AuthService) {
  }

  needsLogin() {
    return !this.auth.isAuthenticated();
  }
}
/////////// ******************** *///////////////////////////////////////////


describe('Component: Login', () => {

  let component: LoginComponent;
  let service: AuthService;
  let fixture: ComponentFixture<LoginComponent>;
  let spy: any;
  let el: DebugElement;

  beforeEach(() => {
    // service = new AuthService();
    // component = new LoginComponent(service);
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [AuthService]
    });
    // create component and test fixture
    fixture = TestBed.createComponent(LoginComponent);
    // get test component from the fixture
    component = fixture.componentInstance;
    // UserService provided to the TestBed
    service = TestBed.get(AuthService);

    // get the "a" element by CSS selector (e.g., by class name)
    el = fixture.debugElement.query(By.css('a'));
  });

  afterEach(() => {
    service = null;
    component = null;
    localStorage.removeItem('token');
  });


  it('login button hidden when the user is authenticated', () => {
    // To being with Angular has not done any change detection so the content is     blank.
    expect(el.nativeElement.textContent.trim()).toBe('');
    // Trigger change detection and this lets the template update to the initial value     which; is; Login; since; by;
    // default we are not authenticated
    fixture.detectChanges();
    expect(el.nativeElement.textContent.trim()).toBe('Login');
    // Change the authetication state to true
    spyOn(service, 'isAuthenticated').and.returnValue(true);
    // The label is still Login! We need changeDetection to run and for angular to     update; the; template.
    expect(el.nativeElement.textContent.trim()).toBe('Login');
    // Which we can trigger via fixture.detectChange()
    fixture.detectChanges();
    // Now the label is Logout
    expect(el.nativeElement.textContent.trim()).toBe('Logout');
  });

});
