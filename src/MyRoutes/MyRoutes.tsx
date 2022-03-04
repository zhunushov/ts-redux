import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddUser from '../component/AddUser/AddUser';
import EditUser from '../component/EditUser/EditUser';
import ListUser from '../component/ListUser/ListUser';

const MyRoutes = () => {
    return (
        <Routes>
            <Route path='/add' element={<AddUser />} />
            <Route path='/' element={<ListUser /> } />
            <Route path='/edit/:id' element={<EditUser /> } />
        </Routes>
    );
};

export default MyRoutes;