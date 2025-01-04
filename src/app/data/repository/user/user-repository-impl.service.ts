import { Injectable } from '@angular/core';
import { UserRepository } from '../../../app/domain/repositories/user.repository';
import { Observable } from 'rxjs';
import { LoginRequestDTO } from '../../../app/data/dtos/login-request.dto';
import { RegisterRequestDTO } from '../../../app/data/dtos/register-request.dto';
import { UserDTO } from '../../../app/data/dtos/user.dto';

@Injectable({
  providedIn: 'root'
})
export class UserRepositoryImplService implements UserRepository{

  constructor() { }

    login(loginRequest: LoginRequestDTO): Observable<UserDTO> {
        throw new Error('Method not implemented.');
    }
    register(registerRequest: RegisterRequestDTO): Observable<UserDTO> {
        throw new Error('Method not implemented.');
    }
}
