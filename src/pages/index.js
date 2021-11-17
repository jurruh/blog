import React from 'react';
import Layout from '@theme/Layout';

function Hello() {

    const recentPosts = require("../../.docusaurus/docusaurus-plugin-content-blog/default/blog-post-list-prop-default.json");

    return (
        <Layout title="Hello">
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    fontSize: '20px',
                    padding: '1em'
                }}>
                <div>
                    <img src="https://github.com/jurruh.png" style={{ maxWidth: 100, marginBottom: 10, borderRadius: "100%" }}></img>
                </div>
                <h1>
                    Hello
                </h1>
                <p>
                    I am Jurre, a developer with a passion for cool stuff.
                </p>

                <p>
                    <ul>
                        {recentPosts.items.slice(0, 5).map((item, index) => (
                            <li key={index}>
                                <a href={`${item.permalink}`}>{item.title}</a>{" "}
                            </li>
                        ))}
                    </ul>
                </p>


            </div>
        </Layout>
    );
}

export default Hello;