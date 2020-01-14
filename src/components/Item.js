import React from 'react';
import './Item.css';

const Item = ({item, iterable}) => {
    const renderNestedChildren = ({children}) =>
        children.map((value, index) =>
            <li key={value.name}>
                <div className="sub-item">
                    <input type="checkbox" id={value.name}/>
                    <label htmlFor={value.name}>{value.name}</label>
                    <ul>
                        {Object.values(value).map(value =>
                            Array.isArray(value) ?
                                value.map(value => <li key={value.name}><span>{value.name}</span></li>)
                                : null
                        )}
                    </ul>
                </div>
            </li>
        );

    return (
        <div className="Item__tree">
            <div className="Item__instance">
                <input type="checkbox" id={item}/>
                <label htmlFor={item}>{item}</label>
                <ul>
                    {renderNestedChildren(iterable)}
                </ul>
            </div>
        </div>
    )
};

export default Item;
