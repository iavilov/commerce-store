import { Request as ExpressRequest } from 'express';

export interface UserRequest extends ExpressRequest {
  user?: { id: number; email: string; role: string };
}
