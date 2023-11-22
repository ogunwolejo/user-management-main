import { FC, memo, useEffect, useMemo, useState} from "react";
import { useSelector } from "react-redux";
import { IUser } from "../../global/interface/users.interface";
import Loader from "../../common/loader";
import DataTable from "react-data-table-component";
import tableStyles from "../../global/tableStyles";

const Users:FC = memo(() => {
    const {users} = useSelector((store:any) => ({
        users: store.users.users,
        //loading:store.users.loading
    }))
	
	// the filters for searching and filtering users
	const [filteredItems, setFilteredItems] = useState<Array<IUser>>([])
	const [filterText, setFilterTexts] = useState<string>("")
	//const [loading, setLoading] = useState<boolean>(true)

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
				selector: (row: IUser) => <a id="link-pointer" className="menu-link px-3" >
					<div>
						<strong>{row.email}</strong>
					</div>
				</a>,
			},
			{
				name: 'Username',
				selector: (row: IUser) => <a id="link-pointer" className="menu-link px-3" >
					<div>
						<strong>{row.username}</strong>
					</div>
				</a>,
			},
			{
				name: 'Contact Information',
				selector: (row: IUser) => <a id="link-pointer" className="menu-link px-3" >
					<div>
						<strong>{row.phone}</strong>
					</div>
				</a>,
			},
			{
				name: 'Location',
				selector: (row: IUser) => <a id="link-pointer" className="menu-link px-3" >
					<div>
						<strong>{row.address.city}</strong>
					</div>
				</a>,
			},
			
		]
    }, [])

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
        		key={filteredItems?.length}
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