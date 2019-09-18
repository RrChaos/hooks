import React from 'react';
import styled from 'styled-components';
//Cover Movies API
import { urlImage } from '../config/config';


export default function Releases({ films }) {
  console.log(urlImage);
  return (
    <Wrap>
        <h2>Releases</h2>
        <ul>
        {
          films.map(mov =>
            <Movie key={mov.id} peli={mov}>
              {mov.title}
            </Movie>
          )
        }
        </ul>
    </Wrap>
  )
}

//STYLES
const Wrap = styled.div`
  h2{
    text-align: center;
  }
  >ul{
    list-style: none;
    display: flex;
    align-items: strech;
    overflow: scroll;
  }
`;

const Movie = styled.li`
  margin: 5px;
  display: inline-block;
  min-width: 200px;
  height: 300px;
  font-family: 'Monospace, sans-serif';
  background: url(${props => {
    return urlImage+props.peli.backdrop_path
  }}) no-repeat;
  background-size: cover;
`;