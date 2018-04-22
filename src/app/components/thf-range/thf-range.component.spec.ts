import { FormsModule } from '@angular/forms';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ThfRangeComponent } from './thf-range.component';
import { expectPropertiesValues } from '../../utils/util-expect.spec';
import { async } from 'q';

describe('ThfRangeComponent', () => {

  let component: ThfRangeComponent;
  let fixture: ComponentFixture<ThfRangeComponent>;
  let nativeElement: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [
        ThfRangeComponent
      ],
      providers:[]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThfRangeComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();

    nativeElement = fixture.debugElement.nativeElement;
  });

  it('should be created', () => {
    expect(component instanceof ThfRangeComponent).toBeTruthy();
  });

  it('should set property `t-minValue` with default value `0`', () => {
    expect(component.minValue).toBe(0);
  });

  it('should set property `t-maxValue` with default value `0`', () => {
    expect(component.maxValue).toBe(0);
  });

  it('should set property `t-initialValue` with default value `0`', () => {
    expect(component.initialValue).toBe(0);
  });

  it('should set property `t-finalValue` with default value `0`', () => {
    expect(component.finalValue).toBe(0);
  });

  it('should set property `t-interval` with default value `0`', () => {
    expect(component.interval).toBe(0);
  });

  it('should set property `t-required` with default value `false`', () => {
    expect(component.required).toBeFalsy();
  });

  it('should set property `t-disabled` with default value `false`', () => {
    expect(component.disabled).toBeFalsy();
  });

  it('should set property `t-indicators` with default value `false`', () => {
    expect(component.interval).toBeFalsy();
  });

  it('should set property `t-decimalPlaces` with default value `0`', () => {
    expect(component.decimalPlaces).toBe(0);
  });

  it('should set property `t-money` with default value `false`', () => {
    expect(component.money).toBeFalsy();
  });

  it('should set property `t-moneySymbol` with default value `R$`', () => {
    expect(component.moneySymbol).toBe('R$');
  });

  it('should call calcIntervalBar when property `t-minValue` is updated', () => {
    spyOn(component, 'calcIntervalBar');
    component.initialValue = 1;
    expect(component.calcIntervalBar).toHaveBeenCalled();
  });

  it('should call calcIntervalBar when property `t-maxValue` is updated', () => {
    spyOn(component, 'calcIntervalBar');
    component.maxValue = 100;
    expect(component.calcIntervalBar).toHaveBeenCalled();
  });

  it('should call calcIntervalBar when property `t-initialValue` is updated', () => {
    spyOn(component, 'calcIntervalBar');
    component.initialValue = 1;
    expect(component.calcIntervalBar).toHaveBeenCalled();
  });

  it('should call calcIntervalBar when property `t-finalValue` is updated', () => {
    spyOn(component, 'calcIntervalBar');
    component.finalValue = 90;
    expect(component.calcIntervalBar).toHaveBeenCalled();
  });

  it('should call calcIntervalBar when property `t-interval` is updated', () => {
    spyOn(component, 'calcIntervalBar');
    component.interval = 1;
    expect(component.calcIntervalBar).toHaveBeenCalled();
  });

  it('should update property `t-disabled` with valid values', () => {
    const booleanValidTrueValues = [true, 'true', 1, ''];
    const booleanValidFalseValues = [false, 'false', 0];

    expectPropertiesValues(component, 'disabled', booleanValidTrueValues, true);
    expectPropertiesValues(component, 'disabled', booleanValidFalseValues, false);
  });

  it('should update property `t-required` with valid values', () => {
    const booleanValidTrueValues = [true, 'true', 1, ''];
    const booleanValidFalseValues = [false, 'false', 0];

    expectPropertiesValues(component, 'required', booleanValidTrueValues, true);
    expectPropertiesValues(component, 'required', booleanValidFalseValues, false);
  });

  it('should update property `t-indicators` with valid values', () => {
    const booleanValidTrueValues = [true, 'true', 1, ''];
    const booleanValidFalseValues = [false, 'false', 0];

    expectPropertiesValues(component, 'indicators', booleanValidTrueValues, true);
    expectPropertiesValues(component, 'indicators', booleanValidFalseValues, false);
  });

  it('should update property `t-money` with valid values', () => {
    const booleanValidTrueValues = [true, 'true', 1, ''];
    const booleanValidFalseValues = [false, 'false', 0];

    expectPropertiesValues(component, 'money', booleanValidTrueValues, true);
    expectPropertiesValues(component, 'money', booleanValidFalseValues, false);
  });

  it('should not call "calcIntervalBar" on eventInput if is disabled', () => {
    
    const fakeThis = {
      disabled: true,
      calcIntervalBar: () => {}
    };

    spyOn(fakeThis, 'calcIntervalBar');
    component.eventOnInput.call(fakeThis);
    expect(fakeThis.calcIntervalBar).not.toHaveBeenCalled();

  });

  it('should not emit change event if is disabled', () => {

    component.disabled = true;
    fixture.detectChanges();
    
    spyOn(component.change, 'emit');

    component.eventOnInput();

    expect(component.change.emit).not.toHaveBeenCalled();
  });

  it('should calc total numbers between interval correctly', () => {

    component.minValue = 0;
    component.maxValue = 100;
    component.interval = 1;
    fixture.detectChanges();
    
    expect(component.calcTotNumbers()).toBe(100);

  });

  it('should calc total numbers interval before initial value correctly', () => {

    component.minValue = 0;
    component.maxValue = 100;
    component.interval = 1;
    component.initialValue = 30;
    component.finalValue = 90;
    fixture.detectChanges();

    const qtdNumbers = component.calcTotNumbersBefore();
    
    expect(qtdNumbers).toBe(30);
    
  });

  it('should calc total numbers interval selected initial value correctly', () => {

    component.minValue = 0;
    component.maxValue = 100;
    component.interval = 1;
    component.initialValue = 30;
    component.finalValue = 90;
    fixture.detectChanges();

    const qtdNumbers = component.calcTotNumbersSelected();
    
    expect(qtdNumbers).toBe(60);
    
  });

  it('should calc interval bar correctly', () => {

    component.minValue = 0;
    component.maxValue = 100;
    component.interval = 1;
    component.initialValue = 30;
    component.finalValue = 90;
    fixture.detectChanges();

    component.calcIntervalBar();

    const el = nativeElement.querySelector('.thf-range-slider-bar-selected');

    expect(el.style.width).toBe('60%');
    expect(el.style.left).toBe('30%');
        
  });

});
