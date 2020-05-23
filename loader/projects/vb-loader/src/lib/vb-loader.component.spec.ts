import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VbLoaderComponent } from './vb-loader.component';

describe('VbLoaderComponent', () => {
  let component: VbLoaderComponent;
  let fixture: ComponentFixture<VbLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VbLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VbLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
