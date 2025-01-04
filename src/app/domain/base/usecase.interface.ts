import { Observable } from "rxjs";

/**
 * @interface
 * Interfaz que representa el modelo  base de un caso de uso
*/
export interface UseCase<T, U> {

    execute(params: T): Observable<U>;
}