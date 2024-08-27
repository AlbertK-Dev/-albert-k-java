export interface Comparator<T>{
    compare(firstItem: T, secondItem: T): number;
}