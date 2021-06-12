import React from 'react';
import './directory.scss';
import {connect} from 'react-redux';
import {selectSections} from '../../redux/directory/directory.selector';
import {createStructuredSelector} from 'reselect';
import Section from './section/section';

const Directory = ({sections}) => (
    <div className="directory">
        {
           sections.map(({id, ...props}) => (
               <Section key={id} {...props}/>
           ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
   sections: selectSections
})
export default connect(mapStateToProps)(Directory);