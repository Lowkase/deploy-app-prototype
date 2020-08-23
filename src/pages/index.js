import React from "react"

import "../styles/styles.scss"

import Layout from "../template/layout/layout"

import Button from "../components/button/button"


// INDEX
const IndexPage = (props) => {
    const toggleTheme = () => { 
        let theme = document.getElementById("theme");
        if(theme.className === "darkTheme") {
            theme.className = "lightTheme";
        } else {
            theme.className = "darkTheme";
        }
    }; 

    return (
        <Layout>
        <header>THIS IS THE HEADER</header>
        <section>
            <div>THIS IS THE SECTION</div>

            <Button
                text = 'THEME SWITCH'
                handleClick = {toggleTheme}
                scheme = "m-button-primary"
                tabIndex = "0"
            >
            </Button>
        </section>
    </Layout>
    );
}

export default IndexPage