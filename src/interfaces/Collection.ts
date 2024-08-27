import { Comparator } from "./Comparator";
import { Iterator } from "./Iterable";

export interface Collection<T>{
    add(item: T):boolean;
    addAll(collection:Collection<T>):boolean;
    clear():void;
    contains(item: T): boolean;
    containsAll(collection : Collection<T>):boolean;
    iterator(): Iterator<T>;
    remove(item: T):void;
    removeAll(collection:Collection<T>):void;
    retainAll(collection:Collection<T>):void;
    size():number;
    toArray():Array<T>;
    [Symbol.iterator](): IterableIterator<T>;
}

export interface Set<T> extends Collection<T>{}

export interface List<T> extends Collection<T>{
    add(value:T):boolean;
    add(index: number, item: T): boolean;
    get(index:number):T;
    remove(item: T):void;
    remove(index:number): void;
    set(index:number, value:T):void;
    sublist(beginIndex:number, endIndex:number):List<T>;
}


export interface SortedSet<T extends Comparator<T>> extends Set<T>{}

export interface NavigableSet<T extends Comparator<T>> extends SortedSet<T>{
    ceilling(item:T):T;
    floor(item:T):T;
    higher(item:T):T;
    lower(item: T):T;
    tailSet(fromItem: T, inclusive:boolean):NavigableSet<T>;
    headSet(toElement: T, inclusive:boolean): NavigableSet<T>;

}
