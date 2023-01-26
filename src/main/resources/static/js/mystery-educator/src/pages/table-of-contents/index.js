import React from "react";

const TableOfContentsPage = () => {
    return (
        <div>
            <h1>What do you want to learn about today?</h1>
            <ul>
                <li><a href="/instruments">Musical Instruments</a></li>
                <li><a href="/nasa">NASA</a></li>
                <li><a href="/bored">Surprise Me!</a></li>
            </ul>
        </div>
    );
}

export default TableOfContentsPage;