import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewAll = () => {
    const [data, changeData] = useState(
        {
            "quotes": []
        }
    )
    const fetchData = () => {
        axios.get("https://dummyjson.com/quotes").then(
            (response) => {
                changeData(response.data)
            }
        ).catch().finally()
    }
    useEffect(() => { fetchData() }, [])
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">id</th>
                                    <th scope="col">title</th>
                                    <th scope="col">author</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.quotes.map(
                                    (value, index) => {
                                        return <tr>
                                            <td scope="row">{value.id}</td>
                                            <td>{value.title}</td>
                                            <td>{value.author}</td>
                                        </tr>
                                    }
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll