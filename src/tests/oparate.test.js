import operate from '../logics/operate';

describe('checking operaters are working', () => {
  const operatorMock = {
    total: 10,
    next: 5,
    operation: '+',
  };

  test('operate func is adding correctly', () => {
    expect(operate(operatorMock.total, operatorMock.next, '+')).toEqual('15');
  });
});
