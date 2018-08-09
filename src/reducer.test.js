import {makeGuess, restartGame, generateAuralUpdate} from './actions'
import {reducer} from './reducer'

describe{'Reducer', () => {
  const guesses = [10, 20, 30]
  const feedback = 'Testing the reducer'
  const auralStatus = 'Testing aural status'
  const correctAnswer = Math.round(Math.random() * 100) + 1

  it('Should set the initial state when nothing is passed in', () => {
    const state = reducer(undefined, {type: '__UNKNOWN'})
    expect(state).toEqual({
      guesses: []
    })
  })

  it('Should return the current state on an unknown action', () => {
    let currentState = {}
    const state = reducer(currentState, {type: '__UNKNOWN'})
    expect(state).toBe(currentState)
  })

  describe('makeGuess', () => {
    it('Should make a guess', () => {
      let state = {
        guesses: [],
        feedback: 'Make your guess!',
        auralStatus: '',
        correctAnswer: Math.round(Math.random() * 100) + 1
      }
    })
  })
}
