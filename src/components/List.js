import React, {useEffect, useState} from 'react';
import Item from './Item';
import {data} from '../data/data.json';

const List = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        setList(data);
    }, []);

    const renderHeadingsList = () => list.map((value, index) => {
            return Object.values(value).map((item, index) => {
                return !Array.isArray(item) ?
                    <Item
                        key={index}
                        iterable={value}
                        item={item}/> : null
            })
        });

    return (
        <div style={styles.container}>
            {
                list.length !== 0 ? renderHeadingsList() : null
            }
        </div>
    )
};

const styles = {
    container: {
        display: 'flex',
        width: 500,
        marginTop: 100,
        flexDirection: 'column'
    }
};

export default List;
