import { MarkDirective} from './mark.directive';
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
@Component({
  template: `
    <h2 mark="complete">Completed Todo (green)</h2>
    <h2 mark="incomplete">Incompleted Todo (red)</h2>
    <h2>Default color</h2>
    <h2 mark>Unmarked Todo</h2>`
})
class TestComponent { }
let fixture;
let compHeaders;
let noDirHeaders;

describe('MarkDirective', () => {
  const directive = new MarkDirective();
  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [MarkDirective, TestComponent] 
    })
    .createComponent(TestComponent);

    fixture.detectChanges();
    compHeaders = fixture.debugElement.queryAll(By.directive(MarkDirective));
    noDirHeaders = fixture.debugElement.query(By.css('h2:not([mark])'));
  });
  
  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should have three items with mark directive', () => {
    expect(compHeaders.length).toBe(3);
  });

  it('should change bgColor of mark="complete" directive to green', () => {
    const bgColor = compHeaders[0].nativeElement.style.backgroundColor;
    expect(bgColor).toBe("green");
  });

  it('should change bgColor of mark="incomplete" directive to red', () => {
    const bgColor = compHeaders[1].nativeElement.style.backgroundColor;
    expect(bgColor).toBe("red");
  });

  it('should leave bg white if mark has no value', () => {
    const bgColor = compHeaders[2].nativeElement.style.backgroundColor;
    expect(bgColor).toBe("white");
  });

  it('should not have customProperty on the default color h2', () => {
    expect(noDirHeaders.properties['customProperty']).toBeUndefined();
  });

});

// See if it makes the color different
//             Red for incomplete
//             Green for complete
//         See what happens if invalid value is provided