import React from "react"
import { useState } from 'react';

import "../styles/styles.scss"

import Layout from "../template/layout/layout"
import Header from "../template/header/header"

import Button from "../components/button/button"
import Card from "../components/card/card"
import CardGroup from "../components/cardGroup/cardGroup"
import Empty from "../components/empty/empty"
import Loader from "../components/loader/loader"


// TABLE
const TablePage = (props) => {
    return (
        <Layout>
            <Header>
                <div className="title">TABLE</div>
            </Header>

            <section>
                content
            </section>
        </Layout>
    );
}

export default TablePage