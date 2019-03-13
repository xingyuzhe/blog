
 class LRUCache {
   constructor(capacity) {
    this.limit = capacity
    this.nodes = new Map()
    this.head = this.buildNode()
    this.tail = this.buildNode()
    this.head.next = this.tail
    this.tail.prev = this.head
   }

   buildNode(key = 'unknown', value = 0) {
    return {
      key,
      value,
      prev: null,
      next: null
    }
   }

   get(key) {
    const node = this.nodes.get(key)
    if (!node) {
      return -1
    }
  
    this.remove(node)
    this.add(node.key, node.value)
  
    return node.value
   }

   add(key, value) {
    const node = this.buildNode(key, value)
    const oldSecondNode = this.head.next

    this.head.next = node
    node.prev = this.head

    node.next = oldSecondNode
    oldSecondNode.prev = node
  
    this.nodes.set(key, node)
   }

   remove(node) {
    const prev = node.prev
    const next = node.next

    prev.next = next
    next.prev = prev

    this.nodes.delete(node.key)
   }

   put(key, value) {
    const node = this.nodes.get(key)

    if (!node) {
      this.add(key, value)
    } else {
      this.remove(node)
      this.add(key, value)
    }

    if (this.nodes.size > this.limit) {
      this.remove(this.tail.prev)
    }
   }
 }

var cache = new LRUCache( 2 /* capacity */ );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
