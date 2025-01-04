import { Mapper } from "../../base/utils/mapper";
import { User } from "../../domain/models/user.model";
import { UserDTO } from "../dtos/user.dto";

export class UserMapperImpl extends Mapper<UserDTO, User> {
    mapFrom(param: UserDTO): User {
        return  new User(
            param.id,
            param.username,
            param.email,
            param.firstName,
            param.lastName
        );
    }

    mapTo(param: User): UserDTO {
        return {
            id: param.id,
            username: param.username,
            email: param.email,
            firstName: param.firstName,
            lastName: param.lastName
        };
    }
}