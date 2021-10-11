const $ = document.querySelector.bind(document)
const currentOperation = $('.input__resulted')
const previewOperation = $('.input__previous')

const Operation = {
  Sum: '+',
  Subtraction: '-',
  Division: '/',
  multiplication: '*',
  Clear: 'c',
  Negative: 'negative',
  Delete: 'del',
  Equals: '=',
}

const OPERATIONS = [
  Operation.multiplication,
  Operation.Subtraction,
  Operation.Negative,
  Operation.Division,
  Operation.Delete,
  Operation.Clear,
  Operation.Sum,
]

const clearFields = (fields = []) => fields.forEach(field => (field.value = ''))

const negative = currentOperation => (currentOperation.value = -currentOperation.value)

const joinExpression = value => (currentOperation.value += value)

const calcAndShowCurrentOperation = previewOperation =>
  (previewOperation.value = eval(previewOperation.value))

const isAction = type => type === 'action'
const valuePressed = type => type === 'value'

const ActionMaker =
  (currentOperation, previewOperation) =>
  (buttonPressed = '') => {
    const allActions = {
      [Operation.Clear]: () => clearFields([currentOperation, previewOperation]),
      [Operation.Equals]: () => calcAndShowCurrentOperation(currentOperation),
      [Operation.Negative]: () => negative(currentOperation),
      [Operation.Delete]: () => clearFields([currentOperation]),
    }

    const fallback = (value = buttonPressed) => joinExpression(value)

    return allActions[buttonPressed] || fallback
  }

function calc(type, value) {
  if (isAction(type)) {
    previewOperation.value = currentOperation.value
    const selectedAction = ActionMaker(currentOperation, previewOperation)(value)
    if (selectedAction) selectedAction()
  }

  if (valuePressed(type)) joinExpression(value)
}
