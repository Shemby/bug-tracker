import React, { Component } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      now: moment()
    };

    this.firstDayOfMonth = this.firstDayOfMonth.bind(this);
  }

  firstDayOfMonth = () => {
    let now = this.state.now;
    let firstDay = moment(now)
      .startOf('month')
      .format('d');
    return firstDay;
  };

  render() {
    let weekdays = moment.weekdays();

    let weekDayNames = weekdays.map(day => {
      return <td key={day}>{day}</td>;
    });

    let blanks = [];
    for (let i = 0; i < this.firstDayOfMonth(); i++) {
      blanks.push(<td>{'s'}</td>);
    }

    let monthDays = [];
    for (let i = 1; i <= this.state.now.daysInMonth(); i++) {
      monthDays.push(
        <td key={i}>
          <span>{i}</span>
        </td>
      );
    }

    let totalDays = [...blanks, ...monthDays];
    let rows = [];
    let cells = [];

    totalDays.forEach((row, i) => {
      if (i % 7 !== 0) {
        cells.push(row);
      } else {
        rows.push(cells);
        cells = [];
        cells.push(row);
      }
      if (i === totalDays.length - 1) {
        rows.push(cells);
      }
    });

    let daysinmonth = rows.map((d, i) => {
      return <tr key={i}>{d}</tr>;
    });

    return (
      <div>
        <div className='ui container'>
          <table className='ui celled table'>
            <thead>
              <tr>{weekDayNames}</tr>
            </thead>
            <tbody>{daysinmonth}</tbody>
          </table>
        </div>
        <div>
          <Link to='/Dev'>to development</Link>
        </div>
      </div>
    );
  }
}

export default Calendar;
