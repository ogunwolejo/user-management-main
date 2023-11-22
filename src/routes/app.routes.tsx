import { Route, Routes } from "react-router-dom";
import { FC, Suspense, lazy, useEffect, useState } from "react";
import Loader from "../common/loader";
import DefaultLayout from "../layout/DefaultLayout";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { Thunks } from "../store/users/user.thunck";
import CreateUser from "../view/users/createUsers";
import UserDetail from "../view/users/userDetails";

// import pages
const UsersList = lazy(() => import("../view/users/users"))

export const AppRoutes:FC = () => {
	const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
    //const [loading, setLoading] = useState<boolean>(true);
	const {loading} = useSelector((store:any) => ({
		loading:store.users.loading
	}))
	
	// useEffect(() => {
	// 	setTimeout(() => {
	// 		setLoading(false);
	// 	}, 2000);
	// }, []);

    useEffect(() => {
        const fetch = async() => {
			await dispatch(Thunks.getUsers())
		};
		fetch()
    }, [])

	return loading ? (
		<Loader />
	) : (
		<>
			<Routes>
				<Route path="*" element={<DefaultLayout />}>
                    <Route path="dashboard" index element={
                        <Suspense fallback={<Loader/>}>
							<UsersList/>
						</Suspense>
                    } />
					<Route path="user" element={<CreateUser/>}/>
					<Route path="user/:id" element={<UserDetail/>}/>
				</Route>
			</Routes>
		</>
	);
}