import Card from './Card';

export default function Cards ({characters, onClose}) {
  return (
    <div style={{ display: 'flex'}}>
      {characters.map((char) => (
        <Card
          id ={char.id}
          key={char.name}
          name={char.name}
          species={char.species}
          gender={char.gender}
          origin={char.origin.name}
          image={char.image}
          onClose={onClose}
        />
      ))}
    </div>
  )
}

