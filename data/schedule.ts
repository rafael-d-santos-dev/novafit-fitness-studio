import type { ScheduledClass, Weekday } from '@/types'

export const weekdays: { value: Weekday; short: string; label: string }[] = [
  { value: 'mon', short: 'Mon', label: 'Monday' },
  { value: 'tue', short: 'Tue', label: 'Tuesday' },
  { value: 'wed', short: 'Wed', label: 'Wednesday' },
  { value: 'thu', short: 'Thu', label: 'Thursday' },
  { value: 'fri', short: 'Fri', label: 'Friday' },
  { value: 'sat', short: 'Sat', label: 'Saturday' },
  { value: 'sun', short: 'Sun', label: 'Sunday' },
]

// Illustrative timetable only. Sunday is intentionally empty to demonstrate the empty state.
export const schedule: ScheduledClass[] = [
  { id: 'mon-1', day: 'mon', name: 'Foundations: Strength', startTime: '06:30', durationMinutes: 60, programId: 'strength', trainerId: 'maya', intensity: 'Moderate' },
  { id: 'mon-2', day: 'mon', name: 'Engine Intervals', startTime: '12:15', durationMinutes: 40, programId: 'hiit', trainerId: 'dario', intensity: 'High' },
  { id: 'mon-3', day: 'mon', name: 'Kettlebell Flow', startTime: '18:00', durationMinutes: 50, programId: 'functional', trainerId: 'ines', intensity: 'Moderate' },
  { id: 'mon-4', day: 'mon', name: 'Barbell Club', startTime: '19:15', durationMinutes: 60, programId: 'strength', trainerId: 'maya', intensity: 'High' },

  { id: 'tue-1', day: 'tue', name: 'Mobility & Core', startTime: '07:00', durationMinutes: 45, programId: 'functional', trainerId: 'ines', intensity: 'Low' },
  { id: 'tue-2', day: 'tue', name: '1:1 Coaching Block', startTime: '10:00', durationMinutes: 55, programId: 'personal', trainerId: 'kenji', intensity: 'Moderate' },
  { id: 'tue-3', day: 'tue', name: 'Row & Ride', startTime: '17:30', durationMinutes: 40, programId: 'hiit', trainerId: 'dario', intensity: 'High' },

  { id: 'wed-1', day: 'wed', name: 'Foundations: Strength', startTime: '06:30', durationMinutes: 60, programId: 'strength', trainerId: 'maya', intensity: 'Moderate' },
  { id: 'wed-2', day: 'wed', name: 'Carry & Conquer', startTime: '12:15', durationMinutes: 50, programId: 'functional', trainerId: 'ines', intensity: 'Moderate' },
  { id: 'wed-3', day: 'wed', name: 'Engine Intervals', startTime: '18:30', durationMinutes: 40, programId: 'hiit', trainerId: 'dario', intensity: 'High' },

  { id: 'thu-1', day: 'thu', name: '1:1 Coaching Block', startTime: '08:00', durationMinutes: 55, programId: 'personal', trainerId: 'kenji', intensity: 'Moderate' },
  { id: 'thu-2', day: 'thu', name: 'Kettlebell Flow', startTime: '12:15', durationMinutes: 50, programId: 'functional', trainerId: 'ines', intensity: 'Moderate' },
  { id: 'thu-3', day: 'thu', name: 'Barbell Club', startTime: '19:00', durationMinutes: 60, programId: 'strength', trainerId: 'maya', intensity: 'High' },

  { id: 'fri-1', day: 'fri', name: 'Row & Ride', startTime: '06:45', durationMinutes: 40, programId: 'hiit', trainerId: 'dario', intensity: 'High' },
  { id: 'fri-2', day: 'fri', name: 'Mobility & Core', startTime: '17:30', durationMinutes: 45, programId: 'functional', trainerId: 'ines', intensity: 'Low' },

  { id: 'sat-1', day: 'sat', name: 'Weekend Strength', startTime: '09:00', durationMinutes: 60, programId: 'strength', trainerId: 'maya', intensity: 'Moderate' },
  { id: 'sat-2', day: 'sat', name: 'Partner Conditioning', startTime: '10:30', durationMinutes: 45, programId: 'hiit', trainerId: 'dario', intensity: 'High' },
]
