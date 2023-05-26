import React from 'react';
import {PropTypes} from 'prop-types'
function Propsty(props) {
    console.log(props.name)
    return (
        <div>
            {props.name} and {props.lastName}
            
        </div>
    );
}
Propsty.defaultProps={
    name:'kashish',
    lastName:'Kirplani'
}
Propsty.PropsTypes={
    name: PropTypes.String
}
export default Propsty;