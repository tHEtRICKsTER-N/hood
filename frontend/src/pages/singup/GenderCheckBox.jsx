const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
	return (
		<div className='flex'>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""} `}>
					<span className='label-text text-white'>Male</span>
					<input type='checkbox' className='checkbox checkbox-warning border-slate-900' checked={selectedGender === "male"}
						onChange={() => onCheckboxChange("male")} />
				</label>
			</div>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""} `}>
					<span className='label-text text-white'>Female</span>
					<input type='checkbox' className='checkbox checkbox-warning border-slate-900' checked={selectedGender === "female"}
						onChange={() => onCheckboxChange("female")} />
				</label>
			</div>
		</div>
	);
};

//Starter Code
// const GenderCheckbox = () => {
// 	return (
// 		<div className='flex'>
// 			<div className='form-control'>
// 				<label className={`label gap-2 cursor-pointer`}>
// 					<span className='label-text text-white'>Male</span>
// 					<input type='checkbox' className='checkbox checkbox-warning border-slate-900' />
// 				</label>
// 			</div>
// 			<div className='form-control'>
// 				<label className={`label gap-2 cursor-pointer`}>
// 					<span className='label-text text-white'>Female</span>
// 					<input type='checkbox' className='checkbox checkbox-warning border-slate-900' />
// 				</label>
// 			</div>
// 		</div>
// 	);
// };
export default GenderCheckbox;