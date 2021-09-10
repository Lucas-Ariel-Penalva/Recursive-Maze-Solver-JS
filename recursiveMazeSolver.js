/* The location object holds the vertical and horizontal position. If it isn't supplied, the starting position will be the top right corner.
   This function works for any starting location. */

function mazeSolver(maze, loc = { ver: 0, hor: 0 }) {
  
  /* Base case: Checking if the current location is the exit. Here the exit is defined as the lower right corner
     but you can change the exit to any other position and the solution will still work. */
  
  if (loc.ver === maze.length - 1 && loc.hor === maze[0].length - 1)
    return true;

  // Turn the current location into a wall so it won't be visited again.
  maze[loc.ver][loc.hor] = "*";
  
  /* Checking the adjacent spots in all cardinal directions. The "if" statement ensures that the updated
  location isn't out bounds or occupied by a wall. If the updated location is valid, the function
  will call itself with the new location until it runs out of possibilities or finds the base case. */

  // Checking right.
  if (loc.hor + 1 < maze[0].length && maze[loc.ver][loc.hor + 1] !== "*") {
    if (mazeSolver(maze, { ...loc, hor: loc.hor + 1 })) return true;
  }

  // Checking left.
  if (loc.hor - 1 >= 0 && maze[loc.ver][loc.hor - 1] !== "*") {
    if (mazeSolver(maze, { ...loc, hor: loc.hor - 1 })) return true;
  }

  // Checking down.
  if (loc.ver + 1 < maze.length && maze[loc.ver + 1][loc.hor] !== "*") {
    if (mazeSolver(maze, { ...loc, ver: loc.ver + 1 })) return true;
  }

  // Checking up.
  if (loc.ver - 1 >= 0 && maze[loc.ver - 1][loc.hor] !== "*") {
    if (mazeSolver(maze, { ...loc, ver: loc.ver - 1 })) return true;
  }

  return false;
}
