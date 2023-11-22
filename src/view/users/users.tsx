import { FC, memo, useEffect, useMemo, useState} from "react";
import { useSelector } from "react-redux";
import { IUser } from "../../global/interface/users.interface";
import Loader from "../../common/loader";
import DataTable from "react-data-table-component";
import tableStyles from "../../global/tableStyles";
import IconBox from "../../common/iconBox";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { deleteUser } from "../../store/users/user.slice";
import { useNavigate } from "react-router-dom";

const Users:FC = memo(() => {
	const navigate = useNavigate()
	const dispatch = useDispatch<ThunkDispatch<any,any,any>>()
    const {users} = useSelector((store:any) => ({
        users: store.users.users,
        //loading:store.users.loading
    }))

	// the filters for searching and filtering users
	const [filteredItems, setFilteredItems] = useState<Array<IUser>>([])
	const [filterText, setFilterTexts] = useState<string>("")
	
	// deleting a user from the table
	const deleteHandler = (id:number) => {
		dispatch(deleteUser(id))		
	}

	// viewing user 
	const viewHandler = (id:number) => {
		navigate('/user/'+ id)
	}

	// columns
    const columns: any = useMemo(() => {
		return [
			{
				name: 'Name',
				selector: (row: IUser) => <a id="link-pointer" className="menu-link px-3" >
					<div>
						<strong>{row.name}</strong>
					</div>
				</a>,
			},
			{
				name: 'Email',
				selector: (row: IUser) => <div className="menu-link px-3" >
					<div>
						<strong>{row.email}</strong>
					</div>
				</div>,
			},
			{
				name: 'Username',
				selector: (row: IUser) => <div className="menu-link px-3" >
					<div>
						<strong>{row.username}</strong>
					</div>
				</div>,
			},
			{
				name: 'Contact Information',
				selector: (row: IUser) => <div className="menu-link px-3" >
					<div>
						<strong>{row.phone}</strong>
					</div>
				</div>,
			},
			{
				name: 'Location',
				selector: (row: IUser) => <div className="menu-link px-3" >
					<div className="">
						<strong>{row.address.city}</strong>
					</div>
				</div>,
			},
			{
				name:'Action',
				selector:(row:IUser) => <>
					<div className="flex items-center justify-between gap-2">
						<IconBox 
							bgColor="bg-white hover:bg-blue-600 focus:bg-blue-600" 
							handler={() => viewHandler(row.id)}
							icon={
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="stroke-2 w-6 h-6 text-blue-800">
									<path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
									<path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
								</svg>
							}
						/>

						<IconBox 
							bgColor="bg-white hover:bg-red-400 focus:bg-red-400" 
							handler={() => deleteHandler(row.id)}
							icon={
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="stroke-2 w-6 h-6 text-red-800">
									<path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
								</svg>
							}
						/>
					</div>
				</>,
				center:true
			}
			
		]
    }, [users])

	// the search filter
	const subHeaderComponentMemo = useMemo(() => {
		return (<>
				<div className={"flex items-center justify-between grow"}>
					<div>
						<div className="items-start flex flex-col">
							<span className="font-bold text-lg md:text-xl lg:text-2xl">{filteredItems?.length||0}</span>
							<p className="text-xs lg:text-sm  italic uppercase">Users</p>
						</div>
					</div>

					<div className="d-flex align-items-center position-relative my-1">
						<i className="ki-duotone ki-magnifier fs-3 position-absolute ms-3">
							<span className="path1"></span>
							<span className="path2"></span>
						</i>
						<div
							className="d-sm-flex justify-content-end align-items-center"
							data-kt-customer-table-toolbar="base"
						>
							<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
								type="text"
								autoFocus
								placeholder="search"
								value={filterText}
								onChange={(e:any) => setFilterTexts(e.target.value)}
							/>
						</div>
					</div>
				</div>
			</>
		);
	}, [filterText, filteredItems]);

	// implementation of the search
	useEffect(() => {
		if(filterText.trim().length > 0) {
			const result = users.filter((u:IUser) => (u.name.toLowerCase().includes(filterText.toLowerCase()) || u.email.toLowerCase().includes(filterText.toLowerCase()) || u.username.toLowerCase().includes(filterText.toLowerCase()) || u.address.city.toLowerCase().includes(filterText.toLowerCase())))
			setFilteredItems(result)
		} else {
			setFilteredItems(users)
		}
	}, [filterText, filteredItems])

    return (
        <div className="">
            <DataTable
        		key={filteredItems.length}
				className={"dataTable"}
				data={filteredItems}
				customStyles={tableStyles.customStyles}
				pagination={filteredItems?.length > 9}
				//progressPending={loading}
				progressComponent={<Loader/>}
				subHeader
				subHeaderComponent={subHeaderComponentMemo}
				columns={columns}
            />      
        </div>
    )
})

export default Users