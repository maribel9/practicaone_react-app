export default function BasicTypes() {
    const name : string = 'Maribel Guañuna'
    const age : number = 34;
    const isActive : boolean = false;

    const people = ['Juan','Camilo'];
    return ( 
       <>
       <><h3> Tipos Basicos</h3></>
       {name} - {age} - { isActive ? 'Activo' :'Inactivo' } - {people.join(', ')}
       
       </>
    )
       
    
}