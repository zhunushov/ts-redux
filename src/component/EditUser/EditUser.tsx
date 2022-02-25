import { Box, Button, TextField, Typography } from '@material-ui/core';
import  { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAction } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { IUser } from '../../types/IUser';

type ParamsEditedItem = {
    id: string
}
const EditUser: FC = () => {
    const { id } = useParams<ParamsEditedItem>()
    const { editedUser,  saveEditedUser,  getUsers } = useAction()
    const navigate = useNavigate()
    const {edit, loading, error} = useTypedSelector(state => state.userReducer)
    const [values, setValues] = useState<IUser>({name: '', lastName: '',phone: 0})
    
    useEffect(() => {
        if(edit)
        setValues(edit)
    }, [edit])

    useEffect(() => {
        editedUser(id)
    }, [id])

    const handleSubmit = () => {
        if(!values.lastName && !values.name && !values.phone){
            return
        }
        saveEditedUser(id,  values)
        setValues({ name:"", lastName: '', phone: 0})
        getUsers()
        navigate('/')
     }
    if(loading) {
        return <h1>Loading....</h1>
    }
    if(error){
        return <h1>{error}</h1>
    }
    return (
        <>
        <div style={{display: "flex", justifyContent: "space-around", color: "black"}}>
        <Box style={{width: '450px',display: 'flex',alignItems: 'center', flexDirection: 'column',justifyContent: 'center', marginTop: '20px'}}>
        <Typography variant='h4' >Add User</Typography>
        <TextField style={{padding : '5px'}} variant='outlined' label='Name' value={values.name} onChange={e => setValues({...values, name:  e.target.value})} />
        <TextField style={{padding : '5px'}} variant='outlined' label='LastName' value={values.lastName} onChange={e => setValues({...values, lastName:   e.target.value})}  />
        <TextField style={{padding : '5px'}} variant='outlined' label='Number' value={values.phone} onChange={e => setValues({...values, phone:  +e.target.value})} />
        <Button onClick={handleSubmit}>Sava </Button> 
        </Box>
        </div>
        </> 
    );
};

export default EditUser;