import welcome from "./welcome.js";
import jokes from "./jokes.js";
import cep from "./cep/index.js";
import searchCep from "./cep/search-cep.js";
import currency from "./currency.js";

export const stages = {
  0: { label: "Boas Vindas", execute: welcome },
  1: { label: "Piadas", execute: jokes },
  2: {
    label: "Endereço pelo CEP",
    execute: cep,
    0: {
      execute: searchCep,
      label: "Digite o CEP",
      next: 1,
    },
  },
  3: {
    file: "arquivo3.js",
    label: "Conversão de moeda",
    execute: currency,
    // https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/brl.json
    // https://github.com/fawazahmed0/currency-api#readme
  },
  4: {
    file: "arquivo4.js",
    label: "Verificar se um número é par ou impar",
    // https://isevenapi.xyz/
    // https://api.isevenapi.xyz/api/iseven/6/
  },
  5: {
    file: "arquivo5.js",
    label: "Tabela FIPE",
    // https://deividfortuna.github.io/fipe/
    // https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos/5940/anos/2014-3
  },
  6: {
    file: "arquivo5.js",
    label: "Gerador de imagens",
    // https://docs.bruzu.com/
  },
};
