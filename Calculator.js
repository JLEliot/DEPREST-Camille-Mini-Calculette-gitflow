function addition(a, b) {
    return a + b;
  }
  
function soustraction(a, b) {
    return a - b;
  }
  
function multiplication(a, b) {
    // TODO
  }
  
  // --- UI ---
  const inputA = document.getElementById("a");
  const inputB = document.getElementById("b");
  const selectOp = document.getElementById("op");
  const btn = document.getElementById("btn");
  const resultEl = document.getElementById("result");
  
  function lireNombre(input) {
    const v = Number(input.value);
    return Number.isFinite(v) ? v : NaN;
  }
  
  btn.addEventListener("click", () => {
    const a = lireNombre(inputA);
    const b = lireNombre(inputB);
  
    if (!Number.isFinite(a) || !Number.isFinite(b)) {
      resultEl.textContent = "Entrée invalide";
      return;
    }
  
    let res;
  
    switch (selectOp.value) {
      case "add":
        res = addition(a, b);
        break;
      case "sub":
        res = soustraction(a, b);
        break;
      case "mul":
        res = multiplication(a, b);
        break;
      default:
        res = "Opération inconnue";
    }
  
    resultEl.textContent = res;
  });