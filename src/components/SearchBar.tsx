import {Button, Input} from 'reactstrap'

const SearchBar = () => {
    return (
        <div style={{ display: 'flex', flex: 1, paddingRight: '40%'}}>

            <Input placeholder='Type to search'></Input>
            <Button style={{marginLeft: 5}}>Search</Button>
        </div>
    )
}

export default SearchBar
