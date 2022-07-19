import { Column, useTable } from "react-table";

import React from "react";
import styled from "styled-components";

interface ITableProps {
    columns: ReadonlyArray<Column>;
    data: tableType[];
}

interface tableType {
    name: string;
    department: string;
    open_year: string;
    area: string;
    prof: string;
}

const Table: React.FC<ITableProps> = ({ columns, data }) => {
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({ columns, data });
    return (
        <TableWrapper>
            <table className="table" {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup, i) => (
                        <tr {...headerGroup.getHeaderGroupProps()} key={i}>
                            {headerGroup.headers.map((column, j) => (
                                <th {...column.getHeaderProps()} key={j}>
                                    {column.render("Header")}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()} key={i}>
                                {row.cells.map((cell, j) => (
                                    <td {...cell.getCellProps()} key={j}>
                                        {cell.render("Cell")}
                                    </td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </TableWrapper>
    );
};

export default Table;

const TableWrapper = styled.div`
    .table thead {
        color: #000;
        opacity: 0.3;
    }

    .table tr th {
        width: 100%;
        padding: 20px;
    }

    table {
        min-width: 600px;
        width: 100%;
    }

    tr {
        display: flex;
    }

    tr td {
        width: 100%;
    }

    .table td {
        color: #000;

        text-align: center;
    }

    tbody td {
        border-bottom: 1px solid rgb(0, 0, 0, 0.1);
        padding: 10px;
    }

    table {
        border-collapse: collapse !important;
    }
`;
