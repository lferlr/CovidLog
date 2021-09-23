import React, { useEffect, useState } from 'react';
import './styles.css';
import Filters from '../../components/Filters';
import api from '../../services/api';
import { formatDate } from './helpers';



const Records = () => {
    // const [recordsResponse, setRecordsResponse] = useState([]);
    const [activePage, setActivePage] = useState(0);
    const [uf, setUf] = useState();
    const [lists, setLists] = useState<any[]>([]);
    const [filter, setFilter] = useState('Countries');

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

    async function handleFilter(e:any) {
        e.preventDefault();
        setFilter(e.target[e.target.selectedIndex].value);
    }

    async function handleSearch() {
        api.get(`/countries?${filter}`)
        .then(response => {
            setLists(response.data);
        })
    }

    return (
        
        <div className="page-container">
            <select onChange={handleFilter}>
                {lists.map(list => 
                    <option value={list.Country}>{list.Country}</option>    
                )}
            </select>
            <button onClick={handleSearch}>Buscar</button>
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
                            <td>{formatDate(list.Date)}</td>
                            <td>{list.Country}</td>
                            <td>{list.TotalConfirmed}</td>
                            <td className="records-text-secondary">{list.TotalDeaths}</td>
                            <td>{list.TotalRecovered}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Records;