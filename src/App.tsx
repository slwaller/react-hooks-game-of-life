import React, { useState } from 'react'
import './App.css'

const numRows = 50
const numColumns = 50

const App: React.FC = () => {
    const [grid, setGrid] = useState(() => {
        const rows = []
        for( let i = 0; i < numRows; i++){
            rows.push(Array.from(Array(numColumns), () => 0))
        }

        return rows

    })

    console.log(grid)

  return (
      <div style={{display: 'grid', gridTemplateColumns: `repeat(${numColumns}, 20px)`}}>
            {grid.map((rows, ri) => 
                rows.map((col, ci) => (
                    <div
                        key={`${ri}-${ci}`}
                        style={{
                            width: 20, 
                            height: 20, 
                            backgroundColor: grid[ri][ci] ? 'red' : undefined,
                            border: "solid 1px black"
                        }}
                    />
                ))
            )}
      </div>
  );
};


export default App