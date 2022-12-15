import React, { Components } from 'react';

class Edit extends Components {
    render() {
        console.log(this.props.pokemon)
        return (
            <div>
                <h1>Edit Pokemon</h1>
                <form>
                    Name: <input type='text' name='name' /> <br />
                    Color: <input type='text' name='color' /> <br />
                </form>
            </div>
        )
    }
}

export default Edit;