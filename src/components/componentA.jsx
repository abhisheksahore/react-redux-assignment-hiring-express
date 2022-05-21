import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux';
import { createItem, deleteItem, updateItem } from '../redux/action';

const ComponentA = (props) => {
    const [item, setItem] = useState()
    const [itemUpdate, setItemUpdate] = useState()
    
    const updateText = (e) => {
        setItem(e.target.value);
    }
    const updateTextUpdate = (e) => {
        setItemUpdate(e.target.value);
    }
    
    return (
    <>
        <div>Create a list item</div>        
        <input type="text" onChange={(e) => updateText(e)}/>
        <button onClick={() => {props.create({item, id: props.id})}}>Create</button>
        <br />
        <br />
        <p style={{fontWeight: "700"}}>update Text here</p>
        <p>(put the text here and click on the update button on the respective element to update it.)</p>
        <input type="text" onChange={(e) => updateTextUpdate(e)}/>

        <br />
        <br />
        <br />
        <br />
        <ul>
            {   
                props.list.map(e => {
                            return (
                                <div key={e.id}>
                                    <li>{e.item}</li>
                                    <button onClick={() => props.update({item: itemUpdate, id: e.id})}>update</button>
                                    <button onClick={() => props.delete(e.id)}>delete</button>
                                    <br />
                                    <br />
                                </div>
                            )
                })
            }
        </ul>
    </>
  )
}

const mapStateToProps = (state) => {
    return {
        list: state.list,
        id: state.count
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        create: (item) => dispatch(createItem(item)),
        update: (item) => dispatch(updateItem(item)),
        delete: (item) => dispatch(deleteItem(item)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ComponentA)