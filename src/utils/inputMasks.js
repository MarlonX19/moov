export const cpfMask = (value) => {
  return value
    .replace(/\D/g, "") // substitui qualquer caracter que nao seja numero por nada
    .replace(/(\d{3})(\d)/, "$1.$2") // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1"); // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
};

export const rgMask = (value) => {
  return value
    .replace(/\D/g, "") // substitui qualquer caracter que nao seja numero por nada
    .replace(/(\d{1,2})(\d{3})(\d{3})(\d{1})$/,"$1.$2.$3-$4"); 
};

export const maskDate = value => {
  let v = value.replace(/\D/g,'').slice(0, 10);
  if (v.length >= 5) {
    return `${v.slice(0,2)}/${v.slice(2,4)}/${v.slice(4)}`;
  }
  else if (v.length >= 3) {
    return `${v.slice(0,2)}/${v.slice(2)}`;
  }
  return v
}

export const realMask = (value) => {
  let v = value.replace(/\D/g, "");
  v = (v / 100).toFixed(2) + "";
  v = v.replace(".", ",");
  v = v.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
  v = v.replace(/(\d)(\d{3}),/g, "$1.$2,");
  v = "R$ " + v;
  return v;
};

export const phoneMask = (r) => {
  r = r.replace(/\D/g, "");
  r = r.replace(/^0/, "");
  if (r.length > 10) {
    r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
  } else if (r.length > 5) {
    r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
  } else if (r.length > 2) {
    r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
  } else {
    r = r.replace(/^(\d*)/, "($1");
  }
  return r;
};

export const CEPMask = (value) => {
  let v = `${value.substr(0,5)}-${value.substr(5,9)}`;
  return v;
};
