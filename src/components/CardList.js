import React from 'react'
import Card from './Card'

const CardList = ({ robots }) => {
    return (
        <div>
          {
            robots.map(robot => {
              if (true) {
                throw new Error('Noooooo!')
              }
                return (
                    <Card 
                        key={robot.name} 
                        id={robot.id} 
                        name={robot.name} 
                        email={robot.email}
                        /> )
                }
            )
          } 
        </div>
    )
}
export default CardList