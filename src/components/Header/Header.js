import React from 'react';
import CSSModules from 'react-css-modules';

import style from './Header.scss';

@CSSModules(style)
export class Header extends React.Component {
    render() {
        return (
            <div>
                <h1 styleName="h1">Header</h1>
            </div>
        );
    }
}
