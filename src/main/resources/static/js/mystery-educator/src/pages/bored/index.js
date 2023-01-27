import React from 'react';
import style from './style.module.scss';

export default class BoredPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activity: "",
            type: "",
            participants: "",
            price: "",
            key: "",
            link: "",
            accessibility: "",
        };
        this.generateActivity = this.generateActivity.bind(this);
    }

    generateActivity() {
        fetch("http://www.boredapi.com/api/activity/")
          .then((response) => response.json())
          .then((data) => {
            this.setState({
                activity: data.activity,
                type: data.type,
                participants: data.participants,
                price: data.price,
                key: data.key,
                link: data.link,
                accessibility: data.accessibility,
            });
          });
      }
    
      componentDidMount() {
        this.generateActivity();
      }
    
      render() {
        let activity = this.state.activity;
        let type = this.state.type;
        let participants = this.state.participants;
        let price = this.state.price;
        let key = this.state.key;
        let link = this.state.link;
        let accessibility = this.state.link;
    
        return (
          <div>
            <h1 className={style.activity_header}>Try This! </h1>
            <p className={style.activity}>{activity}</p>
            <h2 className={style.details_header}>Activity Details: </h2>
            <p className={style.details}>Type of activity: {type}</p>
            <p className={style.details}>Price(0=Free, 1=More Expensive): {price}</p>
            <p className={style.details}>Number of required Participants: {participants}</p>
            <p className={style.details}>Accessibility (0=very accessible, 1=Less accessible): {accessibility}</p>
            <p className={style.details}>Link to further details: <a href={link} target='_blank'>{link}</a></p>
    
            <button onClick={this.generateActivity}>New Activity</button>
          </div>
        );
      }
}
