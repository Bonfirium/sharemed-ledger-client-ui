import React from 'react';
import { List} from 'semantic-ui-react';
import MedCenterRow from './med-center-row';

const dataOrg1 = [{
        doc: 'Николай',
        title: 'Проверка 2',
        date: (new Date()).toISOString(),
        id: Math.random().toString(10).substring(2, 15) + Math.random().toString(10).substring(2, 15),
        message: 'plese give me acces to your data for analyse',
    },{
        doc: 'Михаил',
        title: 'Проверка 3',
        date: (new Date()).toISOString(),
        id: Math.random().toString(10).substring(2, 15) + Math.random().toString(10).substring(2, 15),
        message: 'plese give me acces to your data for analyse',
    }];

    const dataOrg2 = [{
        doc: 'Никита',
        title: 'Проверка 3',
        date: (new Date()).toISOString(),
        id: Math.random().toString(10).substring(2, 15) + Math.random().toString(10).substring(2, 15),
        message: 'plese give me acces to your data for analyse',
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
                                onAccept={() => {}}
                                onDismiss={() => {}}
                            />
                        );
                    })
                }
            </List>
        );
    }
}