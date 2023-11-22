import React, { FC } from "react";
import { Oval } from "react-loader-spinner";

const Loader:FC = React.memo(() => (
	<div className='flex h-screen items-center justify-center bg-white'>
		<Oval
			height={80}
			width={80}
			color={"#4fa94d"}
			wrapperStyle={{}}
			wrapperClass=""
			visible={true}
			ariaLabel='oval-loading'
			secondaryColor={"#4fa94d"}
			strokeWidth={2}
			strokeWidthSecondary={2}

		/>
	</div>
));

export default Loader;
