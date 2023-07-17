export const initialState = {
  currentValue: "0",
  operator: null,
  previousValue: null,
  memoryValue: 0,
  memoryExists: false,
  expression: '',
};


const handleNumber = (value, state) => {
  const { currentValue, operator, previousValue } = state;
  
  let newExpression = '';
  
  if (operator) {
    let value1 = '';
    value1 = `${previousValue}`.slice(0)
    newExpression = `${value1} ${operator}`;
  } else {
    newExpression = `${currentValue}${value}`;
  }

  if (currentValue === "0") {
    return {
      currentValue: `${value}`,
      expression: newExpression,
    };
  } else {
    return {
    currentValue: `${currentValue}${value}`,
    expression: newExpression,
    };
  };
};

const handleEqual = (state) => {
  const { currentValue, previousValue, operator, expression } = state;

  const current = parseFloat(currentValue);
  const previous = parseFloat(previousValue);
  const resetState = { operator: null, previousValue: null };

  let newExpression = `${expression} ${currentValue} =`;

  switch (operator) {
    case '+':
      return {
        currentValue: `${previous + current}`,
        expression: newExpression,
        ...resetState,
      };
    case '-':
      return {
        currentValue: `${previous - current}`,
        expression: newExpression,
        ...resetState,
      };
    case '*':
      return {
        currentValue: `${previous * current}`,
        expression: newExpression,
        ...resetState,
      };
    case '/':
      return {
        currentValue: `${previous / current}`,
        expression: newExpression,
        ...resetState,
      };
    case '%':
      return {
        currentValue: `${(previous * current) / 100}`,
        expression: newExpression,
        ...resetState,
      };
    default:
      return state;
  }
};

const handleOperator = (op, state) => {
  const { currentValue, expression } = state;
  const newExpression = `${expression} ${currentValue} ${op}`;

  return {
    operator: op,
    previousValue: currentValue,
    expression: newExpression,
    currentValue: '',
  };
};



export default calculator;
