# Recursive Maze Solver

Problems involving mazes and graphs can appear both on coding websites and programming interviews. While they aren't the most common task (and you shouldn't focus on them if you have very limited time), mastering these type of puzzles ensures that you will always have a way to approach any problem that you can find, even if they are new and unexpected. This is because engaging with these tasks forces you to have a deeper grasp of ***Recursion***, ***Breadth first search***, ***Depth first search*** and other topics that are fundamental.

#### The most generic version of the task gives you a Multidimensional Array Maze of size NxN as *Input*, similar to this:

```javascript
[ ["S",".",".",".","*"]
  [".","*",".",".","."]
  [".","*",".","*","."]
  [".","*",".",".","*"]
  [".",".","*",".","E"] ] 
```

> * Dots represent locations that can be traversed and asterisks represent walls.
> * The *Start* is usually on the upper left corner and the *End* is on the lower right, although that isn't mandatory.
> * The input maze can also be a string with line breaks (in which case it can be useful to modify it).

#### The expected *Output* can be a *Boolean* confirming if an exit path exists, or an array containing a valid path (or returning *null* or *false*, if there isn't any).

I tested the correctness of my solution on ***huge randomly generated problem sets***, but I'm sure there are more elegant ways to write it. The code with commentary is in the Javascript file.

It's very common to have a hard time understanding how ***Recursion*** and the ***Call Stack*** works. If you need a detailed breakdown on how recursion works in this kind of problem, I recommend [watching this video](https://www.youtube.com/watch?v=W9F8fDQj7Ok) and taking some time to think about the whole process.
