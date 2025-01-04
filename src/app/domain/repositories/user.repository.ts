import { Observable } from "rxjs";
import { LoginRequestDTO } from "../../data/dtos/login-request.dto";
import { RegisterRequestDTO } from "../../data/dtos/register-request.dto";
import { UserDTO } from "../../data/dtos/user.dto";

/**
 * @repository 
 * Define el contrato de las acciones que se pueden realizar con un usuario
*/
export abstract class UserRepository {
    abstract login(loginRequest : LoginRequestDTO): Observable<UserDTO>;
    abstract register(registerRequest : RegisterRequestDTO): Observable<UserDTO>;
}