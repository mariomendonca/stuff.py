import { Appointment } from "../entities/appointment";

export interface AppointmentRepository {
  create(appointment: Appointment): Promise<void>
  findOverLappingAppointments(startsAt: Date, endsAt: Date): Promise<Appointment | null>
}