function Stack(limit){
    this.limit = limit;
    this.array = [];
    this.top = -1;
}

Stack.prototype.push = function(value){
    if(this.size() === this.limit) throw new Error('value added beyond limit');
    this.array[++this.top] = value;
}

Stack.prototype.pop = function(){
    if(this.isEmpty()) throw new Error('the stack is empty');
    return this.array[this.top--];
}

Stack.prototype.size = function(){
    return this.top+1;
}

Stack.prototype.isEmpty = function(){
    return this.top < 0;
}

Stack.prototype.top = function(){
    return this.array[this.top];
}

function test(){
    var stack = new Stack(3);
    stack.push(1);
    stack.push(2);
    stack.push(3);
    
    console.log(stack.pop() + ' == 3');
    console.log(stack.pop() + ' == 2');
    console.log(stack.pop() + ' == 1');

    console.log('expect error:');
    try{
        stack.pop();
    }catch(err){
        console.log(err);
    }

    console.log('expect error:');
    stack.push(1);
    stack.push(2);
    stack.push(3);
    try{
        stack.push(4);
    }catch(err){
        console.log(err);
    }
}

test();