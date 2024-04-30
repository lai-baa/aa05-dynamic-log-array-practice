class DynamicArray {

  constructor(defaultSize=4) {
    this.length = 0;
    this.capacity = defaultSize;
    this.data = new Array(defaultSize);
  }

  read(index) {
    if (index >= 0 && index < this.length){
      return this.data[index];
    } else {
      return undefined
    }
  }

  push(val) {

    // Your code here 
  }


  pop() {

    // Your code here 
  }

  shift() {

    // Your code here 
  }

  unshift(val) {
    for (let i = this.length; i > 0; i--){
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = val;
    this.length++;
  }

  indexOf(val) {

    // Your code here 
  }

  resize() {

    // Your code here 
  }

}


module.exports = DynamicArray;
