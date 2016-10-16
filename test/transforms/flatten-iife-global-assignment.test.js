import 'test-helper';
import flattenIifeGlobalAssignment from 'flatten-iife-global-assignment';

describe('flattenIifeGlobalAssignment', () => {
  it('flattens IIFE assignments', () => {
    expect(flattenIifeGlobalAssignment).to.transform('flatten-iife-global-assignment/basic', {
      globalIdentifiers: ['App'],
    });
  });

  it('assigns prototype methods', () => {
    expect(flattenIifeGlobalAssignment).to.transform('flatten-iife-global-assignment/prototype-methods', {
      globalIdentifiers: ['App'],
    });
  });

  it('assigns static methods', () => {
    expect(flattenIifeGlobalAssignment).to.transform('flatten-iife-global-assignment/static-methods', {
      globalIdentifiers: ['App'],
    });
  });

  it('includes non members', () => {
    expect(flattenIifeGlobalAssignment).to.transform('flatten-iife-global-assignment/non-members', {
      globalIdentifiers: ['App'],
    });
  });

  it('does not break for identifier mismatch', () => {
    expect(flattenIifeGlobalAssignment).to.transform('flatten-iife-global-assignment/inconsistent-naming', {
      globalIdentifiers: ['App'],
    });
  });
});
