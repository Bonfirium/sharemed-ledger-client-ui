import React from 'react';
import { List} from 'semantic-ui-react';
import MedCenterRow from './med-center-row';

const dataOrg1 = [{
        pacientName: 'Николай',
        resultId: Math.random().toString(10).substring(2, 15) + Math.random().toString(10).substring(2, 15),
        title: 'Проверка на пидлоа',
        date: (new Date()).toISOString(),
        file: 'crop.jpeg',
        message: 'i hava bad news for you...' 
    },{
        pacientName: 'Николай',
        resultId: Math.random().toString(10).substring(2, 15) + Math.random().toString(10).substring(2, 15),
        title: 'Проверка очка',
        date: (new Date()).toISOString(),
        file: 'crop.jpeg',
        message: 'it is so large...' 
    }];

    const dataOrg2 = [{
        pacientName: 'Николай',
        resultId: Math.random().toString(10).substring(2, 15) + Math.random().toString(10).substring(2, 15),
        date: (new Date()).toISOString(),
        file: 'crop.jpeg',
        message: 'you are no fine...' 
    }];
const base = [
    { orgName: 'medcent1', data: dataOrg1 },
    { orgName: 'medcent2', data: dataOrg2 },
];

export default class Results extends React.Component {

    render () {
        return (

            <List>
                {
                    base.map(({ orgName, data }) => {
                        return (
                            <MedCenterRow
                                orgName={orgName}
                                data={data}
                            />
                        );
                    })
                }
            </List>
        );
    }
}