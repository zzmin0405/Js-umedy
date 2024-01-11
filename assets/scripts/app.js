const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];
function getUserNumberInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}
function writeLog(operationIdentifire, prevResult, operationNumber, newResult) {
  const logEntry = {
    operation: operationIdentifire,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  console.log(logEntry);
}
function addNumber() {
  const inputNum = getUserNumberInput();
  const initialResult = currentResult;
  currentResult += inputNum;
  createAndWriteOutput("+", initialResult, inputNum);
  writeLog("ADD", initialResult, inputNum, currentResult);
}

function subtractNum() {
  const inputNum = getUserNumberInput();
  const initialResult = currentResult;
  currentResult -= inputNum;
  createAndWriteOutput("-", initialResult, inputNum);
  writeLog("SUBTRACT", initialResult, inputNum, currentResult);
}
function multiplyNum() {
  const inputNum = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *= inputNum;
  createAndWriteOutput("*", initialResult, inputNum);
  writeLog("MULTIPLY", initialResult, inputNum, currentResult);
}

function divide() {
  const inputNum = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /= inputNum;
  createAndWriteOutput("/", initialResult, inputNum);
  writeLog("DIVIDE", initialResult, inputNum, currentResult);
}

addBtn.addEventListener("click", addNumber);
subtractBtn.addEventListener("click", subtractNum);
multiplyBtn.addEventListener("click", multiplyNum);
divideBtn.addEventListener("click", divide);
