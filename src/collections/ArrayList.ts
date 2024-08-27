//TODO Implements ArrayList

import { Collection } from "../interfaces/Collection";
import { Iterator } from "../interfaces/Iterable";

class ArrayList<T> implements Collection<T>{

    private _internalList:Array<T> = [];
    private _currentIteratorIndex = -1
    private _iterator : Iterator<T> = {
        next: ()=> {
            const toReturn = this._internalList[this._currentIteratorIndex+1];
           this._currentIteratorIndex++;
            return toReturn;
            
        },
        hasNext: ()=> this._currentIteratorIndex < this._internalList.length,
        remove: ()=> this.remove(this._internalList[this._currentIteratorIndex])
    }

    add(item: T): boolean {
        this._internalList.push(item)
        return true
    }
    addAll(collection: Collection<T>): boolean {
        this._internalList = [...this._internalList,...collection]
        return true
    }

    contains(item: T): boolean {
        return !!(this._internalList.find((i)=>i === item))
    }

    containsAll(collection: Collection<T>): boolean {
        let have = true;
        collection.toArray().forEach((itemInCollection) => {
            if (!this.contains(itemInCollection)) {
                have = false;
            }
        })
        return have;
    }

    remove(item:T): void {
        this._internalList = this._internalList.filter((it)=> it!==item)
    }

    removeAll(collection: Collection<T>): void {
        for( let otherItem of collection.toArray()){
            this._internalList.filter((i)=> i !== otherItem)
        }
    }

    toArray(): T[] {
        return [...this._internalList]
    }

    clear(): void {
        this._internalList = [];
    }
    size(): number {
        return this._internalList.length
    }

    iterator(): Iterator<T>{
        return this._iterator
    }

    // pour rendre la collection iterable
    [Symbol.iterator](): IterableIterator<T>{
        return this._internalList[Symbol.iterator]()
    }

    retainAll(collection: Collection<T>): void {
      for (let i of collection){
        if (!this.contains(i)) {
            this.remove(i)
        }
      }
    }
    

}


export { 
    ArrayList
}