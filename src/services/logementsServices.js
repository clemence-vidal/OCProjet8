export class LogementsServices {
  getAllLogements() {
    return fetch('datas/logements.json').then((response) => {
      return response.json();
    });
  }

  getLogementsById(id) {
    return fetch('/datas/logements.json')
      .then((response) => {
        if (!response.ok) {
          console.log('erreur');
        }
        return response.json();
      })
      .then((list) => {
        console.log(list);
        const logement = list.find((logement) => id === logement.id);
        if (!logement) {
          window.location.href = '/error';
        }
        return logement;
      });
  }
}
