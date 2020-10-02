import React from "react"
import { Table } from "react-bootstrap"

function DashBoard(){
    const table= JSON.parse(localStorage.getItem('arr'))
    console.log("check", table)
    return (
        <div>
            <h3>All Feedback</h3>
            <Table striped bordered hover>
                <thead>
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
                        table.map(ele => {
                            return (
                                <tr>
                                    <td>{ele.formName}</td>
                                    <td>{ele.text}</td>
                                    <td>{ele.phone}</td>
                                    <td>{ele.email}</td>
                                    <td>{ele.rating}</td>
                                    <td>{ele.name}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
                </Table>
        </div>
    )
}

export default DashBoard