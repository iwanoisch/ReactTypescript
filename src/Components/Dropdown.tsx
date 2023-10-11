import React from "react";

interface Props {
    dataBreeds: [];
    handleBreedSelected: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Dropdown = ({dataBreeds, handleBreedSelected}: Props) => {

    const options = Object.keys(dataBreeds).map(breed => {
        return <option key={breed}>{breed}</option>
    });

    return <>
        <div className="relative w-full lg:max-w-sm">
            <select onChange={(event) => handleBreedSelected(event)}
                    className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                <option>Seleziona razza</option>
                {options}
            </select>
        </div>
    </>
}

export default Dropdown;