import React from 'react'
import { Link, useLocation } from 'react-router-dom';
const RenderFilmCard = ({ searchResult }) => {
    const location = useLocation();

    return (
         <>
        {
          searchResult?.map((result) => (
            <li key={result.id}>
              <Link
                to={{
                  pathname: `/movies/${result.id}`,
                  state: { from: location },
                }}
              >
                {result.original_title}
              </Link>
            </li>
          ))}
      </>
    );
}

export default RenderFilmCard;