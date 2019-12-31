import React from 'react';
import style from './homepage.module.scss';
import styleButtons from '../../styles/buttons.module.scss';

class Homepage extends React.Component {
    goInBuisness = () => {
        this.props.history.push('/buisness');
    };
    render() {
        return (
            <div className={style.row}>
                <h1 className={style.title}>Choose Your Sporting Journey</h1>
                <div className={style.fan}>
                    <div className={`${styleButtons.button_large} ${style.button}`}>FAN</div>
                </div>
                <div className={style.business}>
                    <div className={`${styleButtons.button_large} ${style.button}`} onClick={this.goInBuisness}>BUSINESS</div>
                </div>
            </div>
        );
    }
}

export default Homepage;
