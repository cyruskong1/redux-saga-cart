export const makeActionCreator = (type, ...argNames) => {
  return function(...args) {
    let action = { type };
    argNames.forEach((arg, index) => {
      console.log('args', args);
      action[argNames[index]] = args[index];
    });
    console.log('action', action);
    return action;
  };
};
