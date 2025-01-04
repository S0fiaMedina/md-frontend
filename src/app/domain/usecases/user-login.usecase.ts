import { Observable } from "rxjs";
import { LoginRequestDTO } from "../../data/dtos/login-request.dto";
import { UserDTO } from "../../data/dtos/user.dto";
import { UseCase } from "../../app/domain/base/usecase.interface";
import { UserRepository } from "../../app/domain/repositories/user.repository";

export class UserLoginUseCase implements UseCase<LoginRequestDTO, UserDTO>{

    constructor( private userRepository : UserRepository) {}
    
    execute(params: LoginRequestDTO): Observable<UserDTO> {
        return this.userRepository.login(params);
    }

}