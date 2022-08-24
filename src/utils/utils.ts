export function uuid () {
  return Math.random().toString(36).slice(-6).toLocaleUpperCase();
}

export function getClasses (values: object, styles: { [x: string]: string }): { [x: string]: string } {
  const classes = {};
  for (const value of Object.values(values)) {
    Object.assign(classes, { [value]: styles[value] });
  }

  return classes;
}
