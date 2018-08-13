import reducer from './reducer'
import {makeGuess, restartGame, generateAuralUpdate} from './actions'

describe('Reducer', () => {

  it('Should set the initial state when nothing is passed in', () => {
    const state = reducer(undefined, {type: '__UNKNOWN'})
    expect(state.guesses).toEqual([])
    expect(state.feedback).toEqual('Make your guess!')
    expect(state.auralStatus).toEqual('')
    expect(state.correctAnswer).toBeGreaterThanOrEqual(0)
    expect(state.correctAnswer).toBeLessThanOrEqual(100)
  })

  it('Should return the current state on an unknown action', () => {
    let currentState = {}
    const state = reducer(currentState, {type: '__UNKNOWN'})
    expect(state).toBe(currentState)
  })

  it('Should send feedback when the guess is a non-number', () => {
    let state
    let guess = 'A'
    state = reducer(state, makeGuess(guess))
    expect(state.feedback).toEqual('Please enter a valid number.')
  })

})
