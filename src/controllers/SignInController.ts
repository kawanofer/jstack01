import { HttpRequest, HttpResponse } from '../types/Http';
import { created } from '../utils/http';

export class SignInController {
  static async handle(request: HttpRequest): Promise<HttpResponse>{
    return created({
      accessToken: 'Sign-in successful'
    })
  }
}