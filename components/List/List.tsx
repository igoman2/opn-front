import React, { useMemo } from "react";

import Card from "../UI/Card";
import Table from "./Table";
import styled from "styled-components";

interface IListProps {
    listTitle?: string;
    list: ListType[];
    header?: string;
}

interface ListType {
    area: string;
    department: string;
    name: string;
    open_year: string;
    prof: string;
}

const List: React.FC<IListProps> = (props) => {
    const rawData = props.list;
    const columns = useMemo(
        () => [
            {
                accessor: "name",
                Header: "사업장명",
            },
            {
                accessor: "department",
                Header: "진료과",
            },
            {
                accessor: "open_year",
                Header: "개원년도",
            },
            {
                accessor: "area",
                Header: "면적",
            },
            {
                accessor: "prof",
                Header: "전문의",
            },
        ],
        []
    );

    const data = useMemo(
        () =>
            rawData.map((item: ListType) => ({
                name: item.name,
                department: item.department,
                open_year: item.open_year,
                area: item.area,
                prof: item.prof,
            })),
        []
    );

    return (
        <Card>
            <ListWrapper>
                <div className="table-wrapper">
                    <div className="hospital-list-text">{props.listTitle}</div>
                    <div className="hospital-list-header">{props.header}</div>
                    <Table columns={columns} data={data} />
                </div>
            </ListWrapper>
        </Card>
    );
};

export default List;

export const ListWrapper = styled.div`
    .hospital-list-text {
        font-weight: 700;
        font-size: 18px;
        color: #3955b4;
    }
    .hospital-list-header {
        font-weight: 700;
        font-size: 18px;
        color: #3955b4;
        margin-top: 17px;
    }
    .table-wrapper {
        overflow: scroll;
    }
`;
