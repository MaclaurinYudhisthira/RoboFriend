import Card from './Card';

function CardList({robots}) {
    const CardArray=robots.map((usr)=>{
        return <Card key={usr.id} id={usr.id} name={usr.name} email={usr.email}/>
    })

    return (
      <div>
          {CardArray}
      </div>
    );
  }
  
  export default CardList;