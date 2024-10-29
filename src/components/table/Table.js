import React from 'react';
import './Table.css';

const TableComponent = ({ data }) => {
    return (
        <div className='table-container'>
            <table>
                <thead>
                    <tr>
                        {data[0].map((header, index) => (
                            <th key={index}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.slice(1).map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        
    );
}

export default TableComponent;
