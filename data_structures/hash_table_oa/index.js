class HashTable {
  constructor() {
    this.table = new Array(50).fill(null);
  }

  linearProbing(key, i) {
    return this.hash(key) + i % this.table.length;
  }

  hash(key) {
    return key % this.table.length;
  }

  get() {
    return this.table;
  }

  insert(element) {
    if (isNaN(element)) {
      return NaN;
    }
    const tableLength = this.table.length;
    let index = 0;
    let deletedPlace = null;
    do {
      const hash = this.linearProbing(element, index);
      if (this.table[hash] === null) {
        if (deletedPlace) {
          this.table[deletedPlace] = element;
          return deletedPlace;
        }
        this.table[hash] = element;
        return hash;
      } else if (this.table[hash] === 'DELETED') {
        deletedPlace = hash;
      }
      index += 1;
    } while (index !== tableLength);
    return 'table is full';
  }

  search(element) {
    if (isNaN(element)) {
      return NaN;
    }
    const tableLength = this.table.length;
    let index = 0;
    let hash = 0;
    do {
      hash = this.linearProbing(element, index);
      if (this.table[hash] === element) {
        return hash;
      }
      index += 1;
    } while ((this.table[hash] === null || index !== tableLength) && index < tableLength);
    return null;
  }

  delete(element) {
    if (isNaN(element)) {
      return NaN;
    }
    const hash = this.search(element);
    this.table[hash] = 'DELETED';
    return hash;
  }
}

export default HashTable;
