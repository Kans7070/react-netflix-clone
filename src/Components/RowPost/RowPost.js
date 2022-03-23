import React, { useEffect, useState } from 'react'
import "./RowPost.css"
import axios from "../../axios"
import { API_KEY, imageUrl } from '../../constants/constants'
import Youtube from 'react-youtube'



function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [trailerUrl, setTrailerUrl] = useState('')

  useEffect(() => {
    axios.get(props.urls).then(response => {

      console.log(response.data.results)
      setMovies(response.data.results)
    }).catch(err => {
    })
  }, [])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 0,
    }
  }

  useEffect(() => {


    return () => {

    }
  }, [])
  const trailer = id => {
    var Name
    console.log(id, "ygygyg");
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response => {
      console.log(response.data.results)

      
        if (response.data.results.length != [0]) {
          for (let x in response.data.results) {
            console.log(x)
            let type = response.data.results[x].type
            if (type === "Trailer") {
              console.log(type)
              console.log(response.data.results[x], "ll");
              Name = response.data.results[x]
              console.log('jjjjjjjjjjjjjjjjjjjjjjjjj', Name);
              break;
            }
          }
          console.log(Name);
          if (Name.length != [0]) {
            console.log("hi");
            console.log(Name)
            setTrailerUrl(Name)
            console.log(trailerUrl)
            console.log(Name)
            
          } else {
            alert('trailer not available')
          }
        }else {
          alert('trailer not available')
        }
    })
  }


  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">

        {
          movies.map(obj =>
            <div>
              <img onClick={() => trailer(obj.id)} className={props.isSmall ? "smallposter" : "poster"} src={`${imageUrl + obj.backdrop_path}`} alt="Movie posters" />
            </div>
          )
        }
      </div>
      {trailerUrl && <Youtube opts={opts} videoId={trailerUrl.key} />}

    </div>

  )
}

export default RowPost