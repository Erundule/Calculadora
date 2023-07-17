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
    newExpression = `${previousValue} ${operator}`;
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

// calculator function
const calculator = (type, value, state) => {
  const resetState = {
    currentValue: "0",
    operator: null,
    previousValue: null,
    expression: '',
  };
  switch (type) {
    case "number":
      return handleNumber(value, state);
    case "clear":
      return{
        ...resetState,
      };
    case "posneg":
      return {
        currentValue: `${parseFloat(state.currentValue) * -1}`,
      };
    
    case "operator":
      return {
        operator: value,
        previousValue: state.currentValue,
        currentValue: "0",
      };
    case "equal":
      return handleEqual(state);
    case "MR":
      return {
        ...state,
        currentValue: state.memoryValue,
        memoryValue: state.currentValue,
        memoryExists: true,
        ...resetState,
      };
    case "MC":
      return {
        ...state,
        memoryValue: 0,
        memoryExists: false,
      };
    case "M+":
      return {
        ...state,
        memoryValue: parseFloat(state.memoryValue) + parseFloat(state.currentValue) ,
        ...resetState,
        memoryExists: true,
        currentValue: parseFloat(state.memoryValue) + parseFloat(state.currentValue),
        ...resetState,
      };
    case "M-":
      return {
        ...state,
        memoryValue: parseFloat(state.memoryValue) - parseFloat(state.currentValue),
        ...resetState,
        memoryExists: true,
        currentValue: parseFloat(state.memoryValue) - parseFloat(state.currentValue),
        ...resetState,
      };
    
  };
  
};



export default calculator;
