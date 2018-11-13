import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeDisplayComponent } from './time-display.component';
import { ClockPickerService } from '../../services/clock-picker.service';
import { MockClockPickerService } from '../../tests/mocks';
import { HoursModePanelComponent } from '../hours-mode-panel/hours-mode-panel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TimeDisplayComponent', () => {
  let component: TimeDisplayComponent;
  let fixture: ComponentFixture<TimeDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule],
      declarations: [ TimeDisplayComponent, HoursModePanelComponent ],
      providers: [ { provide: ClockPickerService, useClass: MockClockPickerService }]
    })
    .compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TimeDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should return correct display hours', async(() => {
    expect(component.displayHours).toBe('10');
  }));

  it('should return correct display minutes', async(() => {
    expect(component.displayMinutes).toBe('01');
  }));

  it('should return correct isHoursMode', async(() => {
    expect(component.isHoursMode).toBe(false);
  }));
});