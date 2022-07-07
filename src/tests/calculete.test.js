import calculate from '../logics/calculate';
import operate from '../logics/operate';

describe('calculate logic is working correctly', () => {
  const valuesMock = {
    total: 10,
    next: 5,
    operation: '+',
  };

  test('calculate func is refresing values correctly', () => {
    expect(calculate(valuesMock, 'AC')).toEqual({
      next: null,
      operation: null,
      total: null,
    });
  });

  test('calculate func is adding values correctly and updating return object', () => {
    expect(calculate(valuesMock, '+')).toEqual({
      next: null,
      operation: '+',
      total: '15',
    });
  });

  test('calculate func is equating values correctly and using the operate function properly', () => {
    expect(calculate(valuesMock, '=')).toEqual({
      total: operate(valuesMock.total, valuesMock.next, valuesMock.operation),
      operation: null,
      next: null,
    });
  });
});
