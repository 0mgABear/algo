type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default class Queue<T> {
  public length: number;
  private head?: Node<T>;
  private tail?: Node<T>;

  constructor() {
    this.head = this.tail = undefined;
    this.length = 0;
  }

  enqueue(item: T): void {
    const node = { value: item } as Node<T>;
    this.length++;
    if (!this.tail) {
      this.tail = this.head = node;
      return;
    }

    this.tail.next = node;
    this.tail = node;
  }

  deque(): T | undefined {
    if (!this.head) {
      return undefined;
    }
    this.length--;
    const head = this.head;
    this.head = this.head.next;

    head.next = undefined;

    if (this.length === 0) {
      this.tail = undefined;
    }

    return head.value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}

// enqueue: add to back of queue
// +1 length
// check if there's a tail, if no tail = new queue and new node

// this.tail.next = node (update current tail to point to newly added node)
// this.tail = node (make the newly added node the tail)

// deque: removing from front of queue
// -1 length
// check if there's even a head / queue

// const head = this.head (just storing it to be used later on)
// this.head = this.head.next (shifting the head to the next element, which was originally #2)
// head.next = undefined (removing the old head from the linked list)
