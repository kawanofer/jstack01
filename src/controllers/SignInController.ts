import { z } from 'zod';
import { HttpRequest, HttpResponse } from '../types/Http';
import { badRequest, created } from '../utils/http';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
});

export class SignInController {
  static async handle({body}: HttpRequest): Promise<HttpResponse> {
    const { success, error, data  } = schema.safeParse(body);
    if (!success) {
      return badRequest({
        errors: error.issues,
      });
    }

    return created({
      data
    })
  }
}