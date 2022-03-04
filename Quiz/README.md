# DOM Quiz
1. What is the DOM?
   Data Object Model. The chance to modify the html file thanks to js.

2. How do you connect JavaScript code to an HTML document?
   <script src='name_file.js'>

3. How can you affect when your JavaScript code is executed?
   SetTime can decide whn a code will be executed

4. Is the DOM an API?  Why or why not?
   YES!!!! Because it allowed the communication between html, css and js.

5. What are nodes?
   all the part of the documents are nodes. The individual elements which form
 the whole document.

6. What kind of nodes does the DOM consist of?
   <html><head><body>, all tags are nodes.

7. Fill in the blank: “The DOM has the structure of ___ .”
   HIERARCHICAL TREE

8. What do you call a node directly above/below a given node?
   PARENT - CHILDREN

9.  What do you call the nodes above/below a given node?
    ANCESTORS - DESCENDANT

10. What do you call a node next to a given node?
    NEIGHBOR

11. Predict the output of the following code snippet:
``` javascript
function makePattern(num, char) {
    let output = [];
    for (let i = 0; i < num; i++) {
        let sub = [];
        for (let j = 0; j < num; j++) {
            sub.push(char);
        }
        output.push(sub);
    }
    return output;
}
console.log(makePattern(4, "+"));
[['+','+','+','+']
['+','+','+','+']
['+','+','+','+']
['+','+','+','+']]
```
12.  Now predict the output of the following code snippet:
``` javascript
function makePattern1(num, char) {
    let output = [];
    let sub = [];
    for (let i = 0; i < num; i++) {
        sub.push(char);
        output.push(sub);
    }
    return output;
}
console.log(makePattern1(4, "+"));
[['+','+','+','+']
['+','+','+','+']
['+','+','+','+']
['+','+','+','+']]
```
13.  How many arrays do you have to create in order to create an array with 10 sub-arrays?
2