import React from "react"
import { useState } from 'react';

import "../styles/styles.scss"

import Layout from "../template/layout/layout"
import Header from "../template/header/header"

import Card from "../components/card/card"
import Table from "../components/table/table"

// TABLE
const TablePage = (props) => {
    return (
        <Layout>
            <Header>
                <div className="title">TABLE</div>
            </Header>

            <section>
                <Card
                    scheme = "m-card-full-viewport"
                    title = "TABLE"
                >
                    <Table />
                </Card>
            </section>
        </Layout>
    );
}

export default TablePage