import React from 'react'

const PersonForm = (props) => {
  return (
    <form onSubmit={props.submitHandler}>
      <div>
        name: <input
          value={props.nameValue}
          onChange={props.nameHandler} />
      </div>
      <div>
        number: <input
          value={props.phoneValue}
          onChange={props.phoneHandler} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>)
}

export default PersonForm