import {GENERATE_AURAL_UPDATE, generateAuralUpdate, RESTART_GAME, restartGame, MAKE_GUESS, makeGuess} from './actions'

describe('generateAuralUpdate', () => {
  it('Should return the action', () => {
    const auralStatus = 'Aural Status Testing...1...2...3'
    const action = generateAuralUpdate()
    expect(action.type).toEqual(GENERATE_AURAL_UPDATE)
    expect(action).toEqual(auralStatus)
  })
})
/*
describe('restartGame', () => {
  it('Should return the action', () => {

  })
})

describe('makeGuess', () => {
  it('Should return the action', () => {

  })
})
*/
