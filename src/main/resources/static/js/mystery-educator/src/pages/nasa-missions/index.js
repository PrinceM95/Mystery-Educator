import React, { useEffect, useState } from "react";
import style from "./style.module.scss";

import Axios from "axios";

const NasaPage = () => {
  const [jamesWebb, setJamesWebb] = useState(null);
  const [apollo, setApollo] = useState(null);
  const [voyager, setVoyager] = useState(null);
  const [curiosity, setCuriosity] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJamesWebbData = async () => {
      const result = await Axios("https://images-assets.nasa.gov/video/James_Webb_Space_Telescope__An_Overview_1080/collection.json");
      setJamesWebb(result.data[0]);
    };

    if (jamesWebb) {
      setLoading(false);
    }

    const timer = setTimeout(() => {
      !jamesWebb && fetchJamesWebbData();
    }, 2000);

    return () => clearTimeout(timer);
  }, [jamesWebb]);

  useEffect(() => {
    const fetchApolloData = async () => {
      const result = await Axios("https://images-api.nasa.gov/asset/Apollo%2011%20Overview");
      setApollo(result.data.collection.items[4].href);
    };

    if (apollo) {
      setLoading(false);
    }

    const timer = setTimeout(() => {
      !apollo && fetchApolloData();
    }, 2000);

    return () => clearTimeout(timer);
  }, [apollo]);

  useEffect(() => {
    const fetchCuriosityData = async () => {
      const result = await Axios("https://images-api.nasa.gov/asset/JPL-20120806-MSLf-0001");
      setCuriosity(result.data.collection.items[1].href);
    };

    if (curiosity) {
      setLoading(false);
    }

    const timer = setTimeout(() => {
      !curiosity && fetchCuriosityData();
    }, 2000);

    return () => clearTimeout(timer);
  }, [curiosity]);

  useEffect(() => {
    const fetchVoyagerData = async () => {
      const result = await Axios("https://images-assets.nasa.gov/video/09_Voyager/collection.json");
      setVoyager(result.data[13]);
    };

    if (voyager) {
      setLoading(false);
    }

    const timer = setTimeout(() => {
      !voyager && fetchVoyagerData();
    }, 2000);

    return () => clearTimeout(timer);
  }, [voyager]);
  

  return (
    <div>
      <h2>Lets explore some of Nasa's most exciting Mission!</h2>
      {loading ? <h3>Loading...</h3> : 
      <section className={style.missions}>
        <article className={style.nasa_vid}>
        <h3 className={style.nasa_vid_header}>James Webb Space Telescope</h3>
          <video width="320" height="240" controls>
            <source className={style.nasaVid} src={jamesWebb} type="video/mp4"></source>
          </video>
        </article>
        <article className={style.nasa_vid}>
        <h3 className={style.nasa_vid_header}>The Apollo 11 Moon Landing</h3>
          <video width="320" height="240" controls>
            <source className={style.nasaVid} src="https://images-assets.nasa.gov/video/Apollo%2011%20Overview/Apollo%2011%20Overview~orig.mp4" type="video/mp4"></source>
          </video>
        </article>
        <article className={style.nasa_vid}>
        <h3 className={style.nasa_vid_header}>The Curiosity Rover Landing</h3>
          <video width="320" height="240" controls>
            <source className={style.nasaVid} src={curiosity} type="video/mp4"></source>
          </video>
        </article>
        <article className={style.nasa_vid}>
        <h3 className={style.nasa_vid_header}>The Voyager Spacecraft</h3>
          <video width="320" height="240" controls>
            <source className={style.nasaVid} src={voyager} type="video/mp4"></source>
          </video>
        </article>
      </section>
      }
    </div>
  );
};

export default NasaPage;
