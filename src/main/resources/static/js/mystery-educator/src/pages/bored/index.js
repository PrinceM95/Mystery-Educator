import React from 'react';
import style from './style.module.scss';
import active from '../../assets/stay_active.png';

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
        let accessibility = this.state.accessibility;
    
        return (
          <div>
            <section className={style.activity_section}>
                <h1 className={style.activity_header}>Try This! </h1>
                <section className={style.activity}>
                    <h3>{activity}</h3>
                    <button className={style.activity_button} onClick={this.generateActivity}>New Activity!</button>
                </section>
            </section>
            <section className={style.details_section}>
                <h2 className={style.details_header}>Activity Details: </h2>
                <section className={style.activity_details}>
                <div><img src={active} class={style.image} alt="active"></img></div>
                    <p>Type of activity: {type}</p>
                    <p>Price(0=Free, 1=More Expensive): {price}</p>
                    <p>Number of required Participants: {participants}</p>
                    <p>Accessibility (0=very accessible, 1=Less accessible): {accessibility}</p>
                    <p>Link to further details: <a href={link} target='_blank' rel="noreferrer">{link}</a></p>
                </section>
            </section>
          </div>
        );
      }
}
