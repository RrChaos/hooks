import React, { Component } from 'react'
//Comps.
import MostWatched from '../components/MostWatched';
import Releases from '../components/Releases';
//axios
import axios from 'axios';
//Api
import {apiUrl} from '../config/config';
import { mostW } from '../config/config';


export default class HomePage extends Component {

  state = {
    movies: [],
    mostW: []
  }

  // Get all movies
  componentDidMount() {
    if (this.state.movies.length <= 0) {
      this.getData();  
    }
  }

  // Get Data from Api
  getData = async () => {
    try {
      //All movies sorted out based on release date
      const req = await axios.get(`${ apiUrl }`);
      //Most watched
      const reqII = await axios.get(`${ mostW }`);
  
      //check-in state
      this.setState({
        movies: req.data.results,
        mostW: reqII.data.results
      });
    }
    catch (error) {
      if (error.message === '422') {
        console.log('Server Error');
      }  
      console.log('Error on Request:' , error.message);
    }
  }
  render() {
    return (
      <div className="HomePage">
        <MostWatched mostWatched={this.state.mostW} />
        <Releases films={this.state.movies}/>
      </div>
    )
  } 
}