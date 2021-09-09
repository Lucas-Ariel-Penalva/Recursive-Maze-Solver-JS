function pathFinder(maze, loc = { ver: 0, hor: 0 }) {
  //Checking if the current location is the exit
  if (loc.ver === maze.length - 1 && loc.hor === maze[0].length - 1)
    return true;

  //Turn the current location into a wall so it won't be visited again
  maze[loc.ver][loc.hor] = "*";

  //Checking right
  if (loc.hor + 1 < maze[0].length && maze[loc.ver][loc.hor + 1] !== "*") {
    if (pathFinder(maze, { ...loc, hor: loc.hor + 1 })) return true;
  }

  //Checking left
  if (loc.hor - 1 >= 0 && maze[loc.ver][loc.hor - 1] !== "*") {
    if (pathFinder(maze, { ...loc, hor: loc.hor - 1 })) return true;
  }

  //Checking down
  if (loc.ver + 1 < maze.length && maze[loc.ver + 1][loc.hor] !== "*") {
    if (pathFinder(maze, { ...loc, ver: loc.ver + 1 })) return true;
  }

  //Checking up
  if (loc.ver - 1 >= 0 && maze[loc.ver - 1][loc.hor] !== "*") {
    if (pathFinder(maze, { ...loc, ver: loc.ver - 1 })) return true;
  }

  return false;
}
