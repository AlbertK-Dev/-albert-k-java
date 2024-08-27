
export interface Iterator<T>{
    next():T;
    hasNext():boolean;
    remove():void;
}


export interface ListIterator<T> extends Iterator<T>{
   hasPrevious():boolean;
   previous():T;
   nextIndex(): number;
   previousIndex(): number;

}