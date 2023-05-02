import { expect, test } from 'vitest'
import { Appointment } from './appointment'
import { getFutureDate } from '../tests/utils/getFutureDate'
test('create an appointment', () => {
  const startsAt = getFutureDate('2022-08-18')
  const endsAt = getFutureDate('2022-08-19')

  const appointment = new Appointment({
    customer: 'John',
    endsAt,
    startsAt,
  })

  expect(appointment).toBeInstanceOf(Appointment)
  expect(appointment.customer).toEqual('John')
})

test('cannot create an appointment with end date before start date', () => {
  const startsAt = getFutureDate('2022-08-20')
  const endsAt = getFutureDate('2022-08-19')


  expect(() => {
    return new Appointment({
      customer: 'John',
      endsAt,
      startsAt,
    })
  }).toThrow()
})

test('cannot create an appointment with start date before now', () => {
  const startsAt = new Date()
  const endsAt = new Date()
  startsAt.setDate(startsAt.getDate() - 1)
  endsAt.setDate(endsAt.getDate() + 3)

  expect(() => {
    return new Appointment({
      customer: 'John',
      endsAt,
      startsAt,
    })
  }).toThrow()
})