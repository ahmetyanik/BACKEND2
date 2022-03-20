import React,{useContext} from 'react'
import DataStore from '../DataStore';

function Secretpage() {

    const {gelenMesaj} = useContext(DataStore);

  return (
    <div>{gelenMesaj}</div>
  )
}

export default Secretpage