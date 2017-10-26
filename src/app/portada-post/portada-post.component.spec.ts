import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortadaPostComponent } from './portada-post.component';

describe('PortadaPostComponent', () => {
  let component: PortadaPostComponent;
  let fixture: ComponentFixture<PortadaPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortadaPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortadaPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
