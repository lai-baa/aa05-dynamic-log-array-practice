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
  // putting element to end of array
  // [1,2,3,4] ___
  // [1,2,3,4] _5__
  push(val) { // val = 5
    // console.log(this.data);
    // let lastIdx = this.data.length;
    // console.log(lastIdx);
    this.data[this.length] = val;
    this.length++;
    // console.log(this.data);
    // return this;
  }

  pop() {
    console.log(this.data)
    // this.data[this.length] = null;
    // this.length--;
  }

  shift() {
    for (let i = 0; i < this.length; i++){
      this.data[i] = this.data[i + 1];
    }
    this.length--;
    return this.data;
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

// let newArr = DynamicArray(4);
// console.log(newArr);
// newArr.push(1);
// console.log(newArr.push(1));

// let dynamicArr = new DynamicArray(0);
// console.log(dynamicArr.data[0])
// console.log(dynamicArr.length)
// console.log(dynamicArr.push(1));

let dynamicArr = new DynamicArray();
dynamicArr.push(1);
// console.log(dynamicArr.length);
// console.log(dynamicArr[0]);

dynamicArr.push(2);
// console.log(dynamicArr.length);
// console.log(dynamicArr[0]);
dynamicArr.pop();

// console.log(dynamicArr);

// dynamicArr.push(3);
// expect(dynamicArr.length).to.equal(3);
// expect(dynamicArr.read(0)).to.equal(1);
// expect(dynamicArr.read(1)).to.equal(2);
// expect(dynamicArr.read(2)).to.equal(3);




module.exports = DynamicArray;
