import { Observable } from "rxjs/internal/Observable";
import { RegisterRequestDTO } from "../../data/dtos/register-request.dto";
import { UserDTO } from "../../data/dtos/user.dto";
import { UseCase } from "../../app/domain/base/usecase.interface";
import { UserRepository } from "../../app/domain/repositories/user.repository";

export class UserRegisterUseCase implements UseCase<RegisterRequestDTO, UserDTO>{

    constructor ( private userRepository : UserRepository) {}
    
    execute(params: RegisterRequestDTO): Observable<UserDTO> {
        return this.userRepository.register(params);
    }
    
}