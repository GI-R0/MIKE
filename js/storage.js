window.MikeStorage = (() => {
  function get(key) {
    try { return localStorage.getItem(key); } catch (error) { return null; }
  }

  function set(key, value) {
    try { localStorage.setItem(key, value); return true; } catch (error) { return false; }
  }

  function remove(key) {
    try { localStorage.removeItem(key); } catch (error) {}
  }

  function parse(raw, fallback) {
    if (!raw) return fallback;
    try { return JSON.parse(raw) ?? fallback; } catch (error) { return fallback; }
  }

  function readState(keys) {
    return keys.reduce((state, key) => {
      state[key] = parse(get(key), null);
      return state;
    }, {});
  }

  return Object.freeze({ get, set, remove, parse, readState });
})();
