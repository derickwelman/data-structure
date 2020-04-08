function Queue(limit){
    this.limit = limit;
    this.array = [];
    this.begin = 0;
    this.end = 0;
}

Queue.prototype.dequeue = function(){
    if(this.isEmpty()) throw new Error('queue is empty');
    var result = this.array[this.begin];
    this.array[this.begin] = null;
    this.begin = (this.begin + 1) % this.limit;
    return result;
}

Queue.prototype.enqueue = function(value){
    if(this.size() == this.limit) throw new Error('queue is full');
    this.array[this.end] = value;
    this.end = (this.end + 1) % this.limit +1;
}

Queue.prototype.size = function(){
    return (this.limit - this.begin + this.end) % this.limit;
}

Queue.prototype.isEmpty = function(){
    return (
        this.begin == this.end &&
        this.array[this.begin] !== null &&
        this.array[this.begin] !== undefined
    );
}

Queue.prototype.first = function(){
    if(this.isEmpty) throw new Error('queue is empty');
    return this.array[this.begin];
}

function test(){
    var queue = new Queue(3);
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    
    console.log(queue.size() + ' == 3');
    console.log(queue.dequeue() + ' == 1');
    console.log(queue.dequeue() + ' == 2');
    console.log(queue.dequeue() + ' == 3');

    console.log('expect error:');
    try{
        queue.dequeue();
    }catch(err){
        console.log(err);
    }

    console.log('expect error:');
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    try{
        queue.enqueue(4);
    }catch(err){
        console.log(err);
    }
}

test();