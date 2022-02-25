import { useEffect } from 'react';
import { useAction } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import CardUser from '../CardUser/CardUser';

const ListUser = () => {
    const { getUsers } = useAction()
    const {error, loading, user } = useTypedSelector(state => state.userReducer)
    useEffect(() => {
        getUsers()
    }, [])
    if(loading) {
        return <h1>Loading....</h1>
    }
    if(error){
        return <h1>{error}</h1>
    }

    return (
        <div style={{marginTop: 50 , display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap'}}>
           { user?.map(item => <CardUser key={item.id} item={item} />)} 
        </div>
    );
};

export default ListUser;