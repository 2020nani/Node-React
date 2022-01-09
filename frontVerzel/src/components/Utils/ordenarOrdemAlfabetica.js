export default function(lista) {
    const listaOrdenada = lista.sort(function (a, b) {
        if (a.modulo.nome > b.modulo.nome) {
          return 1;
        }
        if (a.modulo.nome < b.modulo.nome) {
          return -1;
        }
        // a must be equal to b
        return 0;
      })
    return listaOrdenada
}