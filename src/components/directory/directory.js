import React, {Component} from 'react';
import {connect} from "react-redux/es/alternate-renderers";
import {createStructuredSelector} from "reselect";

import MinuItem from '../minuItem/minuItem'
import {selectSections} from "../../redux/directory/directorySelector";

import './directory.scss'

const Directory = ({sections}) => (

            <div className={'directory-menu'}>
                {
                    sections.map(({id, ...otherProps}) => (
                        <MinuItem key={id} {...otherProps}/>
                    ))
                }
            </div>
        );

const mapStateToProps = createStructuredSelector({
    sections: selectSections
});


export default connect(mapStateToProps)(Directory);