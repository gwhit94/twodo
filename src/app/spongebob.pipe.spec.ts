import { SpongebobPipe } from './spongebob.pipe';
import { TestBed } from '@angular/core/testing';

describe('SpongebobPipe', () => {
  const pipe = new SpongebobPipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  // Spec for alt case functionality
  it('transforms "Spongebob" to "sPoNgEbOb"', () => {
    expect(pipe.transform('Spongebob')).toBe('sPoNgEbOb');
  });
  // Spec ensures space does not alter first letter lowercase
  it('transforms "Spongebob Square" to "sPoNgEbOb SqUaRe"', () => {
    expect(pipe.transform('Spongebob Square')).toBe('sPoNgEbOb SqUaRe');
  });
  // Spec to ensure first letter lower case does not change to uppercase
  it('transforms "spONGebobsqUAre" to "sPoNgEbObSqUaRe"', () => {
    expect(pipe.transform('spONGebobsqUAre')).not.toBe('SPoNgEbObSqUaRe');
  });

  // Need component before writing this spec
  // it('should convert todoBody to SpongebobCase', () => {
  //   const fixture = TestBed.createComponent(TodoComponent);
  //   const hostElement = fixture.nativeElement;
  // });
});