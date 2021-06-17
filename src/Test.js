import React from 'react'
import { useHistory } from "react-router-dom";


function Test() {

    let history = useHistory();
    const goToPreviousPath = () => {
        history.goBack()
    }

        return (
            <div>
              <button
                onClick={goToPreviousPath}
              >
                Back
              </button>
            </div>
          );
      }

export default Test
