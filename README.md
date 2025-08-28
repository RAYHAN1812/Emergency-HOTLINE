What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll
getElementById means one element by ID  getElementsByClassName  means  all  elements by class,querySelector means first match using CSS selector, querySelectorAll means  all matches using CSS selector
How do you create and insert a new element into the DOM?
document.createElement(), set its content, then appendChild() or insertBefore() to add it to the DOM.
What is Event Bubbling and how does it work?
An event on a child element bubbles up to its parent elements automatically
What is Event Delegation in JavaScript? Why is it useful?
attach one listener to a parent to handle events for all children, useful for dynamic elements and better performance.
 What is the difference between preventDefault() and stopPropagation() methods?
preventDefault() stops the default browser action; stopPropagation() stops the event from bubbling to parent elements.
