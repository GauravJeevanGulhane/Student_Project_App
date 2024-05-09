import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import AxoisAPI from "../Services/AxoisAPI";

function ViewStudent() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        AxoisAPI .viewStudent().then((res) => {
            setStudents(res.data);
        });
    }, []);

    return (
        <div>
            <Table responsive="sm">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td>{student.contact}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default ViewStudent;
