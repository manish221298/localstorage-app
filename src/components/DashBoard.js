import React from "react"
import { Table } from "react-bootstrap"

function DashBoard(){
    const table= JSON.parse(localStorage.getItem('arr') || "[]")
    const check = table.length >= 1 ? true : false
    console.log("check", table.length)
    return (
        <div>
            <h3>All Feedback</h3>
            <Table responsive bordered hover>
                <thead text-info>
                    <tr>
                    <th>Form Name</th>
                    <th>Text field</th>
                    <th>Phone field</th>
                    <th>Email field</th>
                    <th>Radio button</th>
                    <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       check > 0 ?  table.map((ele, i) => {
                            return (
                                <tr key={i}>
                                    <td>{ele.formName}</td>
                                    <td>{ele.text}</td>
                                    <td>{ele.phone}</td>
                                    <td>{ele.email}</td>
                                    <td>{ele.rating}</td>
                                    <td>{ele.name}</td>
                                </tr>
                            )
                        }) : ""
                    }
                </tbody>
                </Table>
        </div>
    )
}

export default DashBoard