import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css';
import { RecordsResponse } from './types';
import { formatDate } from './helpers';
import Pagination from './Pagination';
import Filters from '../../components/Filters';
import api from '../../services/api';

const Records = () => {
    // const [recordsResponse, setRecordsResponse] = useState([]);
    const [activePage, setActivePage] = useState(0);

    const [lists, setLists] = useState<any[]>([]);


    //FUNCIONANDO É ISso
    // useEffect(() => {
    //     api.get('/live/country/brazil')
    //     .then(response => {
    //         setLists(response.data);
    //     })
    // })

    useEffect(() => {
        api.get('/summary')
        .then(response => {
            setLists(response.data.Countries);
        })
    })

    const handlePageChange = (index: number) => {
        setActivePage(index)
    }

    return (
        <div className="page-container">
            <Filters link="/charts" linkText="VER GRÁFICO" />
            <table className="records-table" cellPadding="0" cellSpacing="0">
                <thead>
                    <tr>
                        <th>DATA/HORA</th>
                        <th>PAÍS</th>
                        <th>TOTAL CONFIRMADOS</th>
                        <th>TOTAL MORTES</th>
                        <th>TOTAL RECUPERADOS</th>
                    </tr>
                </thead>
                <tbody>
                    {lists.map(list => (
                        <tr key={list.id}>
                            <td>{list.Country}</td>
                            <td>{list.TotalConfirmed}</td>
                            <td className="text-secondary">{list.TotalDeaths}</td>
                            <td>{list.TotalRecovered}</td>
                            <td className="text-primary">{list.Date}</td>
                            {/* <td>{formatDate(list.date)}</td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* <Pagination 
                activePage={activePage}
                goToPage={handlePageChange}
                totalPages={recordsResponse?.totalPages}
            /> */}
        </div>
    );
}

export default Records;