const $ = document.querySelector.bind(document)
const currentOperation = $('.input__resulted')
const previewOperation = $('.input__previous')

const OPERATIONS = ['+', '-', '*', '/']

const dell = (field) => field.value = ''

function clear(currentOperation, previewOperation) {
  dell(currentOperation)
  dell(previewOperation)
}

function negative(currentOperation) {
  currentOperation.value = -currentOperation.value
}

function joinExpression(value) {
  currentOperation.value += value
}

function calcAndShowCurrentOperation(previewOperation) {
  previewOperation.value = eval(previewOperation.value)
}

const isAction = (type) => type === 'action'
const clearPressed = (value) => value === 'c'
const equalsPressed = (value) => value === '='
const valuePressed = (value) => value === 'value'
const negativePressed = (value) => value === 'negative'
const dellPressed = (value) => value === 'dell'

function calc(type, value) {
  if (isAction(type)) {
    previewOperation.value = currentOperation.value
    if (clearPressed(value)) clear(currentOperation, previewOperation)
    if (dellPressed(value)) dell(currentOperation)
    if (OPERATIONS.includes(value)) joinExpression(value)
    if (negativePressed(value)) negative(currentOperation)
    if (equalsPressed(value)) calcAndShowCurrentOperation(currentOperation)
  }

  if (valuePressed(type)) currentOperation.value += value
}
