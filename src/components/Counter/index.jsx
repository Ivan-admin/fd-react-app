import React, { Component } from 'react';
import styles from './Counter.module.css';
import PropTypes from 'prop-types';
 class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isAdd: true,
    };
  }

  handleClick = () => {
    this.setState((state, props) => {
      return { 
        count: state.isAdd
        ? state.count + props.step
        : state.count - props.step,
      };
    });
  };

  changeMode = () =>{
    this.setState({ 
      isAdd: !this.state.isAdd,
    });
  };

  render () {
    const { count, isAdd } = this.state;
    const { step } = this.props;
    return (
      <article className={styles.container}>
        <h1 className={styles.count}>Текущий счет {count}</h1>
        <div className={styles.count}> Шаг вычисления {step}</div>
        <div>
          <button className={styles.btn} onClick={this.handleClick}>
            {' '}
            {isAdd ? 'Добавление' : 'Вычитание'}
          </button>
          <button className={styles.btn} onClick={this.changeMode}>
            Режим 
          </button>
        </div>
      </article>
    );
  }
}
Counter.propTypes = {
  step: PropTypes.number.isRequired,
}

export default Counter;