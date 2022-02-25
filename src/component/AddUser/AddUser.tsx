import { Box, Button, TextField, Typography } from '@material-ui/core';
import  { FC, useState } from 'react';
import { useAction } from '../../hooks/useActions';
import { IUser } from '../../types/IUser';

const AddUser: FC = () => {
    const { addUser } = useAction()
     const [values, setValues] = useState<IUser>({
         name: '',
         lastName: '',
         phone: 0
     })
     const handleSubmit = () => {
        if(!values.lastName && !values.name && !values.phone){
            return
        }
        addUser(values)
     }

    return (
        <>
        <div style={{display: "flex", justifyContent: "space-around", color: "black"}}>
        <Box style={{width: '450px',display: 'flex',alignItems: 'center', flexDirection: 'column',justifyContent: 'center', marginTop: '20px'}}>
        <Typography variant='h4' >Add User</Typography>
        <TextField style={{padding : '5px'}} variant='outlined' label='Name' value={values.name} onChange={e => setValues({...values, name:  e.target.value})} />
        <TextField style={{padding : '5px'}} variant='outlined' label='LastName' value={values.lastName} onChange={e => setValues({...values, lastName:   e.target.value})}  />
        <TextField style={{padding : '5px'}} variant='outlined' label='Number' value={values.phone} onChange={e => setValues({...values, phone:  +e.target.value})} />
        <Button onClick={handleSubmit}>Add </Button> 
        </Box>
        </div>
        </>
    );
};

export default AddUser;