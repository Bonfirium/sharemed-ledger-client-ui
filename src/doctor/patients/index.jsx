import React from 'react';
import { List} from 'semantic-ui-react';
import PatientResultRow from './patient-result-row';

const dataSample = [{
        pacientName: 'Николай',
        resultId: Math.random().toString(10).substring(2, 15) + Math.random().toString(10).substring(2, 15),
        title: 'Проверка на пидлоа',
        date: (new Date()).toISOString(),
        file: '../../crop.jpeg',
        message: 'i hava bad news for you...' 
    },{
        pacientName: 'Николай',
        resultId: Math.random().toString(10).substring(2, 15) + Math.random().toString(10).substring(2, 15),
        title: 'Проверка очка',
        date: (new Date()).toISOString(),
        file: '../../crop.jpeg',
        message: 'it is so large...' 
    }];



export default class Results extends React.Component {

    render () {
        return (
            <List>
                {
                    dataSample.map((patientData) => {
                        return (
                            <PatientResultRow
                            patientData={patientData}
                            />
                        );
                    })
                }
            </List>
        );
    }
}