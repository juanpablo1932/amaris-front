const prefix = import.meta.env.VITE_APP_PREFIX;

export function setItem(name, item) {
  return localStorage.setItem(`${prefix}_${name}`, JSON.stringify(item));
}

export function removeItem(name) {
  return localStorage.removeItem(`${prefix}_${name}`);
}

export function getItem(name) {
  const fromLS = localStorage.getItem(`${prefix}_${name}`);
  try {
    return JSON.parse(fromLS);
  } catch (error) {
    return fromLS;
  }
}