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
    expect(state.guesses).toEqual([NaN])
  })

  it('Should add a guess to the array and send the corrrect feedback', () => {
    let state = {
      guesses: [10,20,30],
      correctAnswer: 100,
      feedback: ''
    }
    state  = reducer(state, makeGuess(40))
    expect(state.guesses).toEqual([10,20,30,40])
    expect(state.feedback).toEqual("You're Ice Cold...")
    state = reducer(state, makeGuess(70))
    expect(state.guesses).toEqual([10,20,30,40,70])
    expect(state.feedback).toEqual("You're Cold...")
    state = reducer(state, makeGuess(80))
    expect(state.guesses).toEqual([10,20,30,40,70,80])
    expect(state.feedback).toEqual("You're Warm.")
    state = reducer(state, makeGuess(99))
    expect(state.guesses).toEqual([10,20,30,40,70,80,99])
    expect(state.feedback).toEqual("You're Hot!")
    state = reducer(state, makeGuess(100))
    expect(state.guesses).toEqual([10,20,30,40,70,80,99,100])
    expect(state.feedback).toEqual("You got it!")
  })

})
