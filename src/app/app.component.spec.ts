import { TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { StarBackgroundComponent } from './shared/components/star-background/star-background.component';
import { RouterModule } from '@angular/router';

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([])],
      declarations: [AppComponent, StarBackgroundComponent],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app);
  });

  it(`should have as title 'SwCardGame'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('SwCardGame');
  });

  it('should render star-background', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-star-background')).not.toEqual(null);
  });

  it('should have a router outlet', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('router-outlet')).not.toEqual(null);
  });
});
