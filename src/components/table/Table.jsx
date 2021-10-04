import React, { useState } from 'react'
import './table.css';

const Table = (props) => {
    
    const initDataShow = props.limit ? props.bodyData.slice(0, Number(props.limit)) : props.bodyData;

    const [dataShow, setDataShow] = useState(initDataShow);

    let pages = 1;
    let range = [];

    if (props.limit !== undefined) {
        let page = Math.floor(props.bodyData.length / Number(props.limit));
    }

    return (
        <div>
            <div className="table-wrapper">
                <table>
                    {
                        props.headData && props.renderHead ? (
                            <thead>
                                <tr>
                                    {
                                        props.headData.map((item, index) => props.renderHead(item, index))
                                    }
                                </tr>
                            </thead>
                        ) : null
                    }
                    {
                        props.bodyData && props.renderBody ? (
                            <tbody>
                                {
                                    dataShow.map((item, index) => props.renderBody(item, index))
                                }
                            </tbody>
                        ) : null
                    }
                </table>
            </div>
        </div>
    )
}

export default Table
