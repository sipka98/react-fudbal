import PropTypes from 'prop-types';
import podaci from "../podaci/podaciOTimovima.js";
import {Table} from "react-bootstrap";

const Tablica = props => {

    function generisiTablicu() {

        let nizPodataka = [];

        for (let i = 0; i < podaci.length; i++) {
            let team = podaci[i];

            let utakmiceTima = props.rezulati.filter(rezultat => {
                return rezultat.domacin === team.code || rezultat.gost === team.code;
            })

            let brojPobeda = 0;
            let brojPoraza = 0;
            let brojNeresenih = 0;
            let brojOdigranihUtakmica = utakmiceTima.length;
            let brojDatihGolova = 0;
            let brojPrimljenihGolova = 0;
            let brojBodova = 0;


            for (let j = 0; j < utakmiceTima.length; j++) {
                let utakmica = utakmiceTima[j];

                if (utakmica.domacin === team.code) {
                    brojDatihGolova += parseInt(utakmica.domGolova);
                    brojPrimljenihGolova += parseInt(utakmica.gostGolova);

                    if (utakmica.domGolova > utakmica.gostGolova) {
                        brojPobeda++;
                        brojBodova += 3;
                    } else if (utakmica.domGolova < utakmica.gostGolova) {
                        brojPoraza++;
                    } else {
                        brojNeresenih++;
                        brojBodova++;
                    }
                } else {
                    brojDatihGolova += parseInt(utakmica.gostGolova);
                    brojPrimljenihGolova += parseInt(utakmica.domGolova);

                    if (utakmica.domGolova < utakmica.gostGolova) {
                        brojPobeda++;
                        brojBodova += 3;
                    } else if (utakmica.domGolova > utakmica.gostGolova) {
                        brojPoraza++;
                    } else {
                        brojNeresenih++;
                        brojBodova++;
                    }
                }
            }

            let podatak = {
                tim: team.name,
                odigrane: brojOdigranihUtakmica,
                pobede: brojPobeda,
                nereseno: brojNeresenih,
                porazi: brojPoraza,
                goloviZa: brojDatihGolova,
                goloviProtiv: brojPrimljenihGolova,
                bodovi: brojBodova,
            
            };

            nizPodataka.push(podatak);
        }

        nizPodataka.sort((a, b) => {
            if (a.bodovi > b.bodovi) {
                return -1;
            } else if (a.bodovi < b.bodovi) {
                return 1;
            } else {
                if (a.goloviZa - a.goloviProtiv > b.goloviZa - b.goloviProtiv) {
                    return -1;
                } else if (a.goloviZa - a.goloviProtiv < b.goloviZa - b.goloviProtiv) {
                    return 1;
                } else {
                    if (a.goloviZa > b.goloviZa) {
                        return -1;
                    } else if (a.goloviZa < b.goloviZa) {
                        return 1;
                    } else {
                        return 0;
                    }
                }
            }
        });

        return nizPodataka;
    }





    return (
        <>
            <Table hover>
                <thead className="table-success">
                <tr>
                    <th></th>
                    <th>Tim</th>
                    <th>Odigrane</th>
                    <th>Pobede</th>
                    <th>Nereseno</th>
                    <th>Porazi</th>
                    <th>Dati golovi</th>
                    <th>Primljeni golovi</th>
                    <th>Gol razlika</th>
                    <th>Bodovi</th>
                </tr>
                </thead>
                <tbody>
                {
                    generisiTablicu().map((tim, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{tim.tim}</td>
                                <td>{tim.odigrane}</td>
                                <td>{tim.pobede}</td>
                                <td>{tim.nereseno}</td>
                                <td>{tim.porazi}</td>
                                <td>{tim.goloviZa}</td>
                                <td>{tim.goloviProtiv}</td>
                                <td>{tim.goloviZa - tim.goloviProtiv}</td>
                                <td>{tim.bodovi}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </Table>
        </>
    );
};

Tablica.propTypes = {
   rezulati: PropTypes.array.isRequired
};

export default Tablica;