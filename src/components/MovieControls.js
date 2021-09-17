import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const MovieControls = ({ movie, type }) => {
  const { removeMovieFromWatchlist, addMovieToWatched, moveToWatchlist, removeFromWatched } = useContext(GlobalContext);

  console.log(type)
  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button className="ctrl-btn" onClick={() => addMovieToWatched(movie)}>
            <i className="fa-fw far fa-eye"></i>
          </button>

          <button className="ctrl-btn" onClick={() => removeMovieFromWatchlist(movie.id)}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}

      {type === 'watched' &&
        (
          <>
            <button className="ctrl-btn" onClick={() => moveToWatchlist(movie)}>
              <i className="fa-fw far fa-eye-slash"></i>
            </button>

            <button className="ctrl-btn" onClick={() => removeFromWatched(movie.id)}>
              <i className="fa-fw fa fa-times"></i>
            </button>
          </>
        )}
    </div>
  );
};