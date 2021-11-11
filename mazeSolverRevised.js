function mazeSolver(maze, loc = { ver: 0, hor: 0 }) {
  //Validate position
  if (
    [loc.ver, loc.hor].some((e) => e < 0 || e >= maze.length) ||
    maze[loc.ver][loc.hor] === "*"
  )
    return false;

  //Check if the current location is the exit
  if (loc.ver === maze.length - 1 && loc.hor === maze[0].length - 1)
    return true;

  //Turn spot into wall
  maze[loc.ver][loc.hor] = "*";

  let directions = [
    { ...loc, hor: loc.hor + 1 },
    { ...loc, hor: loc.hor - 1 },
    { ...loc, ver: loc.ver + 1 },
    { ...loc, ver: loc.ver - 1 },
  ];

  while (directions.length) {
    if (mazeSolver(maze, directions.pop())) return true;
  }

  return false;
}
