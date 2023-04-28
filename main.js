document.getElementById("storeSessionStorageButton").onclick = () => {
  const sessionStorageValue = document.getElementById(
    "sessionStorageValue"
  ).value;
  if (sessionStorageValue) {
    setSessionStorage("key1", sessionStorageValue);
    alert(`${sessionStorageValue} is stored in sessionStorage`);
  }
};
document.getElementById("clearSessionStorageButton").onclick = () => {
  sessionStorage.clear();
  alert("Cleared");
};

document.getElementById("storeLocalStorageButton").onclick = () => {
  const localStorageValue = document.getElementById("localStorageValue").value;
  if (localStorageValue) {
    setLocalStorage("key1", localStorageValue);
    alert(`${localStorageValue} is stored in localStorage`);
  }
};
document.getElementById("clearLocalStorageButton").onclick = () => {
  localStorage.clear();
  alert("Cleared");
};

const main = () => {
  const sessionStorageData = { ...sessionStorage };
  const localStorageData = { ...localStorage };

  document.getElementById("sessionStorageData").innerText =
    JSON.stringify(sessionStorageData);
  document.getElementById("localStorageData").innerText =
    JSON.stringify(localStorageData);
};

const setSessionStorage = (key, value) => {
  sessionStorage.setItem(key, value);
};
const setLocalStorage = (key, value) => {
  localStorage.setItem(key, value);
};

main();
