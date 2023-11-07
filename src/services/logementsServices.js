export class LogementsServices {
  getAllLogements() {
    return fetch('datas/logements.json').then((response) => {
      return response.json();
    });
  }

  getLogementsById(id) {
    console.log(id);
    return fetch('datas/logements.json')
      .then((response) => {
        console.log();
        if (!response.ok) {
          console.log('erreur');
        }
        return response.json();
      })
      .then((list) => {
        console.log(list);
        const logement = list.find((logement) => id === logement.id);
        if (!logement) {
          console.log('existe pas');
        }
        return logement;
      });
  }
}
