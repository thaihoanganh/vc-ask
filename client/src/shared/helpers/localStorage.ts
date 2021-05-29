// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const writeLocalStorage = (key: string, value: any, expires = 0): any => {
  const data: any = { value };

  if (expires) {
    data.expires = Date.now() + expires;
  }

  return window.localStorage.setItem(key, JSON.stringify(data));
};

export const readLocalStorage = (key: string): any => {
  const data = window.localStorage.getItem(key);

  if (null === data) {
    return null;
  }

  const { expires, value } = JSON.parse(data) || {};

  if (expires && expires < new Date()) {
    clearLocalStorage(key);
    return null;
  }

  return value;
};

export const clearLocalStorage = (key: string): any => {
  return window.localStorage.removeItem(key);
};
