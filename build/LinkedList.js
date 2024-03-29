"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ListNode_1 = __importDefault(require("./ListNode"));
class LinkList {
    constructor(head = null) {
        this.head = head;
    }
    add(data) {
        //create new node with paylaod of data<U>
        let node = new ListNode_1.default(data);
        // start at this.head
        // if null => set head to new node
        if (this.head === null) {
            this.head = node;
        }
        else {
            // else call next unitll current node.next = null
            // set current.next to new node
            let current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = node;
        }
    }
    deleteAt(index) {
        // start at head
        if (this.head == null) {
            return null;
        }
        else if (index == 0) {
            let data = this.head.data;
            let oldHead = this.head;
            this.head = this.head.next;
            oldHead.next = null;
            oldHead.data = null;
            return data;
        }
        else {
            let current = this.head;
            let previous = current;
            let count = 0;
            while (count < index && current.next) {
                previous = current;
                current = current.next;
                count++;
            }
            if (index > count) {
                return null;
            }
            else {
                let data = current.data;
                previous.next = current.next;
                current.next = null;
                current.data = null;
                return data;
            }
        }
        // count unitl count == index
        // keep track of pervious node, current node, next node
        // link previous.next to next
        // return current.data
        return null;
    }
    insertAt(index, data) {
    }
    print() {
        // print to console!!!!!""""""
        if (this.head != null) {
            let arr = [];
            let current = this.head;
            while (current.next != null) {
                arr.push(current.data);
                current = current.next;
            }
            arr.push(current.data);
            console.log(arr);
        }
        else {
            console.log('empty list');
        }
    }
}
let linky = new LinkList();
linky.add('hello');
linky.add('carlo');
linky.add('larlo');
linky.add('hey');
linky.print();
linky.deleteAt(3);
linky.print();
//# sourceMappingURL=LinkedList.js.map