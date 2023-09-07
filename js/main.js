

  function listabanchetti() {
    return {
      banchetti: ["Loading"],
      loaded: false,
      init() {
        let component = this;
        let url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vT-k-H4fp9KdPZq0dQ6f1V7TkrIt0mFglpKU2PZqGCSu6lHRNPpiYDA4DoqltMYs8H2y2mfl7z3wC3s/pub?gid=826085629&single=true&output=csv";
        Papa.parse(url, {
          download: true,
          header: true,
          complete: function (results) {
            parsedData = results.data;
            const transformedData = {};
            parsedData.forEach(item => {
              const { Regione, Provincia, ...rest } = item;
              if (transformedData[Regione]) {
                if (transformedData[Regione][Provincia]) {
                  transformedData[Regione][Provincia].push(rest);
                } else {
                  transformedData[Regione][Provincia] = [rest];
                }
              } else {
                transformedData[Regione] = {};
                transformedData[Regione][Provincia] = [rest];
              }
            });


            component.banchetti = transformedData;
            component.loaded = true;
            console.log(transformedData);
          },
          error: function (error) {
            console.error('Error parsing CSV:', error);
          }
        });

      }
    };
  }


function regioni() {
  return {
    regioni: [
    'Tutte le regioni',
    'Abruzzo',
    'Basilicata',
    'Calabria',
    'Campania',
    'Emilia-Romagna',
    'Friuli-Venezia Giulia',
    'Lazio',
    'Liguria',
    'Lombardia',
    'Marche',
    'Molise',
    'Piemonte',
    'Puglia',
    'Sardegna',
    'Sicilia',
    'Toscana',
    'Trentino-Alto Adige',
    'Umbria',
    'Valle d\'Aosta',
    'Veneto'],}
  }
