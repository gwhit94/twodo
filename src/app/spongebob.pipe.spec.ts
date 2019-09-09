import { SpongebobPipe } from './spongebob.pipe';
import { TestBed } from '@angular/core/testing';

describe('SpongebobPipe', () => {
  const pipe = new SpongebobPipe();
  it('exists', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms "Spongebob" to "sPoNgEbOb"', () => {
    expect(pipe.transform('Spongebob')).toBe('sPoNgEbOb');
  });
  
  it('transforms "Spongebob Square" to "sPoNgEbOb SqUaRe"', () => {
    expect(pipe.transform('Spongebob Square')).toBe('sPoNgEbOb SqUaRe');
  });

  // it('should convert todoBody to SpongebobCase', () => {
  //   const fixture = TestBed.createComponent(TodoComponent);
  //   const hostElement = fixture.nativeElement;
  // });
});

// Check to see if casing works in transform function
// Check to see if it works in a component