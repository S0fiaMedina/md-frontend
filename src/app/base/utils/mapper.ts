/**
 * @abstract
 * Clase mapper que permite mapear un objeto de un tipo a otro
*/
export abstract class Mapper<T, U> {
    abstract mapFrom(param: T): U;
    abstract mapTo(param: U): T;
}